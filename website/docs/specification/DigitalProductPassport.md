---
sidebar_position: 5
title: Digital Product Passport
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Versions

| DPP Version | Date | status  | Change summary | JSON-LD Context  | JSON Schema  |
| ------ | ----- | ------ | ------ | ------| ---|
| 0.3.0      | 01-07-2024 | Raw |refactored to buuild on untp-core  |[@context](https://test.uncefact.org/vocabulary/untp/dpp/dpp-context.jsonld) | [Schema](../../schema/digitalProductPassport.v0.3.0.JSONSchema.json)|


## Overview

The digital product passport (DPP) is issued by the shipper of goods and is the carrier of **product and sustainability information** for every serialised product item (or product batch) that is shipped between actors in the value chain. It is deliberately **simple and lightweight** and is designed to carry the minimum necessary data at the **granularity** needed by the receiver of goods - such as the scope 3 emissions in a product shipment. The passport contains links to **conformity credentials** which add trust to the ESG claims in the passport. The passport also contains links to **traceability events** which provide the "glue" to follow the linked-data trail (subject to confidentiality constraints) from finished product back to raw materials. The UNTP DPP does not conflict with national regulations such as the EU DPP. In fact, it can usefully be conceptualised as the **upstream B2B feedstock** that provides the data and evidence needed for the issuing of high quality national level product passports.

## Conceptual Model

![Digital Product passport conceptual model](DigitalProductPassport.png)

## Requirements

The digital product passport is designed to meet the following detailed requirements as well as the more general [UNTP Requirements(https://uncefact.github.io/spec-untp/docs/about/Requirements)]

| ID | Name  | Requirement Statement   | Solution Mapping  |
| ------ | ---- | --------- | ---------- |
| DPP-01 | product, batch, item | The DPP should support use at either product level or at batch level or at individual serialised item level.  | Claims are made at the passport level, which MUST have a related product and MAY have a related batch and item   |
| DPP-02 | Classification       | The DPP should support any number of product classifications using codes from a defined classificaton scheme (eg UN-CPC) | The classifications property |
| DPP-03 | Materials provenance | The DPP should provide a simple structure to allow issuers to breakdown the material composition of their products by mass fraction and origin country so that raw material provenance requirements are easily assessed and met.    | The DPP "materialsProvenance" structure is designed to meet this need. |
| DPP-04 | Produced at | The DPP should provide a simple structure to describe the manufacturing facility at which the product was made. The facility identifier SHOULD be resolvable and verifiable and SHOULD link to cadastral boundary information. | The "Facility" structure incliding the location class is designed to meet this need |
| DPP-05 | Dimensions  | The DPP must support the definision of key product dimensions such as length, width, height, weight, volume so that conformity claims made at the unit level (eg Co2 intensity in Kg/Kg) can be used to calculate actual values for the shipped product  | Dimensions class  |
| DPP-06 | Traceability | The DPP should provide a means to follow links to further DPPs and conformity credentials of constituent products so that (subject to confidentiality constraints), prevenance claims can be verified to any arbitrary depth upt o primary production | The links to EPCIS traceability event credentials from the productBatch class is designed to meet this need  |
| DPP-07 | characteristics   | The DPP should allow issuer to provide descriptive information about the product (image, description, etc) that is extensible to meet industry specific needs.   | Characteristics property as an industry extnesion point  |
| DPP-08 | Verifiable Party     | The DPP should provide DPP issuer, product manufacturer, and facility operator identification inclding a name, a resolvable and verifiable identifier, and proof of ownership of the identifier  | DigitalProductPassport.Issuer Product.ProducedByParty, Product.ProducedAtFacility - all are uniquely identified objects and SHOUL have related resolvable [Digital Identity Anchor](DigitalIdentityAnchor.md) credentials|
| DPP-09 | Claims  | The DPP MUST provide a means to include any number of conformity claims within one DPP so that it can provide simple single point to aggregate all claims about the product in one place  | The "conformityClaims" array is designed to meet this need  |
| DPP-10 | Conformity Topic | The DPP MUST provide a simple mechanism to express the sustainability/circularity/conformity topic for each claim so that similar claims can be grouped and the high level scope easily understood.    | The ConformityTopic code list is designed to meet this need|
| DPP-11 | Metrics  | The DPP MUST provide a simple mechanism to quantify a conformity claims (eg carbin intensity, water consumption, etc) and to express any accuracy range and also to compare the claimed value to a relevant benchmark such as a standard/regulation requirement or an industry average   | The "Metric" class is designed to meet this need  |
| DPP-12 | Criteria  | The DPP MUST provide a means to reference a standard or regulation as well as the specific criteria within that standard or regulation - so that claims can be understood inter terms of the criteria against which they are made. | Claim.referenceRegulation, Claim.referenceStandard, Claim.referenceCriterion|
| DPP-13 | Evidence  | The DPP MUST provide a means to reference independent conformity assessments that support and verify the claims being made. The related evidence SHOULD be digitally verifiable but MAY be a simple document or web page. The confidenc elevel attached ot the evidence should be clear. | The Claim.conformityEvidence property references a relevant digital conformity credential   |

## Logical Model

![Digital Product Passport data model](DigitalProductPassport.svg)

## Data Definitions

### Core Types

The [UNTP core types vocabulary](https://test.uncefact.org/vocabulary/untp/core/about) defines the uniquely identified linked data entities such as Product, Locaiton, Facility, Party, Standard, Regulation, Criteria, Declaration, Attestation, Endorsement. These entities provide the buuilding blocks for construction of Digital Product Passports and Digital Conformity Credentials.


### DPP Classes

[Digital Product Passport Classes](https://jargon.sh/user/unece/DigitalProductPassport/v/0.3.0/artefacts/readme/render#data-definitions-of-unece-digitalproductpassport)


### DPP Code Tables

[Digital Product Passport Code Tables](https://jargon.sh/user/unece/DigitalProductPassport/v/0.3.0/artefacts/readme/render#code-tables-of-unece-digitalproductpassport)

## Sample

Note - this sample describes the digital product passport payload only - ie the subject of the verifiable credetial without the envelope. Needs some more realistic data.

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://test.uncefact.org/vocabulary/untp/untp-v1"
  ],
  "type": [
    "VerifiableCredential",
    "UNTPDigitalProductPassportCredential"
  ],
  "credentialSchema": {
    "type": "JsonSchema",
    "id": "https://uncefact.github.io/spec-untp/docs/specification/DigitalProductPassport"
  },
  "id": "urn:untp:e5adbeg6-2n1s-4669-bd54-321d903re998",
  "issuer": {
    "type": ["Organization"],
    "id": "did:web:zerowave.example.com",
    "name": "Zero Wave Riding Co."
  },
  "validFrom": "2023-06-22T10:00:00.000Z",
  "credentialSubject": {
    "type": ["UNTPDigitalProductPassport"],
    "product": {
      "type": ["Product"],
      "id": "https://shop.zerowave.example.com/cruizer",
      "batchIdentifiers": [
        "http://zerowave.example.com/01/09520123456788/10/ABC123"
      ],
      "itemIdentifiers": [
        "http://zerowave.example.com/01/09520123456788/21/12345",
        "http://zerowave.example.com/01/09520123456788/21/12346"
      ],
      "modelName": "Cruizer",
      "image": "https://shop.zerowave.example.com/media/cruizer.jpg",
      "description": "12kW, 3.6 kWh self-propulsion surfboard",
      "classifications": "eSurf",
      "furtherInformation": "https://shop.zerowave.example.com/cruizer",
      "manufacturedDate": "2024-05-08",
      "dimensions": {
        "type": "Dimensions",
        "weight": {
          "value": 15.9,
          "unit": "kg"
        },
        "length": {
          "value": 169,
          "unit": "cm"
        },
        "width": {
          "value": 65.5,
          "unit": "cm"
        }
      },
      "manufacturer": {
        "type": "Organization",
        "id": "did:web:hitech-assembly.example.com",
        "name": "Hitech Assembly, Inc.",
        "location": "Manufacturered in the EU"
      },
      "materialsProvenance": [
        {
          "type": "MaterialProvenance",
          "originCountry": "EU",
          "materialType": "EPP",
          "massFraction": 0.6,
          "recycled": true,
          "hazardous": false
        }
      ],
      "conformityClaims": [
        {
          "type": "LinkRole",
          "target": "https://supplier.example.com/material/reuse-certificate",
          "linkRelationship": "untpConformity"
        },
        {
          "type": "LinkRole",
          "target": "https://supplier.example.com/manufacturing/carbon-emissions-certificate",
          "linkRelationship": "untpConformity"
        }
      ],
      "recyclingInstructions": "http://brand-owner.example.com/nordic-pioneer/recycling",
      "traceabilityInformation": [
        {
          "type": "UNTPAggregationEvent",
          "id": "http://manufacturer.example.com/293847293847"
        }
      ]
    },
    "guaranteeOfOriginCredential": "https://supplier.example.com/manufacturing/certificate-of-origin"
  }
}
```

## Schema

```yaml
title: UNTP Digital Product Passport Credential
description: The digital product passport (DPP) is issued by the shipper of goods and is the carrier of product and sustainability information for every serialised product item (or product batch) that is shipped between actors in the value chain. It is deliberately simple and lightweight and is designed to carry the minimum necessary data at the granularity needed by the receiver of goods - such as the scope 3 emissions in a product shipment. The passport contains links to conformity credentials which add trust to the ESG claims in the passport. The passport also contains links to traceability events which provide the "glue" to follow the linked-data trail (subject to confidentiality constraints) from finished product back to raw materials. The UNTP DPP does not conflict with national regulations such as the EU DPP. In fact, it can usefully be conceptualised as the upstream B2B feedstock that provides the data and evidence needed for the issuing of high quality national level product passports.
type: object
properties:
  '@context':
    type: array
    readOnly: true
    const:
      - https://www.w3.org/ns/credentials/v2
      - https://test.uncefact.org/vocabulary/untp/untp-v1
    default:
      - https://www.w3.org/ns/credentials/v2
      - https://test.uncefact.org/vocabulary/untp/untp-v1
    items:
      type: string
      enum:
        - https://www.w3.org/ns/credentials/v2
        - https://test.uncefact.org/vocabulary/untp/untp-v1
  type:
    type: array
    readOnly: true
    const:
      - VerifiableCredential
      - UNTPDigitalProductPassportCredential
    default:
      - VerifiableCredential
      - UNTPDigitalProductPassportCredential
    items:
      type: string
      enum:
        - VerifiableCredential
        - UNTPDigitalProductPassportCredential
  id:
    type: string
    format: uri
  credentialSchema:
    type: object
    properties:
      id:
        title: Schema URL
        description: The url of the schema file to validate the shape of the json object
        type: string
        format: uri
        const: https://uncefact.github.io/spec-untp/docs/specification/DigitalProductPassport
      type:
        title: Type
        description: The type of validation to be run against the defined schema
        const: JsonSchema
    additionalProperties: false
    required:
      - type
      - id
  validFrom:
    type: string
    format: date-time
  validTo:
    type: string
    format: date-time
  issuer:
    title: Issuer Organization
    type: object
    properties:
      type:
        type: array
        readOnly: true
        const:
          - Organization
        default:
          - Organization
        items:
          type: string
          enum:
            - Organization
      id:
        title: Issuer's Identifier
        description: Issuing organization identifier, typically a Decentralized Identifier (DID).
        type: string
      name:
        title: Name
        description: Issuing organization name.
        type: string
      street:
        title: Street
        description: The street address expressed as free form text. The street address is printed on paper as the first lines below the name. For example, the name of the street and the number in the street, or the name of a building.
        type: string
      locality:
        title: Locality
        description: The locality in which the street address is, and which is in the region; for example, a city or town.
        type: string
      region:
        title: State
        description: Text specifying a province or state in abbreviated format; for example, NJ.
        type: string
      postalCode:
        title: Postal Code
        description: Text specifying the postal code for an address.
        type: string
      country:
        title: Country
        description: The two-letter ISO 3166-1 alpha-2 country code.
        type: string
    additionalProperties: false
    required:
      - type
      - id
      - name
  credentialSubject:
    type: object
    properties:
      type:
        type: array
        readOnly: true
        const:
          - UNTPDigitalProductPassport
        default:
          - UNTPDigitalProductPassport
        items:
          type: string
          enum:
            - UNTPDigitalProductPassport
      product:
        title: Product
        type: object
        properties:
          type:
            type: array
            readOnly: true
            const:
              - Product
            default:
              - Product
            items:
              type: string
              enum:
                - Product
          modelName:
            title: Model Name
            description: Model name of the product.
            type: string
      guaranteeOfOriginCredential:
        title: Guarantee of Origin Credential
        type: string
        format: uri
    required:
      - type
required:
  - '@context'
  - type
  - credentialSchema
  - validFrom
  - issuer
  - credentialSubject
```

## Examples from pilot projects

| Project | DPP Version | Description       | Credential                                                                      | Rendered View                                                                                                                                                                                                                                                   |
| ------- | ----------- | ----------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AATP    | 0.1.0       | Packaged Meat DPP | [sample DPP VC](../../samples/au-agriculture/vc-dpp-0.1.0-au-meat-product.json) | [DPP VC Viewer](https://web.agtrace.showthething.com/verify?q=%7B%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fagtrace-processor-verifiable-credentials.s3.ap-southeast-2.amazonaws.com%2F9359502000041%2Fde0ff0c2-cec8-4cca-aa84-fac75c75103c.json%22%7D%7D) |
