---
sidebar_position: 5
title: Digital Product Passport
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Artifacts 

Are maintained at https://test.uncefact.org/vocabulary/untp/dpp/0/about 

### Stable Releases For Implementation

Version 1.0 stable release for production implementation is due in June 2025 after formal public review 

### Release for Pilot Testing

Version 0.6.0 release artifacts can be used for pilot testing.  

* [JSON-LD @context](https://test.uncefact.org/vocabulary/untp/dpp/0.6.0/)
* [JSON Schema](https://test.uncefact.org/vocabulary/untp/dpp/untp-dpp-schema-0.6.0.json)
* [Sample JSON Instance](https://test.uncefact.org/vocabulary/untp/dpp/untp-dpp-instance-0.6.0.json)

### Latest Development Version

Latest development versions are used to reflect lessons learned from pilots but should not be used for either pilot testing or production purposes. 

### Ontology
The ontology for the Digital Product Passport is available in JSON-LD format and can be retrieved via content negotiation from:

[https://test.uncefact.org/vocabulary/untp/dpp/0/](https://test.uncefact.org/vocabulary/untp/dpp/0/)

  Example:
  ```bash
  curl https://test.uncefact.org/vocabulary/untp/dpp/0/ -H 'Accept: application/ld+json'
  ```

### Version History

History of releases is available from the **[Version history](https://test.uncefact.org/vocabulary/untp/dpp/0/versions)** page.


### Default Render Template

A UNTP digital product passport may be rendered in any format desired by the issuer. However a default **[Template Design](../assets/images/DigitalProductPassportRender.png)** is provided here and includes mapping of visual rendering elements to the [Logical Data Model](#logical-model).

### Sample Credential

|URL|QR|Description|
|--|--|--|
|[Sample Digital Battery Passport](https://untp.showthething.com/verify/?q=%7B%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Funtp-verifiable-credentials.s3.amazonaws.com%2Fbc075c5f-2304-4b3f-bb24-46d9fa9a8e60.json%22%7D%7D)|![Battery Passport Example](untp-dpp-demo.png)|A sample digital product passport as a JWT envelope signed Verifiable Credential. The URL (or QR scan) resolved to a hosted verifier that displays a human readable version. Raw JSON data can be viewed via the `JSON` tab and the full credential can be downloaded via the download button.|


## Overview

The digital product passport (DPP) is issued by the shipper of goods and is the carrier of **product and sustainability information** for every serialised product item (or product batch) that is shipped between actors in the value chain. It is deliberately **simple and lightweight** and is designed to carry the minimum necessary data at the **granularity** needed by the receiver of goods - such as the scope 3 emissions in a product shipment. The passport contains links to **conformity credentials** which add trust to the ESG claims in the passport. The passport also contains links to **traceability events** which provide the "glue" to follow the linked-data trail (subject to confidentiality constraints) from finished product back to raw materials. The UNTP DPP does not conflict with national regulations such as the EU DPP. In fact, it can usefully be conceptualised as the **upstream B2B feedstock** that provides the data and evidence needed for the issuing of high quality national level product passports.

## Conceptual Model

![Digital Product passport conceptual model](DigitalProductPassport.png)

## Requirements

The digital product passport is designed to meet the following detailed requirements as well as the more general [UNTP Requirements](https://uncefact.github.io/spec-untp/docs/about/Requirements).

| ID | Name  | Requirement Statement   | Solution Mapping  |
| ------ | ---- | --------- | ---------- |
| DPP-01 | Granularity | The DPP should support use at either *model* level or at *batch* level or at serialised *item* level.  | Claims are made at the passport level, which MUST have a related model and MAY have a related batch and item   |
| DPP-02 | Classification       | The DPP should support any number of product classifications using codes from a defined classification scheme (eg UN-CPC) | The productCategory property |
| DPP-03 | Materials provenance | The DPP should provide a simple structure to allow issuers to break down the material composition of their products by mass fraction and origin country so that raw material provenance requirements are easily assessed and met.    | The DPP "materialsProvenance" structure is designed to meet this need. |
| DPP-04 | Produced at | The DPP should provide a simple structure to describe the manufacturing facility at which the product was made. The facility identifier SHOULD be resolvable and verifiable and SHOULD link to cadastral boundary information. | The "Facility" structure including the location class is designed to meet this need |
| DPP-05 | Dimensions  | The DPP must support the definition of key product dimensions such as length, width, height, weight, volume so that conformity claims made at the unit level (eg Co2 intensity in Kg/Kg) can be used to calculate actual values for the shipped product  | Dimensions class  |
| DPP-06 | Traceability | The DPP should provide a means to follow links to further DPPs and conformity credentials of constituent products so that (subject to confidentiality constraints), provenance claims can be verified to any arbitrary depth up to primary production | The links to ISO/IEC 19987 (EPCIS)-based traceability event credentials from the TraceabilityPerformance class is designed to meet this need  |
| DPP-07 | Characteristics   | The DPP should allow an issuer to provide descriptive information about the product (image, description, etc) that is extensible to meet industry specific needs.   | Characteristics property as an industry extension point  |
| DPP-08 | Verifiable Party     | The DPP should provide DPP issuer, product manufacturer, and facility operator identification including a name, a resolvable and verifiable identifier, and proof of ownership of the identifier  | DigitalProductPassport.Issuer Product.ProducedByParty, Product.ProducedAtFacility - all are uniquely identified objects and SHOULD have related resolvable [Identity Resolver](IdentityResolver.md) credentials|
| DPP-09 | Claims  | The DPP MUST provide a means to include any number of conformity claims within one DPP so that it can provide simple single point to aggregate all claims about the product in one place  | The "conformityClaims" array is designed to meet this need  |
| DPP-10 | Conformity Topic | The DPP MUST provide a simple mechanism to express the sustainability/circularity/conformity topic for each claim so that similar claims can be grouped and the high level scope easily understood.    | The ConformityTopic code list is designed to meet this need|
| DPP-11 | Metrics  | The DPP MUST provide a simple mechanism to quantify a conformity claim (eg carbon intensity, water consumption, etc) and to express any accuracy range and also to compare the claimed value to a relevant benchmark such as a standard/regulation requirement or an industry average   | The "Metric" class is designed to meet this need  |
| DPP-12 | Criteria  | The DPP MUST provide a means to reference a standard or regulation as well as the specific criteria within that standard or regulation - so that claims can be understood in terms of the criteria against which they are made. | Claim.referenceRegulation, Claim.referenceStandard, Claim.assessmentCriteria|
| DPP-13 | Evidence  | The DPP MUST provide a means to reference independent conformity assessments that support and verify the claims being made. The related evidence SHOULD be digitally verifiable but MAY be a simple document or web page. The confidence level attached to the evidence should be clear. | The Claim.conformityEvidence property references a relevant digital conformity credential   |

## Logical Model

The Digital Product Passport is an assembly of re-usable components from the UNTP core vocabulary. 

![Digital Product Passport data model](DigitalProductPassport.svg)

### Core Vocabulary Documentation

The [UNTP core types vocabulary](https://jargon.sh/user/unece/untp-core/v/0.6.0/artefacts/readme/render) defines the uniquely identified Linked Data entities such as Product, Location, Facility, Party, Standard, Regulation, Criteria, Declaration, Attestation, Endorsement. These entities provide the building blocks for construction of Digital Product Passports and Digital Conformity Credentials.


### DPP Documentation

The [DPP documentation](https://jargon.sh/user/unece/DigitalProductPassport/v/0.6.0/artefacts/readme/render) provides a technology-neutral definition of classes, properties and code lists in the DPP model.

## Implementation Guidance

This section provides sample JSON-LD snippets for each DPP component.

### Verifiable Credential

All DPPs are issued as W3C Verifiable Credentials and MUST conform to the [VCDM 2.0](https://www.w3.org/TR/vc-data-model-2.0/). Also note that all identified objects (i.e. those with an "id" property) also have a "type" property that indicates the Linked Data type of the object. The "type" values must be defined in the associated [JSON-LD @context file](https://test.uncefact.org/vocabulary/untp/dpp/0.6.0/). Key points to note from the VC sample below are:

* That the credential type is both a W3C "VerifiableCredential" and a UNTP "DigitalProductPassport". The DPP is an extension of the VCDM. 
* That the "@context" reference similarly lists both the W3C VCDM context URL and the UNTP DPP context URL.
* The "id" is any globally unique reference for this specific DPP credential - typically a domain/UUID pattern.
* The issuer property, unlike most VC examples, is an object with multiple properties. 
  * The object conforms to the UNTP "CredentialIssuer" type.
  * The id SHOULD be a DID and, if it is a DID then it MUST be a did:web.
  * The name property provides a human readable name of the issuer.
  * The array of "issuerAlsoKnownAs" is used to provide references to authoritative business identifiers for the issuer.  In the example shown the issuer is also identified as an Australian Business with an ABN and link to the authoritative business register entry.
* The validFrom and validUntil fields are as defined in the W3C VCDM. They are optional but UNTP DPPs SHOULD include a validFrom date representing the date that the DPP was issued.
* The credential subject carries the bulk of the digital product passport information.

```json
{
  "type": [
    "DigitalProductPassport",
    "VerifiableCredential"
  ],
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://test.uncefact.org/vocabulary/untp/dpp/0.6.0/"
  ],
  "id": "https://example-company.com/credentials/2a423366-a0d6-4855-ba65-2e0c926d09b0",
  "issuer": {
    "type": [
      "CredentialIssuer"
    ],
    "id": "did:web:identifiers.example-company.com:12345",
    "name": "Example Company Pty Ltd",
    "issuerAlsoKnownAs": [
      {
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
  "validFrom": "2025-06-15T12:00:00Z",
  "validUntil": "2035-03-15T12:00:00Z",
  "credentialSubject": {
    "type": [
      "ProductPassport"
    ],
    "id": "https://example.com/id/9520123456788",
    ... remainder of product passport information goes here ...
  }
}

```

### Product Passport

The `ProductPassport` object is the subject of the verifiable credential in the UNTP Digital Product Passport (DPP). It encapsulates detailed information about a specific product, including its identification details, manufacturer, and various claims such as sustainability, circularity, and traceability. Key points to note about the `ProductPassport` object are:

- The `credentialSubject` is of type `ProductPassport`, which includes a `product` attribute that contains the core product information (see the [Product](#product) section below).
- `granularityLevel` indicates whether the DPP is issued at the product class level (e.g., all shoes of the same model), batch level, or serialised item level.
- `dueDiligenceDeclaration` is a link to a due diligence declaration that meets the legal requirements of the importing economy.
- `materialsProvenance` is an array of UNTP `Material` types that define the origin and characteristics of constituent materials in the product.
- `conformityClaims` is an array of `Claim` types that list the product quality or sustainability claims made by the manufacturer against criteria defined by a reference standard or regulation. The [sustainability vocabulary](SustainabilityVocabularyCatalog.md) accommodates diverse conformity criteria expressed by various standards and regulations.
- `circularityScorecard` is a simple object that defines the overall percentage of recycled content (and recyclable content) as well as links to recycling and repair information.
- `emissionsScorecard` defines the carbon footprint of the product against a defined reporting standard, the scope 3 boundaries, and the extent to which the data is accurately measured.
- `traceabilityInformation` is an array of `Link` objects that reference UNTP [Digital Traceability Events](DigitalTraceabilityEvents.md), providing traceability through the value chain via events such as the `TransformationEvent` that lists input and output product identifiers for a manufacturing process.

```json
"credentialSubject": {
  "type": ["ProductPassport"],
  "id": "example:product/1234",
  "product": {
    // See Product section below for details
  },
  "granularityLevel": "batch",
  "dueDiligenceDeclaration": {},
  "materialsProvenance": [],
  "conformityClaim": [],
  "circularityScorecard": {},
  "emissionsScorecard": {},
  "traceabilityInformation": []
}
```

### Product

The `Product` object is a core component of the `ProductPassport`, encapsulated within the `product` attribute of the `credentialSubject`. It defines detailed information about the specific product, including its identification, physical characteristics, and production details. Key points to note about the `Product` object are:

- The product identification comprises four properties that identify both the specific product and the identifier scheme, as defined by the UNTP `Product` type: `id` (a resolvable URI), `registeredId` (alphanumeric identifier), `idScheme` (the identifier scheme), and optionally `serialNumber` or `batchNumber`. The expectation is that the product `id` in the DPP will match the information printed on the physical product or its container (for bulk goods) and that the identifier is a [resolvable and verifiable ID](IdentityResolver.md). Scanning a physical product QR code (or resolving its 1D barcode) should return a link type that points to the DPP described by the specification.
- DPPs may be issued at the product class level (e.g., all shoes of the same model) or at the individual item level (e.g., a specific serialised pair of shoes). `serialNumber` and/or `batchNumber` MUST be provided if the DPP is issued at the item level.
- The `productImage` is an instance of the UNTP `Link` object that provides `linkURL`, `linkName`, and `linkType` for metadata.
- `productCategory` is an array of UNTP `Classification` objects that classify the product using a global scheme such as [UN CPC](https://unstats.un.org/unsd/classifications/Econ/cpc). Industry-specific classification schemes (e.g., cattle breed) may also be used.
- `furtherInformation` is an array of UNTP `Link` types that optionally provide links to additional information, such as material safety data sheets. The `linkType` values should match those returned by an [Identity Resolver](IdentityResolver.md) service for the same product ID.
- `producedByParty` is a UNTP `Entity` type that identifies the producer or manufacturer of the product, requiring `id` and `name`.
- `producedAtFacility` is a UNTP `Entity` type that identifies the manufacturing site, farm, or mine where the product was produced, requiring `id` and `name`.
- The `dimensions` object defines the `length`, `width`, `height`, `weight`, and `volume` of the product. Implementers should choose the relevant dimensions to include for the product.
- The `productionDate` is relevant for batch or serialised items and indicates the date the specific batch or item was produced.
- The `countryOfProduction` property must carry the ISO-3166 two-letter country code for the country where the product was manufactured. This represents only the country of manufacture for the identified product; the provenance of materials used is defined separately.
- The `characteristics` property provides an extension point for commodity-specific properties, such as battery capacity in AmpHours or nutritional information for food products. UNTP does not define values for this property but provides guidance for [industry extensions](../extensions/index.md).

```json
"product": {
  "type": ["Product"],
  "id": "https://example.com/id/9520123456788",
  "name": "Baked beans, tinned, 500g.",
  "registeredId": "9520123456788",
  "idScheme": {},
  "serialNumber": "12345",
  "batchNumber": "6789",
  "productImage": {},
  "description": "Big and tender Great Northern Beans in tasty tomato sauce. These beans are rich in fiber and low in fat. Fiber rich food helps to maintain a healthier digestive system & reduces cholesterol.",
  "productCategory": [],
  "furtherInformation": [],
  "producedByParty": {},
  "producedAtFacility": {},
  "dimensions": {},
  "productionDate": "2025-04-25",
  "countryOfProduction": "AU",
  "characteristics": {}
}
```

### Dimensions

The `Dimension` object specifies the physical measurements of a product, including `length`, `width`, `height`, `weight`, and `volume`, each represented as a decimal value paired with a unit of measure. Units MUST be drawn from [UNECE Recommendation 20 Units of Measure](https://vocabulary.uncefact.org/UnitMeasureCode).

```json
"dimensions": {
  "length": { "value": 0.87, "unit": "MTR" },
  "width": { "value": 0.5, "unit": "MTR" },
  "height": { "value": 0.3, "unit": "MTR" },
  "weight": { "value": 8, "unit": "KGM" },
  "volume": { "value": 7.5, "unit": "LTR" }
}
```

### Due Diligence Declaration

The `dueDiligenceDeclaration` property is a `Link` object that provides a URL to a due diligence declaration document, ensuring compliance with the regulations of the market into which the product is sold. Key properties of the `dueDiligenceDeclaration` include:

- The `linkURL` as a URI pointing to the due diligence declaration document.
- The `linkName` as a human-readable name describing the document.
- The `linkType` as a URI from a controlled vocabulary, indicating the type of link.

The `dueDiligenceDeclaration` SHOULD reference a document that meets the legal requirements of the importing economy.

```json
"dueDiligenceDeclaration": {
  "type": ["Link"],
  "linkURL": "https://example.com/due-diligence/123456789.pdf",
  "linkName": "Due Diligence Declaration for Baked Beans",
  "linkType": "https://test.uncefact.org/vocabulary/linkTypes/dcc"
}
```

### Materials Provenance

The `materialsProvenance` property is an array of `Material` objects that describe the constituent materials in a product, detailing their key properties. Each `Material` object includes:

- A human-readable `name` for the material (e.g., "Egyptian Cotton").
- The `originCountry` as a two-letter ISO-3166 country code (e.g., "EG").
- The `materialType` as a UNTP `Classification` object, specifying the material’s classification. The classification scheme depends on the product’s commodity type, but typically includes the material’s CAS number and a URI linking to a registry entry (e.g., `https://chem.echa.europa.eu/100.028.325`), unless otherwise specified.
- The `massFraction` as a decimal value representing the proportion of the product’s total mass contributed by this material (e.g., 0.5 for 50%).
- The `mass` as a `Measure` object, specifying the absolute mass of the material with a value and unit from [UNECE Recommendation 20 Units of Measure](https://vocabulary.uncefact.org/UnitMeasureCode).
- The `recycledMassFraction` as a decimal value indicating the proportion of this material derived from recycled sources (e.g., 0.5 for 50%).
- The `hazardous` boolean flag indicating whether the material is hazardous.
- The `materialSafetyInformation` as a `Link` object, required if `hazardous` is `true`, providing a URL to safety information (e.g., a material safety data sheet).
- The `symbol` as a base64-encoded binary string representing a visual symbol for the material, if applicable.

```json
"materialsProvenance": [
  {
    "type": ["Material"],
    "name": "Egyptian Cotton",
    "originCountry": "EG",
    "materialType": {
      "type": ["Classification"],
      "id": "https://unstats.un.org/unsd/classifications/Econ/cpc/26160",
      "code": "26160",
      "name": "Cotton, carded or combed",
      "schemeID": "https://unstats.un.org/unsd/classifications/Econ/cpc/",
      "schemeName": "UN Central Product Classification (CPC)"
    },
    "massFraction": 0.5,
    "mass": {
      "value": 10,
      "unit": "KGM"
    },
    "recycledMassFraction": 0.5,
    "hazardous": false,
    "materialSafetyInformation": {},
    "symbol": "RGVtb1N5bWJvbA=="
  }
]
```

### Emissions Scorecard

The `emissionsScorecard` provides a high-level summary of the product’s greenhouse gas (GHG) emissions performance, expressed as a carbon footprint. Detailed emissions data, measured against specific standards or criteria, should be included in the `conformityClaim` structure. Key properties of the `emissionsScorecard` include:

- The `carbonFootprint` as a numeric value representing the GHG emissions intensity of CO₂ equivalent (CO₂e) per declared unit.
- The `declaredUnit` as a code from [UNECE Recommendation 20 Units of Measure](https://vocabulary.uncefact.org/UnitMeasureCode), typically `KGM` (kilograms), defining the product unit for the carbon footprint calculation.
- The `operationalScope` indicating the scope 3 emissions boundary, which should be `CradleToGate` for DPPs (excluding post-sale emissions) or `CradleToGrave` for full lifecycle emissions.
- The `primarySourcedRatio` as a decimal value (0 to 1) representing the proportion of emissions data sourced directly from suppliers or product-specific measurements, rather than estimated from industry averages.
- The `reportingStandard` as a `Standard` object identifying the standard used for emissions assessment (e.g., GHG Protocol, WBSCD Pathfinder Framework), including its identifier, name, issuing party, and issue date.

```json
"emissionsScorecard": {
  "type": ["EmissionsPerformance"],
  "carbonFootprint": 1.5,
  "declaredUnit": "KGM",
  "operationalScope": "CradleToGate",
  "primarySourcedRatio": 0.3,
  "reportingStandard": {
    "type": ["Standard"],
    "id": "https://www.wbcsd.org/resources/pathfinder-framework-version-2-0/",
    "name": "WBSCD Pathfinder Framework - V.2.0",
    "issuingParty": {
      "id": "https://www.wbcsd.org/",
      "name": "World Business Council for Sustainable Development"
    },
    "issueDate": "2023-12-01"
  }
}
```

### Circularity Scorecard

The `circularityScorecard` provides a concise summary of the product’s circularity performance, highlighting its recyclability, recycled content, and durability. Detailed circularity data and evidence should be included in one or more `Claim` objects within the `conformityClaim` structure. Key properties of the `circularityScorecard` include:

- The `recyclingInformation` as a `Link` object providing a URL to recycling instructions, primarily for recycling centers.
- The `repairInformation` as a `Link` object providing a URL to repair instructions, targeted at end users or repair service centers.
- The `recyclableContent` as a decimal value (0 to 1) indicating the proportion of the product’s mass designed to be recyclable or reusable.
- The `recycledContent` as a decimal value (0 to 1) indicating the proportion of the product’s mass made from recycled or repurposed materials.
- The `utilityFactor` as a numeric value representing the product’s durability relative to the industry average, calculated as the product’s lifetime (e.g., usage cycles) divided by the industry average (e.g., 1.2 indicates 20% greater durability).
- The `materialCircularityIndicator` as a decimal value (0 to 1) providing an overall circularity score, calculated as `1 - (V + W) / (2 * D)`, where `V` is the virgin material proportion (1 - `recycledContent`), `W` is the waste leakage proportion (1 - `recyclableContent`), and `D` is the `utilityFactor`. See the [Material Circularity Indicator (MCI) reference](https://www.ellenmacarthurfoundation.org/material-circularity-indicator) for details.

```json
"circularityScorecard": {
  "type": ["CircularityPerformance"],
  "recyclingInformation": {
    "type": ["Link"],
    "linkURL": "https://example.com/products/123456789/recycling.pdf",
    "linkName": "Recycling Instructions",
    "linkType": "https://idr.untp.showthething.com/api/1.0.0/voc/sustainabilityInfo"
  },
  "repairInformation": {
    "type": ["Link"],
    "linkURL": "https://example.com/products/123456789/repair.pdf",
    "linkName": "Repair Instructions",
    "linkType": "https://idr.untp.showthething.com/api/1.0.0/voc/sustainabilityInfo"
  },
  "recyclableContent": 0.5,
  "recycledContent": 0.3,
  "utilityFactor": 1.2,
  "materialCircularityIndicator": 0.67
}
```

### Traceability Information

The `traceabilityInformation` property is an array of `TraceabilityPerformance` objects, each representing traceability data for a specific value chain process. These objects group traceability information by production or supply chain steps, indicating the extent of verifiable tracing for materials and components. Key properties of each `TraceabilityPerformance` object include:

- The `valueChainProcess` as a human-readable string describing the specific value chain step (e.g., "Canning").
- The `verifiedRatio` as a decimal value (0 to 1) indicating the proportion of materials or components in this step that have been verifiably traced using digital traceability events.
- The `traceabilityEvent` as an array of `SecureLink` objects, each providing a URL to a UNTP Digital Traceability Event (DTE) structure, along with metadata such as link name, type, hash digest, hash method, and encryption method (if applicable). These links reference events like transformations or shipments, as defined in [Digital Traceability Events](DigitalTraceabilityEvents.md).

Each value chain step SHOULD specify the `verifiedRatio` to reflect the traceability coverage, and MAY include `traceabilityEvent` links to provide evidence of traceability.

```json
"traceabilityInformation": [
  {
    "type": ["TraceabilityPerformance"],
    "valueChainProcess": "Canning",
    "verifiedRatio": 0.5,
    "traceabilityEvent": [
      {
        "type": ["SecureLink", "Link"],
        "linkURL": "https://example.com/events/123456789.json",
        "linkName": "Canning Process Event",
        "linkType": "https://test.uncefact.org/vocabulary/linkTypes/dte",
        "hashDigest": "50af99a26f4af48c9f4ad8cf9d2f5018780ab4bb1167f0e94884ec228f1ba832",
        "hashMethod": "SHA-256",
        "encryptionMethod": "AES"
      }
    ]
  }
]
```

### Conformity Information

A key idea in UNTP is that performance **claims** made in product passports and facility records SHOULD reference well defined criteria from a recognised scheme, standard, or regulation. Also that performance **assessments** made in conformity credentials MUST also reference well defined criteria. In this way, claims and assessments have unambiguous meaning as defined by the relevant scheme, standard or regulation. The `conformityClaim` structure of a DPP is described below.

- The `id` as a globally unique identifier, either a UUID or a URI within the DPP issuer’s domain.
- The `description` as a human-readable explanation of the claim’s purpose or scope (e.g., summarizing the emissions assessment for battery production).
- The `referenceStandard` as a UNTP `Standard` object identifying the standard against which the claim is made.
- The `referenceRegulation` as a UNTP `Regulation` object identifying the regulation against which the claim is made. Typically, a claim references either a `Standard` or a `Regulation`, but both may apply in some cases.
- The `assessmentCriteria` as an array of UNTP `Criterion` objects specifying the rules within the standard or regulation against which the claim is evaluated.
- The `declaredValue` as an array of UNTP `Metric` objects defining the product’s actual measured values, optionally including accuracy. If sensitive, this may be replaced by a `conformance` assertion.
- The `conformance` as a boolean indicating whether the product meets the specified criteria.
- The `conformityTopic` as a code from a UNTP classification scheme, categorizing the claim (e.g., environmental sustainability).
- The `assessmentDate` as a date when the claim was assessed.
- The `conformityEvidence` as a `SecureLink` object providing a URL to a second or third party attestation, such as a UNTP [Digital Conformity Credential](ConformityCredential.md), PDF, or other evidence format.

```json
"conformityClaim": [
  {
    "type": ["Claim", "Declaration"],
    "id": "https://example.com/declarations/90664869327",
    "description": "Declaration of greenhouse gas emissions intensity for battery production, conforming to the GBA Rulebook V.2.0.",
    "referenceStandard": {
      "type": ["Standard"],
      "id": "https://www.globalbattery.org/media/publications/gba-rulebook-v2.0-master.pdf",
      "name": "GBA Battery Passport Greenhouse Gas Rulebook - V.2.0",
      "issuingParty": {
        "id": "https://www.globalbattery.org/",
        "name": "Global Battery Alliance"
      },
      "issueDate": "2023-12-01"
    },
    "assessmentCriteria": [
      {
        "type": ["Criterion"],
        "id": "https://www.globalbattery.org/GHGRulebook/2.0/GHG_Calculation",
        "name": "GHG Calculation",
        "description": "Calculation of greenhouse gas emissions for product packaging process",
        "conformityTopic": "environment.emissions",
        "status": "active"
      }
    ],
    "declaredValue": [
      {
        "type": ["Metric"],
        "metricName": "GHG Emissions Intensity",
        "metricValue": {
          "type": ["Measure"],
          "value": 1.5,
          "unit": "KGM"
        },
        "accuracy": 0.05
      }
    ],
    "conformance": true,
    "conformityTopic": "environment.emissions",
    "assessmentDate": "2024-03-15",
    "conformityEvidence": {
      "type": ["SecureLink", "Link"],
      "linkURL": "https://example.com/certificates/1234567.json",
      "linkName": "GBA Rulebook Conformity Certificate",
      "linkType": "https://test.uncefact.org/vocabulary/linkTypes/dcc",
      "hashDigest": "6239119dda5bd4c8a6ffb832fe16feaa5c27b7dba154d24c53d4470a2c69adc2",
      "hashMethod": "SHA-256",
      "encryptionMethod": "none"
    }
  }
]
```

### Referencing Conformity Criterion

Conformity **claims** in DPPs SHOULD unambiguously reference a **criterion** in a relevant scheme, standard, or regulation using a URI. For example the`"id": "https://www.globalbattery.org/GHGRulebook/2.0/GHG_Calculation"` property in the example above is an example of a URI that references which rulebook an emissions intensity claim is made. Issuers of Digital product Passports (and Facility Records and Conformity Credentials) therefore need a way to find the the right criterion URI to put in their claims and assessments. This is the purpose of the UNTP [Sustainability Vocabulary Catalog](SustainabilityVocabularyCatalog.md). 


