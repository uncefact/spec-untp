# Changes proposed for the v0.6.0 UNTP data model

These changes are the result of various inputs, most from Patrick St-Louis, regarding using the v0.5.0 UNTP data model.

Each section identify issues for that model that either result in invalid jsonld, or valid docs that are deemed invalid from the json schema, or credentials that are deemed valid by our JSON Schema but invalid by the Verified Credentials schema, or are otherwise needing improvement. Each section identifies the proposed solution that will be included for 0.6.0 once reviewed and agreed upon.

## Digital Product Passport
TBD

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
Note that we could have also just changed the type of `issuedTo` to be `untp.Party` but it's much neater to not redefine things unnecessarily.

The result is that the `ConformityAttestation.issuedTo` property is now a normal `untp.Party`, which does not mean you need to set all the properties (but in this case, I think we would want to anyway).

### Optional: Removing the `dcc.Party` with the unset fields
I'm also suggested removing the re-definition of `dcc:Party` in the dcc jargon defs (with the fields unset) as I don't see a need for confusingly having a second definition with unset fields, given that you don't need to provide all properties for a node. Need to double-check with Steve if it's just for the jargon UI that this was done? Having extra terms defined does not affect the parsing of the JSON-ld, nor does it affect the JSON Schema validation (unless they are required fields, which they are not). That is, nothing stops you just using only the fields you want (as long as any required fields are present).

Note that I've now [answered my own question about whether it's valid to have multiple node objects (which aren't just references) with the same `@id` throughout the graph](https://github.com/orgs/json-ld/discussions/853#discussioncomment-12060189)... it's fine, the data is just merged if it differs.

### Required: `issuingParty` should be a `Party` not an  `Identifier` in the schema

This isn't a jsonld error, but a semantic error which caught Patrick. You can't currently validate a document which sets a party for the `ConformityAssessmentScheme.issuingParty` field because it expects an `Identifier` and a `Party` is not an `Identifier`.

`ConformityAssessmentScheme` is a `Standard`, and `Standard.issuingParty` is an `Identifier`. I've discussed this on [Issue 201](https://github.com/uncefact/tests-untp/issues/201) and am suggesting:
- the untp-core `Standard.issuingParty` should be a `Party` rather than an `Identifier`.
- similarly, the `Facility.operatedByParty` and `Product.producedByParty` should be `Party` rather than `Identifier`.
There are three other references in untp-core for `Identifier`: `CredentialIssuer.otherIdentifier`, `Party.otherIdentifier` and `Facility.otherIdentifier`. Depending on what the use is for these (should they only take an identifier, or possibly parties, products and facilities) will determine whether `Party`, `Product` and `Facility` have an "IS A" relationship to `Identifier`. I'm waiting for info there on that issue.

### Optional: some fields are ignored from the document

[JSON-LD has the requirement](https://www.w3.org/TR/json-ld11/#node-objects) that

> All keys which are not [IRIs](https://tools.ietf.org/html/rfc3987#section-2), [compact IRIs](https://www.w3.org/TR/json-ld11/#dfn-compact-iri), [terms](https://www.w3.org/TR/json-ld11/#dfn-term) valid in the [active context](https://www.w3.org/TR/json-ld11/#dfn-active-context), or one of the following [keywords](https://www.w3.org/TR/json-ld11/#dfn-keyword) (or alias of such a keyword) _MUST_ be ignored when processed

Currently, if I run our same test 0.5.0 document through the `jsonld lint`, I see "Invalid Property" warnings with "Dropping property that did not expand into an absolute IRI or keyword" for the following terms:
- `addressCountry`
- `addressLocality`
- `addressRegion`
- `postalCode`
- `streetAddress`
- `geoBoundary`
- `geoLocation`
- `plusCode`
- `file`
- `fileName`
- `fileType`
This is because the fields, for example, of Address, are defined as:
```json
"streetAddress": {
  "@id": "untp-core:streetAddress",
  "@type": "xsd:string"
},
```
and the generated file does not import "https://schema.org" (because we don't use its assigned prefix, I assume). In Jargon we do import it, but jargon forces a prefix for imports (ours is `schemaorg`), and I don't see a way to prefix property names (ie. `schemaorg:streetAddress:Text` is not valid, nor can I quote it as `"schemaorg:streetAddress": "Text"` it seems). I can manually update the core ld file so that the terms are IRIs, such as:
```json
  "https://schema.org/streetAddress": {
    "@id": "untp-core:streetAddress",
    "@type": "xsd:string"
  },
```
to avoid the warning and ensure they are not dropped, but it's not clear to me how I can get jargon to do that (or the contracted form) for property names (nor why terms in the jargon generated link data files have self-referential `@id`'s, as above), but since we're not using these fields in our examples, I'll defer this to a subsequent point/patch release after resolving.
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

The date format used by VCDM requires a timezone, whereas the `datetime` format of JSON-Schema does not. We can manually add the following required (regex) pattern to the `validUntil` etc. fields:

```
      "pattern": "-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))"
```

[Jargon supports specifying the pattern](https://docs.jargon.sh/#/pages/data_definitions?id=jargon-recognised-key-value-pairs) for a property using `[jargon.pattern] = ^...$`

We should do this at least for the VC properties that we use, as otherwise we may validate a DPP, but it fails as a VC due to the missing timezone (for example).

## UNTP Core

TDB, but this will basically be the results from the previous sections that required core changes.
