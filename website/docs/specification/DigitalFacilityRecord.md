---
sidebar_position: 18
title: Digital Facility Profile
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

* DFR context : [JSON-LD @context](../../schema/DFR_v0.3.0_context.jsonld)
* DFR schema : [JSON schema](../../schema/DFR_v0.3.0_schema.json)
* DFR sample : [JSON Sample](../../samples/untp-digital-facility-record-v0.3.0.json)

## Versions

| DPP Version | Date | status  | Change summary | JSON-LD Context  | JSON Schema  |
| ------ | ----- | ------ | ------ | ------| ---|
| 0.3.0     | 21-08-2024 | Draft |Initial model for facility data |[@context](../../schema/DFR_v0.3.0_context.jsonld) |[schema](../../schema/DFR_v0.3.0_schema.json) |



## Overview

The digital facility record (DFR) is issued by the owner or operator of a production or manufacturing facility and is the carrier of **facility data and sustainability information** for an identified facility in the value chain. It is very similar to the digital product passport except that it describes a facility rather than a product. The DFR is discoverable in the same way as a DPP - namely by resolving the facility ID to an Identity Resolver service that will return links to facility records. The sustainability performance metrics are also at the facility annual total level rather than at the product level. In many value chains, facility level information may be sufficient to meet the due diligence requirements of buyers and so the facility record can be used independently of the product passport. However product passports should reference the facility at which the product was produced. Where both facility and product information are available, verifiers can perform an approximate mass-balance assessment for quantity based criteria such as GHG emissions. For example, the total individual emissions recorded in all products shipped from a facility should approximately equal the reported annual emissions of the facility. 

## Conceptual Model

TBA

## Requirements

The digital facility record is designed to meet the following detailed requirements as well as the more general [UNTP Requirements](https://uncefact.github.io/spec-untp/docs/about/Requirements)

| ID | Name  | Requirement Statement   | Solution Mapping  |
| ------ | ---- | --------- | ---------- |
| DFR-01 | Resolvable ID | Each facility must have at least one resolvable identifier that can be used in digital product passports and other data exchanges so that verifiers can always access the latest facility data. | Facility.id |
| DFR-02 | Process categories  | The DFR should support any number of industry process classifications using codes from a defined classification scheme (eg UN-CPC) | The classifications property |
| DFR-03 | Geo-Location | The DFR should should provide a means to specify both a geo-location point (aka pin) and a boundary geometry (aka polygon) so that verifiers can geo-locate supplier facilities  | The Location class meets this need.|
| DFR-04 | Owner / operator| The DFR should specify the owner and/or operator entity of the facility using one or more globally unique and resolvable entity identifiers.| Facility.OperatedByParty is a UNTP Entity structure that meets this need. |
| DFR-05 | Declarations  | The DFR MUST provide a means to include any number of conformity declarations so that it can provide simple single point to aggregate all claims about the facility in one place  | The "conformityDeclarations" array is designed to meet this need  |
| DFR-06 | Conformity Topic | The DFR MUST provide a simple mechanism to express the sustainability/circularity/conformity topic for each claim so that similar claims can be grouped and the high level scope easily understood.    | The ConformityTopic code list is designed to meet this need|
| DPP-07 | Metrics  | The DFR MUST provide a simple mechanism to quantify a conformity claim (eg carbon intensity, water consumption, etc) and to express any accuracy range.  | The "Metric" class is designed to meet this need  |
| DPP-08 | Criteria  | The DPP MUST provide a means to reference a standard or regulation as well as the specific criteria within that standard or regulation - so that claims can be understood in terms of the criteria against which they are made. | Declaration.referenceRegulation, Declaration.referenceStandard, Declaration.referenceCriteria|
| DPP-09 | Evidence  | The DPP MUST provide a means to reference independent conformity assessments that support and verify the claims being made. The related evidence SHOULD be digitally verifiable but MAY be a simple document or web page. The confidence level attached to the evidence should be clear. | The Declaration.conformityEvidence property references a relevant digital conformity credential   |

## Logical Model

The Digital Facility Record is an assembly of re-usable components from the UNTP core vocabulary. 

![Digital Facility Record data model](DigitalFacilityRecord.svg)

### Core Vocabulary Documentation

The [UNTP core types vocabulary](https://jargon.sh/user/unece/untp-core/v/0.3.6/artefacts/readme/render) defines the uniquely identified Linked Data entities such as Product, Location, Facility, Party, Standard, Regulation, Criteria, Declaration, Attestation, Endorsement. These entities provide the building blocks for construction of the Digital Facility Record.


### DFR Documentation

The [DFR documentation](https://jargon.sh/user/unece/DigitalFacilityRecord/v/0.3.0 provides a technology-neutral definition of classes, properties and code lists in the DFR model.

## Implementation Guidance

This section provides sample JSON-LD snippets for each DFR component.

### Verifiable Credential

TBA

### Facility

TBA

### Location

TBA
