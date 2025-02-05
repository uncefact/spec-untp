# Changes proposed for the v0.6.0 UNTP data model

These changes are the result of various inputs, most from Patrick St-Louis, regarding using the v0.5.0 UNTP data model.

Each section identify issues for that model that either result in invalid jsonld, or valid docs that are deemed invalid from the json schema, or credentials that are deemed valid by our JSON Schema but invalid by the Verified Credentials schema, or are otherwise needing improvement. Each section identifies the proposed solution that will be included for 0.6.0 once reviewed and agreed upon.

These changes are in addition to the requested jargon changes for the schema output which we've worked with Alastair to ensure are present, recorded in this [schema diff example](https://github.com/absoludity/tests-untp/pull/1/files).


## Digital Conformity Credential

### Required: Removing the redefinition of `issuedTo` Party

This was identified by Patrick on (TODO find reference, originally slack but ash created issue).

The problem comes down to the fact that `ConformityAttestation` inherits from `untp.Attestation` but tries to redefine the `issuedTo` property to use the DCC-specific, cut-down version of `Party` rather than `untp.Party`. This breaks json-ld parsers due to the redefinition of a protected term.

I've suggested removing the re-definition of `ConformityAttestation.issuedTo` Party by simplifying `ConformityAttestation` to just inherit and define the extra fields:
```
ConformityAttestation:untp.Attestation
  scope:ConformityAssessmentScheme
  assessment:ConformityAssessment[]
```
Note that we could have also just changed the type of `issuedTo` to be `untp.Party` but it's much neater to not redefine things unnecessarily. Additionally, if we move to import `untp-core` into the credential context (see below regarding undefined terms).

The result is that the `ConformityAttestation.issuedTo` property is now a normal `untp.Party`, which does not mean you need to set all the properties of `Party` (but in this case, I think we would want to anyway).


### Optional: Removing the `dcc.Party` with the unset fields

I'm also suggested removing the re-definition of `dcc:Party` in the dcc jargon defs (with the fields unset) as I don't see a need for confusingly having a second definition with unset fields, given that you don't need to provide all properties for a node. Need to double-check with Steve if it's just for the jargon UI that this was done? Having extra terms defined does not affect the parsing of the JSON-ld, nor does it affect the JSON Schema validation (unless they are required fields, which they are not). That is, nothing stops you just using only the fields you want (as long as any required fields are present).

