---
sidebar_position: 2
title: Link Resolution
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

# Link Resolution

On connecting from main DPP to supporting Credentials, upstream in the supply chain

`RelatedLink`

`https://schema.org/relatedLink`

```
"linkRelationship": "digitalProductPassport"
```

## Verifier

Verifier-side requirements.

### DPP Data Graph Collection

Consumers must be presented all relevant product information with minimal effort.
DPP Verifiers MUST follow all linked VCs to build the complete DPP graph.

### Issuer Policies

Consumers cannot be expected to make informed assertions about a global supply chain network.

Collections of "which issers are relevant for which assertions" CAN be implemented by a DPP Verifier, turning a complex hypergraph analysis into a boolean good/bad indicator at the point of sale.

Consumers may choose between policies, as per their preferences, for example "strict scope 3 carbon neutrality".
