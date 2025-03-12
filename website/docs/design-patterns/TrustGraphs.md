---
sidebar_position: 35
title: Transparency Graphs
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Overview

The sustainability footprint of a finished product is the aggregation of its components and processes through the value chain. Verification of sustainability claims therefore involves assessing a bundle of linked credentials (aka a "transparency graph") drawn from all or part of a value chain. Whilst each credential may be valid in its own right, one challenge is verifying the context of related credentials. For example, a conformity assessment body that is accredited to test strength of structured steel might not be accredited to issue emissions intensity certificates. A technically valid emissions certificate linked to a technically valid accreditation certificate that has a different scope would be fraudulent. To address this problem, the UNTP defines a simple method to verify the contextual scope of linked credentials. This provides a mechanism to verify a linked graph of data at a layer above credential verification.

## Trust Chains

In the world of verifiable credentials, it is crucial that such credentials are issued by trusted and accredited entities. Consider the scenario where GHG emissions of a product result in a GHG emissions tax that must be paid. In such cases, the potential for fraud is significant, as some manufacturers might falsely claim zero GHG emissions in their digital product passport or in a separate GHG emissions credential. To combat this, verifiers must be able to construct a chain of trust.  For example

* A manufacturer issues a declaration in a UNTP Digital Product passport (DPP) that states an emissions footprint for a given product ID. If the verifier trusts the manufacturer then this may be sufficient. But often a third party attestation is needed.
* A third party Conformity Assessment Body (CAB) issues an attestation as a UNTP Digital Conformity Credential (DCC) about the same product ID that confirms the emissions footprint. If the verifier knows and trusts the CAB then this may be sufficient. But there are thousands of CABs and so it is very possible that the verifier does not know the specific CAB. 
* A national accreditation authority issues an endorsement as a UNTP Digital Identity Anchor (DIA) which states that the CAB is accredited to issue certifications under a recognised scheme such as the [GHG Protocol](https://ghgprotocol.org/). The number of accreditation authorities is only a little larger than the number of countries, so verifiers only need a short list of accreditation authorites ("trust anchors") in order to trust the chain from product manufacturer -> CAB -> national authority.
* Most national acreditation authorities are members of a global association such as [ILAC](https://ilac.org/). If ILAC were to issue a credential attesting that national authority is a member then there is a chain of trust from manufacturer -> CAB -> national authority -> ILAC. 

There are other trust chains that can be followed to anchor trust to a national or global authority that follows rigorous processes to manage accreditations and memberships. For example a battery passport may link to a certifier who is, in turn, accredited by the [global battery alliance](https://www.globalbattery.org/). Verifiers of credentials should follow these linked credential chains until a trusted entity is reached. That could be at the first step or after several steps.  

## Transparency Graphs

A transparency graph is a linked set of identified nodes such as Product, Location, Facility, Party, Standard, Regulation, Criteria, Declaration, Attestation, or Endorsement. The data to construct a transparency graph comes from multiple individual credentials. When multiple credentials identify the same entity (eg a business, a facility, a product) then the graph will contain meaningful connections that can be used to make valuable verifications such as "product XYZ has a GHG assessment from CAB ABC". UNTP is designed to simplify the task of creating linked data graphs because UNTP credentials are represented as a collection of uniquely identified entities that are ready to be added to a graph.

* A Digital Product Passport is a set of declarations (claims) against sustainability criteria defined in regulations or standards - made by a manufacturer party about a given product that is manufactured at a facility in a defined location.
* A Digital Conformity Credential is an attestation made by an endorsed confomrity assessment body - which includes one or more assesments of a list of identified products or facilities against specific criteria.

Although these two credential types have different structures, they are assembled from the same core vocabulary building blocks. This allows a supply chain transparency system to construct a transparency graph from a stream of DPPs and DCCs. Claims about a product found in a DPP can be linked to assessment of the same product in DCC when both credentials have matching product and criteria identifiers. 

![Transparency graphs](TransparencyGraphs.png)

## JSON-LD Representation 

TBA

## SCHACL Graph verification

TBA
