---
sidebar_position: 30
title: Data Carriers
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Overview

Digital data needs to be linked to the physical product it describes and should be discoverable through the identifiers printed on that product, including serial or batch number as appropriate. For high volume goods and easy / reliable discovery, these identifiers are already typically represented as barcodes, matrix codes, QR codes, or RFID encoded data. UNTP supports the use of these existing data carriers. A basic UNTP principle is that if you have a product then you should be able to find ESG data about that product even when the identifier is not a web link. Therefore, the UNTP defines a generalised protocol (based on [ISO/IEC DIS 18975](https://www.iso.org/standard/85540.html)) to allow any identifier scheme (GS1 or otherwise) to be consistently resolvable so that product passports and other data can always be accessed from the identifier of the product. The UNTP also defines a specific QR based data carrier format for use on paper/PDF versions of conformity credentials or other trade documents that provides secure access to credentials in a way that is both human and machine readable.  This provides a simple but powerful mechanism to facilitate uptake of digital solutions alongside existing paper/PDF based frameworks.

## Resolvers
A *resolver* is a service that connects an identifier to one or more sources of information about the identified thing. An internet domain name *resolves* to one or more actual servers (identified by their IP addresses). Digital Object Identifiers ([DOI](https://www.doi.org/the-identifier/what-is-a-doi/)s), commonly used to identify research papers, *resolve* to the paper itself (wherever it may be). In the UNTP context, identifiers for products, locations and supply chain operators must resolve to information about those entities. This can include the DPP, ESG certificates and more, some of which may be access-controlled. That is, knowing the location of information is not the same as automatically having access to it.

[ISO/IEC DIS 18975](https://www.iso.org/standard/85540.html) specifies two different approaches for encoding identifiers in HTTP URIs (web addresses). Either can be used to point to a resolver that associates an identifier with a set of links to one more sources of relevant information following the IETF's Linkset standard [RFC9264](https://www.rfc-editor.org/rfc/rfc9264.html). A conformant resolver can respond to queries for a particular type of information about the identified entity by providing the appropriate link from the linkset. GS1 Digital Link is conformant to this model. The [URI syntax](https://ref.gs1.org/standards/digital-link/uri-syntax/) follows the *structured path* approach set out in ISO/IEC DIS 18975 and the [GS1-Conformant resolver](https://ref.gs1.org/standards/resolver/) standard defines the related service. An example will make this clearer:

Imagine a white t-shirt that has a GTIN of 9506000164908. This can be encoded in a GS1 Digital Link URI as https://id.gs1.org/01/09506000164908, which can, in turn, be encoded in a QR Code. Following that link, without any specialist software, will take you to a landing page for the white t-shirt from which there are links to specific types of information. One of those links is to sustainability information. Using an app, it's possible to ask the resolver directly for that sustainability information by appending the GS1 Digital Link URI with an instruction thus: https://id.gs1.org/01/09506000164908?linkType=gs1:sustainabilityInfo. The resolver recognises the `linkType` parameter and redirects immediately to that page. Alternatively, software can [request the full linkset](https://id.gs1.org/01/09506000164908?linkType=all) and either present it to the user or process it as it sees fit. See the next section for more on link types.

## Link Vocabulary
With very few exceptions, all websites include hyperlinks to different pages within those websites. Users understand that clicking a 'menu' option will take them to that kind of information. Online newspapers provide a good example. There will typically be a home news section, foreign news, economics, sport, arts, lifestyle, weather, TV guide and so on. Applying this to UNTP, when looking for information about a product the user will want the DPP, certificates covering ESG issues and conformance, perhaps manufacturer's details. These can all be provided using the same infrastructure and methods as used for consumer information such as the sustainabilty page in the white t-shirt example above.

The IETF's [RFC9264](https://www.rfc-editor.org/rfc/rfc9264.html) defines how sets of links can be made machine-discoverable and machine-interpretable. The key feature being that each link is annotated with the type of thing it points to. There is no limit on those link types but interoperability is lost if everyone uses their own. Therefore it is preferable to choose link types from a defined list that is under formal change management. GS1 provides [one such list](https://www.gs1.org/voc/?show=linktypes) as part of its Web Vocabulary.

## 1D Barcodes


## 2d Matrix Codes


## QR Codes


## RFID Codes


