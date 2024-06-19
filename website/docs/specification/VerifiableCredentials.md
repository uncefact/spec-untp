---
sidebar_position: 28
title: Verifiable Credentials
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

# Overview

The World-Wide-Web Consortium (W3C) has defined a standard called [Verifiable Credentials (VCs)](https://www.w3.org/TR/vc-data-model-2.0/). A VC is a portable digital version of everyday credentials like education certificates, permits, licenses, registrations, and so on. VCs are digitally signed by the issuing party and are tamper proof, privacy preserving, revocable, and digitally verifiable. The UN has previously assessed this standard and has recommended it's use for a variety of cross border trade use cases in a recent [white paper](https://unece.org/trade/documents/2023/10/white-paper-edata-verifiable-credentials-cross-border-trade). VCs are inherently decentralized and so are an excellent fit for UNTP which recommends that passports, credentials, and traceability events are all issued as W3C VCs. A related W3C standard called [Decentralized Identifiers (DIDs)](https://www.w3.org/TR/did-core/) provides a mechanism to manage the cryptographic keys used by verifiable credentials and also to link multiple credentials into verifiable trust graphs. DIDs are not the same as the business / product / location identifiers maintained by authoritative agencies - but can be linked to them.

# Business requirements for UNTP application of VCs

Verifiable Credentials technology is one of the key tools in the UNTP anti-green-washing toolbox. But there are many different technical implementation options which presents an interoperability risk - namely that credentials issued by one party will not be understandable or verifiable by another party. UNTP will not design new technical standards as that is the role of technology standards bodies such as W3C or IETF. However, be recommending the use of the narrowest practical set of technical options for a given business requirement, the UNTP can enhance interoperability.

A key design principle that is applicable to decentralized ecosystems such as UNTP recommends is [Postel's robustness principle](https://en.wikipedia.org/wiki/Robustness_principle) which, for UNTP, means that **an implementation should be conservative in its sending (issuing) behavior, and liberal in its receiving (verifying) behavior.** That is because the sustainability evidence that is discovered in any given value chain may be presented as many different versions of W3C VCs, or ISO mDL credentials, or Hyperledger Anoncreds, or as human readable PDF documents. Being as open as possible in what is received and verified will allow sustainability assessments to be made over a wide set of evidence. Conversely, choosing a narrow set of ubiquitous technology options when issuing UNTP credentials such as digital product passports will simplify the task of verifiers and minimise costs for the entire ecosystem.

| ID    | Name           | Requirement Statement                                                                                                                                                                                                                             | Solution Mapping                        |
| ----- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| VC-01 | Integrity      | VC technology recommendations must support tamper detection, issuer identity verification, and credential revocation so that verifiers can be confident of the integrity of UNTP credentials.                                                     | All VC options support this requirement |
| VC-02 | Compatibility  | VC technology recommendations for issuing UNTP credentials should be as narrow as practical and should align with the most ubiquitous global technology choices so that technical interoperability is achieved with minimal cost                  | [Basic profile](#vc-basic-profile)      |
| VC-03 | Human readable | VC technology recommendations must support both human readable and machine readable credentials so that uptake in the supply chain is not blocked by actors with lower technical maturity.                                                        | [Render method](#render-method)         |
| VC-04 | Discovery      | VC technology recommendations must support the discovery and verification of credentials from product identifiers so that verifiers need not have any a-priori knowledge of or relationship to either the issuers or the subjects of credentials. | Presentations                           |
| VC-05 | Semantics      | VC technology recommendations must support the use of standard web vocabularies so that data from multiple independent credentials can be meaningfully aggregated.                                                                                | Vocabularies                            |
| VC-06 | Performance    | VC technology recommendations should value performance so that graphs containing hundreds of credentials of any size can be traversed and verified efficiently.                                                                                   | [Basic profile](#vc-basic-profile)      |
| VC-07 | Compliance     | VC technology recommendations must meet any technology based regulatory requirements that apply in the countries in which credentials are issued or verified.                                                                                     | [Basic profile](#vc-basic-profile)      |
| VC-08 | Openness       | VC DID method recommendations must not drive users towards closed ecosystems or proprietary ledgers so that there is no network effect coercion towards proprietary ledgers.                                                                      | [DID methods](#did-methods)             |
| VC-09 | Portability    | VC DID method recommendations must allow users (issuers) to move their DID documents between different service providers so that long duration credentials can remain verifiable even when issuers change service providers.                      | [DID methods](#did-methods)             |
| VC-10 | Evolution      | VC technology is evolving and UNTP recommendations must evolve as newer tools and versions become ubiquitous                                                                                                                                      | Roadmap                                 |

# VC basic profile

The VC basic profile is designed to be as simple, lightweight, and interoperable as possible. A conformant implementation

- MUST implement the [W3C VC Data Model v1.1](https://www.w3.org/TR/vc-data-model/) using the JSON-LD Compacted Document Form
- SHOULD implement the [W3C VC Data Model v2.0](https://www.w3.org/TR/vc-data-model-2.0/) using the JSON-LD Compacted Document Form
- MUST implement [W3C VC Bitstring Status List](https://www.w3.org/TR/vc-bitstring-status-list/) for credential status checks including revocation checks
- MUST implement [W3C-DID-CORE](https://www.w3.org/TR/did-core/) using DID methods defined in [DID methods](#did-methods)
- MUST implement the enveloping proof mechanism defined in [W3C VC JOSE / COSE](https://www.w3.org/TR/vc-jose-cose/) with JOSE (Section 3.1.1)
- SHOULD implement the embedded proof mechanism defined in [W3 Data Integrity proof](https://www.w3.org/TR/vc-data-integrity/)

# DID methods

There are a large number of did methods listed in the [W3C did register](https://www.w3.org/TR/did-spec-registries/#did-methods). It is reasonable to expect that this proliferation of did methods will consolidate to a much smaller number of did methods, each designed to meet a specific business need. In future the UNTP may provide a did method decision tree with different methods for different use cases (eg legal entities vs products). In the meantime, a conformant implementation

- MUST implement the [did:web method](https://w3c-ccg.github.io/did-method-web/) as an Organizational Identifiers
- SHOULD implement the did:web method using the web domain of the issuer to avoid portability challenges.

> Note that there is activity within the VC technical community to define new did methods that achieve the ubiquity of did:web whilst still maintaining portability across web domains. This work may impact UNTP did method recommendations.

# Render Method

To support uptake across supply supply chain actors with varying levels of technical maturity, human rendering of digital credentials is essential. A conformant implementation

- SHOULD implement consumer-oriented credential rendering such as HTML, SVG, PDF, or [VC HTML Rendering Method](https://w3c-ccg.github.io/vc-render-method/) using a hash-linked external rendering template.

# Presentations

Verifiable Presentations (VP) are widely used in the verifiable credentials ecosystem to support holders to combine one or more credentials in a digital wallet and then present them for in-person or online verification purposes. The VP is signed by the holder did and so provides a holder binding mechanism. In UNTP supply chain implementations, the subject of most claims is an inanimate object (eg bar-coded goods) and digital credentials about the goods are discovered by any party that has access to the goods. The box of goods does not create verifiable presentations on demand and the binding is to the identity of the goods. A conformant UNTP implementation

- MUST issue and publish product passports, product conformity credentials, and traceability events as verifiable credentials and MUST include the identifier of the goods within the VC subject.
- MAY exchange these and any other credentials as verifiable presentations in wallet-to-wallet transfers or any other method.

# Vocabularies

A shared understanding of the meaning of claims made in verifiable credentials is essential to interoperability. To this end, conformant UNTP implementations

- MUST use the [JSON-LD](https://www.w3.org/TR/vc-data-model/#json-ld) syntax for the representation of data in all issued credentials.
- MUST implement the UN/CEFACT web vocabulary](https://vocabulary.uncefact.org/) JSON-LD @context and schema for Digital Product Passports, Conformity Credentials, traceability events, and identity credentials.
- SHOULD implement widely used industry vocabularies such as [schema.org](https://schema.org/) or [GS1 web vocabulary](https://www.gs1.org/voc/) as a first choice for UNTP extensions requiring terms not in the UN vocabulary.
- MAY use any other published JSON-LD vocabulary for any other industry or country specific extensions.

# Roadmap

Future versions of this specification will

- Provide richer guidance on did methods via a decision tree that helps to select the right method for the right purpose
- Provide guidance on selective redaction methods to better support confidentiality goals.
- Provide timelines for transition between versions of technical specifications (eg when VCDM 2.0 will change from SHOULD support to MUST support)
