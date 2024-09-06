---
sidebar_position: 7
title: Implementations Register
---

## Implementation Registers

UNTP implementation registers are designed to track uptake of UNTP. This provides value to UN/CEFACT as a means to assess impact.  It also provides value to implementers as a means to raise awareness of implementation plans or to discover usable implementations.  There is a separate register for each implementer type.

* [Industry](Industry.md) will typically implement the DPP, DFR and DTE specifications so that the sustainability characteristics of their products and facilities are discoverable and verifiable. Registration provides a means to announce intent to participate in sustainable and interoperable value chains and allows buyers to discover suppliers with digitally verifiable sustainability data.
* [Conformity Assessment Bodies](Certifiers.md) will typically implement the DCC specification so that they can provide their customers with verifiable sustainability credentials about their products and facilities. 
* [Regulators](Regulators.md) will also typically be DCC implementers for government permits, licenses, certificates or other relevant credentials so that they can provide their constituents with digitally verifiable regulatory compliance evidence. Regulators may also operate identity registers.
* [Software Solutions](Software.md) will typically implement the VCP and/or IDR specifications into their systems so that they can support their customers who will use the solutions to issue DPPs, DFRs, DTEs, and DCCs.  
* [Identity Registers](Registers.md) will typically implement the IDR specification (so that registered identities are resolvable) and the DIA specification (so that registered identities are verifiable).

## Implementation Status

Implementers may register a future intent to support UNTP specifications. Once implementation is complete and tested, the implementation status will be updated accordingly.  

* Planned - means that the organisation is announcing a future intent to support UNTP by an approximate implementation date. Registration of intent does not imply a firm commitment and may be withdrawn. 
* Testing - means that an organisation is in-progress with implementation conformity testing.
* Active - means that the organisation has live implementations of one or more UNTP specifications.
* Deprecated - means that the organisation is supporting some UNTP implementations but is no longer actively sup;porting new implementations. 

## Implementation Scope

Each implementer organisation should provide a short statement about their UNTP implementation plans and should define which of their products, solutions or services support which UNTP specifications. 

Note that implementers need only declare intent to implement the minimum mandatory scope (defined on each specification page). Full details of actual implemented scope will be defined by the post implementation test report.

* [VCP](../specification/VerifiableCredentials) - Verifiable Credentials Profile
* [DPP](../specification/DigitalProductPassport.md) - Digital Product Passport
* [DCC](../specification/ConformityCredential.md) - Digital Conformity Credential
* [DFR](../specification/DigitalFacilityRecord.md) - Digital Facility Record
* [DTE](../specification/DigitalTraceabilityEvents.md) - Digital Traceability Event
* [IDR](../specification/IdentityResolver.md) - Identity Resolver
* [DIA](../specification/IdentityResolver.md) - Digital Identity Anchor

## Registration Process

To register your current or planned implementation please raise a [new issue](https://github.com/uncefact/spec-untp/issues) and select the "Implementation register template". 

* For registration of a future commitment to implement, the reviewers will confirm links and authority to represent the entity, then publish the registration.
* For registrations of actual implementations, the reviewers will request evidence of completion of interoperability tests. 

## Ongoing Value Assessment

Registered implementers are requested to provide annual reporting of anonymised volumetric data as described on the [Value Assessment Framework](../business-case/ValueAssessmentFramework.md) so that UN/CEFACT can track ongoing impact of the UNTP. UN/CEFACT will publish anonymised annual performance reporting that implementers can use to benchmark their own performance against industry and geographical averages.  

## UN/CEFACT Reference Implementation

UN/CEFACT will maintain an up to date reference implementation for each major UNTP version and a suite of tests for each major and minor version.  The details below follow the same format as any [software register](Software.md) implementations.  

** Organisation Information **

|Logo|Name|Implementation Statement|Geographic scope|
|--|--|--|--|
|![UN Logo](../../implementations/uncefact/logo.png)|[UN/CEFACT](https://unece.org/trade/uncefact)|The UN center for trade facilitation and e-business is pleased to provide a suite of UNTP open source reference implementations and a conformity testing toolkit.|Global|

** Product Information **

|Product Name|Description|Product Version(s)|UNTP Scope|UNTP Version(s)|Date|Test Report|
|--|--|--|--|--|--|--|
|[VCkit](https://github.com/uncefact/project-vckit)|Verifiable credential issuing and verifying toolkit| v0.5 |VCP|v0.5|01-Oct-2025|TBA |
|[IDkit](https://github.com/uncefact/project-identity-resolver)|Identity resolver reference implementation.|v0.5|IDR, DIA|v0.5|01-Oct-2025|TBA|
|[Test Kit](https://uncefact.github.io/tests-untp/)|A suite of conformity testing tools for all UNTP specifications|v0.5|DPP, DCC, DFR, DTE, DIA|v0.5|01-Oct-2025|TBA|


