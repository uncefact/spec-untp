---
sidebar_position: 30
title: Test Services
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

# 3 Tier Test Architecture

There is a 3 tier testing architecture to help implementors ensure that they are issuing UNTP interoperable digital product passports.  This architecture also ensures that as implementors 'extend' the UN Transparecy Protocol they do that in a non-breaking fashion.

<img width="901" alt="image" src="https://github.com/uncefact/spec-untp/assets/1311010/ec1e5806-f37e-4221-8992-03f0947e6989">

At each tier we articulate the specific testing for UNTP and for an extension.

## Tier 1 - Technology Interoperability Testing

### UNTP
The core of UNTP testing at "Tier 1 - Technology Interoperability Testing" is that all digital product passports, conformity credentials, and traceability events are issued as verifiable credentials.  

#### Verifiable Credential Issuer and Verifier
* W3C Core:
  *    [W3C V2 VCDM test suite](https://github.com/w3c/vc-data-model-2.0-test-suite)

* W3C Extension:
	* 	QR Link / Encryption
	* 	Selective Redaction
	* 	Rendering
	* 	Graphs

#### Digital Link Resolver
* ISO Core:
  * ID -> Link Types -> URL -> Object (Perf Measures)
* Resolution Method
  * ID Type -> Resolution Method
* Storage API
  * VC -> Store (with / without End?)
* Carriers
  * 1D/2D Barcodes/Matrix, QR, RFIT etc

### Extension
NONE: It is expected that all implementations of the UNTP and UNTP extensions will issue valid W3C verifiable credentials and will enable them to be discoverable via a Digital link resolver following the ISO specification.

## Tier 2 - Schema Interoperability

### UNTP
The core of UNTP testing is to ensure that the digital product passport, conformity credential and traceability event schema are valid and that the version of UNTP schema being used are clearly identified.

#### Verifiable Credential Issuer and Verifier
* UNTP Core:
  *   Digital Product Passport Schema
  *   Conformity Credential Schema
  *   Traceability Event Schema
  *   Identity Credential Schema
* UNTP Vocabulary:
  * Sustainability Topics	
* UNTP Identifiers:
  * GTIN?  … ?? …

#### Digital Link Resolver
* UNTP Link Types:
  * Link type definitions

### Extension
Extensions of the schema are intended to provide impplemtors the ability to extend the schema to meet the specific needs of thier industry, jurisdiction or business.  The test suite will ensure that the extensions that implemtors deploy don't break interoperability with UNTP.

#### Verifiable Credential Issuer and Verifier
* Extension Core:
  * Digital Product Passport Schema
  * Conformity Credential Schema
  * Traceability Event Schema	
  * Identity Credential Schema

* Extension Vocabulary:
  * Sustainability Topics
  * Local Standards
  * Commodity Specifics
 
#### Digital Link Resolver
* Extension  Identifiers:
  * RFID, Country/Province/State Bus Identifiers, Location Identifiers etc	

## Tier 3 - Choreography Interoperability

### UNTP Core
* Traceability Linking
  * EPCIS Presentations
* Identity Relationships
  * Linked ID Credentials
  * Subject / Issuer
* Claim Relationships
  * Linked Conformity
  * Scope Relationship
* Mass Balance

### Extension
We expect that as the pilots that are currently in process we will be adding our learings here.
