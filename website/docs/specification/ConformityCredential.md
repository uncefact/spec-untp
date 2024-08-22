---
sidebar_position: 10
title: Conformity Credential
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />


* Latest JSON-LD @context : [DCC v0.3.7 JSON-LD context](../../schema/DCC_v0.3.7_context.jsonld)
* Latest JSON Schema : [DCC v0.3.7 JSON schema ](../../schema/DCC_v0.3.7_schema.json)
* Sample Instance : [DCC v0.3.7 JSON sample (better data needed)](../../samples/untp-digital-conformity-credential-v0.3.7.json)

## Versions

|DPCC Version|Date|status|change log|JSON-LD Context|JSON Schema|
|--|--|--|--|--|--|
|0.3.0|01-07-2024|Raw |rebuilt on untp-core vocabulary| DPP context - TBA |DPP schema - TBA |
|0.3.7|22-08-2024|Draft| Resulved issues, aligned with untp core, ready for pilot testing|[context](../../schema/DCC_v0.3.7_context.jsonld)|[schema](../../schema/DCC_v0.3.7_schema.json)


## Overview

Conformity credentials are usually issued by independent third parties and provide a **trusted assessment** of product ESG performance against credible **standards or regulations**. As such the credential provides trusted verification of the ESG claims in the passport. Since the passport may make several independent claims (eg emissions intensity, deforestation free, fair work, etc) there may be many linked conformity credentials referenced by one passport. As an additional trust layer, the conformity credential may reference an **accreditation** credential that attests to the authority of the third party to perform the specific ESG assessments. The conformity credential data model has been developed by a separate UN/CEFACT project on digital conformity that has expert membership from accreditation authorities and conformity assessment bodies.

## Conceptual Model

![Conformity Credential](ConformityCredential.png)

## Requirements

The digital product conformity credential (DPCC) is designed to meet the following detailed requirements as well as the more general [UNTP Requirements(https://uncefact.github.io/spec-untp/docs/about/Requirements)]

|ID|Name|Requirement Statement|Solution Mapping|
|--|--|--|--|
|DPCC-01|Authorised source|The DPCC MUST be verifiable as issued by an authorised source, typically a conformity assessment body (CAB) |DPCC MUST be issued as a digital [verifiable credential](VerifiableCredentials.md) signed by the CAB|
|DPCC-01|Assurance level|The DPCC MUST the identify the nature of any authority or support for attestation, such as formal recognition by a Governmental authority or an Accreditation Body| Attestation. accreditation property|
|DPCC-03|Subject of conformity|The DPCC MUST unambiguously identify the subject of the conformity assessment, whether a product or facility.|Assessment. assessedProducts, Assessment. assessedFacilities|
|DPCCE-04|Reference standard or regulation|The DPCC MUST identify the reference standard(s) and/or regulation(s) that specify the criteria against which the conformity assessment is made. If appropriate this must include specific measurable thresholds (eg minimum tensile strength)| ConformityAssessment. referenceStandard and ConformityAssessment. assessmentCriterion|
|DPCC-05|Conformity Attestation|The DPCCE MUST unambiguously state whether or not the subject of the assessment is conformant to the reference standard or regulation criteria|ConformityAssessment. compliance|
|DPCC-06|Measured metrics|The DPCCE SHOULD include actual measured values (eg emissions intensity, tensile strength, etc) with the conformity assessment|ConformityAssessment. declaredValues|
|DPCC-07|Evidence|The DPCCE MAY include references to audit-able evidence (eg instrument recordings, satellite images, etc) to support the assessment. If so then the hash of the evidence file-set SHOULD be included (so that an auditor can be sure that the evidence data has not changed).  The evidence data MAY be encrypted with decryption keys provided on request|ConformityAttestation. auditableEvidence|
|

## Logical Model

The Digital Conformity Credential is an assembly of re-usable components from the UNTP core vocabulary.

![Conformity Credential](ConformityCredential.svg)


### Core Vocabulary

The [UNTP core types vocabulary](https://jargon.sh/user/unece/untp-core/v/0.3.6/artefacts/readme/render) defines the uniquely identified Linked Data entities such as Product, Location, Facility, Party, Standard, Regulation, Criteria, Declaration, Attestation, Endorsement. These entities provide the building blocks for construction of Digital Product Passports and Digital Conformity Credentials.

### DCC Documentation

[DCC class & property definitions](https://jargon.sh/user/unece/ConformityCredential/v/0.3.7/artefacts/readme/render)

## Implementation Guidance


### Verifiable Credential

See DPP section

### Conformity Attestation

Add implementation guidance

### Scope (Conformity Assessment Scheme)

Add implementation guidance

### Authorisations (Endorsements)

Add implementation guidance

### Auditable Evidence (Secure Link)

Add implementation guidance

### Conformity Assessments 

Conformity assessments are included in the DCC as an array of UNTP `Declaration` structures. The same structure is re-used for third party assessments in UNTP Digital Product Passport (DPP).  Please refer to the [Sustainability Vocabulary Page](SustainabilityVocabularyCatalog.md) for further information and examples.

## Sample

