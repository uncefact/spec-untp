---
sidebar_position: 3
title: Best Practices
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

Design patterns are non-normative but provide best practice guidance for UNTP implementers.

## Trust Anchors 

UNTP credentials will include identifiers of products, locations or businesses.  UNTP credentials will also include ESG performance claims like emissions intensity values. But how can a verifier of these identifiers or ESG claims be confident that the claims are true and that they are made by the genuine party at a verifiable location? Trust anchors are national or international authorities that typically run existing business or product registration, certification, accreditation, or other high integrity processes. Examples of trust anchors include national regulators that govern things like land ownership or business registrations. Another example are the national accreditation bodies that audit and accredit certifiers to issue third party assessments. UNTP depends on trust anchors to add digital integrity to ESG claims and identities by linking them to the authority under which they are made. In essence, UNTP defines a protocol for existing trust anchors to continue doing what they have always done, but in a digitally verifiable way.

## Trust Graphs

The ESG footprint of a finished product is the aggregation of it's components and processes through the value chain. Verification of ESG claims therefore involves assessing a bundle of linked credentials (aka a "trust graph") drawn from all or part of a value chain. Whilst each credential may be valid in it's own right, one challenge is verifying the context of related credentials. For example, a conformity assessment body that is accredited to test strength of structured steel might not be accredited to issue emissions intensity certificates. A technically valid emissions certificate linked to a technically valid accreditation certificate that has a different scope would be fraudulent. To address this problem, the UNTP defines a simple method to verify the contextual scope of linked credentials. Essentially this provides a mechanism to verify a linked graph of data at a layer above individual credential verification.

## Confidentiality

There is a balance between the demands of transparency (more supply chain visibility means it's harder to hide greenwshing) and confidentiality (share too much data and you risk expososing commercial secrets). A key UNTP principle is that every supply chain actor should be able to choose their own balance between transparency and confidentiality. To achieve this, UNTP defines six data confidentiality patterns with different degrees of data protection so that they can be appropriately combined to meet the confidentiality goals of each party. This includes the ability to selectively redact data from credentials received from upstream suppliers before passing them on to downstream buyers - without affecting the cryptographic integrity of the data. 

## Counterfeiting

As the value of genuinely sustainable goods increases, so do the incentives to sell fake goods as the real thing. UNTP defines a simple and decentralised anti-counterfeiting protocol that can be implemented by any producer at very low cost. It builds upon the W3C DID standard by issuing a unique DID (and corresponding keypair) for every serialised (individual or batch) product. The DID (and therefore the public key) is discoverable from the product serial number using the standard link resolver protocol. The item/batch level DID is cryptographically linked to the product class level DID The private key is discoverable from a QR code hidden inside the product packaging. Scanning the QR provides the necessary key to update the individual serialised product public status to indicate consumption. Attackers that copy genuine serial numbers will find that their products are quickly identifiable as fakes. Attackers that try to create new serial numbers will not be able to create valid links to the genuine product class. The UNTP anti-counterfeiting protocol provides additional value/incentive for UNTP uptake beyond ESG integrity.

## Mass Balance

Mass balance fraud is a particularly challenging greenwashing vector. It happens when a fraudulent actor buys a small quantity of high ESG integrity inputs (eg genuine carbon neutral, organic, deforestation free cotton) and mixes that input with lower quality alternatives and then sells the full volume of manufactures product (eg woven cotton fabric) as sustainable product, re-using the valid credentials from the niche supply. The UNTP solution to this problem involves trusted third parties (certifiers or industry associations) to act as quota managers that issue "guarantee of origin" credentials (a type of conformity credential). In this model, the guarantee of origin certificate for 10 Tons of cotton fabric (for example) can only be issued when the third party has evidence of the purchase of at least 10 Tons sustainable input materials. The third party will also mark the input batch as consumed (in a similar way to the anti-counterfeiting protocol) so that the valid sustainble input cannot be re-presented to a different third party.

## ESG Rules

Yet another greenwashing attack vector is to deliberately apply incorrect rules to the determination of criteria such as emissions intensity. The verification question in this case is "yes, but how do I know you calculated it right?". The UNTP proposes an independent calculator service offered either by the standards body or regulator that defined the rules or by an accredited service provider. The Supply chain actor presents raw data to the calculator which returns with a signed credential confirming that the rules were correctly applied. This protocol has an additional benefit for legitimate actors if widely adopted by rules authorities - which is to significantly simplify the assessment of compliance against multiple different rules. By separating observed facts from the assessment of those facts against specific rules then it becomes relatively simple to test compliance against multiple standards and regulations.

## GS1 Binding

The UNTP is agnostic of any technology or any identifier system. Nevertheless, GS1 is by far the most widely used scheme for product identification, particularly at the downstream / consumer end of the value chain. Billions of unique product/shipment identifiers have been issued and over 5 billion product barcode scans happen around the world every day. UNTP does not require any actor to adopt GS1 standards and identifiers, but it certainly must facilitate existing GS1 users to adopt the UNTP. To this end, the UNTP defines a specific binding that shows how existing GS1 users can leverage their existing investments when implementing the UNTP.