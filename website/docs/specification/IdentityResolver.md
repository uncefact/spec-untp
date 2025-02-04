---
sidebar_position: 20
title: Identity Resolver
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Overview

Identifiers of **businesses** (eg tax registration numbers), of **locations** (eg google pins or cadastral/lot numbers), and of **products** (eg GS1 GTINs or other schemes) are ubiquitous throughout supply chains and underpin the integrity of the system. UNTP builds upon existing identifier schemes without precluding the use of new schemes so that existing investments and high integrity registers can be leveraged. UNTP requires four key features of the identifiers and, for those that don't already embody these features, provides a framework to uplift the identifier scheme to meet UNTP requirements. Identifiers used in UNTP implementations should be **discoverable** (ie easily read by scanning a barcode, QR code, or RFID), **globally unique** (ie by adding a domain prefix to local schemes), **resolvable** (ie given an identifier, there is a standard way to find more data about the identified thing), and **verifiable** (ie ownership of the identifier can be verified so that actors cannot make claims about identifiers they don't own). 

## Discoverability

The term 'data carrier' applies to all 1- and 2-dimensional barcode symbols and radio frequency tags. A very large number of data carriers are in use, including proprietary ones tied to specific apps. For UNTP, the important data carriers are those defined by [ISO/IEC Joint Technical Committee 1, Steering Committee 31](https://www.iso.org/committee/45332.html). These include different types of linear symbol most people think of as 'a barcode', as well as [Data Matrix](https://www.iso.org/standard/80926.html), [QR Code](https://www.iso.org/standard/83389.html) and RFID tags. The standards for those data carriers do not define the type of identifier(s) that can be encoded so that, for practical purposes, it's necessary to also consider the origin and management of the identifiers to be encoded, the syntax to be used for that encoding, the devices and software necessary to print and read the data. It is this multi-layered complexity that makes "Automatic Identification and Data Capture" (AIDC) a professional activity in its own right.

Given this background, 'discoverability' itself has several aspects. It is reasonable to assume that someone inspecting goods in the course of their work will be equipped with a specialist device. This is always necessary for RFID tags, the principal advantage of which is that hundreds, if not thousands, of tags can be scanned within a given volume, even without line of sight. But be aware that the device needs to be running software that can interpret the data it receives. Handheld optical scanners are also in common use and these will typically be able to read a very wide variety of optical symbols. But again, the key question is whether or not the software can interpret the data read from the carrier. 

It hardly needs saying that the more standardized the identifiers and the encoding used, the more widely used the data carrier, and the more ubiquitous the software used to interpret the data read from the carrier, the more interoperable and therefore the more discoverable the identifiers will be. It is this kind of consideration that often leads industry to choose established identifier and data exchange systems such as that offered by GS1. That said, modern smartphones can read any almost any optical barcode and NFC tag *if* the user first opens an app that can interpret the data. This is true for proprietary data carriers and identifiers as well as standardized ones. Installing an app can readily turn a general-purpose smartphone into a specialist device. This opens up the option of using less-established identifier schemes and syntaxes including Decentralized Identifiers (DIDs). Then it's a question of whether the identifiers are equally disoverable at different points along the supply chain.

One case deserves special mention: a URL encoded in a QR Code. Almost all smartphone users can scan a QR Code just using the native camera app and, if the QR Code contains a URL, the Web browser will open the relevant Web page. This kind of identifier is therefore the most disoverable of all. That is, if a URL in the QR code is treated as the identifier then disoverability is a given. However, using a URL itself as the identifier brings some issues of its own. For example, over the medium to long term, many URLs suffer 'link rot' - that is, the URL no longer functions. Or if it does, it may lead to a Web page very different from the one originally intended. Furthermore, existing data exchange systems are likely to be built on short offline identifiers. ISO/IEC 18975 (currently a Draft International Standard) attempts to offer the best of both worlds by providing a means to encode existing identifiers into a data structure that is also a URL. Non-specialist software - notably a smartphone's camera app - can just read it like any URL. But specialist software can parse the URL to extract the identifiers used to identify products, batches and more.



## Global Uniqueness
To be useful across a supply chain, identifiers must be globally unique. This can be achieved in a variety of ways

### Issuing Agencies
Issuing Agencies act as a root that manages an identifier space. Examples include the internet domain name system, Digital Object Identifiers (DOIs), Legal Entity Identifiers (LEIs) and GS1 identifiers. In all these examples, the eventual identifier is created by appending a locally-defined string on the end of a prefix that is managed by the issuing agency that takes *its* authority from a central root. A well-known example is ICANN, which is the root authority for the internet domain name system. By renewable contract, they issue ".com" to Verisign who then license individual domain names under .com to others (usually via intermediaries). The licensee then creates their URLs under that domain name. Because ICANN is solely responsible for the internet's domain name system, global uniqueness is assured.

The same principle applies in all managed identifiers. For LEIs, GLEIF acts as the root authority that gives prefixes to its Local Operating Unit who then issue specific identifiers and so on.

### ISO/IEC 15459 Issuing Agencies
In the world of Automatic Identification and Data Capture (barcoding etc), the ISO/IEC 15459 series of standards establishes a registry that acts as the root authority. Organisations that wish to issue identifiers that are intended to be encoded in barcodes and/or RFID tags are assigned a unique Issuing Agency Code that ensures their identifiers do not clash with any others. A further standard, ISO/IEC 15418, defines so-called *Data Identifiers* and *Application Identifiers* that "qualify" identifiers. It is this system that enables those Issuing Agencies to efficiently encode globally unique identifiers in optical and radio frequency data carriers without any duplication and for the print and scan industry to be able to create and interpret the barcodes and tags.

For example, the Data Identifier `2B` is for a *Gas Cylinder Container Identification Code assigned by the manufacturer in conformance with U.S. Department of Transportation (D.O.T.) standards*. The Application Identifier `01` is for a *Global Trade Item Number (GTIN)*. Data Identifiers are managed under the auspices of ANSI, Application Identifiers are managed by GS1.

### Generated identifiers
As an alternative to being issued, identifiers can be algorithmically-generated. The best-known example of this is the Universally-Unique Identifier (UUID). This relies on it being *extremely* unlikely, but not impossible, that the same identifier will be generated twice. For many practical applications, that can be "good enough" although there are many instances where duplicates have arisen (known as "collisions").

Decentralised Identifiers (DIDs) are also generated but the methods used vary significantly and typically depend on some piece of data that the originating person owns. This might be their private cryptographic key or some other extremely hard to guess piece of data. Collisions are all-but impossible but the identifiers are usually significantly longer. The most widely used DID method is "DID Web" which uses the owner's internet domain name as the basis for identification, thus mixing the issued and generated philosophies with one advantage being that the resulting DIDs are short. It's important to note though that the primary purpose of a DID is to provide a means of proving control over the identifier and, having done that, retrieving the DID owner's public cryptographic key.

## Resolvability
An identifier is nothing more than a string of characters. In isolation, it has no specific meaning. However, in most cases, the identifier will have a recognisable structure that gives a strong hint about its intended purpose and how it can be processed. In the context of UNTP, what's important is that the identifier can be *resolved* - that is looked-up online - and connected to a source of data, most notably, the identified entity's DPP. Approaches to resolving identifiers vary but a common feature is that it is typically a multi-stage process. Again taking the internet's domain name system as an example, an internet domain *resolves* to an IP address - the actual internet address of the server(s) that provide the content expected from that domain. 

Decentralised Identifiers *resolve* to a "DID Document" - a small piece of data that includes the public cryptographic key for the DID's controller and, optionally, a list of services related to that identitifier. At the time of writing, the established method for DID resolution is being formally standardised at W3C. An app is needed to recognise and resolve a DID, and to process the returned DID Document.

ISO/IEC (FDIS) 18975 defines a framework for resolving any existing identifier that is globally unique in its own right, most notably, those issued under the ISO/IEC 15459 series. It sets out two options for how those identifiers can be encoded in a regular HTTP URI (Web addrress), using Data Identifiers and Application Identifiers, and how that URI can resolve to a set of links to information about the identified entity. That [linkset](https://datatracker.ietf.org/doc/rfc9264/) can be operationalised in a resolver. This defines a framework for creating a simple query interface for any identified entity. ISO/IEC 18975 enables identity issuing agencies to develop conformant standards that specify the following:
* The identifiers can be encoded in a URL within a QR Code printed on a product that can be scanned just using a mobile phone's camera, without any need for a specialist app. The user can select the DPP from the list of available links to information (i.e. manually select the correct link from the linkset).
* The identifiers can be encoded in a URL within a QR Code printed on a product that can be scanned using a specialist app that queries the resolver and returns the DPP.


### Link Resolver Services

ISO/IEC (FDIS) 18975 defines a framework for resolving any existing identifier that is globally unique (notably those issued under the ISO/IEC 15459 series). It sets out two options for how those identifiers can be encoded in a regular HTTP URI (Web address), using Data Identifiers and Application Identifiers, and how that URI can resolve to a set of links (a "link-set") to information about the identified entity. That [link-set](https://datatracker.ietf.org/doc/rfc9264/) can be operationalised in a resolver service. This defines a framework for creating a simple query interface for any identified entity. 

TBD - link query examples and linkset response examples.

### URNs to link-Set

The UN global trust register will include resolver templates for each scheme and so the UNTP requirement that identifiers be resolvable is met by substituting the URN `{identifier-value}` into the `{id}` placeholder in the resolver template related to the matching `{identifier-scheme}`. For example

* given a URN ID of `urn:gtr:nlis.com.au:QDBH0132XBS01234`, the `{identifier-scheme}` is `nlis.com.au`
* and a resolver template of `https://resolver.nlis.com.au/{id}`  is registered for scheme `nlis.com.au`
* then the resolver URL would be `https://resolver.nlis.com.au/QDBH0132XBS01234`

An identifier is nothing more than a string of characters. In isolation, it has no specific meaning. However, in most cases, the identifier will have a recognisable structure that gives a strong hint about its intended purpose and how it can be processed.  

### URLs to link-Set

As described in [IDR URLs as identifiers](#idr-urls-as-identifiers), URL identifiers SHOULD already be Identity Resolver URLs that conform to the ISO-18975 structured path syntax without parameters. Client applications may of course add parameters to the URL before calling the resolver service to get more specific link sets.

### DIDs to Link-Set

TBD - Probably the service end-point in a DID document should point to a link resolver.  A did document service property could also enumerate link targets using the same link types in the `type` property of the DID service.

### Link Types

TBD - What extra link types do we need to define?

### Related Links

TBD - how to logically group related links (eg a DPP and related service history events)?

### Versioned targets

TBD - how to reference version histories of specific links?

### Updatable Targets

TBD - how to represent links to API's or services that will accept create/update actions (eg POST a maintenance event to a product linkset)

### Secure Targets

TBD - how to represent links that require authenticated access or decryption keys?

## Verifiability 

UNTP credentials will include identifiers of products, locations or businesses.  UNTP credentials will also include ESG performance claims like emissions intensity values. But how can a verifier of these identifiers or ESG claims be confident that the claims are true and that they are made by the genuine party at a verifiable location? Trust anchors are national or international authorities that typically run existing business or product registration, certification, accreditation, or other high integrity processes. Examples of trust anchors include national regulators that govern things like land ownership or business registrations. Another example are the national accreditation bodies that audit and accredit certifiers to issue third party assessments. UNTP depends on trust anchors to add digital integrity to ESG claims and identities by linking them to the authority under which they are made. In essence, UNTP defines a protocol for existing trust anchors to continue doing what they have always done, but in a digitally verifiable way.
