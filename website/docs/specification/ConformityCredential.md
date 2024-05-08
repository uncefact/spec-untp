---
sidebar_position: 10
title: Conformity Credential
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Versions

|DPCC Version|Date|status|JSON-LD Context|JSON Schema|
|--|--|--|--|
|0.2.0|06-04-2024|Raw (not for implementation)|DPP context - TBA|DPP schema - TBA |

The current version of this specification is v0.2.0

## Overview

Conformity credentials are usually issued by independent third parties and provide a **trusted assessment** of product ESG performance against credible **standards or regulations**. As such the credential provides trusted verification of the ESG claims in the passport. Since the passport may make several independent claims (eg emissions intensity, deforestation free, fair work, etc) there may be many linked conformity credentials referenced by one passport. As an additional trust layer, the conformity credential may reference an **accreditation** credential that attests to the authority of the third party to perform the specific ESG assessments. The conformity credential data model has been developed by a separate UN/CEFACT project on digital conformity that has expert membership from accreditation authorities and conformity assessment bodies.

## Conceptual Model

![Conformity Credential](ConformityCredential.png)

## Requirements

The digital product conformity credential (DPCC) is designed to meet the following detailed requirements as well as the more general [UNTP Requirements(https://uncefact.github.io/spec-untp/docs/about/Requirements)]

|ID|Name|Requirement Statement|Solution Mapping|
|--|--|--|--|
|DPCC-01|Authorised source|The DPCC MUST be verifiable as issued by an authorised source, typically a conformity assessment body (CAB) |DPCC MUST be issued as a digital [verifiable credential](VerifiableCredentials.md) signed by the CAB|
|DPCC-01|Assurance level|The DPCC MUST the identify the nature of any authority or support for attestation, such as formal recognition by a Governmental authority or an Accreditation Body|[Authority](#Authority)|
|DPCC-03|Subject of conformity|The DPCC MUST unambiguously identify the subject of the conformity assessment, whether a product or facility.|[Product](#Product), [Facility](#Facility)|
|DPCCE-04|Reference standard or regulation|The DPCC MUST identify the reference standard(s) and/or regulation(s) that specify the criteria against which the conformity assessment is made. If appropriate this must include specific measurable trhesholds (eg minimum tensile strength)|[Standard](#Standard), [Regulation](#Regulation), [Metric](#Metric)|
|DPCC-05|Conformity Attestation|The DPCCE MUST unambiguosly state whether or not the subject of the assessment is conformat to the reference standard or regulation criteria|[Assessment](#Assessment)|
|DPCC-06|Measured metrics|The DPCCE SHOULD include actual measured values (eg emissions intensity, tensile strength, etc) with the conformity assessment|[metric](#Metric)|
|DPCC-07|Evidence|The DPCCE MAY include references to auditable evidence (eg instrument recordings, satellite images, etc) to support the assessment. If so then the hash of the evidence fileset SHOULD be included (so that an auditor can be sure that the evidence data has not changed).  The evidence data MAY be encrypted with decryption keys provided on request|[Conformity Evidence](#ConformityEvidence)|
|

## Logical Model

![Conformity Credential](ConformityCredential.svg)


## Data Definitions

### ConformityAttestation

> A conformity attestation issued by a competent body that defines one or more assessments (eg carbon intensity) about a product (eg batttery) against a specification (eg LCA method) defined in a standard or regulation.

Property | Definition | Type
--- | --- | ---
id | The unique identifier of this conformity attestation | URI
assessorLevel | Assurance code pertaining to assessor (relation to the object under assessment) | Code (assessorAssuranceCode)
assessmentLevel | Assurance pertaining to assessment (any authority or support for the assessment process) | Code (assessmentAssuranceCode)
type | The type of criterion (optional or mandatory). | Code (attestationType)
description | A textual description of the scope or purpose of this confomrity attestation | Text
scope | A list of relevant standards and/or regulations against which apply to this attestation (eg AS1163:2016). | [ConformityAssessmentScheme](#conformityassessmentscheme)
issuedBy | The party that issued the conformity attestation. | [Party](#party)
issuedTo | The party to whom the conformity attestation was issued. | [Party](#party)
validFrom | The date from which the conformity attestation is valid. | Date
validTo | The date until which the conformity attestation is valid. | Date
status | The status of this conformity attestation (eg pending, valid, expired, revoked) | Code (status)
assessments | The list of specific assessments made within this conformity attestation. | [ConformityAssessment](#conformityassessment)
evidence | Evidence supporting the assessment | [ConformityEvidence](#conformityevidence)
accreditation | The accreditation from a competent authority (ag NATA) that confirms the issuers authorised scope of assessments.  | [Authority](#authority)
regulatoryApproval | The regulatory approval under which this conformity attestation is issued.  | [Authority](#authority)
certificate | A reference to the human / printable version of this conformity attestation - typically represented as a PDF document. The document may have more details than are represented in the digital attestation. | [BinaryFile](#binaryfile)


### ConformityAssessmentScheme

> A formal governance scheme under which this attestation is issued (eg ACRS structural steel certification)

Property | Definition | Type
--- | --- | ---
id | THe unique identifier of the formal scheme (eg steelcertification.com/product-certification) | URI
name | The name of the conformity scheme (eg ACRS structural steel certification) | Text
trustmark | The trust mark that represents the conformity assessment scheme. | [BinaryFile](#binaryfile)
issuingBody | The issuing body of the conformity scheme. | [Party](#party)
dateOfIssue | The date of issue of the scheme. | Date


### Facility

> The physical site (eg farm or factory) where the product or materials was produced.

Property | Definition | Type
--- | --- | ---
identifiers | A unique, resolvable, and verifiable identifier for the facility (eg https://maps.app.goo.gl/ULJFeVuA75M8cuQc8)  | [Identifier](#identifier)
name | The name of this facility | Text
classifications | The UN CPC service calssificaiton for the activities undertaken at this facility. | [Classification](#classification)
geolocation | The geolocated point or area that can be used to place the location on a map. Should be a PlusCode - eg https://plus.codes/4RQGGVGP+ | URI
verfifiedByCAB | Indicates whether the conformity assessment body has verified the identity of the subject of the assement (a facility or product / batch). | Indicator


### Product

> The facility (fatctory, farm, etc) or product or produciton batch that this conformity attestation is about.

Property | Definition | Type
--- | --- | ---
identifiers | A unique, resolvable, and verifiable identifier for the product (eg id.gs1.org/gtin/5000127163096) | [Identifier](#identifier)
marking | Markings or codes on the product that can be used to match the physical product to this confomity assessment. if not provided then the productID MUST be marked on the product. | Text
name | the name of this product as defined by the manuracturer or retailer. | Text
classifications | The UN CPC product classification code. | [Classification](#classification)
testedBatchId | A unique, resolvable, and verifiable identifier for the product serial number or batch (eg id.gs1.org/gtin/614141123452/lot/ABC1/ser/12345?exp=180426) | URI
verfifiedByCAB | Indicates whether the conformity assessment body has verified the identity of the subject of the assement (a facility or product / batch). | Indicator


### ConformityAssessment

> A specific assessment about the product or facility against a specific specification.  Eg the carbon intensity of a given product or batch.

Property | Definition | Type
--- | --- | ---
referenceStandard | The reference to the standard that defines the specification / criteria | [Standard](#standard)
referenceRegulation | The reference to the regulation that defines the assessment criteria | [Regulation](#regulation)
assessmentCriterion | The specification against which the assessment is made. | [Criteria](#criteria)
subjectProducts | The list of products that are the subject of this conformity assessment | [Product](#product)
subjectFacilities | The list of facilities that are the subject of this conformity assessment. | [Facility](#facility)
measuredResults | The list of specific values measured as part of this assessment (eg tensile strength) | [Metric](#metric)
compliance | An indicator of whether or not the assessment meets the specification. | Indicator
sustainabilityTopic | The UN ESG topic category for this assessment (eg vocabulary.uncefact.org/sustainability/emissions) | Code (sustainabilityTopic)


### Metric

> A numric value of the conformity claim - eg this product scope 1 emissions intensity is 5 KgCo2e/Kg

Property | Definition | Type
--- | --- | ---
name | A short name for the metric - eg emissions intensity | Text
value | The measured value.   | [Measure](#measure)
minimumValue | maximum measured or allowed value | [Measure](#measure)
maximumValue | minimum measured or allowed value | [Measure](#measure)


### ConformityEvidence

> The specific collection of evidence that was used to inform the conformity claim. Eg satellite images and supporting declarations in support of a deforestation claim.

Property | Definition | Type
--- | --- | ---
evidenceRootHash | An MD5 hash representing the root of the evidence. | Text
description | A textual description of the evidence. | Text
evidenceData | Files that constitute the evidence. | [BinaryFile](#binaryfile)
decryptionKeyRequest | A URI to request the decryption key for the evidence. | URI


### BinaryFile

> A file representing a data snapshot that is used to infomr the conformity assessment.

Property | Definition | Type
--- | --- | ---
fileHash | The MD5 hash of the file. | Text
fileLocation | The location of the evidence file. | URI
fileType | The type of file, represented as a MIME type. | Code (mimeType)
EncryptionMethod | A code indicating the encryption method applied to the file. | Code (encryptionMethod)


### Authority

> The authority under which a conformity claim is issued.  For example a national accrediation authority may accredit a test lab to issue test certificates about a product against a standard. 

Property | Definition | Type
--- | --- | ---
number | The reference number for the accreditation - issued by the accreditation body (AB) to the confomrity assessment body (CAB) | Text
authorityEvidence | The evidence that supports the authroty under which the attestation is issued - eg an accreditation certificate. | [Evidence](#evidence)
trustmark | The trust mark image awarded by the AB to the CAB to indicate accrediation. | [BinaryFile](#binaryfile)
authority | The competent authority that issued the accreditation. | [Party](#party)


### Standard

> A standard (eg ISO 14000) that specifies the criteria for conformance.

Property | Definition | Type
--- | --- | ---
id | A unique identifier for the standard (eg https://www.iso.org/standard/60857.html). | URI
name | The name of the standard (eg ISO 14001 Environmental management system) | Text
issuingBody | The party that issued the standard  | [Party](#party)
issueDate | The date when the standard was issued. | Date


### Regulation

> A regulation regulation (eg EU deforestation regulation) that defines the criteria for assessment.

Property | Definition | Type
--- | --- | ---
id | The identifier of the regulation - eg https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115)  | URI
name | The name of the regulation - eg EU deforestation regulation. | Text
issuingBody | the issuing body of the regulation. | [Party](#party)
effectiveDate | the date at which the regulation came into effect. | Date


### Criteria

> A specific rule or criterion within a standard or regulation. eg a carbon intensity calculation rule within an emissions standard.

Property | Definition | Type
--- | --- | ---
id | A unique identifier for the criterion - managed by the standards wuthority or regulator. | URI
threshold | A conformity threshold defined by the specification (eg minimum compressive strength) | [Metric](#metric)
name | A name that describes this criteria (eg tensile strength) | Text


### Party

> A party in the conformity domain such as the manufacturer, assessment body, standards authority, accreditation authority, etc

Property | Definition | Type
--- | --- | ---
identifiers | A unique, resovable and verifiableidentifier for the party (eg abr.business.gov.au/ABN/90664869327) | [Identifier](#identifier)
name | The name of the party - should match the name in the corresponding formal register. | Text


### Evidence

> Evidence to support a conformity or identity claim. 

Property | Definition | Type
--- | --- | ---
format | Format of the evidence (verifiable credential, document, website, etc) | Code (evidenceFormat)
credentialReference | The URL of the evidence credential. Should be a hashlink to avoid post-issue tampering. | URI


### Classification

> A classification scheme and code / name representing a category value for a product, entity, or facility.

Property | Definition | Type
--- | --- | ---
scheme | Classification scheme  - eg https://unstats.un.org/unsd/classifications/Econ/cpc  | URI
classifierValue | classifier value within the scheme - eg "01211" in UN CPC | Text
classifierName | Name of the classifier - eg "Asparagus" for code "01211" in UNCPC | Text
classifierURL | Linked data URL to a web vocabulary entery for this classificaiton code. When this property is provided, the scheme, value, and name properties of the classifer are not required.  eg https://vocabulary.uncefact.org/unlocode#AUBNE represensign the port of Brisbane in the UN/LOCODE classification scheme. | URI


### Identifier

> An identifier of a party, product, or facility that is defined by an identifier scheme and idenfier value and, optinally, verification evidence 

Property | Definition | Type
--- | --- | ---
scheme | the identifier scheme as defined by the registrar that manages the identifier registry. If the identifier scheme is registered with UNTP then this URI can use used to dicsover the resolution method (to get more data) and the verification method (to prove ownership). | URI
identiferValue | The value of the identifier within the scheme | Text
identifierURI | The fully qualified URI representing the globally unique record for this identifier. | URI
verificationEvidence | Link to evidence that attests to the validity and ownership of the identifer.  | [Evidence](#evidence)


### Measure

> The measure class defines a numeric measured value (eg 10) and a coded unit of measure (eg KG).

Property | Definition | Type
--- | --- | ---
value | The numeric value of the measure | Numeric
unit | Unit of measure drawn from the UNECE rec20 measure code list. | Code (unitOfMeasure)


## Code Tables

### assessorAssuranceCode

 Code that describes the assurance level of the conformity assessment

|Name | Description|
|--- | ---|
|Self |  self-assessment|
|Commercial |  conformity assessment by related body or under commercial contract|
|Buyer |  conformity assessment by potential purchaser|
|Membership |  conformity assessment by industry representative body or membership body|
|Unspecified |  conformity assessment by party with unspecified relationship |
|3rdParty |  3rd party (independent) conformity assessment|


### assessmentAssuranceCode

|Name | Description|
|--- | ---|
|GovtApproval | conformity assessment delivered under authority granted by national government|
|GlobalMLA | conformity assessment delivered under authority granted by IAF/ILAC signatory body|
|Accredited | conformity assessment delivered under an independent accreditation|
|Verified | conformity assessment externally verified|
|Validated | conformity assessment externally validated|
|Unspecified | conformity assessment claiming no external authority or else unspecified|


### attestationType

 A code for the type of the attestation credential

|Code | Description|
|--- | ---|
|certification | A formal third party certification of conformity|
|declaration | A self assessed declaration of conformity|
|inspection | An Inspection report |
|testing | A test report|
|verification | A verification report|
|validation | A validation report|
|calibration | An equipment calibration report|


### status

```
Code values for this table are derrived from the state lifecycle chart: null
```
|value|
|---|


### sustainabilityTopic

|Name | Description|
|--- | ---|
|environment.energy | claims supporting clean energy transition|
|environment.emissions | claims supporting GHG emissions reduction|
|environment.water | claims supporting minimising water usage impact|
|environment.waste | claims supporting waste processing and reduction|
|environment.deforestation | claims supporting native forest restoration|
|environment.biodiversity | claims supporting improved biodiversity outcomes|
|circularity.content | claims supporting the use of recycled content in products|
|circularity.design | claims supporting product design for circularity outcomes|
|social.labour | claims supporting labour rights including fair wages|
|social.rights | claims supporting human rights and anti-discrimination|
|social.community | claims supporting local community development|
|social.safety | claims supporting process and product safety|
|governance.ethics | claims supporting ethical conduct and corporate governance|
|governance.compliance | claims supporting regulatory compliance including taxation and community protection|
|governance.transparency | claims supporting transparency and traceability|


### mimeType

```
Code values for this table can be found here:
https://mimetype.io/all-types
```


### encryptionMethod

|Name | Value | Description|
|--- | --- | ---|
|none |  | no encryption|
|AES |  | AES standard|


### evidenceFormat

 A code describing the format of the conformity evidence

|Name | Description|
|--- | ---|
|w3c_vc | A W3C Verifiable Credential|
|iso_mdl | an ISO 108013 identity credential|
|document | a binary document for human consumption such as a PDF|
|website | a reference to an entry on a public website.|
|other | some other representation|


### unitOfMeasure

 UNECE Recommendation 20 Unit of Measure codelist

```
Code values for this table can be found here:
https://vocabulary.uncefact.org/UnitMeasureCode
```

## Sample

```
{
  "id": "http://example.com",
  "assessorLevel": "Self",
  "assessmentLevel": "GovtApproval",
  "type": "certification",
  "description": "string",
  "scope": {
    "id": "http://example.com",
    "name": "string",
    "trustmark": {
      "fileHash": "string",
      "fileLocation": "http://example.com",
      "fileType": "string",
      "EncryptionMethod": "none"
    },
    "issuingBody": {
      "identifiers": [
        {
          "scheme": "http://example.com",
          "identiferValue": "string",
          "identifierURI": "http://example.com",
          "verificationEvidence": {
            "format": "w3c_vc",
            "credentialReference": "http://example.com"
          }
        }
      ],
      "name": "string"
    },
    "dateOfIssue": "2019-08-24"
  },
  "issuedBy": {
    "identifiers": [
      {
        "scheme": "http://example.com",
        "identiferValue": "string",
        "identifierURI": "http://example.com",
        "verificationEvidence": {
          "format": "w3c_vc",
          "credentialReference": "http://example.com"
        }
      }
    ],
    "name": "string"
  },
  "issuedTo": {
    "identifiers": [
      {
        "scheme": "http://example.com",
        "identiferValue": "string",
        "identifierURI": "http://example.com",
        "verificationEvidence": {
          "format": "w3c_vc",
          "credentialReference": "http://example.com"
        }
      }
    ],
    "name": "string"
  },
  "validFrom": "2019-08-24",
  "validTo": "2019-08-24",
  "status": "string",
  "assessments": [
    {
      "referenceStandard": {
        "id": "http://example.com",
        "name": "string",
        "issuingBody": {
          "identifiers": [
            {
              "scheme": "http://example.com",
              "identiferValue": "string",
              "identifierURI": "http://example.com",
              "verificationEvidence": {
                "format": "w3c_vc",
                "credentialReference": "http://example.com"
              }
            }
          ],
          "name": "string"
        },
        "issueDate": "2019-08-24"
      },
      "referenceRegulation": {
        "id": "http://example.com",
        "name": "string",
        "issuingBody": {
          "identifiers": [
            {
              "scheme": "http://example.com",
              "identiferValue": "string",
              "identifierURI": "http://example.com",
              "verificationEvidence": {
                "format": "w3c_vc",
                "credentialReference": "http://example.com"
              }
            }
          ],
          "name": "string"
        },
        "effectiveDate": "2019-08-24"
      },
      "assessmentCriterion": {
        "id": "http://example.com",
        "threshold": [
          {
            "name": "string",
            "value": {
              "value": 0,
              "unit": "string"
            },
            "minimumValue": {
              "value": 0,
              "unit": "string"
            },
            "maximumValue": {
              "value": 0,
              "unit": "string"
            }
          }
        ],
        "name": "string"
      },
      "subjectProducts": [
        {
          "identifiers": [
            {
              "scheme": "http://example.com",
              "identiferValue": "string",
              "identifierURI": "http://example.com",
              "verificationEvidence": {
                "format": "w3c_vc",
                "credentialReference": "http://example.com"
              }
            }
          ],
          "marking": "string",
          "name": "string",
          "classifications": [
            {
              "scheme": "http://example.com",
              "classifierValue": "string",
              "classifierName": "string",
              "classifierURL": "http://example.com"
            }
          ],
          "testedBatchId": "http://example.com",
          "verfifiedByCAB": true
        }
      ],
      "subjectFacilities": [
        {
          "identifiers": [
            {
              "scheme": "http://example.com",
              "identiferValue": "string",
              "identifierURI": "http://example.com",
              "verificationEvidence": {
                "format": "w3c_vc",
                "credentialReference": "http://example.com"
              }
            }
          ],
          "name": "string",
          "classifications": [
            {
              "scheme": "http://example.com",
              "classifierValue": "string",
              "classifierName": "string",
              "classifierURL": "http://example.com"
            }
          ],
          "geolocation": "http://example.com",
          "verfifiedByCAB": true
        }
      ],
      "measuredResults": [
        {
          "name": "string",
          "value": {
            "value": 0,
            "unit": "string"
          },
          "minimumValue": {
            "value": 0,
            "unit": "string"
          },
          "maximumValue": {
            "value": 0,
            "unit": "string"
          }
        }
      ],
      "compliance": true,
      "sustainabilityTopic": "environment.energy"
    }
  ],
  "evidence": {
    "evidenceRootHash": "string",
    "description": "string",
    "evidenceData": [
      {
        "fileHash": "string",
        "fileLocation": "http://example.com",
        "fileType": "string",
        "EncryptionMethod": "none"
      }
    ],
    "decryptionKeyRequest": "http://example.com"
  },
  "accreditation": {
    "number": "string",
    "authorityEvidence": {
      "format": "w3c_vc",
      "credentialReference": "http://example.com"
    },
    "trustmark": {
      "fileHash": "string",
      "fileLocation": "http://example.com",
      "fileType": "string",
      "EncryptionMethod": "none"
    },
    "authority": {
      "identifiers": [
        {
          "scheme": "http://example.com",
          "identiferValue": "string",
          "identifierURI": "http://example.com",
          "verificationEvidence": {
            "format": "w3c_vc",
            "credentialReference": "http://example.com"
          }
        }
      ],
      "name": "string"
    }
  },
  "regulatoryApproval": {
    "number": "string",
    "authorityEvidence": {
      "format": "w3c_vc",
      "credentialReference": "http://example.com"
    },
    "trustmark": {
      "fileHash": "string",
      "fileLocation": "http://example.com",
      "fileType": "string",
      "EncryptionMethod": "none"
    },
    "authority": {
      "identifiers": [
        {
          "scheme": "http://example.com",
          "identiferValue": "string",
          "identifierURI": "http://example.com",
          "verificationEvidence": {
            "format": "w3c_vc",
            "credentialReference": "http://example.com"
          }
        }
      ],
      "name": "string"
    }
  },
  "certificate": {
    "fileHash": "string",
    "fileLocation": "http://example.com",
    "fileType": "string",
    "EncryptionMethod": "none"
  }
}
```







