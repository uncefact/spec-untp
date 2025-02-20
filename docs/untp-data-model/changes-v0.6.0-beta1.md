These changes are the changes from v0.6.0-alpha2 to v0.6.0-beta1, since the following updates in jargon:
- [Imported field attributes can't be overwritten](https://github.com/jargon-sh/issues/issues/27) - this fixes 2 missing property definitions for `productId` and `productName`.
- [Properties inherited from parent classes are redefined with new URIs](https://github.com/jargon-sh/issues/issues/28) - this fixes a bunch of illegal redefinitions.
- [Terms used indirectly from an imported domain are not exported in the generated context](https://github.com/jargon-sh/issues/issues/21) - this fixes many missing property definitions.
- [Scoped context missing for `[jargon.objectReference]=id,name]`](https://github.com/jargon-sh/issues/issues/29) - this fixes the missing property definitions for object references.

Details for changes in each domain are below.


## UNTP Core

Re-saved and released 0.6.0-beta1 after above jargon changes to import correctly into other domains.

No other changes.

## Digital Conformity Credential

### Issue 28 - avoid redefinitions

Added work-around for https://github.com/jargon-sh/issues/issues/28 by re-defining fields on `ConformityAttestation` from the superclass and then adding the `[jsonld.contexOmit]=true`, but subsequently removed this work-around for 0.6.0-alpha4 as the issue was fixed in Jargon.


### Dropped fields due to missing property definitions?

Note: `jsonld lint` on the -alpha3 DCC instance warns 'Dropping property that did not expand into an absolute IRI or keyword.' for the following terms:
- idScheme,
- registeredId,
- file,
- fileName and
- fileType,

These terms *are* defined in the context file, but only in property-scoped contexts. For example, `idScheme` is defined in the scoped contexts of `Party`, `Facility` and `Product`, but the example data also uses it for `issuer.issuerAlsoKnownAs`, which is an object reference to a `Party`.

This issue is fixed with [Scoped context missing for `[jargon.objectReference]=id,name]`](https://github.com/jargon-sh/issues/issues/29).

Updated to -core 0.6.0-alpha3, added contextOmit=false to the main entity, released 0.6.0-alpha6, no lint issues.

Re-saved after issue 29 fixed with core import updated to 0.6.0-beta1 to release 0.6.0-beta1 of DCC.


## Digital Product Passport

The DPP context was missing the following properties which I've [identified to Alastair](https://github.com/jargon-sh/issues/issues/21#issuecomment-2664176352)

From `SecureLink`
- `hashDigest`
- `hashMethod`
- `encryptionMethod`

From `Material`
- `originCountry`
- `materialType`
- `massFraction`
- `massAmount`
- `recycledAmount`
- `hazardous`
- `symbol`
- `materialSafetyInformation`

From `CircularityPerformance`
- `recyclingInformation`
- `repairInformation`
- `recyclableContent`
- `recycledContent`
- `utilityFactor`
- `materialCircularityIndicator`

From `EmissionsPerformance`
- `carbonFootprint`
- `declaredUnit`
- `operationalScope`
- `primarySourcedRatio`
- `reportingStandard`

I tried a work-around of adding the models explicitly via inheritance, but it did not have the desired result of defining the properties. Alastair working on a fix.

Alastair changed Jargon so that it now includes definitions inline and this fixed all of the above, with now only `idScheme` and `registeredId` being undefined, I assume due to the new `[jsonld.reference_object]`.

The last two were fixed with [Issue 29](https://github.com/jargon-sh/issues/issues/29).

Updated to core 0.6.0-alpha3 and re-released DPP as 0.6.0-alpha4.

All properties defined, except for the main type - which is now inheriting the contextOmit=true from the VerifiedCredential entity. Overwrote that on the entity itself to false and release 0.6.0-alpha5 which has now warnings.

Updated to core 0.6.0-beta1, resaved and released DPP 0.6.0-beta1 of DPP


## Digital Traceability Events

This model was re-saved so that the missing property definitions are present, based on the fix for [Imported field attributes can't be overwritten](https://github.com/jargon-sh/issues/issues/27).

Updated to core 0.6.0-alpha3 and added contextOmit=false to main entity, released -alpha3, no lint.

Updated to core 0.6.0-beta1, resaved and released 0.6.0-beta1 of DTE.


## Digital Facility Record

Updated to core 0.6.0-alpha3 and added contextOmit=false to the main entity, released alpha2. `idScheme` and `registeredId` were not defined.

The `idScheme` and `registeredId` nested defs were missing from the `facilityAlsoKnownAs`. Fixed by a subsequent change document on issue 29.

Updated to core 0.6.0-beta1, resaved and released 0.6.0-beta1 of DFR


## Digital Identity Anchor

Updated to core 0.6.0-alpha3 and added contextOmit=false to the main entity, released 0.6.0-alpha3. jsonld lint complains of `credentialSubject` being re-defined.

The cause was that without an `^id` for `RegisteredIdentity`, the `credentialSubject` term is redefined with an internal context (probably due to changes we requested for other contexts). The constraints we have here for the DIA are that we need to:

- reference an identity without requiring all fields in the schema (I've used an objectReference to a Party, but need to confirm with Steve whether a DIA is intended also for Product or Facility?)
- allow extra data in addition to the referenced identity, which are the registerType and scope list fields

The only way I can achieve both of these requirements is by composing (rather than inheriting) the identity and
extra fields in RegisteredIdentity. As above, without the `^id` field, jargon redefines `credentialSubject` with an inner context. I've made the id property is optional for the schema, but will raise this issue with Alastair after talking with Steve to check some of my assumptions.

Re-saved with updated core 0.6.0-beta1 import and released 0.6.0-beta1 of DIA.

