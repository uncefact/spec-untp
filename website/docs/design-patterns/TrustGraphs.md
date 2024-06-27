---
sidebar_position: 35
title: Trust Graphs
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Overview

The greenhouse gas (GHG) emissions of a finished product is the aggregation of it's components and processes through the value chain. Verification of GHG emissions claims therefore involves assessing a bundle of linked credentials (aka a "trust graph") drawn from all or part of a value chain. Whilst each credential may be valid in it's own right, one challenge is verifying the context of related credentials. For example, a conformity assessment body that is accredited to test strength of structured steel might not be accredited to issue emissions intensity certificates. A technically valid emissions certificate linked to a technically valid accreditation certificate that has a different scope would be fraudulent. To address this problem, the UNTP defines a simple method to verify the contextual scope of linked credentials. Essentially this provides a mechanism to verify a linked graph of data at a layer above individual credential verification.

## Trust Graphs

## Trusted Issuers List
In the world of verifiable credentials, it is crucial that such credentials are issued by trusted and accredited entities. Consider the scenario where GHG emissions of a product result in a GHG emissions tax that must be paid. In such cases, the potential for fraud is significant, as some manufacturers might falsely claim zero GHG emissions in their digital product passport or in a separate GHG emissions credential.

To combat this, trusted GHG emissions claim issuers must be accredited and represented digitally. This is where the trusted issuers list becomes essential. It serves as a dynamic electronic register that tracks all issuers who have received accreditation for CO2 emissions calculations from a recognized authority, such as the Global Battery Alliance. This ensures that only verified and trustworthy entities can issue these critical credentials, maintaining integrity and trust in the system. Such a trusted issuers list can for example be implemented by adding all DIDs of trusted GHG emissions claim issuers to a public blockchain, such as Ethereum. 

When a GHG emissions VC holder presents their credential to a verifier, both parties use a digital wallet for this exchange. This software enables its owner to securely acquire, store, manage, and verify VCs. The verifier’s wallet is responsible for automatically scrutinizing the incoming VC for authenticity. There are several checks a VC must pass, but here we will focus on issuer verification.

Upon receipt, the wallet locates the field containing the credential issuer’s unique decentralized identifier (DID) within the VC, then compares this information against the entries in the trusted issuers list. The issuer is deemed legitimate only if there is a match. If the GHG emissions VC also passes all other checks, the wallet will accept it as legitimate, allowing the verifier to trust its claims.

## JSON-LD Representation 

## SHACL Graph verification
