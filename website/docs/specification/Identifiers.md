---
sidebar_position: 20
title: Identifiers
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Overview

Identifiers of **businesses** (eg tax registration numbers), of **locations** (eg google pins or cadastral/lot numbers), and of **products** (eg GS1 GTINs or other schemes) are ubiquitous throughout supply chains and underpin the integrity of the system. UNTP builds upon existing identifier schemes without precluding the use of new schemes so that existing investments and high integrity registers can be leveraged. UNTP requires four key features of the identifiers and, for those that don't already embody these features, provides a framework to uplift the identifier scheme to meet UNTP requirements. Identifiers used in UNTP implementations should be **discoverable** (ie easily read by scanning a barcode, QR code, or RFID), **globally unique** (ie by adding a domain prefix to local schemes), **resolvable** (ie given an identifier, there is a standard way to find more data about the identified thing), and **verifiable** (ie ownership of the identifier can be verified so that actors cannot make claims about identifiers they don't own). 

## Discoverability

The term 'data carrier' applies to all 1- and 2-dimensional barcode symbols and radio frequency tags. A very large number of data carriers are in use, including proprietary ones tied to specific apps. For UNTP, the imortant data carriers are those defined by [ISO/IEC Joint Technical Committee 1, Steering Committee 31](https://www.iso.org/committee/45332.html). These include different types of linear symbol most people think of as 'a barcode', as well as [Data Matrix](https://www.iso.org/standard/80926.html), [QR Code](https://www.iso.org/standard/83389.html) and RFID tags. The standards for those data carriers do not define the type of identifier(s) that can be encoded so that, for practical purposes, it's necessary to also consider the origin and management of the identifiers to be encoded, the syntax to be used for that encoding, the devices and software necessary to print and read the data. It is this multi-layered complexity that makes "Automatic Identification and Data Capture" (AIDC) a professional activity in its own right.

Given this background, 'discoverability' itself has several aspects. It is reasonable to assume that someone inspecting goods in the course of their work will be equipped with a specialist device. This is always necessary for RFID tags, the principal advantage of which is that hundreds, if not thousands, of tags can be scanned within a given volume, even without line of sight. But be aware that the device needs to be running software that can interpret the data it receives. Handheld optical scanners are also in common use and these will typically be able to read a very wide variety of optical symbols. But again, the key question is whether or not the software can interpret the data read from the carrier. 

It hardly needs saying that the more standardized the identifiers and the encoding used, the more widely used the data carrier, and the more ubiquitous the software used to interpret the data read from the carrier, the more interoperable and therefore the more discoverable the identifiers will be. It is this kind of consideration that often leads industry to choose established identifier and data exchange systems such as that offered by GS1. That said, modern smartphones can read any almost any optical barcode and NFC tag *if* the user first opens an app that can interpret the data. This is true for proprietary data carriers and identifiers as well as standardized ones. Installing an app can readily turn a general-purpose smartphone into a specialist device. This opens up the option of using less-established identifier schemes and syntaxes including Decentralized Identifiers (DIDs). Then it's a question of whether the identifiers are equally disoverable at different points along the supply chain.

One case deserves special mention: a URL encoded in a QR Code. Almost all smartphone users can scan a QR Code just using the native camera app and, if the QR Code contains a URL, the Web browser will open the relevant Web page. This kind of identifier is therefore the most disoverable of all. That is, if a URL in the QR code is treated as the identifier then disoverability is a given. However, using a URL itself as the identifier brings some issues of its own. For example, over the medium to long term, many URLs suffer 'link rot' - that is, the URL no longer functions. Or if it does, it may lead to a Web page very different from the one originally intended. Furthermore, existing data exchange systems are likely to be built on short offline identifiers. ISO/IEC 18975 (currently a Draft International Standard) attempts to offer the best of both worlds by providing a means to encode existing identifiers into a data structure that is also a URL. Non-specialist software - notably a smartphone's camera app - can just read it like any URL. But specialist software can parse the URL to extract the identifiers used to identify products, batches and more.



## Global Uniqueness


## Resolvability


## Verifiability 
