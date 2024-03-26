---
sidebar_position: 5
title: Digitial Product Passport
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Overview

The digital product passport (DPP) is issued by the shipper of goods and is the carrier of **product and sustainability information** for every serialised product item (or product batch) that is shipped between actors in the value chain. It is deliberately **simple and lightweight** and is designed to carry the minimum necessary data at the **granularity** needed by the receiver of goods - such as the scope 3 emissions in a product shipment. The passport contains links to **conformity credentials** which add trust to the ESG claims in the passport. The passport also contains links to **traceability events** which provide the "glue" to follow the linked-data trail (subject to confidentiality constraints) from finished product back to raw materials. The UNTP DPP does not conflict with national regulations such as the EU DPP. In fact, it can usefully be conceptualised as the **upstream B2B feedstock** that provides the data and evidence needed for the issuing of high quality national level product passports.

## Conceptual Model

![Digital Product passport conceptual model](DigitalProductPassport.png)

## Requirements

The digital product passport is designed to meet the following detailed requirements as well as the more general [UNTP Requirements(https://uncefact.github.io/spec-untp/docs/about/Requirements)]

|ID|Name|Requirement Statement|Solution Mapping|
|--|--|--|--|
|DPP-01|SKU or batch|The DPP should support use at either product level (ie SKU - Stock Keeping Unit identifiers) or at batch level or at individual serialised item level. |Claims are made at the passport level, which MUST have a related product (SKU) and MAY have a related batch|
|DPP-02|Made in|The DPP should provide a simple structure to allow issuers to breakdown key value chain steps and assign them each a value fraction and country - so that domestic manufacure thresholds are easily assessed and met.|The DPP "processingProvenance" structure is designed to meet this need.|
|DPP-03|Materials from|The DPP should provide a simple structure to allow issuers to breakdown the material composition of their products by mass fraction and origin country so that raw material provenance requirements are easily assessed and met.|The DPP "materialsProvenance" structure is designed to meet this need.|
|DPP-04|Manufactured at|The DPP should provide a simple structure to describe the manufacturing facility at which the product was made. The facility identifier SHOULD be resolvable and verifiable and SHOULD link to cadastral boundary information.|The "Facility" structure incliding the locationEvidence credential property is designed to meet this need|
|DPP-05|Batch|The DPP should allow issuers to identify specific manufacturing batch and individual product serial numbers in passports because this provides the maximum confidence in traceability & transparnency information|The "ProductBatch" class meets this need and allows both batch (array of) individual serial identifiers.|
|DPP-06|Traceability|The DPP should provide a means to follow links to further DPPs and conformity credentials of constituent products so that (subject to confidentiality constraints), prevenance claims can be verified to any arbitrary depth upt o primary production|The links to EPCIS traceability event credentials from the productBatch class is designed to meet this need|
|DPP-07|Product Info|The DPP should allow issuer to provide basic (but xtensible) product informatin including a product identifier linked to ownership evidence (anti-counterfeiting), product description, image, classification, and dimensions.|The "ProductInformation" class is designed to meet this need.|
|DPP-08|Verifiable Party|The DPP should provide DPP issuer, product manufacturer, and facility operator identification inclding a name, a resolvable and verifiable identifier, and proof of ownership of the identifier|The Party structure inclding the 'identityEvidence" credential link meets this need|
|DPP-09|Claims|The DPP MUST provide a means to include any number of conformity claims within one DPP so that it can provide simple single point to aggregate all claims about the product in one place|The "conformityClaims" array is designed to meet this need|
|DPP-10|Conformity Topic|The DPP MUST provide a simple mechanism to express the sustainability/circularity/conformity topic for each claim so that similar claims can be grouped and the high level scope easily understood.|The ConformityTopic code list is designed to meet this need|
|DPP-11|Metrics|The DPP MUST provide a simple mechanism to quantify a conformity claims (eg carbin intensity, water consumption, etc) and to express any accuracy range and also to compare the claimed value to a relevant benchmark such as a standard/regulation requirement or an industry average|The "Metric" class is designed to meet this need|
|DPP-12|Criteria|The DPP MUST provide a means to refernece a standard or regulation as well as the specific criteria within that standard or regulation - so that claims can be understood inter terms of the criteria against which they are made.|The standardorRegulation property points to the standard document and the "criteria" property points to the specific rule or clause within that standard or regulation.|
|DPP-13|Evidence|The DPP MUST provide a means to reference independent conformity assessments that support and verify the claims being made. The related evidence SHOULD be digitally verifiable but MAY be a simple document or web page. The confidenc elevel attached ot the evidence should be clear.|The "Evidence" class is designed to meet this need, together with the evidence type and assirance lvel code lists.|
|DPP-14|Mass balance|Where the conformity evidence is not at the same granularity as the product that is the subject of the DPP (for example a facility level emissions certificate) then the DPP should allow the issuer to optionally attach evidence of the correct allocation to the individual product.|The massBalanceEvidence property of the Claim is designed to meet this need|


## Logical Model 


![Digital Product Passport data model](DigitalProductPassport.svg)


## Data Definitions

### VerifiableCredential

> A cryptographically verifiable set of claims about a product.

Property | Definition | Type
--- | --- | ---
id | A unique identifier assigned to the credential, typically formatted as a URI of the stored credential. | URI
type | The credential type - should be set to "UNDigitalProductPassport" | Text
issuer | A unique identifier of the entity that issued the credential. Typically expressed as a DID. | URI
validFrom | The ISO-8601 date time from which the credential is valid. | DateTime
credentialSubject | The ProductPassport object that the credential pertains to. | [ProductPassport](#productpassport)
credentialStatus | The status of the product passport | Text


### ProductPassport

> The ProductPassport is a comprehensive data structure that encapsulates various details pertaining to a product, including its identification details, who issued it, batch information, and different scores relating to sustainability and trustworthiness.

Property | Definition | Type
--- | --- | ---
id | A unique identifier (URI) assigned to the product passport. | URI
issuedBy | The Party that issued the product passport. | [Party](#party)
product | Detailed information about the product encapsulated in a ProductInformation object. | [ProductInformation](#productinformation)
manufacturedAt | The Facility where the product batch was manufactured. | [Facility](#facility)
batch | Information regarding the specific batch the product belongs to, encapsulated in a ProductBatch object. | [ProductBatch](#productbatch)
processingProvenance | An array of provenance objects indicating the lifecycle process steps for this product including the country where the process was performed and the value fraction of the process.  | [Process](#process)
materialsProvenance | An array of Provenance objects providing details on the origin and mass fraction of components or ingredients of the product batch. | [Material](#material)
conformityInformation | An array of claim objects representing various product conformity claims about the product / batch.  These can be sustainability claims, circularity claims, or any other claim type within the conformity topic list. | [Claim](#claim)
guaranteeOfOriginCredential | A conformity credential issued by a trusted authority that confirms some or all of the claims made in this product passport | URI
trustScore | An aggregate numeric metric that represents the level of trustworthiness associated with the product. This score is derived based on the credibility and reliability of the issuing bodies that substantiate the claims being made about the product. The calculation rules are defined in the UNTP trust graph specification. | Numeric
sustainabilityScore | An aggregate numeric metric calculated based on the various sustainability claims vs benchmarks associated with the product. It amalgamates scores assigned to individual sustainability claims, which are validated by various issuing bodies. The score provides a comprehensive view of the product's overall sustainability performance, giving users a quantifiable measure of the product's environmental and social impacts. | Numeric


### Party

> The Party class represents an entity such as an organization, or a company that manufactured the product.

Property | Definition | Type
--- | --- | ---
id | A unique identifier (URI) assigned to the organization or company. (Link Resolver - GS1 company prefix?) | URI
name | The name of the organization or company, represented as a text string. | Text
identityEvidence | A credential that can be used to verify that the party that is identified as the passport issuer or product manufacturer or facility operator is who they say they are. Typically issued by a business registration authority such as government regulator.  | [Evidence](#evidence)


### Facility

> The Facility class embodies information about a specific facility, which manufactured the product.

Property | Definition | Type
--- | --- | ---
id | A unique identifier (URI) assigned to the facility. (Link Resolver - GS1 GLN?) | URI
name | The name of the facility, represented as a text string. | Text
location |  | URI
operatedBy | The Party entity responsible for operating the facility. | [Party](#party)
locationEvidence | A credential that can be used to verify that the issuer of the product passport is the genuine operator of the facility and that its geographic location is within the region specified by the location code. Typically issued by the location registration authority such as a state government. | [Evidence](#evidence)


### ProductInformation

> The ProductInformation class encapsulates detailed information regarding a specific product, including its identification details, manufacturer, and other pertinent details.

Property | Definition | Type
--- | --- | ---
id | A unique identifier (URI) assigned to the product. expressed as a URI following ISO-18975 link resolver standard. | URI
model | The model name or number of the product, represented as text. | Text
productClass | A code representing the product's class, typically using the UN CPC (United Nations Central Product Classification) https://unstats.un.org/unsd/classifications/Econ/cpc | Code (uncpc)
image | A unique identifier (URI) pointing to an image of the product. | URI
description | A textual description providing details about the product. | Text
furtherInformation | A URL pointing to further human readable information about the product. | URI
recyclingInstructions | A URI pointing to information regarding the recycling aspects of the product. | URI
manufacturer | The Party entity that manufactured the product. | [Party](#party)
ownershipEvidence | A credential that can be used to verify that the issuer of the product passport is the genuine brand owner / manufacturer of the referenced product SKU. Typically issued by the product identifier registry operator (eg GS1 for GTINs). | [Evidence](#evidence)


### ProductBatch

> The ProductBatch class holds information related to a specific batch of products, including manufacturing details, sustainability claims and provenance information.

Property | Definition | Type
--- | --- | ---
id | A unique identifier (URI) assigned to the product batch or serialised item (for batches of one item). expressed as a URI following ISO-18975 link resolver standard. | URI
serialNumber | The serial number(s) of the product or products in the batch, represented as text. | Text
manufacturedDate | The ISO 8601 date on which the product batch was manufactured. | Date
traceabilityInfo | An array of TraceabilityEvent objects detailing EPCIS events related to the traceability of the product batch. | [TraceabilityEvent](#traceabilityevent)


### Claim

> The SustainabilityClaim class represents specific claims regarding the sustainability of a product, providing details about the metrics, thresholds, and evidences supporting the claim.

Property | Definition | Type
--- | --- | ---
topic | A code representing the topic of the sustainability claim. E.g. environment.deforestation, environment.ghg-emission-intensity, etc..  Drawn from a standard code list.   | Code (conformityTopic)
standardOrRegulation | The standard or regulation against which this conformity claim is made. Expressed as a URI and should match a value in the UN catalogue of reference vocabularies.  | URI
criteriaReference | A URI pointing to the regulation or standard governing the claim. | URI
conformityEvidence | A URI pointing to the evidence supporting the claim. Most likely in the form of a verifiable credential. | [Evidence](#evidence)
massBalanceEvidence | When the conformity credential evidence is not at product granularity (eg facility or entity level emissions) then a mass balance credential should be provided that attests to the fair allocation to the product. For example the total emissions associated with all product shipments from a given facility in a year should approximately match the reported annual emissions of that facility. | [Evidence](#evidence)
claimedValue | One or more actual measures supporting the claim. For example for GHG emissions there may be a metric for total emissions intensity and also a metric for amount of offsets included. | [Metric](#metric)
accuracy | A percentage represented as a numeric between 0 and 1 indicating the rage of accuracy of the claimed value (eg 0.05 means that the actual value is within 5% of the claimed value.) | Numeric
benchmarkValue | A benchmark value against which the claimed value can be assessed. THis could be a value specified by a standard or regulation or could be an industry benchmark. | [Metric](#metric)
benchmarkReference | A refernce to evidence to support the benchmark value. | URI
conformance | and indicator (boolean) that expresses whether or not this product has achieved compliance against the criteria.  for example, if the topic is environment.deforstation and the criteria is EU.2023.1115 then the product is conformant if it has not touched any facility throughout it's lifecycle that is not deforestation free since dec 2020. | Indicator


### Metric

> A specific measure of performance against the criteria that governs the claim.  Expressed as an array of metric (ie unit of emasure) / value (ie the actual numeric value) pairs.  

Property | Definition | Type
--- | --- | ---
name | A URI pointing to an entry in a web vocabulary that defines the specific metric unit of measure and how it's calculated. | Text
value | A numeric value representing the measurement or evaluation outcome for the claim. | Numeric
unit | The unit of measure. for example, emissions intensity in Kg Co2e per kWh produced. Or Kg Co2e per Kg of livestock gross weight.   | Code (unitOfMeasure)


### TraceabilityEvent

> The TraceabilityEvent class represents a specific EPCIS event in the traceability chain of a product, including details about the event type and reference.

Property | Definition | Type
--- | --- | ---
eventReference | A URI pointing to the detailed information about the EPCIS event. Most likely in the form of a verifiable credential. | URI
eventType | A code representing the type of EPCIS event. ObjectEvent, AggregationEvent, TransactionEvent, TransformationEvent, ObjectEvent. | Code (eventType)


### Material

> The material class encapsulates details about the origin or source of raw materials in a product, including the country of origin and the mass fraction.

Property | Definition | Type
--- | --- | ---
country | A ISO 3166-1 code representing the country of origin of the component or ingredient. | Code (countryCode)
materialType | The type of this material - as a value drawn from a controlled vocabulary eg textileexchange.org/materials/rm01014 - representing organic cotton. | URI
materialName | The name of the material (eg "lithium spodumene").   | Text
massFraction | A numeric value representing the mass fraction of the product represented by this material. The sum of all mass fraction values for a given passport should be 100. | Numeric
recycled | Indicator is true if this material input is from a recycled source. | Indicator
hazardous | Indicates whether this material is hazardous. If true then  | Indicator


### Process

> The process class encapsulates details about the manufacturing lifecycle of a product, including the country in which the step is performed and the value fraction.

Property | Definition | Type
--- | --- | ---
country | The country in which this lifecycle process step is performed. | Code (countryCode)
processType | The type of this process - as a value drawn from a controlled vocabulary  | URI
processName | The name of this process - eg "ginning", "spinning" or "weaving" from textile industry. | Text
valueFraction | The value fraction contributed by this process step. Sum of value fractions for a given product passport should be 100. | Numeric


### Evidence

> Evidence to support a conformity or identity claim. 

Property | Definition | Type
--- | --- | ---
format | Format of the evidence (verifiable credential, document, website, etc) | Code (evidenceFormat)
assuranceLevel | The assurance level of the evidence (self declaration, 2nd party, 3rd party, accredited auditor) | Code (assuranceLevel)
credential | The URL of the evidence credential. Should be a hashlink to avoid post-issue tampering. | URI


## Code Tables

### uncpc

```
Code values for this table can be found here:
https://unstats.un.org/unsd/classifications/Econ/cpc
```


### conformityTopic

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


### unitOfMeasure

```
Code values for this table can be found here:
https://vocabulary.uncefact.org/UnitMeasureCode
```


### eventType

|Name | Description|
|--- | ---|
|aggregation | event describing the grouping of products such as placing bales of cotton on a pallet|
|transformation | event describing the consumption of input products to create output products in a manufacturing process such as spinning thread from cotton bales.|
|object | event describing an action on a single product such as an inspection or test|
|transaction | event describing commercial transactions such as the sale of a collection of products from seller to buyer|
|association | event describing the creation of relationships between products such as a bill of material of components in an assembly|


### countryCode

```
Code values for this table can be found here:
https://vocabulary.uncefact.org/CountryId
```


### evidenceFormat

|Name | Description|
|--- | ---|
|w3c_vc | A W3C Verifiable Credential|
|iso_mdl | an ISO 108013 identity credential|
|document | a binary document for human consumption such as a PDF|
|website | a reference to an entry on a public website.|
|other | some other representation|


### assuranceLevel

|Name | Description|
|--- | ---|
|Self |  self-assessment|
|Commercial |  conformity assessment by related body or under commercial contract|
|Buyer |  conformity assessment by potential purchaser|
|Membership |  conformity assessment by industry representative body or membership body|
|Unspecified |  conformity assessment by party with unspecified relationship |
|3rdParty |  3rd party (independent) conformity assessment|

## Schema

|DPP Version|status|JSON-LD Context|JSON Schema|Open API 2.0|
|--|--|--|--|
|0.3.0|Raw (not for implementation)|[DPP context](../../schema/digitalProductPassport.v0.3.0.JSONLDContext.jsonld)|[DPP schema](../../schema/digitalProductPassport.v0.3.0.JSONSchema.json)][DPP API](../../schema/digitalProductPassport.v0.3.0.OpenAPISpecification.json)|

## Sample

Note - this sample describes the digital product passport payload only - ie the subject of the verifiable credetial without the envenope. Needs some more realistic data.

```
{
  "id": "http://example.com",
  "issuedBy": {
    "id": "http://example.com",
    "name": "string",
    "identityEvidence": {
      "format": "w3c_vc",
      "assuranceLevel": "Self",
      "credential": "http://example.com"
    }
  },
  "product": {
    "id": "http://example.com",
    "model": "string",
    "productClass": "string",
    "image": "http://example.com",
    "description": "string",
    "furtherInformation": "http://example.com",
    "recyclingInstructions": "http://example.com",
    "manufacturer": {
      "id": "http://example.com",
      "name": "string",
      "identityEvidence": {
        "format": "w3c_vc",
        "assuranceLevel": "Self",
        "credential": "http://example.com"
      }
    },
    "ownershipEvidence": {
      "format": "w3c_vc",
      "assuranceLevel": "Self",
      "credential": "http://example.com"
    }
  },
  "manufacturedAt": {
    "id": "http://example.com",
    "name": "string",
    "location": "http://example.com",
    "operatedBy": {
      "id": "http://example.com",
      "name": "string",
      "identityEvidence": {
        "format": "w3c_vc",
        "assuranceLevel": "Self",
        "credential": "http://example.com"
      }
    },
    "locationEvidence": {
      "format": "w3c_vc",
      "assuranceLevel": "Self",
      "credential": "http://example.com"
    }
  },
  "batch": {
    "id": "http://example.com",
    "serialNumber": [
      "string"
    ],
    "manufacturedDate": "2019-08-24",
    "traceabilityInfo": [
      {
        "eventReference": "http://example.com",
        "eventType": "aggregation"
      }
    ]
  },
  "processingProvenance": [
    {
      "country": "string",
      "processType": "http://example.com",
      "processName": "string",
      "valueFraction": 0
    }
  ],
  "materialsProvenance": [
    {
      "country": "string",
      "materialType": "http://example.com",
      "materialName": "string",
      "massFraction": 0,
      "recycled": true,
      "hazardous": true
    }
  ],
  "conformityInformation": [
    {
      "topic": "environment.energy",
      "standardOrRegulation": "http://example.com",
      "criteriaReference": "http://example.com",
      "conformityEvidence": {
        "format": "w3c_vc",
        "assuranceLevel": "Self",
        "credential": "http://example.com"
      },
      "massBalanceEvidence": {
        "format": "w3c_vc",
        "assuranceLevel": "Self",
        "credential": "http://example.com"
      },
      "claimedValue": {
        "name": "string",
        "value": 0,
        "unit": "string"
      },
      "accuracy": 0,
      "benchmarkValue": {
        "name": "string",
        "value": 0,
        "unit": "string"
      },
      "benchmarkReference": "http://example.com",
      "conformance": true
    }
  ],
  "guaranteeOfOriginCredential": "http://example.com",
  "trustScore": 0,
  "sustainabilityScore": 0
}
```

## Examples from pilot projects

|Project|DPP Version|Description|Credential|Rendered View|
|--|--|--|--|--|
|AATP |0.1.0|Packaged Meat DPP |[sample DPP VC](../../samples/au-agriculture/vc-dpp-0.1.0-au-meat-product.json) |[DPP VC Viewer](https://web.agtrace.showthething.com/verify?q=%7B%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fagtrace-processor-verifiable-credentials.s3.ap-southeast-2.amazonaws.com%2F9359502000041%2Fde0ff0c2-cec8-4cca-aa84-fac75c75103c.json%22%7D%7D) |



