---
sidebar_position: 5
title: Implementation Plans
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

UNTP is a collection of specifications that work together to enhance traceability and transparency in global supply chains. But each stakeholder type plays a different role and so will implement different subsets of UNTP. This page provides more specific implementation guidance for each stakeholder type. The [general steps](../tools-and-support/#has-five-simple-steps) of confirming business value, choosing solutions, registering intent, testing, and registering implementation apply to all and are not repeated here. 


## For Producers Manufacturers and Brands

Meet your supply chain due diligence obligations and provide evidence to your customers that allows them to meet their own obligations.

|Step|Action|Outcome|
|--|--|--|
|1|Choose a relevant UNTP [industry extension](../extensions/ExtensionsRegister.md) or lobby your member association to develop a new extension|Industry-wide consensus|
|2|Choose a UNTP compatible [software solution](../implementations/Software.md) or engage your ICT department to implement UNTP using our free [reference implementation](../tools-and-support/ReferenceImplementation.md)|Technology-ready|
|3|Push your suppliers to issue UNTP [DPP](/specification/DigitalProductPassport.md), [DFR](../specification/DigitalFacilityRecord.md) with linked [DCC](../specification/ConformityCredential.md) credentials|Meet your supply chain due-diligence obligations|
|4|Issue a [digital facility record](../specification/DigitalFacilityRecord.md) for each facility you own/operate|Your customers can verify sustainability performance of your production facilities|
|5|Issue a [digital product passport](../specification/DigitalProductPassport.md) for each product (and optionally each export market) that you ship from your facilities|Your customers can verify sustainability performance of your products|
|6|Choose conformity assessment bodies that can issue [digital conformity credentials](../specification/ConformityCredential.md) that attest your conformance with relevant schemes and regulations.|Prove your product and facility conformity|
|7a|Issue [digital traceability events](../specification/DigitalTraceabilityEvents.md) to link your manufactured products to the input components or materials used|Your customers can verify your product origin/traceability|
|7b|Where traceability information is commercially sensitive, request a trusted third party (eg a conformity assessment body or your member association) to assess traceability data and issue an independent guarantee of origin [conformity credential](../specification/ConformityCredential.md)|Your customers can trust an independent assessment of origin|
|8|Request [identity anchor](//specification/DigitalIdentityAnchor.md) credentials from your national business/trademark/land register and link them to your issuer [decentralised identifier](../specification/DigitalIdentityAnchor#via-did-service-endpoint)|Reduce counterfeiting risk and prove your identity|


## For Member Associations

[Activate communities](../business-case/CommunityActivationProgram) to participate in transparent and traceable value chains by governing the design and maintenance of UNTP [industry extensions](../extensions).

|Step|Action|Outcome|
|--|--|--|
|1|Review the UNTP [Community Activation Program](../business-case/CommunityActivationProgram) to understand the business case for creating a community extension, the stakeholder roles, and scope of work|Case for extension is made|
|2|Establish an [extension governance](../governance#untp-extension-governance) group that includes relevant representation from member organisations and other relevant stakeholders. Define the high level scope of your extension and register it as a proposed [UNTP extension](../extensions/ExtensionsRegister)| New extension plan is registered|
|3|Following the [extensions methodology](../extensions/ExtensionsMethodology) and using existing [registered extensions](../extensions/ExtensionsRegister) as examples, develop the extension specification draft as a public website and related testing and implementation support tools.|Extension draft available as public website|
|4|Complete [pilot testing](../tools-and-support/TestService) with early implementers of your extension specification. Update the extension specification with lessons learned from pilots and release a final version for widespread adoption. |Tested final version released|
|5|Scale up implementations across your community and track impact and value, reporting summary KPIs to UNTP according to the [value assessment framework](../business-case/ValueAssessmentFramework)|Quantifiable value achieved|


## For Registry Operators

Empower your members with verifiable identity and identifiers as signposts to verifiable data.

|Step|Action|Outcome|
|--|--|--|
|1|Implement the [Identity Anchor](../specification/DigitalIdentityAnchor.md) specification | Registry members can prove that they are the genuine controller of the registered identity.|
|2|Implement the [Identity Resolver](../specification/IdentityResolver.md) specification|registered members can prove their identity and link discoverable credentials such as [Product Passports](../specification/DigitalProductPassport.md), [Facility Records](../specification/DigitalFacilityRecord.md) to their product or facility identifiers.|
|3|[Register](../implementations/Registers) the implementation|Verifiers can confirm not only the member identity but also that the register itself is legitimate|

## For Scheme Owners

Make compliance with your scheme digitally verifiable.

|Step|Action|Outcome|
|--|--|--|
|1|Describe your existing schemes and criteria as a digital [Sustainability Vocabulary Catalog](../specification/SustainabilityVocabularyCatalog)  |conformity criteria can be referenced by issuers of claims in [Product Passports](../specification/DigitalProductPassport.md) and assessments in [Conformity Credentials](../specification/ConformityCredential.md) |
|2|Provide sample [Conformity Credentials](../specification/ConformityCredential.md) that reference scheme criteria and represent what CABs are expected to issue.|Samples are available that simplify implementation for [Conformity Assessment Bodies (CAB)](#for-conformity-assessment-bodies)|

## For Regulators

Make compliance with your regulations digitally verifiable.

|Step|Action|Outcome|
|--|--|--|
|1|Publish your existing regulations and criteria as [Sustainability Vocabulary Catalog](../specification/SustainabilityVocabularyCatalog)  |Conformity criteria can be referenced by issuers of regulatory compliance claims in [Product Passports](../specification/DigitalProductPassport.md) and assessments in [Conformity Credentials](../specification/ConformityCredential.md) |
|2|Issue regulatory permits, licenses, and certificates as [Digital Conformity Credentials](../specification/ConformityCredential.md) |Exporters can prove their compliance to customers and other authorities.|
|3|Establish digital verification framework for imports including [Product Passports](../specification/DigitalProductPassport.md), [Conformity Credentials](../specification/ConformityCredential.md) and [Identity Anchors](../specification/DigitalIdentityAnchor.md)|Automate border compliance and risk assessments with higher identity integrity and reduced piggybacking|


## For Conformity Assessment Bodies

Make your third party conformity assessments digitally verifiable.

|Step|Action|Outcome|
|--|--|--|
|1|Issue [Digital Conformity Credentials](../specification/ConformityCredential.md) that attest conformity with [schemes](ImplementationPlans#for-scheme-owners) or [regulations](ImplementationPlans#for-regulators) following examples published by [scheme owners](#for-scheme-owners)|Your customers can digitally prove conformity of their products or facilities.|


## For Software Vendors

Empower your customers to participate in sustainable value chains. For software vendors, the specific UNTP (or extension) implementation requirements will depend on your customer role and needs. 

|Software type|Action|Outcome|
|--|--|--|
|Verifiable credential / identity platforms|Support [Verifiable Credentials Profile](../specification/VerifiableCredentials) and [Digital Identity Anchor](../specification/DigitalIdentityAnchor)|Your software libraries are easily integrated with business software systems to support UNTP implementations|
|Traceability platforms|Follow links to find and verify [product passports](../specification/DigitalProductPassport), [facility records](../specification/DigitalFacilityRecord), [traceability events](../specification/DigitalTraceabilityEvents), and [conformity credentials](../specification/ConformityCredential) to construct [transparency graphs](../design-patterns/TrustGraphs) representing n-tier traceable supply chain|your customers have the data to meet their due diligence and compliance reporting requirements.|
|Production Management Systems (PMS) or ERP systems|Issue [facility records](../specification/DigitalFacilityRecord), [product passports](../specification/DigitalProductPassport), and [traceability events](../specification/DigitalTraceabilityEvents) that describe the manufacturing facilities, manufactured products, and upstream materials.| Your customer can link high integrity sustainability information to their products and facilities.|


## For Consumers

Scan data carriers, view digital product passports, make purchase decisions.


