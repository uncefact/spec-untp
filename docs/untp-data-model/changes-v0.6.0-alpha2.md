
These changes are the anticipated changes from v0.6.0-alpha1 once the [jargon issue 20]() was implemented, which it now is.

Current jargon dependent issues:
- [Terms used indirectly from an imported domain are not exported in the generated context](https://github.com/jargon-sh/issues/issues/21) - fixing this will fix the main missing property definitions that lead to dropped fields.
- [Imported field attributes can't be overwritten](https://github.com/jargon-sh/issues/issues/27) - this will fix 2 missing property definitions.

## Digital Conformity Credential

Update `assessedProduct`, `assessedFacility`, `assessedOrganisation` and `auditor` to use the new jargon key-value `[jargon.object_reference]` so that they have the full type (such as `Product`) in jargon and json-ld, while only having the id and selected fields in the schema for the reference.

SWITCH BACK TO UNTP-CORE non-working (currently importing `working` to test bleeding edge untp-core)

## UNTP-Core

Update:
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

to use the new jargon key-value `[jargon.object_reference]` so that they have the full type (such as `Product`) in jargon and json-ld, while only having the id and selected fields in the schema for the reference. Added `[jargon.objectReference]=id,name,registeredId` (note: `idScheme` is not primitive so won't be included in the rich reference).


## Digital Product Passport

No changes other than updating core version.

## Digital Traceability Event

The 0.6.0-alpha1 work-around fix for `productId` and `productName` did not work, so I've created [Imported field attributes can't be overwritten](https://github.com/jargon-sh/issues/issues/27)

## Digital Identity Anchor

Update to use a reference for Party? Not sure about this yet. May be able to use  the new ref object, but unsure.

