---
sidebar_position: 50
title: Chain of Custody
---

import Disclaimer from '../_disclaimer.mdx';

<Disclaimer />

## Overview

Mass balance fraud is a particularly challenging greenwashing vector. It happens when a fraudulent actor buys a small quantity of high ESG integrity inputs (e.g., genuine carbon neutral, organic, deforestation-free cotton) and mixes that input with lower quality alternatives and then sells the full volume of manufactured product (e.g., woven cotton fabric) as sustainable product, re-using the valid credentials from the niche supply. 

The UNTP solution to this problem involves trusted third parties (certifiers or industry associations) to act as *quota managers* that issue "guarantee of origin" credentials (a type of conformity credential). In this model, the guarantee of origin certificate for, say, 10 Tons of cotton fabric can only be issued when the third party has evidence of the purchase of at least 10 Tons of sustainable input materials. The third party will also mark the input batch as consumed (similar to the anti-counterfeiting protocol) so that the valid sustainable input cannot be re-presented to a different third party.

## Chain of Custody Categorizations

Below are four categorizations of supply chain custody with aims of defining how sustainability claims and certified products are managed across supply chains. 

Each categorization balances operational practicalities and assurance in different ways. 


### 1. Identity Preserved (IP)

Under **Identity Preserved**, the exact certified source of the product remains unchanged and unblended throughout the supply chain. Every step, from producer to end-user, tracks and segregates the qualifying quantity so it is never mixed with non-qualifying quantities (or even other qualifying goods from a different source).

#### Benefits

This approach achieves maximum traceability, the strongest assurance, and a direct link back to a specific farm or origin. Its presence within a supply chain facilitates additional sustainability conformance requirements with minimal additional effort.

#### Challenges

Identity Preserved is among the most costly and complex approaches to implement, as it requires physical or instance-level identification at every stage of the supply chain.

#### Example

A bag of coffee beans labeled "single-origin" from a specific farm remains separate from other coffee beans—qualifying or non-qualifying—throughout processing and transport.

### 2. Segregated (SG)

In the **Segregated** model, qualifying quantities and non-qualifying quantities are never mixed. However, qualifying quantities from different certified sources (all meeting the same standard) may be combined. The final product is still 100% qualifying, but it is not guaranteed to come from a single farm or origin.

#### Benefits

This scheme guarantees that the final product contains only qualifying material while allowing flexibility to pool multiple certified batches.

#### Challenges

Still requires physical separation from non-qualifying quantities, which can increase logistics and storage costs.

#### Example

A chocolate manufacturer mixing cocoa beans from several accredited farms, without adding any non-qualifying beans. The resulting cocoa batch is 100% qualifying but not linked to a single farm.


### 3. Mass Balance (MB)

In a **Mass Balance** system, controlled commingling of qualifying quantities and non-qualifying quantities is allowed, as long as the overall volume of qualifying outputs does not exceed the volume of qualifying inputs purchased. Facilities and manufacturers track quantities over time to ensure that the percentage (or total amount) of "sustainable" outputs matches the actual qualifying inputs in the system.

#### Benefits

Mass Balance allows for the mixing of qualifying and non-qualifying goods at any stage in the supply chain. When such mixing occurs, only the equivalent quantities of qualifying goods can be sold as "Mass Balanced" products.

This approach is well-suited for complex supply chains and provides flexibility for manufacturers to source goods sustainably, even when certain constraints exist, such as:

- Facilities unable to keep products separate during transportation or storage.
- Minimum quantities required for manufacturing or production not being fully met by qualifying quantities.
- The cost of keeping qualifying and non-qualifying materials separate leading to non-competitive pricing and hindering market development of certified materials.
  
#### Challenges

Dilution occurs at the physical level, meaning end-users and buyers cannot be certain that their specific product is made from qualifying materials—only that an equivalent volume of qualifying material was used elsewhere in the process.

### Book-and-Claim (BC)

In **Book-and-Claim** models, sustainability attributes (e.g., "deforestation-free," "carbon-neutral") are fully decoupled from the physical flow of goods. A producer meeting the standard "books" or issues credits into a registry, and a buyer can purchase (or "claim") those credits even if the physical product they receive is not the certified batch or instance. 

#### Benefits

Book-and-Claim simplifies sustainable sourcing in complex supply chains where full traceability across all actors is prohibitively expensive. It provides a pathway for small and medium enterprises (SMEs), smallholder farmers, and similar entities to participate in sustainability initiatives without requiring their local procurers (e.g., mills, aggregators, or intermediaries) to adopt traceability or compliance practices.

**For producers**:

