---
sidebar_position: 5
title: Digital Product Passport
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Versions

| DPP Version | Date | status  | Change summary | JSON-LD Context  | JSON Schema  |
| ------ | ----- | ------ | ------ | ------| ---|
| 0.3.0      | 01-07-2024 | Raw |refactored to buuild on untp-core  |[@context](https://test.uncefact.org/vocabulary/untp/dpp/dpp-context.jsonld) | [Schema](../../schema/DPP_v0.3.0_schema.json)|
| 0.3.1 | 25-07-2024| Draft | bug fixes and sample values added|[@context](../../schema/DPP_v0.3.1_context.jsonld) |[Schema](../../schema/DPP_v0.3.1_schema.json)|


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

The Digital Product Passport is an assembly of re-usable components from the UNTP core vocabulary. 

![Digital Product Passport data model](DigitalProductPassport.svg)

### Core Vocabulary Documentation

The [UNTP core types vocabulary](https://jargon.sh/user/unece/untp-core/v/0.3.1/artefacts/readme/render) defines the uniquely identified linked data entities such as Product, Locaiton, Facility, Party, Standard, Regulation, Criteria, Declaration, Attestation, Endorsement. These entities provide the building blocks for construction of Digital Product Passports and Digital Conformity Credentials.


### DPP Documentation

The [DPP documentation](https://jargon.sh/user/unece/DigitalProductPassport/v/0.3.1/artefacts/readme/render) provides a technology neutral definition of classes, properties and code lists in the DPP model.

## Implementation Guidance

This section provides sample JSON snippets for each DPP component.

### Verifiable Credential

All DPPs are issued as W3C verifiable credentials and MUST conform to the [VCDM 2.0](https://www.w3.org/TR/vc-data-model-2.0/). Also note that all identified objects (ie those with an "id" property also have a "type" property that indicates the linked data type of the object. The "type" values must be defined in the assocated JSON-LD @context file. Key points to note from the VC sample below are

* That the credential type is both a W3C "VerifiableCredential" and a UNTP "DigitalProductPassport". The DPP is an extension of the VCDM. 
* That the "@context" reference similarly lists both the W3C VCDM context URL and the UNTP DPP context URL.
* The "id" is any globally unique reference for this specific DPP credemntial - typically a domain/UUID pattern.
* The issuer property, unlike most VC examples, is an object with multiple properties. 
  * The object conforms to the UNTP "CredentialIssuer" type.
  * The id SHOULD be a DID and, if it is a DID then it MUST be a did:web.
  * The name property provides a human readable name of the issuer.
  * The array of "otherIdentifiers" is used to provide references to authoritatave business identifiers for the issuer.  In the example shown the issuer is also identified as an Australian Business with an ABN and link to the authoritative business register entry.
* The validFrom and ValidTo fields are as defined in the W3C VCDM. They are optional but UNTP DPPs SHOULD include a validFrom date representing the date that the DPP was issued.
* The credential subject carries the bulk of the digital product passport information. It's type is both a UNTP "Entity" and a UNTP "Product".  

```json
{
"type": [
    "VerifiableCredential",
    "DigitalProductPassport",
    ],
"@context":[
    "https://www.w3.org/ns/credentials/v2",
    "https://test.uncefact.org/vocabulary/untp/dpp/dpp-context.jsonld"
    ],
"id": "acme.com/credentials/2a423366-a0d6-4855-ba65-2e0c926d09b0",
"issuer": {
   "type": "CredentialIssuer",
   "id": "did:web:identifiers.acme.com:12345",
   "name": "ACME industries",
   "otherIdentifiers": [{
      "type": "Entity",
      "id": "https://abr.business.gov.au/ABN/View?abn=90664869327",
      "name": "ACME Pty Ltd",
      "idValue": "90664869327",
      "idScheme": "abr.business.gov.au",
      "idSchemeName": "Australian Business Number"}
    ]},
"validFrom": "2024.03.15",
"validUntil": "2034.03.15",
"credentialSubject": {
   "type": [
      "Entity",
      "Product"
      ],
    ... remainder of product passport information goes here ...

```

### Product

The Product object is the the subject of the verifiable credential. Key points to note from the product snippet below are

* That the product identification comprises five properties that identify both the specific product and the identier scheme as defined by the UNTP Entity core type. The expectation is that the product ID in the DPP will match the information printed on the physical product or it's container (for bulk goods) and that the identifier is a [resolvable and verifiable ID](IdentityResolver.md). So, scanning a physical product QR code (or resolving its 1D barcode) should return a link type that is a pointer to the DPP described by the specification. 
* DPPs may be issued at product class level (ie all shoes of the same model) or at the individual item level (ie this specific serialised pair of shoes). `serialNumber` and/or `batchNumber` MUST be provided if the DPP is issued at item level.
* The `productImage` is expected to be an instance of the UNTP `Link` object that provides linkURL and meta-data.
* `productCategory` is expected to be an array of UNTP `Classification` ojects that classify the product using a global scheme such as [UN CPC](https://unstats.un.org/unsd/classifications/Econ/cpc). Industry specific classification schemes (eg cattle breed) may also be used.
* `furtherInformation` is an array of UNTP `Link` types that optionally provide links to additonal information such as material safety data sheets etc. The `linkType` values should match the linkTypes returned by an [Identity Resolver](IdentityResolver.md) service for the same product ID.
* `producedByParty` is a UNTP `Entity` type that identifies the producer or manufacturer of the product.  
* `producedAtFacility` is a UNTP `Entity` type that identifies the manufacturing site or farm or mine site where the product was produced. 
* The `dimensions` object defines the `length`, `width`, `height`, `weight`, `volume` dimensions of the product. Impelmenters should choose the relevant dimensions to include for the product. 
* The `productionDate` is relevant for batch or serilaised items and should indicate the date that the specific batch or item was produced.
* The `countryOfProduction` property must carry the ISO-3166 two letter country code for the country where the product was manufactured.  Note that this represents only the country of manufacure for the identified product. The provenance of materials used to make the product are defined seaprately. 
* The `characteristics` property provides an extension point for commodity specific propertise such as battery capacity in AmpHours or shirt size.  UNTP does not define values for this property but does provide guidance for [industry exensions](../extensions/index.md).
* `materialsProvenance` is an array of UNTP `Material` types that define the origin and characteristics of constituent materials in the product.
* `conformityInformation` is an array of `Claim` types that list the product quality or sustainability claims made by the manufacturer against criteria defined by a reference standard or regulation. The [sustainability vocabulary](SustainabilityVocabularyCatalog.md) is designed to accomodate the very diverse set of conformity criteria expressed by various standards and regulations.
* `circulatiryInformation` is a simple object that defines the overall percentage of recycled content (and recyclable content) as well as links to recycling and repair information.
* `traceabilityInformation` is an array of `Link` object that reference UNTP [Digital Traceability Events](DigitalTraceabilityEvents.md). This provides the trhaceability through the value chain via events such as the TransformationEvent that lists the input product identifiers and the output product identifiers for a manufacturing process.  


```json
"credentialSubject": {
   "type": [
      "Entity",
      "Product"
      ],
  "id": "id.gs1.org/01/09520123456788/21/12345",
  "name": "Baked beans, tinned, 500g.",
  "idValue": "09520123.456788",
  "idScheme": "id.gs1.org/01.",
  "idSchemeName": "GS1 SGTIN",

  "serialNumber": "12345",
  "batchNumber": "6789",
  "productImage": {},
  "description": "Big and tender Great Northen Beans in tasty tomato sauce. These beans are rich in fiber and low in fat. Fiber rich food helps to maintain a healthier digestive system & reduces cholesterol.",
  "productCategory": [],
  "furtherInformation": [],
  "producedByParty": {},
  "producedAtFacility": {},
  "dimensions": {},
  "productionDate": "2024.04.25",
  "countryOfProduction": "AU",
  "characteristics": { },
  "materialsProvenance": [],
  "conformityInformation": [],
  "circularityInformation": {},
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

An arraye of `Material` objects is used to describe the constituent materials in a product and to define some key properties of each material

* A human readable `name`
* The `originCountry` as a 2-letter ISO-3166 code.
* The material type as a UNTP `Calssification` object. The relevant classification scheme to use depends on the commodity type of the products.  For example batteries may use the emerging [UNFC](https://unece.org/sustainable-energy/sustainable-resource-management/united-nations-framework-classification)
* The `massFraction` is the percentage by mass of the product that is made from this constituent material.
* The `recycledAmount` is the percentage by mass of this material constituent that is made from recycled sources.
* The `hazardous` flag is a boolean that indicates whether this material constituent is a hazardouns material
* If the hazardous flag is `true` then a `Link` object should provide `materialSafetyInformation`.

```json
"materialsProvenance": [
  {
  "name": "Egyptian Cotton",
  "originCountry": "EG",
  "materialType": {},
  "massFraction": 50,
  "recycledAmount": 50,
  "hazardous": "false",
  "materialSafetyInformation": {}
}
```

### Conformity Information

The conformity Information structure in the DPP is an array of UNTP `Declaration` types that carry product conformity or sustainability claims made by the manufacturer. The key properties are

* The `id` which must be globally unique and may be either a UUID or a URI in the DPP issuers domain.
* The `referenceStandard` against which the conformity claims are made. This is a UNTP `Standard` object
* The `referenceRegulation` against which the conformity claioms are made. In most cases a conformity claim will reference either a `Standard` or a `Regulation` but in some circumstances both will apply.
* The `assessmentCritieron` is an array of UNTP `Criteria` objects that define the specific rule(s) within the standard or regulation against which this conformity claim is made.
* The `thresholdValues` are an array of UNTP `Mertic` objects that define the minimum or maximum values that are required to be met.  For example, a construction steel standard migh specify 300 MPa as the minimum tensile strenth threshold.
* The `declaredValues` property defines the actual specified values for the DPP product. For example, a minimum tensile strength of 350 Mpa within a 5% confidence range. In many cases this may be sensitive data and can be replaced by a simple `compliance` assertion.
* The `compliance` boolean is a declaration by the product manufacturer that the product meets the conformity criteria specified.
* The `conformityTopic` is a high level UNTP classification scheme for safety and environmental and social sustanability. 
* `benchamrkValue` (eg 10 Tons per Ton carbon intensity) is used in cases where a `declaredValue`(eg 5 Tons per Ton) is usefully compared to an industry average performance (benchmark) value.  When a `benchmarkValue` is provided, a `benchmarkReference` link MUST also be provided and should provide a link to an authoritative reference to support the benchamrk value.
* `conformityEvidence` is a `Link` to a second or third party attestation such as a UNTP [Digital Conformity Credential](ConformityCredential.md) that provides independent verification of the claims made. Note that this property may also link to a PDF or a website or some other format of conformity evidence.


```json
"conformityInformation": [
{
  "type": ["Declaration"],
  "id": "products.acme.com/09520123456788/declarations/12345",
  "referenceStandard": {
    "type": "Standard",
    "id": "www.iso.org/standard/60857.html",
    "name": "ISO 14001:2015 Environmental management systems",
    "issuingParty": {},
    "issueDate": "2015-09-01"
},
  "referenceRegulation": {},

  "assessmentCriterion": [
    {
    "type": "Criteria",
    "id": "https://www.legislation.gov.au/F2008L02309/2023-09-21/2023-09-21/text/1/epub/OEBPS/document_1/document_1.html#_Toc147580632",
    "name": "Division 2.4.2—Method 1—emissions of carbon dioxide, methane and nitrous oxide from liquid fuels other than petroleum",

  "thresholdValues": [{
      "metricName": "minimum tensile strength",
      "metricValue": {"value": 300,"unit": "MPA"}}
]}],
  "declaredValues": [{
     "metricName": "minimum tensile strength",
     "metricValue": {"value": 350,"unit": "MPA"},
     "accuracy": 0.05
}],
  "compliance": "true",

  "conformityTopic": "environment.energy",

  "benchmarkValue": {
     "metricName": "tensile strength",
     "metricValue": {"value": 10,"unit": "string"},
     "accuracy": 0.05
},
  "benchmarkReference": "http://example.com",
  "conformityEvidence": {
    "type": "Link",
    "linkURL": "files.certifier.com/1234567.json",
    "linkName": "Deforestation Certificate",
    "linkType": "untp.dcc",
    "targetType": "string"
}}
```

### Circularity

The circularityInformation property provides a simple high level summary of circularity perfromance of the product. This summary may be further supported by detailed information and evidence in one or more `Declarations` within the `conformityInformation` data. 

* `recyclingInformation` provides a `Link` to recycling isntructions. Primarily targeted at recycling centres.
* `repairInformation` provides a link to repair instructions. Primarily targeted at end users or repair service centres.
* `recyclableContent` is a percentage indicating the proportion by mass of the product that is designed to be recycled.
* `recycledContent` is a percentage indicating the proportion by mass of the product that is made from recycled materials

```json
"circularityInformation": {
  "recyclingInformation":{
     "type": "Link",
     "linkURL": "acme.com/products/12345/recyclingInfo.html",
     "linkName": "Recycling instructions",
     "linkType": "gs1:sustainabilityInfo",
     "targetType": "application/pdf"
  } ,
  "repairInformation": {},
  "recyclableContent": 50,
  "recyecledContent": 50
},
```


## Examples from pilot projects

| Project | DPP Version | Description       | Credential                                                                      | Rendered View                                                                                                                                                                                                                                                   |
| ------- | ----------- | ----------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AATP    | 0.1.0       | Packaged Meat DPP | [sample DPP VC](../../samples/au-agriculture/vc-dpp-0.1.0-au-meat-product.json) | [DPP VC Viewer](https://web.agtrace.showthething.com/verify?q=%7B%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fagtrace-processor-verifiable-credentials.s3.ap-southeast-2.amazonaws.com%2F9359502000041%2Fde0ff0c2-cec8-4cca-aa84-fac75c75103c.json%22%7D%7D) |
