---
sidebar_position: 2
title: Audience, Benefits & Goals
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

# Goals

The primary goal of UNTP is to make significant reductions in the incidence of greenwashing by giving unsustainable behaviour nowhere to hide. This will also uplift the value of legitimate ESG credentials from supply chain actors that have implemented sustainable practices. UNTP will have achieved it's purpose when

* Most supply chain shipments are accompanied by verifiable ESG performance data.
* Greenwashing is a niche activity that is easily detected and quickly penalised by markets and regulators.
* Products with the best sustainability characteristics enjoy the greatest market access and price uplift. 

# Target Audience & Benefits

All stakeholders in the global supply chain have a role to play and benefits to realise through implementation of the UNTP. As explained in the [Architecture Overview](../specification/Architecture.md), the UNTP is a decentralised architecture where actors can be issuers, or subjects, or verifiers of digital credentials. In many cases, actors will be issuers of some credentials, subjects of others, and verifiers of others. Therefore, the stakeholder roles and benefits described here are separated into the issuer, subject, and verifier roles as appropriate.

## Regulators

Regulators define rules, issue permissions, and manage compliance. By implementing UNTP, regulators will uplift the value of the permissions they issue and improve the efficiency and integrity of compliance operations.

* The primary role of regulators as **issuers** is as a [trust anchor](../specification/TrustAnchors.md). When identity credentials such as business registration certificates are issued as digital verifiable credentials according to UNTP then the subjects of those credentials (trading businesses) can add strong verifiable identity to their supply chain transactions. Verifiable identity can facilitate green-lane pre-clearance at import border and higher confidence lending from financial institutions. Similarly, when ESG permits and certificates that demonstrate compliance with domestic regulations are issued digitally, then traders can also attach that evidence to their transactions. In short, when regulators act as digital trust anchors, they will be uplifting their balance of trade by improving access to export markets and trade finance for their traders.
* As **verifiers** of increasingly transparent supply chain data, regulators can significantly uplift compliance activities. Rather than depend on unverifiable claims in regulatory reports that are occasionally audited at high cost, regulators can confidently automate compliance assessment on most trade transactions, leaving a much smaller volume of trade for manual compliance and enforcement activities. 

Finally, as national authorities increasingly seek to uplift environmental performance through regulatory initiatives such as consumer centric product passports, we recommend that national regulators consider the UNTP as the basis for their national initiatives. By designing national initiatives as [UNTP extensions](../extensions/index.md), regulators will not only be able to re-use a rich and tested body of work, but will also reduce compliance costs for their domestic industry because they will be better aligned with international supply chains.

## ESG Standards Organisations

Standards organisations include the national and international standards authorities as well as industry led organisations. There are a wide variety of governance arrangements in place that impact the legitimacy and value of the published standards. Unlike regulators, standards bodies do not manage compliance which can be self-assessed, or third party audited by test & certification bodies. There are hundreds of standards organisations which collectively issue thousands of ESG standards, each with dozens of specific conformity criteria (i.e. the rules). Most of these are published as PDF documents. The key role for standards authorities under UNTP is to make their ESG rules machine readable so that they can be accurately referenced in conformity credentials. 

* When ESG standards organisations publish their [ESG criteria as a machine readable vocabulary](../specification/Rules.md) then they are empowering their community of certifiers to issue digital conformity credentials that unambiguously reference the scope of the conformity claims so that the credentials can be digitally verified.
* Standards authorities will generally not be issuers, subjects, or verifiers of digital credentials unless they also act as accreditation authorities for third party certifiers that will make conformity assessments - in which case they will be issuers of accreditation credentials as described in the next paragraph.

## Accreditation & Certification Organisations