Note that I've now [answered my own question about whether it's valid to have multiple node objects (which aren't just references) with the same `@id` throughout the graph](https://github.com/orgs/json-ld/discussions/853#discussioncomment-12060189)... it's fine, the data is just merged if it differs.


### Required: `issuingParty` should be a `Party` not an  `Identifier` in the schema

This isn't a jsonld error, but a semantic error which caught Patrick. You can't currently validate a document which sets a party for the `ConformityAssessmentScheme.issuingParty` field because it expects an `Identifier` and a `Party` is not an `Identifier`.

`ConformityAssessmentScheme` is a `Standard`, and `Standard.issuingParty` is an `Identifier`. I've discussed this on [Issue 201](https://github.com/uncefact/tests-untp/issues/201) and am suggesting:
- the untp-core `Standard.issuingParty` should be a `Party` rather than an `Identifier`.
- similarly, the `Facility.operatedByParty` and `Product.producedByParty` should be `Party` rather than `Identifier`.
There are three other references in untp-core for `Identifier`: `CredentialIssuer.otherIdentifier`, `Party.otherIdentifier` and `Facility.otherIdentifier`. Depending on what the use is for these (should they only take an identifier, or possibly parties, products and facilities) will determine whether `Party`, `Product` and `Facility` have an "IS A" relationship to `Identifier`. I'm waiting for info there on that issue.


### Optional: Some terms used in the DCC are not defined in our imported context

[JSON-LD has the requirement](https://www.w3.org/TR/json-ld11/#node-objects) that

> All keys which are not [IRIs](https://tools.ietf.org/html/rfc3987#section-2), [compact IRIs](https://www.w3.org/TR/json-ld11/#dfn-compact-iri), [terms](https://www.w3.org/TR/json-ld11/#dfn-term) valid in the [active context](https://www.w3.org/TR/json-ld11/#dfn-active-context), or one of the following [keywords](https://www.w3.org/TR/json-ld11/#dfn-keyword) (or alias of such a keyword) _MUST_ be ignored when processed

Currently, if I run our same test DCC 0.5.0 document through the `jsonld lint`, I see "Invalid Property" warnings with "Dropping property that did not expand into an absolute IRI or keyword" for the following terms:
- `addressCountry`
- `addressLocality`
- `addressRegion`
- `postalCode`
- `streetAddress`
- `geoBoundary`
- `geoLocation`
- `plusCode`
- `file` *
- `fileName` *
- `fileType` *

This is because the fields, for example, of Address, are defined in our **untp-core jsonld** as follows:
```json
"streetAddress": {
  "@id": "untp-core:streetAddress",
  "@type": "xsd:string"
},
```

Note that they could be updated to use schema.org quite easily in jargon, but this isn't the actual issue. The issue is that **this property is not defined in the DCC sample credential doc because we don't import the untp-core context** in the DCC sample credential. Nor do we expect it to be imported, according to the JSON-Schema that's generated. This is the same for the other docs too (DPP, etc.).

I'm chatting with Alastair about this to understand the history (it is, I believe, on our request that jargon doesn't import untp-core, not a decision of Alastair's), but AFAICT, longer-term we should be importing the untp-core context in the DCC credential if we want to use properties defined in the untp-core context, rather than *re-defining* those properties (such as `Identifier` or `Attestation`) in the sub-contexts (dcc, dpp etc.) while missing other properties as in this issue.

This also answers other questions or issues I had:
- Why does the DCC LD re-define core classes (with all their fields) without us defining it in Jargon? (eg. [`Identifier`](https://github.com/uncefact/vocabulary-outputs/blob/70cea8f83acea3bb347cc0ce329f682f25795f4b/_artefacts/untp-dcc-context-0.5.0.jsonld#L47-L60) or `Attestation`) Answer: because we're referring to them or needing them available without actually having including the core context in the credential document.
- How do the redefinitions of certain classes, but with fields removed, not cause jsonld redefinition errors? Answer: because we're not importing the core context at all :/

Given that this has been the case for some time, I'll wait to hear from Alastair, but I think the longer-term solution is to ensure we are *not* redefining core classes and instead are always expecting our credentials to be importing the core context. Yet we can't just switch to do so quickly as it not only requires changes in jargon but also our model (due to the current redefinitions).

So short-term, for this release, it might be better to not deal with these ignored fields (they've been ignored by json-ld for a while, and it's not clear to me if this means they'll not appear in a graph or are just ignored by json-ld parsing for terms), or ensure that the missing fields are re-defined in the sub-contexts (ie. so the dcc context and dpp context both re-define `streetAddress`), but there are many of them (especially for the DPP context).

* Some of the fields, such as the `file` ones marked with an asterisk, are actually redefined in the dcc context, so it's unclear to me why the jsonld lint tool is saying they weren't resolved.

### Optional: `@id` URL's required on all models

Mentioned by Patrick on [issue 184](https://github.com/uncefact/tests-untp/issues/184):
> > Required ID fields
> 
>     * The test suite expects all objects to have an id field. In our case, we simply do not have these values for all objects. For example, we do not have a url for our permits. We do however, have a url for our governance documents and legal acts. I wouldn't make id required for all fields, otherwise there needs to be guidance for implementers that do not have values for these fields. 

Note that we don't need to specify URLs for every required id, a URI is ok. That is, it does not need to be a URL that points to an online resource (even though that's preferred). So for example, for a permit, the id `permit:com.example.permits.12345` will validate fine (or any other uri format that people use to uniquely identify a node) and can be used to reference the node from an external document. If external referencing isn't required for a node, a blank identifier (such as `_:permit1`) can be used to define a [blank node](https://www.w3.org/TR/json-ld11/#identifying-blank-nodes) (a blank node is designed to allow referencing internally within the document only, when external referencing is not required).

That said, JSON-LD doesn't require all nodes to be identified with an `@id`, and indeed we don't require them for things like `Address`, `Location`, `Metric` etc. as they aren't nodes we need to reference. Looking through the defs, all the nodes with a required `@id` are things that should be identifiable (like permits) even if they're not derefencencable, so I think we just need to update the docs to make it clear that the required `@id` URI just needs to be a unique resource identifier (so `permit:com.example.permits.12345` is fine), not necessarily a unique resource locator (such as `https://permits.example.com/12345`).


### Required: DateTime format with regex

Mentioned by Patrick on [issue 184](https://github.com/uncefact/tests-untp/issues/184):
> > Inconsistent date values
> 
>     * The VCDM has a specific datetime format. Dates can be complicated, I would suggest to align with this format instead of requiring a different format for other dates within the DCC.

The date format used by VCDM requires a timezone, whereas the `datetime` format of JSON-Schema does not. We can manually add the following required (regex) pattern to the `validUntil` etc. fields (taken directly from the [VCDM Schema](https://github.com/w3c/vc-data-model/blob/bbebf31de4feed0a182a857490c807cc6885acff/schema/verifiable-credential/verifiable-credential-schema.json#L229)):

```
      "pattern": "-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))"
```

[Jargon supports specifying the pattern](https://docs.jargon.sh/#/pages/data_definitions?id=jargon-recognised-key-value-pairs) for a property using `[jargon.pattern] = ^...$`

We should do this at least for the VC properties that we use, as otherwise we may validate a DPP, but it fails as a VC due to the missing timezone (for example).


## UNTP Core

TDB, but this will basically be the results from the previous sections that required core changes.


## Digital Product Passport

### Optional: many terms used in the DPP are not defined in our imported context

[JSON-LD has the requirement](https://www.w3.org/TR/json-ld11/#node-objects) that

> All keys which are not [IRIs](https://tools.ietf.org/html/rfc3987#section-2), [compact IRIs](https://www.w3.org/TR/json-ld11/#dfn-compact-iri), [terms](https://www.w3.org/TR/json-ld11/#dfn-term) valid in the [active context](https://www.w3.org/TR/json-ld11/#dfn-active-context), or one of the following [keywords](https://www.w3.org/TR/json-ld11/#dfn-keyword) (or alias of such a keyword) _MUST_ be ignored when processed

Currently, if I run our test example DPP 0.5.0 document through the `jsonld lint`, I see "Invalid Property" warnings with "Dropping property that did not expand into an absolute IRI or keyword" for the following terms:
- `materialCircularityIndicator`
- `recyclableContent`
- `recycledContent`
- `recyclingInformation`
- `repairInformation`
- `utilityFactor`
- `encryptionMethod`
- `hashDigest`
- `hashMethod`
- `linkName`
- `linkType`
- `linkURL`
- `accuracy` *
- `metricName` *
- `metricValue` *
- `score` *
- `accuracy` *
- `height`
- `length`
- `volume`
- `weight`
- `width`
- `carbonFootprint`
- `declaredUnit`
- `operationalScope`
- `primarySourcedRatio`
- `reportingStandard`
- `hazardous`
- `massAmount`
- `massFraction`
- `materialSafetyInformation`
- `materialType`
- `originCountry`
- `recycledAmount`
- `symbol`

As per the Digital Conformity Credetial which had a similar issue above, the reason is that we do not currently import the untp-core context from our credential. For more information, including why this will not be fixed in this release, see the similar issue in the Digital Conformity Credential section above.

* Some of the fields, such as the `metric` ones marked with an asterisk, are actually redefined in the dcc context, so it's unclear to me why the jsonld lint tool is saying they weren't resolved.

I can confirm these fields are missing from the rdf/graph by dropping in a valid 0.5.0 DPP example credential into the jsonld playground and viewing the flattened data / graph. The `metricName` and `metricValue` properties are present (as they are defined in the dcc context) but none of the others from the doc which match, such as `recycledAmount`, `recyclableContent` or `recycledContent` are present in the rdf/graph.

### Required: DateTime format with regex

See the same section for Digital Conformity Credential above.

