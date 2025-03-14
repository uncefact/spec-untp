These changes are the changes from v0.6.0-beta7 to v0.6.0-beta9.

On the Jargon side in terms of the id assigned to properties when inherited. See [Jargon issue 42](https://github.com/jargon-sh/issues/issues/42) for details.

The main change to the modelling is related to that jargon issue, the result of which is documented on [UNTP-Spec issue 323](https://github.com/uncefact/spec-untp/issues/323), is to move towards a composition rather than inheritance model to both avoid redefinitions in UNTP while keeping inheritance hierarchies small and enabling extensions.


## UNTP-Core changes

- Open untp-core, make small textual change (add new line) and resaved with the new Jargon artefacts
- Released untp-core 0.6.0-beta9


## DigitalProductPassport changes

Updated the `Product` redefinition to be called `ProductClaims` (since it is a compositino of the product details and the claims being made).

Had to assign an id property (so it's a jargon blue class and won't change the defn of credentialSubject), but updated example to be clear it doesn't need to be an accessible URI. TODO: create a jargon issue about this.

Also added `ManufacturedProductClaims` which includes some claim properties that are relevant to manufactured products (and not relevant to `BovineAnimal`s for example).

- Update to core 0.6.0-beta9
- Save and verify working instance data valid
- Release 0.6.0-beta9 for the domain.


## DigitalConformityCredential changes

Updated `Product` to `ProductVerification` composed of a `Product` and the bool.
Updated `Facility` to `FacilityVerification` composed of a `Facility` and the bool.

- Update to core 0.6.0-beta9
- Save and verify working instance data valid
- Release 0.6.0-beta9 for the domain.


## DigitalFacilityRecord changes

Updated `Facility` to `FacilityClaim` and composed of a `Product` rather than inherited. Had to assign an id property (so it's a jargon blue class and won't change the defn of credentialSubject), but updated example to be clear it doesn't need to be an accessible URI.

- Update to core 0.6.0-beta9
- Save and verify working instance data valid
- Release 0.6.0-beta9 for the domain.


## DigitalIdentityAnchor and DigitalTraceabilityEvent

- Update to core 0.6.0-beta9
- Save and verify working instance data valid
- Release 0.6.0-beta9 for the domain.


