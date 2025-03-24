These changes are the changes from v0.6.0-beta10 to v0.6.0-beta12.

The model changes revert two changes from the previous release that were re-evaluated after feedback:
- Stick just with `Product` for now, even if that means that extensions which aren't manufactured (such as DigitalLivestockPassport) have extra fields that aren't relevant, we can later decide about better classes with more data available.
- Revert the changes to the naming of 3 base credentials which were changed as part of [332](https://github.com/uncefact/spec-untp/issues/332)

Other changes included in this release:
- URI's for geoJSON properties are invalid (created [Jargon issue 49](https://github.com/jargon-sh/issues/issues/49), since it's an import of a jargon domain defined by Jargon itself)
- Fixing invalid URIs for renderMethod (containing two `#` in the link). [Issue 334](https://github.com/uncefact/spec-untp/issues/334) was created by @peacekeeper where we've discussed options for these URIs.
- The `Declaration.assessmentCriteria` is now a rich reference to a new criteria class which Steve has added to core (thanks Steve).
- The DCC.ProductVerification and FacilityVerification's `product` property has been updated to be a rich reference also.


## UNTP-Core changes

- `Criterion` entity added to core by Steve which can handle sub-criterion, and referenced from `Declaration.assessmentCriteria` as a rich reference (id, name, description).
- `serialNumber` and `dimension` fields that had been split out of `Product` and added to `ManufacturedProduct` moved back to `Product` and `ManufacturedProduct` deleted.
- Updated to geojson 0.0.3 - this should avoid invalid URIs for geojson properties as outlined on [Jargon issue 49](https://github.com/jargon-sh/issues/issues/49)
- Updated `ConformityScheme.owner:Party` to be an object reference and added `[jargon.hideRoute]=true` for this field to clear up the diagram slightly.
- Updated the `renderMethodPrefix` on the template and url properties of `RenderTemplate2024` and `WebRenderingTemplate2022` to use `https://w3id.org/vc/render-method#` instead, fixing [issue 334](https://github.com/uncefact/spec-untp/issues/334)

- Saved to check working core in other domains.
- Released core 0.6.0-beta12


## DigitalProductPassport changes

- Deleted `VerifiableManufacturedProductPassport` and `ManufacturedProductPassport` (since the distinction between a ManufacturedProduct and a Product is removed above).
- Reverted rename back to `DigitalProductPassport`
- Temporarily updated to core working to verify artefacts.
- Verified after tweaking the core model.
- Updated from working to 0.6.0-beta11 core
- Released dpp 0.6.0-beta11
- Verified produced instance is valid jsonld
- Realised I'd missed three fields, so re-added and released dpp 0.6.0-beta12


## DigitalConformityCredential changes

- Renamed back to DigitalConformityCredential
- Moved the objectReferences for product and facility from `ConformityAssessment.assessedProduct` and `ConformityAssessment.assessedFacility` to `ProductVerification.product` and `FacilityVerification.facility` respectively (they had been missed when we moved the reference to product from the `ConformityAssessment` directly to the verification entity, which was in turn created to avoid redefining product or facility)
- Verified instance and context after updating to working core.
- Updated from working to 0.6.0-beta11 core
- Released dcc 0.6.0-beta11
- Verified produced instance is valid jsonld
- Released dcc 0.6.0-beta12


## DigitalFacilityRecord changes

- Renamed back to DigitalFacilityRecord
- Verified instance and context after updating to working core.
- Updated from working to 0.6.0-beta11 core
- Released dfr 0.6.0-beta11
- Verified produced instance is valid jsonld
- Updated core to beta12 and release dfr 0.6.0-beta12


## DigitalIdentityAnchor and DigitalTraceabilityEvent

These two should have no changes, just double-check for any missing objectReferences and then:

- Updated from working to 0.6.0-beta11 core
- Released dia and dte 0.6.0-beta11
- Verified produced instance is valid jsonld
- Updated core to beta12 and release dia and dte 0.6.0-beta12

## DigitalLivestockPassport


- Update to core and dpp 0.6.0-beta12
- This will mean extra fields which are not used, but we can at least set the example data for these fields to null.

For BovineAnimal:
[jargon.nestedExample:$.serialNumber]=null
[jargon.nestedExample:$.dimensions]=null

For LivestockPassport:
[jargon.nestedExample:$.circularityScorecard]=null
[jargon.nestedExample:$.dueDiligenceDeclaration]=null
[jargon.nestedExample:$.materialsProvenance]=null

- Renamed back to DigitalLivestockPassport for consistency.
- Verify instance data
- Release DLP 0.4.2-beta3
