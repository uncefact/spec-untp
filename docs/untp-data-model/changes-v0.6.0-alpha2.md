
These changes are the changes from v0.6.0-alpha1 to v0.6.0-alpha2, since the [jargon issue 20 supporting rich references](https://github.com/jargon-sh/issues/issues/20) was implemented, allowing models to reference `Party` or `Facility` by `id` while including extra fields in the reference and JSON Schema.

The following two issues remain and although they result in failed validation of 0.6.0-alpha2 credentials (due to fields being dropped during json-ld processing), they are of less importance as they do not change the data structures:
- [Terms used indirectly from an imported domain are not exported in the generated context](https://github.com/jargon-sh/issues/issues/21) - fixing this will fix the main missing property definitions that lead to dropped fields.
- [Imported field attributes can't be overwritten](https://github.com/jargon-sh/issues/issues/27) - this will fix 2 missing property definitions.


## Digital Conformity Credential

Updated
- `assessedProduct`,
- `assessedFacility`, 
- `assessedOrganisation` and 
- `auditor`

to use the new jargon key-value `[jargon.object_reference]` so that each property is a rich reference for the full type (such as `Product` or `Facility`) in jargon and json-ld, while only having the id and selected fields in the json schema. Specifically, added the key-value `[jargon.objectReference]=id,name,registeredId,idScheme` (note: `idScheme` is not primitive so won't be included in the JSON-Schema currently).


## UNTP-Core

Updated:
 - `CredentialIssuer.issuerAlsoKnownAs`, 
 - `Party.partyAlsoKnownAs`, 
 - `Facility.operatedByParty`, 
 - `Facility.facilityAlsoKnownAs`, 
 - `Product.producedByParty`, 
 - `Product.producedAtFacility`,
 - `Standard.issuingParty`,
 - `Attestation.issuedToParty`,
 - `Regulation.administeredBy`,
 - `Endorsement.issuingAuthority`

to use the new jargon key-value `[jargon.object_reference]` so that each property is a rich reference for the full type (such as `Product` or `Facility`) in jargon and json-ld, while only having the id and selected fields in the json schema. Specifically, added the key-value `[jargon.objectReference]=id,name,registeredId,idScheme` (note: `idScheme` is not primitive so won't be included in the JSON-Schema currently).


## Digital Product Passport

No changes other than updating core version.

## Digital Traceability Event

The 0.6.0-alpha1 work-around fix for `productId` and `productName` did not work, so I've created [Imported field attributes can't be overwritten](https://github.com/jargon-sh/issues/issues/27)

## Digital Identity Anchor

Updated `RegisteredIdentity` from inheriting a `untp.Party` (ie. IS-A `Party`) to instead having an `identity:Party` property (ie. HAS-A `Party`) that can then use the `[jargon.objectReference]=id,name,registeredId` object reference. Note that we cannot use the object reference on the `DigitalIdentityAnchor.credentialSubject` field instead, as it does not support non-primitive fields.