- SMEs or smallholder farmers can "book" credits for certified production and sell their goods into local, uncertified supply chains as usual. These credits can be transacted globally, overcoming geographic limitations and enabling access to new markets and potential premium pricing.

**For buyers**:

- When uncertified inputs are used in the production of final goods, purchasing or "claiming" credits allows buyers to offset the environmental or social impact of those uncertified inputs.

The number of credits a producer can sell is strictly governed by the certification standard backing the credits they "book." This enables sustainable production to extend its reach even in supply chains lacking comprehensive traceability infrastructure.

#### Challenges

A trusted registry is essential to ensure that no double-counting or over-issuance of credits occurs, as the decoupled nature of this model requires robust governance and verification mechanisms.

## Transparency and Evidence 

As always, a balance between the demands for transparency (more supply chain visibility means it is easier to prove either IP, SG, MB, or BC) and confidentiality (share too much data, and risk exposing commercial secrets) is required. As always a key UNTP principle is allowing all supply chain actors to be able to choose their own balance between transparency and confidentiality. 

The following address the three of the four models proposed against varying levels of transparency. "Book and Claim" due to it's unique nature of being decoupled from physical products is outlined separately. 

### Discoverable evidence 

Discoverable evidence is when data supporting either IP, SG, or MB are discoverable via UNTP access methods. This could be via one of the many methods outlined in "Decentralized Access Control".

Under this method, the querying party (i.e. a buyer of qualifying goods) discovers information to sufficiently prove the chain of custody model.


**TODO: Would this ever work? What is stopping the manufacturer creating multiple passports for different batches, each referencing the same input products? Is a third party always needed?**

#### Identity Preserved (IP)

The buyer discovers sufficient data proving the product purchased originated from a single origin with relevant credentials linked. 

##### Example

A meat processor discovers a transparency graph for individual cattle. The processor (via decentralised access control methods) can assert single origin and evidence of the sustainability credential of interest (i.e. deforestation free.)

#### Segregated (SG)

The buyer discovers data proving the purchased quantities qualifies against the sustainability scheme of interest. 

##### Example

A brewery is purchasing a large quantity "carbon-neutral" barley from a bulk-handler or aggregator. Evidence is in the transparency graph that accounts for all quantities of barley from the respective sources and origins, and that all quantities have the relevant credential associated with them. 

#### Mass Balance (MB)

TODO?


### Third Party Attestations 

Commercial sensitivities or purchasing requirements from the buyer are likely to introduce the need of a third party making a attestation. This protects the sellers commercial interests of procured volumes and sources, it also appeases the buyers concerns of the seller double counting, or performing fraudulent activities. 

The trusted third party collects evidence to support either IP, SG, or MB, are issues a credential to the seller attesting their compliance.

**TODO:** What is the relationship between this third party making the claims against the original sustainability credential issuer? How can they reference a schema, without directly interacting with that issuer? This party is just attesting supply chain practices, not the sustainability credential of interest. 

#### Identity Preserved (IP)

The credential issued by the third party attests that:
- Identity Preserved practices have occurred. 
- The credential schema of the "original" sustainability credential for the qualifying goods. 

```json 
{
    "category": "identityPreserved", 
    "credentials": [{ 
        "schema": "...",
        "hashOfSource": "..."
     }]
}
```

- `schema` is a reference to the original sustainabilities credential schema, allowing the verifier/buyer to know what claims are being attested.
- `hashOfSource` is a hash of the original sustainability credential, in case of a audit. 

#### Segregated (SG)

The credential issued by the third party attests that:

- Segregation practices have occurred. 
- The credential schema of the "original" sustainability credential for the qualifying goods. 

```json
{
    "category": "segregated",
    "credentials": [
        {
            "schema": "...",
            "hashOfSource": "..."
        }
    ]
}
```

- `schema` is a reference to the original sustainabilities credential schema, allowing the verifier/buyer to know what claims are being attested.
- `hashOfSource` is a hash of the original sustainability credential, in case of a audit. 

#### Mass Balance (MB)

The credential issued by the third party attests that:

- Mass balance evidence has been collected
- The credential schema of the "original" sustainability credential for the qualifying quantities 
- The percentage of output quantities that can be claimed against the schema


```json
{
    "method": "massBalance",
    "credentials": [
        {
            "schema": "...",
            "hashOfSource": "...",
            "startDateTime": "...",
            "endDateTime": "..."
        }
    ]
}
```

In the schema above,

- `schema` is a reference to the original sustainabilities credential schema, allowing the verifier/buyer to know what claims are being attested.
- `hashOfSource` is a hash of the original sustainability credential, in case of a audit. 
- `startDateTime` and `endDateTime` are the audit period mass balance was determined over. 

