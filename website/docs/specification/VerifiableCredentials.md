---
sidebar_position: 28
title: Verifiable Credentials
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

# Overview

The World-Wide-Web Consortium (W3C) has defined a standard called [Verifiable Credentials (VCs)](https://www.w3.org/TR/vc-data-model-2.0/). A VC is a portable digital version of everyday credentials like education certificates, permits, licenses, registrations, and so on. VCs are digitally signed by the issuing party and are tamper proof, privacy preserving, revokable, and digitally verifiable. The UN has previously assessed this standard and has recommended it's use for a variety of cross border trade use cases in a recent [white paper](https://unece.org/trade/documents/2023/10/white-paper-edata-verifiable-credentials-cross-border-trade). VCs are inherently decentralised and so are an excellent fit for UNTP which recommends that passports, credentials, and traceability events are all issued as W3C VCs. A related W3C standard called [Decentralised Identifiers (DIDs)](https://www.w3.org/TR/did-core/) provides a mechanism to manage the cryptographic keys used by verifiable credentials and also to link multiple credentials into verifiable trust graphs. DIDs are not the same as the business / product / location identifiers maintained by authoritative agencies - but can be linked to them.

# Requirements

MUST implement the [W3C-VC-DATA-MODEL] using the JSON-LD Compacted Document Form
MUST implement the enveloping proof mechanism defined in [W3C-VC-JOSE-COSE] with JOSE (Section 3.1.1)
MUST implement [W3C-BITSTRING-STATUS-LIST] for credential status checks including revocation checks
MUST implement [W3C-DID-CORE]
MUST implement the did:web method as an Organizational Identifier

# Normative References

[W3C-VC-DATA-MODEL] W3C Verifiable Credentials Data Model
https://www.w3.org/TR/vc-data-model-2.0/
[W3C-VC-JOSE-COSE] W3C Securing Verifiable Credentials using JOSE and COSE
https://www.w3.org/TR/vc-jose-cose/
[W3C-BITSTRING-STATUS-LIST] W3C Bitstring Status List
https://www.w3.org/TR/vc-bitstring-status-list/
[W3C-DID-CORE] W3C Decentralized Identifiers
https://www.w3.org/TR/did-core/
