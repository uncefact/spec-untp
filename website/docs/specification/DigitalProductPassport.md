---
sidebar_position: 5
title: Digital Product Passport
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Artifacts 

Are maintained at https://test.uncefact.org/vocabulary/untp/dpp/0/about 

### Stable Releases For Implementation

Version 1.0 stable release for production implementation is due Jan 2025

### Release for Pilot Testing

Version 0.5.0 release artifacts can be used for pilot testing.  

* [JSON-LD @context](https://test.uncefact.org/vocabulary/untp/dpp/0.5.0/)
* [JSON Schema](https://test.uncefact.org/vocabulary/untp/dpp/untp-dpp-schema-0.5.0.json)
* [Sample JSON Instance](https://test.uncefact.org/vocabulary/untp/dpp/untp-dpp-instance-0.5.0.json)

### Latest Development Version

Latest development versions are used to reflect lessons learned from pilots but should not be used for either pilot testing or production purposes. 

### Version History

History of releases is available from the **[Version history](https://test.uncefact.org/vocabulary/untp/dpp/0/versions)** page.


### Default Render Template

A UNTP digital product passport may be rendered in any format desired by the issuer. However a default **[Template Design](../../samples/DigitalProductPassportRender.png)** is provided here and includes mapping of visual rendering elements to the [Logical Data Model](#logical-model).

### Sample Credential

|URL|QR|Description|
|--|--|--|
|[Sample Digital Battery Passport](https://untp.showthething.com/verify/?q=%7B%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Funtp-verifiable-credentials.s3.amazonaws.com%2Fbc075c5f-2304-4b3f-bb24-46d9fa9a8e60.json%22%7D%7D)|![Battery Passport Example](untp-dpp-demo.png)|A sample digital product passport as a JWT envelope signed Verifiable Credential. The URL (or QR scan) resolved to a hosted verifier that displays a human readable version. Raw JSON data can be viewed via the `JSON` tab and the full credential can be dlownloaded via the download button.|


## Overview

The digital product passport (DPP) is issued by the shipper of goods and is the carrier of **product and sustainability information** for every serialised product item (or product batch) that is shipped between actors in the value chain. It is deliberately **simple and lightweight** and is designed to carry the minimum necessary data at the **granularity** needed by the receiver of goods - such as the scope 3 emissions in a product shipment. The passport contains links to **conformity credentials** which add trust to the ESG claims in the passport. The passport also contains links to **traceability events** which provide the "glue" to follow the linked-data trail (subject to confidentiality constraints) from finished product back to raw materials. The UNTP DPP does not conflict with national regulations such as the EU DPP. In fact, it can usefully be conceptualised as the **upstream B2B feedstock** that provides the data and evidence needed for the issuing of high quality national level product passports.

## Conceptual Model

![Digital Product passport conceptual model](DigitalProductPassport.png)

## Requirements

The digital product passport is designed to meet the following detailed requirements as well as the more general [UNTP Requirements(https://uncefact.github.io/spec-untp/docs/about/Requirements)]

| ID | Name  | Requirement Statement   | Solution Mapping  |
| ------ | ---- | --------- | ---------- |
| DPP-01 | Granularity | The DPP should support use at either *model* level or at *batch* level or at serialised *item* level.  | Claims are made at the passport level, which MUST have a related model and MAY have a related batch and item   |
| DPP-02 | Classification       | The DPP should support any number of product classifications using codes from a defined classification scheme (eg UN-CPC) | The classifications property |
| DPP-03 | Materials provenance | The DPP should provide a simple structure to allow issuers to break down the material composition of their products by mass fraction and origin country so that raw material provenance requirements are easily assessed and met.    | The DPP "materialsProvenance" structure is designed to meet this need. |
| DPP-04 | Produced at | The DPP should provide a simple structure to describe the manufacturing facility at which the product was made. The facility identifier SHOULD be resolvable and verifiable and SHOULD link to cadastral boundary information. | The "Facility" structure including the location class is designed to meet this need |
| DPP-05 | Dimensions  | The DPP must support the definition of key product dimensions such as length, width, height, weight, volume so that conformity claims made at the unit level (eg Co2 intensity in Kg/Kg) can be used to calculate actual values for the shipped product  | Dimensions class  |
| DPP-06 | Traceability | The DPP should provide a means to follow links to further DPPs and conformity credentials of constituent products so that (subject to confidentiality constraints), provenance claims can be verified to any arbitrary depth up to primary production | The links to ISO/IEC 19987 (EPCIS)-based traceability event credentials from the productBatch class is designed to meet this need  |
| DPP-07 | characteristics   | The DPP should allow an issuer to provide descriptive information about the product (image, description, etc) that is extensible to meet industry specific needs.   | Characteristics property as an industry extension point  |
| DPP-08 | Verifiable Party     | The DPP should provide DPP issuer, product manufacturer, and facility operator identification including a name, a resolvable and verifiable identifier, and proof of ownership of the identifier  | DigitalProductPassport.Issuer Product.ProducedByParty, Product.ProducedAtFacility - all are uniquely identified objects and SHOULD have related resolvable [Identity Resolver](IdentityResolver.md) credentials|
| DPP-09 | Claims  | The DPP MUST provide a means to include any number of conformity claims within one DPP so that it can provide simple single point to aggregate all claims about the product in one place  | The "conformityClaims" array is designed to meet this need  |
| DPP-10 | Conformity Topic | The DPP MUST provide a simple mechanism to express the sustainability/circularity/conformity topic for each claim so that similar claims can be grouped and the high level scope easily understood.    | The ConformityTopic code list is designed to meet this need|
| DPP-11 | Metrics  | The DPP MUST provide a simple mechanism to quantify a conformity claim (eg carbon intensity, water consumption, etc) and to express any accuracy range and also to compare the claimed value to a relevant benchmark such as a standard/regulation requirement or an industry average   | The "Metric" class is designed to meet this need  |
| DPP-12 | Criteria  | The DPP MUST provide a means to reference a standard or regulation as well as the specific criteria within that standard or regulation - so that claims can be understood in terms of the criteria against which they are made. | Claim.referenceRegulation, Claim.referenceStandard, Claim.referenceCriterion|
| DPP-13 | Evidence  | The DPP MUST provide a means to reference independent conformity assessments that support and verify the claims being made. The related evidence SHOULD be digitally verifiable but MAY be a simple document or web page. The confidence level attached to the evidence should be clear. | The Claim.conformityEvidence property references a relevant digital conformity credential   |

## Logical Model

The Digital Product Passport is an assembly of re-usable components from the UNTP core vocabulary. 

![Digital Product Passport data model](DigitalProductPassport.svg)

### Core Vocabulary Documentation

The [UNTP core types vocabulary](https://jargon.sh/user/unece/untp-core/v/0.5.0/artefacts/readme/render) defines the uniquely identified Linked Data entities such as Product, Location, Facility, Party, Standard, Regulation, Criteria, Declaration, Attestation, Endorsement. These entities provide the building blocks for construction of Digital Product Passports and Digital Conformity Credentials.


### DPP Documentation

The [DPP documentation](https://jargon.sh/user/unece/DigitalProductPassport/v/0.5.0/artefacts/readme/render) provides a technology-neutral definition of classes, properties and code lists in the DPP model.

## Implementation Guidance

This section provides sample JSON-LD snippets for each DPP component.

### Verifiable Credential

All DPPs are issued as W3C Verifiable Credentials and MUST conform to the [VCDM 2.0](https://www.w3.org/TR/vc-data-model-2.0/). Also note that all identified objects (ie those with an "id" property also have a "type" property that indicates the Linked Data type of the object. The "type" values must be defined in the associated JSON-LD @context file. Key points to note from the VC sample below are

* That the credential type is both a W3C "VerifiableCredential" and a UNTP "DigitalProductPassport". The DPP is an extension of the VCDM. 
* That the "@context" reference similarly lists both the W3C VCDM context URL and the UNTP DPP context URL.
* The "id" is any globally unique reference for this specific DPP credential - typically a domain/UUID pattern.
* The issuer property, unlike most VC examples, is an object with multiple properties. 
  * The object conforms to the UNTP "CredentialIssuer" type.
  * The id SHOULD be a DID and, if it is a DID then it MUST be a did:web.
  * The name property provides a human readable name of the issuer.
  * The array of "otherIdentifiers" is used to provide references to authoritative business identifiers for the issuer.  In the example shown the issuer is also identified as an Australian Business with an ABN and link to the authoritative business register entry.
* The validFrom and ValidTo fields are as defined in the W3C VCDM. They are optional but UNTP DPPs SHOULD include a validFrom date representing the date that the DPP was issued.
* The credential subject carries the bulk of the digital product passport information. It's type is both a UNTP "Entity" and a UNTP "Product".  

```json
{
  "type": [
    "DigitalProductPassport",
    "VerifiableCredential"
  ],
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://test.uncefact.org/vocabulary/untp/dpp/0.3.10/"
  ],
  "id": "https://example-company.com/credentials/2a423366-a0d6-4855-ba65-2e0c926d09b0",
  "issuer": {
    "type": [
      "CredentialIssuer"
    ],
    "id": "did:web:identifiers.example-company.com:12345",
    "name": "Example Company Pty Ltd",
    "otherIdentifier": [
      {
        "type": [
          "Identifier"
        ],
        "id": "https://business.gov.au/ABN/View?abn=1234567890",
        "name": "Sample Company Pty Ltd",
        "registeredId": "1234567890",
        "idScheme": {
          "type": [
            "IdentifierScheme"
          ],
          "id": "https://business.gov.au/ABN/",
          "name": "Australian Business Number"
        }
      }
    ]
  },
  "validFrom": 2024,
  "validUntil": 2034,
  "credentialSubject": {
    "type": [
      "Product",
      "Entity"
    ],
    "id": "https://id.gs1.org/01/09520123456788/21/12345",
    ... remainder of product passport information goes here ...

```

### Product

The Product object is the the subject of the verifiable credential. Key points to note from the product snippet below are

* That the product identification comprises five properties that identify both the specific product and the identifier scheme as defined by the UNTP Entity core type. The expectation is that the product ID in the DPP will match the information printed on the physical product or its container (for bulk goods) and that the identifier is a [resolvable and verifiable ID](IdentityResolver.md). So, scanning a physical product QR code (or resolving its 1D barcode) should return a link type that is a pointer to the DPP described by the specification. 
* DPPs may be issued at product class level (i.e. all shoes of the same model) or at the individual item level (ie this specific serialised pair of shoes). `serialNumber` and/or `batchNumber` MUST be provided if the DPP is issued at item level.
* The `productImage` is expected to be an instance of the UNTP `Link` object that provides linkURL and metadata.
* `productCategory` is expected to be an array of UNTP `Classification` objects that classify the product using a global scheme such as [UN CPC](https://unstats.un.org/unsd/classifications/Econ/cpc). Industry-specific classification schemes (eg cattle breed) may also be used.
* `furtherInformation` is an array of UNTP `Link` types that optionally provide links to additional information such as material safety data sheets etc. The `linkType` values should match the linkTypes returned by an [Identity Resolver](IdentityResolver.md) service for the same product ID.
* `producedByParty` is a UNTP `Entity` type that identifies the producer or manufacturer of the product. 
* `producedAtFacility` is a UNTP `Entity` type that identifies the manufacturing site or farm or mine site where the product was produced. 
* The `dimensions` object defines the `length`, `width`, `height`, `weight`, `volume` dimensions of the product. Implementers should choose the relevant dimensions to include for the product. 
* The `productionDate` is relevant for batch or serialised items and should indicate the date that the specific batch or item was produced.
* The `countryOfProduction` property must carry the ISO-3166 two letter country code for the country where the product was manufactured.  Note that this represents only the country of manufacture for the identified product. The provenance of materials used to make the product are defined separately. 
* The `characteristics` property provides an extension point for commodity-specific properties such as battery capacity in AmpHours or shirt size.  UNTP does not define values for this property but does provide guidance for [industry extensions](../extensions/index.md).
* `granularityLevel` indicates whether this digital product passport is issued at product class level, batch level, or serialised item level.
* `dueDiligenceDclaration` is a link to a due diligence declaration that meets the legal requirement of the importing economy.
* `materialsProvenance` is an array of UNTP `Material` types that define the origin and characteristics of constituent materials in the product.
* `conformityClaims` is an array of `Claim` types that list the product quality or sustainability claims made by the manufacturer against criteria defined by a reference standard or regulation. The [sustainability vocabulary](SustainabilityVocabularyCatalog.md) is designed to accommodate the very diverse set of conformity criteria expressed by various standards and regulations.
* `circularityScorecard` is a simple object that defines the overall percentage of recycled content (and recyclable content) as well as links to recycling and repair information.
* `emissionsScorecard` is a simple object that defines the carbon footptint of the product against a defined reporting standard, the scope 3 boundaries, and the extent to which the data is accruately measured.
* `traceabilityInformation` is an array of `Link` objects that reference UNTP [Digital Traceability Events](DigitalTraceabilityEvents.md). This provides traceability through the value chain via events such as the TransformationEvent that lists the input product identifiers and the output product identifiers for a manufacturing process.  


```json
"credentialSubject": {
   "type": [
      "Entity",
      "Product"
      ],
  "id": "id.example.com/01/09520123456788/10/6789/21/12345",
  "name": "Baked beans, tinned, 500g.",
  "idValue": "09520123.456788",
  "idScheme": "ref.gs1.org/ai/",
  "idSchemeName": "GS1 SGTIN",

  "serialNumber": "12345",
  "batchNumber": "6789",
  "productImage": {},
  "description": "Big and tender Great Northern Beans in tasty tomato sauce. These beans are rich in fiber and low in fat. Fiber rich food helps to maintain a healthier digestive system & reduces cholesterol.",
  "productCategory": [],
  "furtherInformation": [],
  "producedByParty": {},
  "producedAtFacility": {},
  "dimensions": {},
  "productionDate": "2024-04-25",
  "countryOfProduction": "AU",
  "granularityLevel":"batch",
  "dueDiligenceDeclaration":{ },
  "characteristics": { },
  "materialsProvenance": [],
  "conformityClaim": [],
  "circularityScoreCard": {},
  "emissionsScorecard" : {},
  "traceabilityInformation": []
```


### Dimensions

The `dimension` type is a simple array of decimal values for length, width, height, weight, and volume. Units MUST be drawn from [UNECE recommendation 20 units of measure](https://vocabulary.uncefact.org/UnitMeasureCode)

```json
"dimensions": {
  "length": {"value": 0.87,"unit": "MTR"},
  "width": {"value": 0.5,"unit": "MTR"},
  "height": {"value": 0.3,"unit": "MTR"},
  "weight": {"value": 8, "unit": "KGM"},
  "volume": {"value": 7.5,"unit": "LTR"}
```

### Materials Provenance

An array of `Material` objects is used to describe the constituent materials in a product and to define some key properties of each material

* A human readable `name`
* The `originCountry` as a 2-letter ISO-3166 code.
* The material type as a UNTP `Classification` object. The relevant classification scheme to use depends on the commodity type of the products but, unless otherwise stated the material CAS number together with a URI to a relevant registry entry (eg https://chem.echa.europa.eu/100.028.325) 
* The `massFraction` is the percentage by mass of the product that is made from this constituent material.
* The `recycledAmount` is the percentage by mass of this material constituent that is made from recycled sources.
* The `hazardous` flag is a boolean that indicates whether this material constituent is a hazardous material
* If the hazardous flag is `true` then a `Link` object should provide `materialSafetyInformation`.

```json
"materialsProvenance": [
  {
  "name": "Egyptian Cotton",
  "originCountry": "EG",
  "materialType": {},
  "massFraction": 50,
  "massAmount":{"value":10,"unit":"KGM"}
  "recycledAmount": 50,
  "hazardous": "false",
  "materialSafetyInformation": {}
}
```

### Emissions Scorecard

The Emissions scorecard provides an overall GHG emissions performance indicator for the product. More detailed emissions performance data measured against specific criteria and standards would be placed into the `conformityInformation` structure.

* The carbonFootprint represents GHG emissions intensity CO2eq for the product.
* The declared unit defines the product unit per KG Co2Eq (usually KGM)
* the operational scope represents the scope 3 boundary - which should be cradle to gate for DPPs (ie does not include post sale footprint)
* the primarySourcedRatio indicates the proportion of scope 3 emissions data that is directly sources (rather than estimated)

```json
    "emissionsScorecard": {
      "carbonFootprint": 1.5,
      "declaredUnit": "KGM",
      "operationalScope": "Scope123toGate",
      "primarySourcedRatio": 0.3,
      "reportingStandard": {
        "type": [
          "Standard"
        ],
        "id": "hhttps://www.wbcsd.org/resources/pathfinder-framework-version-2-0/",
        "name": "WBSCD Pathfinder framework - V.2.0",
        },
        "issueDate": 2023
      }
    },
```

### Circularity Scorecard

The circularity Scorecard provides a simple high level summary of circularity performance of the product. This summary may be further supported by detailed information and evidence in one or more `Declarations` within the `conformityInformation` data. 

* `recyclingInformation` provides a `Link` to recycling instructions. Primarily targeted at recycling centers.
* `repairInformation` provides a link to repair instructions. Primarily targeted at end users or repair service centers.
* `recyclableContent` is a percentage indicating the proportion by mass of the product that is designed to be recycled.
* `recycledContent` is a percentage indicating the proportion by mass of the product that is made from recycled materials
* `utiltiyFactor` provides a measure of durability of the product above or below industry average
* `materialCircularityIndicator` provides an overall circularity score which is a function of all three of the above measures [MCI reference](https://www.ellenmacarthurfoundation.org/material-circularity-indicator)

```json
    "circularityScorecard": {
      "recyclingInformation": {
        "linkURL": "https://files.example-company.com/products/123456789/recycling.pdf",
        "linkName": "Recycling instructions",
        "linkType": "https://www.gs1.org/voc/recyclingAndRepairInfo"
      },
      "repairInformation": {
        "linkURL": "https://files.example-company.com/products/123456789/repair.pdf",
        "linkName": "Repair instructions",
        "linkType": "https://www.gs1.org/voc/recyclingAndRepairInfo"
      },
      "recyclableContent": 0.5,
      "recyecledContent": 0.3,
      "utilityFactor": 1.2,
      "materialCircularityIndicator": 0.67
    },
```

### Traceability Information

Traceability Information is an array of TraceabilityPerformance objects which are designed to group traceability data according to value chain process. Each value chain step SHOULD specify the extent to which materials and compon ents in that step have been verifiably traced. An array of links (with context information) to UNTP Digital Traceability Event (DTE) structures by also be provided.

```json
 "traceabilityInformation":[
    {"valueChainProcess":"Cell Manufacture",
     "verifiedRatio":0.5,
     "traceabilityEvent":[
      {
        "linkURL": "https://files.sampleCompany.com/events/123456789.json",
        "linkName": "Battery Assembly Event",
        "linkType": "https://test.uncefact.org/vocabulary/linkTypes/dte",
        "hashDigest": "50af99a26f4af48c9f4ad8cf9d2f5018780ab4bb1167f0e94884ec228f1ba832",
        "hashMethod": "SHA-256",
        "encryptionMethod": "AES"
      }]
   }]
  
```

### Conformity Information

Conformity information is included in the DPP as an array of UNTP `Declaration` structures. The same structure is re-used for third party assessments in UNTP Digital Conformity Credentials (DCC).  Please refer to the [Sustainability Vocabulary Page](SustainabilityVocabularyCatalog.md) for further information and examples.