TODO:
- Time period of mass balance observations? E.g. a rolling grain bunker system with definitive start or end.
- Can the "evidence" mechanism hold references to the input DPP, DCC used in accessing mass balance? 

## Book and Claim 

Due to nature of **Book and Claim** in that the sustainability credential is entirely decoupled from the physical goods, different challenges arise. 

1. Credentials holders need a method to "book" quantities of certified goods that they certified to do. 
2. Credential holders need to be able to "transfer" these credits to buyers globally. 
3. Credential holders cannot "book" the same quantity multiple times, or "transfer" the same credit to multiple buyers. 
4. Buyers of these credits must be able to subsequently transfer to future buyers, without the original party who created the credential knowing. 
4. Holders of credits must be able to "retire" when a quantity associated with the credit is used in the manufacturing process. 
   - Example, a credit represents 1kg of carbon-neutral wheat, and a miller consumes 1kg of non-qualifying wheat. The credit is retired, and the miller can claim the sustainability credential for 1kg of the flour produced.
5. Manufactures consuming credits can provide evidence to their buyers of credit ownership, and retirement in their manufacturing process.
   - Example, the miller producing the flour can show evidence to buyers that equivalent credits were purchased for it's production, and also retired.

### Implementation 

Below is a potential implementation and workflow, following a use case of a wheat producer receiving a carbon-neutral certification from a trust anchor, **tokenizes** that credential against a specific quantity of barley produced, and transfers ownership of that credit to a miller outside their supply chain or geographic region. The miller subsequently retired the credit after milling milled an equivalent of non-qualifying wheat and presenting evidence to buyers of their flour that appropriate credits were used. 

#### 1. Credential issuance 

A certifier issues a sustainability credential to an entity, attesting that it meets specific sustainability requirements. The credential also specifies the allowable production quantities that can be "booked" (converted into credits) under the claim.

Example: A barley producer is certified as carbon-neutral and receives a credential confirming this certification. The credential includes an allowance to generate 100,000 kg of carbon-neutral credits that can be booked and traded.

#### 2. "Booking" Credits

The barley producer tokenizes credits against a register (potentially an IDR operated by, or on behalf of, the certifier). By doing so, the producer creates a Verifiable Credential (VC) that reflects the quantity of certified barley.

```json 
{
    
    "credentialSubject": {
        "id": "did:example:barleyproducer",
        "quantity": {
            "quantity": 1,
            "uom": "KGM"
        },
        "schema": "https://carboneutralbarley.com/schema.json",
        }
    "proof": { ... }
}
```

This VC enables the barley producer to present evidence of their certified claim to potential buyers. Buyers can independently verify the credential’s authenticity and confirm that the credit is genuinely held by the barley producer.

#### 3. Transferring (selling) credits

The barley producer wishes to sell the credit to a buyer in a different geographic region. 

To initiate the transfer:

1. The seller submits a transfer request to the register operator (e.g., the IDR system), providing:
   1. The buyer's DID.
   2. A reference to the specific credit(s) being transferred.
   3. A digital signature generated using the barley producer's private key.

2. The register operator verifies the transfer request by:
   1. Authenticating the barley producer and buyer DIDs.
   2. Confirming the validity of the credit(s) referenced in the request.
   
3. Upon approval:
   1. Ownership of the credit is transferred to the buyer (the miller).
   2. The original credential held by the barley producer is revoked.
   3. The miller receives a new credential representing the transferred credit.

The miller can receive this credential for the credit purchased by making a request using did authentication.


#### 4. Retiring credits

Once the miller uses non-qualifying wheat in the milling process, they retire the credit to ensure its sustainability attributes are appropriately accounted for.

Steps to retire the credit:

1. The miller submits a retirement request to the IDR, authenticated using their DID. The request references the specific credit being retired.
2. The IDR processes the request, marking the credit as retired and preventing it from being reused or double-counted.
3. The miller receives evidence of retirement, potentially in the form of another Verifiable Credential that references the original.

This retirement evidence can then be linked to the Digital Product Passport (DPP) for the flour, enabling downstream buyers to verify:
- The schema associated with the original credit.
- The identity of the certifier who issued the initial credential to the barley producer.
- The integrity of the credit lifecycle, including its transfer and retirement, validated by the IDR operator to prevent double counting.

### Outcomes

- The IDR operator, as a trusted third party, ensures:
  - Credit quotas are not exceeded by the barley producer
  - Double counting does not occur
  - More than one party holds the same "credit" at the same time
  - Credits are properly retired.
- 

**TODO**: 
- sketch out the schema for these different credentials, how is everything linked?
- is the IDR the appropriate spot for this "registry"
- what other methods could work? 
- diagrams!