There is a very well established [global framework for conformity assessment](https://casco.iso.org) of entities, processes, and products that has been in place for over 50 years. It provides assurance that products sold on the marketplace meet applicable quality, safety or ESG standards. Under the framework, independent third parties (certifiers) assess products against recognised standards and issue conformity certificates. Furthermore, a global network of mutually recognised national accreditation authorities assess the certifiers to ensure that the conformity certificates are issued by suitably qualified organisations. For example, a manufacturer may claim that their product meets a particular environmental standard. You might ask "how do I know that claim is true?" and the answer would be "because a third party tested the product and issued a certificate". You might then ask "yes, but how do I know that the third party can be trusted?" and the answer would be "because they have been accredited by the national accreditation authority". Despite all this, it's still a relatively simple process to create realistic looking but fake paper certificates. UNTP provides a standard way to digitally verify this chain of trust that is much harder to fake. UNTP does not demand that every product claim is third-party assessed, nor that every third party certifier is formally accredited, but does make that chain of trust visible where it exists. UNTP also recognises that less formal but still valuable chains of trust can exist - for example a farmer's environmental land management claims might be verified by a community organisation that is endorsed by a well-known global environmental organisation. 

* When national accreditation authorities or other well-known and trusted organisations **issue** their accreditations as UNTP standard digital credentials then they are creating a digital [trust anchor](../specification/TrustAnchors.md) that empowers verifiers of ESG conformity certificates to decide whether they can be trusted. The **subject** of the accreditation is the third party conformity assessment body. Implementation of UNTP will amplify the value of the accreditation and the brand or 'trust mark' of the accreditation authority.
* When third party conformity assessment bodies (certifiers) **issue** their product ESG certificates as UNTP standard digital credentials then they are empowering verifiers of the ESG certificates to digitally confirm that the certificates are genuine, have not been tampered, and have not been revoked. Furthermore if the digital conformity certificate contains a link to the accreditation credential then the full [digital chain of trust](../specification/TrustGraphs.md) is established. Producers, manufacturers, brands & retailers that implement UNTP will also demand digital versions of the conformity credentials that they can attach to their products. Therefore, conformity assessment bodies that can provide UNTP standard digital credentials will be preferred over those that cannot.

## Primary Producers & Manufacturers

Most physical products are made of materials that either grow above the ground or are dug out from below the ground. Primary producers such as farmers and miners represent the starting point for most supply chains. Recyclers are a special case and are treated separately by UNTP because they are both the end and the (re)start of circular supply chains. Manufacturers take raw or recycled materials and produce intermediate components or final products. Primary producers and manufacturers collectively represent the upstream feedstock supply chain for the branded products sold to consumers. 

* When producers and manufacturers implement UNTP by **issuing** [B2B digital product passports](../specification/DigitalProductPassport.md) (DPP) and [linking them](../specification/DataCarriers.md) to every shipment of goods to their customers, then they are simplifying life for their customers by providing data at the right granularity for them to incorporate their inputs such as scope 3 CO2 emissions into their own product environmental footprint. 
* When producers and manufacturers **issue** UNTP [traceability events](../specification/TraceabilityEvents.md) linked to product passports then they are providing provenance evidence that can inform supply chain resilience and preferential treatment decisions by their customers and export market regulators. 
* When producers and manufacturers link third party issued UNTP [conformity credentials](../specification/ConformityCredential.md) then they are adding trust to the ESG claims in their DPPs that will uplift the value or market access for their products.
* When producers and manufacturers **issue** the complete collection of passports, traceability events, and conformity credentials and link them to product shipments then they will significantly uplift value to their downstream customers by empowering them to easily and verifiably meet their own ESG due-diligence obligations. 
* When producers and manufacturers link their issuer identity to a strong identity credential (such as a government business registration or trademark ownership credential) and implement the UNTP [anti counterfeiting](../specification/Counterfeiting.md) mechanism then they will add strong anti-fraud measures to their products and preserve the value of their sustainability actions.

Producers and manufacturers are themselves **verifiers** of any UNTP credentials linked to their upstream supply chain. The [confidentiality measures](../specification/Confidentiality.md) defined by UNTP allow supply chain actors to selectively redact upstream credentials before passing them on to their downstream customers so that ESG evidence can be passed on without revealing commercially sensitive information. 

## Brands & Retailers

Brands and retailers consume products from their upstream producers and manufacturers and sell to the consumer. Whilst it is of course true that some brands are also manufacturers and that some retail is to business rather than consumers, the key distinction that UNTP makes is between B2B activities vs B2C activities. Sales to the consumer market is highly regulated in most economies and some are starting to develop regulations that also require product passports to support informed consumer choice and/or improved recycling processes. Brands and retailers must meet domestic regulations and face scrutiny from an increasingly greenwashing-aware consumer as well as from environmental activist organisations. The potential for reputational damage and high fines for non-compliance present brands and retailers with a strong motivation to ensure that sustainable practices are in place both for themselves and their entire supply chain.

* When brands and retailers can **verify** UNTP credentials linked to shipments from their upstream suppliers then they can confidently meet their due-diligence obligations and have the rich and verifiable information necessary to issue any consumer-centric product passports required under domestic regulations.
* UNTP should not conflict with local regulations.  When international brands and retailers **issue** UNTP [product passports](../specification/DigitialProductPassport.md), [conformity credentials](../specification/ConformityCredential.md) and [traceability events](../specification/TraceabilityEvents.md) across all markets then they are providing a consistent way for consumers to discover and verify ESG performance and are establishing a strong framework for compliance with any current or emerging domestic regulations.
* When brands and retailers request UNTP credentials from their upstream suppliers then they avoiding the challenges associated with imposing specific traceability software solutions on their supply chain. Instead, they are simply requesting conformance with a common standard, irrespective of software platform.
* When brands and retailers that have already made significant investments in GS1 identifiers and standards implement the UNTP, they can follow the [GS1 binding](../specification/GS1Binding.md) to build upon and re-use their existing investments. It should also be noted that UNTP does not impose GS1 solutions on organisations that have not already invested in GS1 standards.
* When brands and retailers link their issuer identity to a strong identity credential (such as a government business registration or trademark ownership credential) and implement the UNTP [anti counterfeiting](../specification/Counterfeiting.md) mechanism then they will add strong anti-fraud measures to their products and preserve the value of their sustainability actions.

## Recyclers & Refurbishers

Recyclers & refurbishers play a critical role in the transition to a [circular economy](https://en.wikipedia.org/wiki/Circular_economy). Recyclers process used products into raw materials for re-use in new production processes.  Refurbishers take old products and restore them for re-use. The goal of both processes is to improve sustainability outcomes by re-using natural resources rather than producing new raw materials. As regulators start to impose minimum recycled content requirements and other circularity regulations, the current linear economic model (produce, use, dispose) will require significant change to provide sufficient recycled materials to meet regulatory goals and consumer expectations. The UNTP is designed to support circular economies by including verifiable information on recycled content of products. UNTP also incentivises manufacturers to design new products to optimise recyclability and provides access to product data to better inform recycling processes.

* When manufacturers optimise their product design for recyclability and provide access to that information via **issued** UNTP passports then they are uplifting the end-of-life value of their products. Recyclers can leverage this data (especially for high value products like EV batteries) to optimise the efficiency of their recycling processes.
* When recyclers **issue** UNTP passports with their recycled material shipments, they are empowering their customers (manufacturers) to make verifiable claims about the percentage of recycled content in their products. This reduces the due diligence burden and non-compliance risk for manufacturers that face mandated minimum recycled content thresholds.
* When consumers see recycled content claims on products then they can **verify** them with confidence. 

## Environmental & Human Welfare Organisations

There are a large number of national and global not-for-profit organisations who's purpose is to promote environmental or human welfare causes. Some "trust marks", such as the WWF panda, have very high global brand recognition. Although these organisations don't have the enforcement teeth of regulators, they can strongly influence product market success when their trust mark is added (or revoked). 

* When influential ESG trust marks establish well-goverened accreditation frameworks and **issue** (or revoke) UNTP accreditation credentials then they are able to participate in the digital trust ecosystem as [trust anchors](../specification/TrustAnchors.md), thereby multiplying the power of their brand to drive sustainable production practices. 

## Consumers

Consumer sentiment around sustainable production is strong and growing with over 70% of consumers in some economies actively choosing sustainable goods where possible.  At the same time cynicism around greenwashing is increasing which acts to devalue sustainability claims.  As greenwashing countermeasures such as UNTP and national regulations become widely adopted, it is reasonable to expect that consumers will become familiar with product passports and ESG verification techniques. 

* When consumers can confidently **verify** the sustainability performance of products simply by scanning barcodes, QR codes or RFID tags then they will be more likely to choose products with verifiable and trustworthy ESG qualities over that that simply make unverifiable claims. When this behaviour is ubiquitous then consumers will have played a pivotal role in combatting greenwashing and winning the [race to the top](https://uncefact.github.io/spec-untp/docs/about/#but-endemic-greenwashing-risks-devaluing-the-incentives).
* When products are also equipped with the UNTP [anti-counterfeiting](../specification/Counterfeiting.md) measures then consumers can not only **verify** ESG performance but also confirm that the performance is associated with an authentic product and not a fake. Producers, manufacturers, brands, and retailers can be confident that their sustainability investments are not devalued by counterfeit products.

## Transport & Logistics Providers

The movement of cargo by sea, air, and land accounts for around [10% of global emissions](https://climate.mit.edu/explainers/freight-transportation) and, unless transport itself becomes more sustainable, will account for the largest fraction of global emissions by 2050. Transport (especially by road) is therefore a key part of the emissions intensity of a product on the market. In the same way that UNTP makes ESG credentials discoverable from product batch identifiers, so UNTP allows ESG credentials for transport services to be discoverable from consignment identifiers such as waybill numbers. But is it the buyer of goods or the seller fo goods that is responsible to include transportation in the ESG footprint? The UNTP answer is that it follows the [INCOTERMS](https://en.wikipedia.org/wiki/Incoterms) - essentially whoever pays for the transport has the responsibility to include the transport in their product footprint. This ensures there are no gaps or double counting and that incentives are appropriately aligned.

* When transport & logistics providers **issue** UNTP transport credentials and link them to consignment identifiers then they are providing their customers with quantifiable and verifiable transport related ESG metrics to include in their product footprint. As producers, manufacturers, brands, and retailers seek to drive improvements in sustainability performance they will be incentivised to choose low emissions transportation services. This will uplift the value of sustainable transport services per tonne-kilometre.

## Financial Institutions

Financial institutions are under increasing pressure from both regulators and the investment community to grant preferential terms for  investment capital to sustainable businesses. The finance industry will increasingly verify sustainable performance via their customer annual reporting according to [IFRS sustainability standards](https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/). Just as financial transactions such as bills, invoices and payments aggregate up to corporate financial statements such as profit & loss and balance sheets, so corporate level annual sustainability metrics are constructed from operational data such as UNTP digital product passports. Furthermore, at consignment level, trade finance instruments such as documentary letters of credit normally require sufficient documentation for goods clearnance to be presented prior to payment release. For cases where goods may be blocked at the border due to non-compliance with ESG regulations, then financial institutions will require ESG compliance evidence prior to releasing funds. 

* When banks can use UNTP product passports and conformity credentials to digitally **verify** ESG compliance for shipments covered by letters of credit then they can more confidently release payment.
* When banks that are providing investment capital on sustainability grounds to businesses that have implemented UNTP then there is a clear line of sight from UNTP-based operational processes to IFRS-based corporate ESG performance, thereby reducing the financial risk associated with the investment.

## Industry Member Associations

There are over 100,000 industry associations world-wide. Most represent a specific industry sector within a specific jurisdiction. These member associations typically provide advocacy on behalf of the community and offer best practice advice. In many cases the associations define quality standards and branding that distinguish their member's products in the marketplace (eg genuine [manuka honey](https://manukaaustralia.org.au/)). These member associations are well positioned to assist their members in navigating the complexity of domestic and international ESG standards and in assisting them to implement the UNTP. When a particular association member engages in fraudulent practices then it can quickly damage the reputation of the entire industry. Therefore, member associations are strongly incentivised to ensure that their membership adheres to quality standards and to eject non-compliant members. This includes supporting the adoption of industry-wide sustainable practices and UNTP as the digital evidence of those practices. 

* Industry member associations may add value to their membership by developing develop UNTP [industry profiles](../extensions/ProfileMethodology.md) that provide their members with targeted implementation guidance that meets the needs of their industry and jurisdiction. 
* Industry member associations may develop training and implementation services, possibly in partnership with local service providers, thereby adding both a valuable service and also a revenue stream for the member association.
* Industry member associations may act as a trusted independent quota managers to counter [mass balance fraud](../specification/MassBalance.md) amongst their membership. The value of this service would be increased if the industry association is accredited by either a national accreditation authority or a global environmental or human welfare organisation.

## Software Developers

Software developers provide the tooling that is needed to implement UNTP because they hold the data that is needed to **issue** UNTP credentials and they will also consume the data from UNTP credentials that are discovered and **verified**. This category includes enterprise resource planning (ERP) systems, ESG management systems, and traceability platforms. By implementing UNTP, software developers are empowering their customers to participate in global transparent supply chains. For large organisations with heavily customised systems, UNTP implementation may be a customer specific project. For smaller organisations that subscribe to off-the-shelf packages, UNTP conformity is more likely to be simply a new feature in a release roadmap. 

* ERP systems are the natural issuers of UNTP product passports and traceability events because they manage the finance and logistics operations around the manufacturing, sales, and shipment of products. 
* ESG management systems are the source of the ESG data such as carbon intensity that will populate UNTP product passports as well as the conformity credentials referenced by the product passport.
* Traceability platforms are used to provide traceability maps of the upstream supply chain. Rather than gathering this data by direct enrolment of upstream actors, UNTP provides a means to gather the same data by following verifiable linked data trails.

The three system types described here may exist in separate software products or may be parts of a more integrated system. Some ERP systems also manage ESG data. Some ESG platforms include traceability functions. It is not unlikely that ERP systems, whether through native product features or acquisition or partnerships, will evolve to offer this integrated set of capabilities to their customers. UNTP defines a simple and implementable standard for software developers to empower their customers to connect into global transparent and sustainable supply chains. 

## Service Providers

The adoption of UNTP by hundreds of millions of micro (under 5 employees) and small (under 50 employees) business will most likely be driven by implementation of UNTP as out-of-the-box capability by their chosen business software systems. However, the adoption of UNTP by tens of millions of medium (under 500 employees) and large (over 500 employees) business will most likely require some business analysis and systems integration investment. To minimise cost and risk, such businesses are likely to seek UNTP implementation support from a marketplace of experienced service providers.

* When service providers such as system integrators develop skills in UNTP implementation then they will be able to offer attractive service packages to their existing customers.  They may also be able to leverage UNTP implementations skills to access new customers and markets.

# Success Measures

Although reduced greenwashing and improved sustainability are the ultimate goals of UNTP, the most direct measure of success is uptake. Therefore, UNTP will measure uptake by counting the number of pledges (i.e. promises to implement) and the number of successfully completed conformity tests (i.e. actual implementations). For UNTP to achieve it's goals, uptake will need to exceed the minimum thresholds shown in the uptake trajectory below.


| Stakeholder type | 2024|| 2026 || 2028 || 2030 ||
| | pledge| implement | pledge| implement | pledge| implement | pledge| implement|
| -- | -- | -- | -- | -- | -- |-- | -- | -- |
|Regulators| |  |  |  |  | |  |  |
|ESG Standards |  |  |  |  |  | |  |  |
|Accreditation & certification|  |  |  |  |  | |  |  |
|Producers & manufacturers|  |  |  |  |  | |  |  |
|Brands & retailers|  |  |  |  |  | |  |  |
|Recyclers & refurbishers|  |  |  |  |  | |  |  |
|Transport & logistics| |  |  |  |  | |  |  |
|Financial institutions|  |  |  |  |  | |  |  |
|Member associations|  |  |  |  |  | |  |  |
|Software developers|  |  |  |  |  | |  |  |
|Service providers|  |  |  |  |  | |  |  |


