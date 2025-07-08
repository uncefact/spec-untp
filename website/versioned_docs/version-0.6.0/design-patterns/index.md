---
sidebar_position: 4
title: Best Practices
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

Design patterns are non-normative but provide best practice guidance for UNTP implementers.


## Trust Graphs

The ESG footprint of a finished product is the aggregation of it's components and processes through the value chain. Verification of ESG claims therefore involves assessing a bundle of linked credentials (aka a "trust graph") drawn from all or part of a value chain. Whilst each credential may be valid in it's own right, one challenge is verifying the context of related credentials. For example, a conformity assessment body that is accredited to test strength of structured steel might not be accredited to issue emissions intensity certificates. A technically valid emissions certificate linked to a technically valid accreditation certificate that has a different scope would be fraudulent. To address this problem, the UNTP defines a simple method to verify the contextual scope of linked credentials. Essentially this provides a mechanism to verify a linked graph of data at a layer above individual credential verification.

## Data Carriers

Digital data needs to be linked to the physical product it describes and should be discoverable through the identifiers printed on that product serial or batch number. For high volume goods and easy / reliable discovery, these identifiers are already typically represented as barcodes, matrix codes, QR codes, or RFID encoded data. UNTP supports the use of these existing data carriers. A basic UNTP principle is that if you have a product then you should be able to find ESG data about that product even when the identifier is not a web link. Therefore, the UNTP defines a generalised protocol to allow any identifier scheme to be consistently resolvable so that product passports and other data can always be accessed from the identifier of the product. The UNTP also defines a specific QR based data carrier format for use on paper/PDF versions of conformity credentials or other trade documents that provides secure access to credentials in a way that is both human and machine readable.  This provides a simple but powerful mechanism to facilitate uptake of digital solutions alongside existing paper/PDF based frameworks.

## Anti-Counterfeiting

As the value of genuinely sustainable goods increases, so do the incentives to sell fake goods as the real thing. UNTP defines a simple and decentralised anti-counterfeiting protocol that can be implemented by any producer at very low cost. It builds upon the W3C DID standard by issuing a unique DID (and corresponding keypair) for every serialised (individual or batch) product. The DID (and therefore the public key) is discoverable from the product serial number using the standard link resolver protocol. The item/batch level DID is cryptographically linked to the product class level DID The private key is discoverable from a QR code hidden inside the product packaging. Scanning the QR provides the necessary key to update the individual serialised product public status to indicate consumption. Attackers that copy genuine serial numbers will find that their products are quickly identifiable as fakes. Attackers that try to create new serial numbers will not be able to create valid links to the genuine product class. The UNTP anti-counterfeiting protocol provides additional value/incentive for UNTP uptake beyond ESG integrity.

## Mass Balance

Mass balance fraud is a particularly challenging greenwashing vector. It happens when a fraudulent actor buys a small quantity of high ESG integrity inputs (eg genuine carbon neutral, organic, deforestation free cotton) and mixes that input with lower quality alternatives and then sells the full volume of manufactures product (eg woven cotton fabric) as sustainable product, re-using the valid credentials from the niche supply. The UNTP solution to this problem involves trusted third parties (certifiers or industry associations) to act as quota managers that issue "guarantee of origin" credentials (a type of conformity credential). In this model, the guarantee of origin certificate for 10 Tons of cotton fabric (for example) can only be issued when the third party has evidence of the purchase of at least 10 Tons sustainable input materials. The third party will also mark the input batch as consumed (in a similar way to the anti-counterfeiting protocol) so that the valid sustainable input cannot be re-presented to a different third party.

## ESG Rules

Yet another greenwashing attack vector is to deliberately apply incorrect rules to the determination of criteria such as emissions intensity. The verification question in this case is "yes, but how do I know you calculated it right?". The UNTP proposes an independent calculator service offered either by the standards body or regulator that defined the rules or by an accredited service provider. The Supply chain actor presents raw data to the calculator which returns with a signed credential confirming that the rules were correctly applied. This protocol has an additional benefit for legitimate actors if widely adopted by rules authorities - which is to significantly simplify the assessment of compliance against multiple different rules. By separating observed facts from the assessment of those facts against specific rules then it becomes relatively simple to test compliance against multiple standards and regulations.

