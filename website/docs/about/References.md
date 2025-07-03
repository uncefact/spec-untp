---
sidebar_position: 25
title: References
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

# Relationships To Other Standards And Initiatives

A core principle of UNTP is to avoid re-inventing standards by building upon existing work and maximising interoperability with similar initiatives. In many cases, UNTP provides complementary value to other initiatives (for example by providing a data exchange protocol for business standards). This page provides an overview of related standards and details the relationship with relevant UNTP specifications. 

## Summary


|Standard|UNTP Relationship|
|--|--|
|[W3C Verifiable Credentials (VCDM)](#w3c-verifiable-credentials-data-model)|UNTP ensures data integrity by requiring that Product passports, conformity credentials, facility records, and traceability events are issued as W3C verifiable credentials.|
|[W3C Decentralised Identifiers (DID)](#w3c-decentralised-identifiers)|UNTP ensures identity integrity by requiring that all credential issuers are identified by a W3C DID that is cryptographically linked to an authoritative register (of organisations or facilities or products)|
|[ISO Product Circularity Data Sheet (PCDS)](#iso-product-circularity-data-sheet)|UNTP provides a simple and interoperable mechanism to digitalise ISO PCDS using the DPP and DCC `Declaration` structure|
|[CEN/CENELEC Digital Product passport System (CEN DPP)](#cen-cenelec-digital-product-passport-framework)|UNTP will work to enure interoperability where there is overlap (3 of 11 UNTP specifications). For example, whilst CEN DPP will define a specific data carrier and product identifier scheme, UNTP will support many existing industry schemes and so will include the CEN schemes in the list of supported schemes.|
|[ISO Electronic Product Code Information Services](#iso-epc-information-services)|UNTP Digital Traceability Events present a simplified but conformant subset of ISO 19987 that is optimised for packaging as verifiable credentials. |

## Matrix

Standards relationship matrix as downloadable excel (coming soon)


## Expanded Descriptions

### W3C Verifiable Credentials Data Model 

**Standard Overview**

Credentials like drivers licenses, diplomas, visas, permits, and even invoices are integral to our daily lives. [W3C Verifiable Credentials](https://www.w3.org/TR/vc-data-model-2.0/) provide a mechanism to express these sorts of credentials on the Web in cryptographically secure, privacy-respecting, and machine-verifiable way.

**UNTP Relationship**

All UNTP credentials (product passports, facility records, conformity attestation, traceability events) are issued as Verifiable Credentials so that security and integrity is assured irrespective of how the credentials are exchanged. The additional UNTP requirement for VC rendering templates ensures that all UNTP credentials are both human and machine readable. The additional UNTP requirement for VC rendering templates ensures that all UNTP credentials are both human and machine readable. The [UNTP VC Profile](../specification/VerifiableCredentials.md) specification provides further details.


### W3C Decentralised Identifiers

**Standard Overview**

[W3C Decentralised Identifiers](https://www.w3.org/TR/did-core/)(DIDs) are a new type of identifier that enables verifiable, decentralized digital identity. A DID refers to any subject (e.g., a person, organization, thing, data model, abstract entity, etc.) as determined by the controller of the DID. The design enables the owner of a DID to prove control over it without requiring permission from any other party. DIDs are often used as the issuer identifier for Verifiable Credentials.

**UNTP Relationship**

UNTP [Verifiable Credentials Profile](../specification/VerifiableCredentials.md) requires the use of W3C DIDs as the issuer ID of all credentials (DPP, DCC, DTE etc) so that there is cryptographic and non-repudiable proof of the issuer identity. In some cases (similar to very well known websites), a verifier will be able to relate a DID to a well known identity. In most cases, however, the DID may not be known to the verifier - therefore UNTP defines a [Digital Identity Anchor](../specification/IdentityResolver.md) which provides a high integrity link between a DID and an identity in an authoritative register such as a national business register. 

### ISO Product Circularity Data Sheet

**Standard Overview** 

[ISO-59040](https://www.iso.org/standard/82339.html) (also known as the "Product Circularity Data Sheet") defines a standard set of measures and corresponding reporting standard for product circularity. It includes both circular content (i.e. the extent to which the product is made from recycled, refurbished materials) and circular design (i.e. the extent to which the product has been designed to facilitate repair and recycling). The standard is presented as a PDF document with sample reporting layouts.

**UNTP Relationship** 

UNTP does not re-invent any of the criteria in the ISO PCDS.  Rather the UNTP Digital Product Passport provides a simple mechanism to digitalise product product circularity data in a way remains ISO-59040 conformant. The UNTP Digital Product Passport data model includes the organisation, facility, and product meta-data required by ISO-59040. The `Declarations` structure within the UNTP DPP data model can be used to convey each specific circularity criteria defined by ISO-59040. Since UNTP DPPs are both human and machine readable and can carry other sustainability information such as carbon footprint, product manufacturers can issue UNTP DPPs with confidence that the single DPP can conform to multiple sustainability standards and be equally valuable to human and machine verifiers. 

Sample ISO-59040 conformant UNTP DPP - to be provided.

### CEN CENELEC Digital Product Passport Framework

**Standard Overview**

The [CEN/CENELEC Digital Product Passport Framework and System (CEN EU DPP)](https://standards.cencenelec.eu/dyn/www/f?p=205:7:0::::FSP_ORG_ID:3342699&cs=1798F43FAA14922B642266F24B912DC61) is a new initiative that will deliver the underlying technical standards (data carriers, identifiers, data exchange) to support the [European Commission Eco-design for Sustainable Products Regulation (ESPR)](https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/sustainable-products/ecodesign-sustainable-products-regulation_en). There are three outputs defined by the CEN DPP working group.

* [Unique Identifiers](https://standards.cencenelec.eu/dyn/www/f?p=205:110:0::::FSP_PROJECT,FSP_LANG_ID:79954,25&cs=1ADFFF9399AF24899ABD679346872B4D1) - unique identifier system that supports both centralised and decentralised identifiers and supports product identification at the model, batch, or item level.
* [Data Carriers](https://standards.cencenelec.eu/dyn/www/f?p=205:110:0::::FSP_PROJECT,FSP_LANG_ID:80081,25&cs=1C477B63D7C0FF3374CDD59F4B1B40FF6) - the format, error correction, encoding methods, printing & durability of the product data carrier (eg QR code).
* [Data Exchange Protocols](https://standards.cencenelec.eu/dyn/www/f?p=205:110:0::::FSP_PROJECT,FSP_LANG_ID:80427,25&cs=1923166F1B2A61A3BCD3F393EB2D7DB02) - An open, secure, reliable, and high integrity data exchange protocol for the exchange of DPP data between two or more systems. Includes access control mechanisms for sensitive data.

The CEN/CENELEC DPP standardization work is in-progress.  This information will be refreshed as updated information is published.

**UNTP Relationship**

The UNTP is a voluntary standard that must be easy to apply to any existing industry specific product data carriers and identifiers - and must work within any member country regulatory framework. For example, 100 million livestock (sheep and cattle) in Australia are identified with RFID data carriers that carry [NLIS](https://www.nlis.com.au/) identifiers and comply with national regulations. UNTP builds upon ubiquitous technical standards from W3C and IETF to ensure technical interoperability and will leverage semantic web technologies and established vocabularies for semantic interoperability. Therefore is is expected that interoperability with CEN/CENELEC DPP standards will be straightforward.

* Identifiers and Carriers : UNTP will maintain a human and machine readable register of organisation, facility, and product identifier schemes together with data about how to parse data carriers, resolve identifiers to discover passports, and verify ownership of the identifier and integrity of the passport. Any EU product registers that implement CEN standards will be added to the UN register of schemes.
* Data Exchange Protocol : UNTP leverages open technical standard including [JSON Schema](https://json-schema.org/), [W3C JSON-LD](https://www.w3.org/TR/json-ld11/) semantics, and [IETF Linksets](https://datatracker.ietf.org/doc/rfc9264/). CEN DPP is likely to leverage similar technical standards. Furthermore, UNTP Digital product passport data is mapped to well established semantic vocabularies such as vocabulary.uncefact.org, schema.org and others as needed. UNTP will maintain mappings to any EU specific passport data semantics to ensure interoperability at the semantic level. 

This information will be refreshed as updated information is published. UN/CEFACT remains committed to ensure interoperability with CEN/CENELEC DPP standards as they emerge. 

### ISO EPC Information Services

**Standard Overview**

[ISO/IEC 19987:2024](https://www.iso.org/standard/85557.html) is a well established standard for supply chain traceability. It defines six event types that can be combined as required to accurately describe a value chain from raw material to finished product. The event types are `Object Event` (eg an inspection), `Transaction Event` (eg a shipment of goods from seller to buyer), `Aggregation Event` (eg loading multiple packages on a pallet), `Transformation Event` (eg manufacturing process that consumes input materials to create output products), and `Association Event` (eg linking products to other products or facilities).

**UNTP Relationship**

The UNTP [Digital Traceability Event (DTE)](../specification/DigitalTraceabilityEvents.md) is a conformant and simplified profile of ISO-19987 that identifies the minimum subset that is necessary to support value chain transparency. The UNTP DTE profile is also optimised for packaging as verifiable credentials and discovery as linked data - rather than the machine-to-machine API mechanisms defined by the ISO standard.










