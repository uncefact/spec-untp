---
sidebar_position: 2
title: Digitial Product Passport
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

# Digitial Product Passport

DPP Verifiable Credential

### Supported VC standard

W3C Verifiable Credential 1.1 or 2.0

https://www.w3.org/TR/vc-data-model-2.0/

### Data Model

DPP Data Schema(s)

```yaml
title: Digital Product Passport Credential
description: Digital Product Passport.
type: object
properties:
  '@context':
    type: array
    readOnly: true
    const:
      - https://www.w3.org/2018/credentials/v1
      - https://w3id.org/traceability/v1
    default:
      - https://www.w3.org/2018/credentials/v1
      - https://w3id.org/traceability/v1
    items:
      type: string
      enum:
        - https://www.w3.org/2018/credentials/v1
        - https://w3id.org/traceability/v1
  type:
    type: array
    readOnly: true
    const:
      - VerifiableCredential
      - DigitalProductPassportCredential
    default:
      - VerifiableCredential
      - DigitalProductPassportCredential
    items:
      type: string
      enum:
        - VerifiableCredential
        - DigitalProductPassportCredential
  id:
    type: string
    format: uri
  issuanceDate:
    type: string
    format: date-time
  expirationDate:
    type: string
    format: date-time
  issuer:
    title: Issuer Organization
    description: Commercial invoice issuing organization.
    type: object
    properties:
      type:
        type: array
        readOnly: true
        const:
          - Organization
        default:
          - Organization
        items:
          type: string
          enum:
            - Organization
      id:
        title: Issuer's Identifier
        description: Issuing organization identifier, typically a Decentralized Identifier (DID).
        type: string
        format: uri
      name:
        title: Organization Name
        description: Issuing organization name.
        type: string
    additionalProperties: true
    required:
      - type
      - id
      - name
  credentialSchema:
    type: object
    properties:
      id:
        title: Id
        description: The URL of the schema file with which to validate the shape of the JSON object.
        type: string
        format: uri
        example: https://w3id.org/traceability/openapi/components/schemas/credentials/DigitalProductPassportCredential.yml
      type:
        title: Type
        description: The type of validation to be run against the defined schema.
        const: OpenApiSpecificationValidator2022
  credentialSubject:
    title: Digital Product Passport
    type: object
    properties:
      type:
        type: array
        readOnly: true
        const:
          - DigitalProductPassport
        default:
          - DigitalProductPassport
        items:
          type: string
          enum:
            - DigitalProductPassport
      product:
        title: Product
        description: Basic product data.
        type: object
        properties:
          type:
            type: array
            readOnly: true
            const:
              - Product
            default:
              - Product
            items:
              type: string
              enum:
                - Product
          image:
            title: Product Image
            type: string
          name:
            title: Product Name
            type: string
          description:
            title: Product Description
            type: string
          id:
            title: Product Identifier
            type: string
            format: uri
          url:
            title: Product Website
            type: string
            format: uri
          brand:
            title: Brand
            description: Brand Owner
            type: object
            properties:
              type:
                type: array
                readOnly: true
                const:
                  - Organization
                default:
                  - Organization
                items:
                  type: string
                  enum:
                    - Organization
              name:
                title: Product Name
                type: string
              id:
                title: Product Identifier
                type: string
                format: uri
              url:
                title: Product Website
                type: string
                format: uri
            required:
              - type
              - name
              - id
        required:
          - type
          - name
          - id
    required:
      - type
      - product
additionalProperties: true
required:
  - '@context'
  - type
  - id
  - issuanceDate
  - issuer
  - credentialSubject
```
