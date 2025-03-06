These changes are the changes from v0.6.0-beta4 to v0.6.0-beta5.

There were certain properties which were removed from the intended references of 0.5.0 when switching to a Jargon object reference. The changes below restore those as listed.

Additionally, there's a semantic change to the DIA below after talking with Steve.


## UNTP Core

- `Attestation.issuedToParty` - add `description` to the object reference to match the intended reference in 0.5.0.
- Added `[jsonld.contextOmit]=true` to `Characteristics` and removed `Product.characteristics` otherwise when extensions add properties to `Characteristics` they re-define an existing term on `Product`.


## Digital Conformity Credential

When switching the following fields:
- `ConformityAssessment.assessedProduct` - add `serialNumber`, `batchNumber` and `IDVerifiedByCAB` to match intended reference in 0.5.0.
- `ConformityAssessment.assessedFacility` - add `locationInformation`, `address` and `IDverifiedByCAB` to the object reference to match intended reference in 0.5.0.
- `ConformityAssessment.assessedOrganisation` - add `description` to the object reference to match the intended reference in 0.5.0.
- `ConformityAssessment.auditor` - add `description` to the object reference to match the intended reference in 0.5.0.


## Digital Identity Anchor

During a call with Steve, he pointed out that the identity of the DIA is not
necessarily just a Party, nor is it just a Party, Facility or Product. It could
be a trademark, land, or a piece of intellectual property.

Even though it is unlikely to be the final solution here (Steve has work to do
related to this from recent conversation), for now, the simplest solution is to
replace the object reference with the original four fields of `Identity`. So it
is simply no longer inheriting `Identity` (as it doesn't exist anymore) but
directly using the equivalent fields, to provide a more general reference here.


## Digital Product Passport

No change other than updating to core-0.6.0-beta5.


## Digital Facility Record

No change other than updating to core-0.6.0-beta5.


## Digital traceability event

No change other than updating to core-0.6.0-beta5.
