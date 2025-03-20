These changes are the changes from v0.6.0-beta9 to v0.6.0-beta10.

On the Jargon side, the regex's for `validFrom` and `validUntil` are fixed in [Jargon issue 45](https://github.com/jargon-sh/issues/issues/45)

The model changes are two-fold:
- Continuing the move towards better extensibility (defining a `Product` separate from a `ManufacturedProduct`)
- Steve's [better naming for credentialSubjects an the credentials themselves](https://github.com/uncefact/spec-untp/issues/332)



## UNTP-Core changes

- Remove `serialNumber` and `dimensions` from product and add to new `ManufacturedProduct`
- Move definition of Claim from DPP and DFR (re-defined) to core as per [issue 321](https://github.com/uncefact/spec-untp/issues/321)
- Saved to check working core in other domains.
- Released untp-core 0.6.0-beta10


## DigitalProductPassport changes

- Updated to use untp-core Claim and removed redefinition of `Claim`.
- Renamed credential and credentialSubject as per 332 above.
- Waiting on https://github.com/jargon-sh/issues/issues/47 - fixed straight away
- Waiting on https://github.com/jargon-sh/issues/issues/48 - fixed straight away
- Saved and verified working instance is valid jsonld.
- Released dpp (now vpp?) 0.6.0-beta10
- Verified produced instance is valid jsonld

NOTE: only the VerifiableProductPassport instance is copied as part of our publishing pipeline. We may want to update that to publish instead the VerifiableManufacturedProductPassport, or both, but until that is done, we may need to grab it manually (TODO: add issue to discuss this with Kseniya).


## DigitalConformityCredential changes

- Rename to VerifiableConformityCredential
- Update to core 0.6.0-beta10
- Saved and verified working instance is valid jsonld.
- Released dcc 0.6.0-beta10
- Verified produced instance is valid jsonld


## DigitalFacilityRecord changes

- Update to core 0.6.0-beta10
- Renamed to VerifiableFacilityRecord
- updated conformityEvidence to use core's Claim and removed redefinition.
- Saved and verified working instance is valid jsonld.

## DigitalIdentityAnchor and DigitalTraceabilityEvent

Just update to core 0.6.0-beta10. Didn't hear back on renaming these so left as are as better to change later if needed than need to change back later introducing confusion.

## DigitalLivestockPassport

- Updated to core and dpp 0.6.0-beta10
- As per 332,
  - Renamed to VerifiableLivestockPassport
  - BovineAnimalClaim -> LivestockPassport
  - BovineAnimal -> Left as is
  - Used the new jargon example setting to set the examples for the data (but having issues currently).
  - TODO: once examples set, release DLP 0.4.2-beta2
