---
sidebar_position: 5
title: Digitial Product Passport
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Overview

The digital product passport (DPP) is issued by the shipper of goods and is the carrier of **product and sustainability information** for every serialised product item (or product batch) that is shipped between actors in the value chain. It is deliberately **simple and lightweight** and is designed to carry the minimum necessary data at the **granularity** needed by the receiver of goods - such as the scope 3 emissions in a product shipment. The passport contains links to **conformity credentials** which add trust to the ESG claims in the passport. The passport also contains links to **traceability events** which provide the "glue" to follow the linked-data trail (subject to confidentiality constraints) from finished product back to raw materials. The UNTP DPP does not conflict with national regulations such as the EU DPP. In fact, it can usefully be conceptualised as the **upstream B2B feedstock** that provides the data and evidence needed for the issuing of high quality national level product passports.

## Conceptual Model

![Digital Product passport conceptual model](DigitalProductPassport.png)

## Logical Model & Schema

![Digital Product Passport data model](DigitalProductPassport.svg)

**[Browsable data model documentation](https://jargon.sh/user/unece/DigitalProductPassport/v/working/artefacts/readme/render)**

**[JSON-LD @context file](https://jargon.sh/user/unece/DigitalProductPassport/v/working/artefacts/jsonldContexts/ProductPassport.jsonld?class=ProductPassport)**

**[JSON Schema](https://jargon.sh/user/unece/DigitalProductPassport/v/working/artefacts/jsonSchemas/render.json?class=ProductPassport)**

**[Browsable API documentation](https://jargon.sh/redoc.html?url=/user/unece/DigitalProductPassport/v/working/artefacts/openapi/render.json)**

## Sample File

Sample DPP JSON for a packaged meat product. Includes render template. [Human browsable rendered version](https://web.agtrace.showthething.com/verify?q=%7B%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fagtrace-processor-verifiable-credentials.s3.ap-southeast-2.amazonaws.com%2F9359502000041%2F14713cf0-b81c-497c-a633-985cbb4bd5c4.json%22%7D%7D)

```
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/vc-revocation-list-2020/v1",
    "https://w3id.org/security/suites/jws-2020/v1",
    "https://vckit-contexts.s3.ap-southeast-2.amazonaws.com/dev-render-method-context.json",
    "https://dpp-json-ld.s3.ap-southeast-2.amazonaws.com/dppld.json",
    "https://w3id.org/security/suites/jws-2020/v1"
  ],
  "type": [
    "VerifiableCredential",
    "ProductPassportCredential"
  ],
  "issuer": {
    "id": "did:web:processor.agtrace.showthething.com"
  },
  "credentialSubject": {
    "product": {
      "productId": "9359502000041",
      "productClass": "Beef Silverside",
      "weight": "500 grams",
      "image": "https://gs1ausaactivateprod1.blob.core.windows.net/935950200000/09359502000041/AgTace-Meats-Silverside.png?sv=2019-07-07&sr=c&si=read&sig=1b9unDt%2FV7M0jCuNIbn47AaES0XK%2FOgL6QbRcuBGPOw%3D",
      "description": "Deforestation-free Beef Silverside",
      "manufacturer": {
        "id": "https://agtraceprocessors.com.au/",
        "name": "Pete's Meats"
      }
    },
    "batch": {
      "batchId": "5698754215",
      "manufacturedAt": {
        "id": "https://resolver.showthething.com/414/9377779541302",
        "name": "name",
        "operatedBy": {
          "id": "https://agtraceprocessors.com.au/",
          "name": "AgTrace Processors"
        }
      },
      "manufacturedDate": "Tue Jan 09 2024",
      "provenance": [
        {
          "country": "AU",
          "percentage": 100
        }
      ],
      "sustainabilityInfo": [
        {
          "Topic": "environment.deforestation",
          "Criteria": "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32023R1115",
          "Evidence": "https://web.agtrace.showthething.com/verify?q=%7B%22payload%22%3A%20%7B%22uri%22%3A%22https%3A%2F%2Fagtrace-verifiable-credentials.s3.ap-southeast-2.amazonaws.com%2Fprocessor-df-cert.json%22%7D%7D",
          "metric": [
            {
              "Metric": "Canopy cover reduction",
              "Unit": "% per km^2",
              "Value": 0
            }
          ],
          "compliance": true
        }
      ],
      "traceabilityInfo": [
        {
          "EventReference": "https://processor.dlr.agtrace.showthething.com/gtin/9359502000041/3101/000001/13/240109/21/12578901?linkType=gs1:epcis",
          "EventType": "transformation"
        }
      ]
    },
    "sustainabilityScore": 65,
    "trustScore": 48
  },
  "credentialStatus": {
    "id": "https://api.vckit.showthething.com/credentials/status/revocation-list-2020/did_web_processor.agtrace.showthething.com/66",
    "type": "RevocationList2020Status",
    "revocationListIndex": 4,
    "revocationListCredential": "https://api.vckit.showthething.com/credentials/status/revocation-list-2020/did_web_processor.agtrace.showthething.com/66"
  },
  "issuanceDate": "2024-01-09T08:28:37.144Z",
  "proof": {
    "type": "JsonWebSignature2020",
    "created": "2024-01-09T08:28:37Z",
    "verificationMethod": "did:web:processor.agtrace.showthething.com#7dfafe8a248c42c1eb9f8f549cc85ca24cd1d1764a31cf726504c5667396dba2-key-0",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..ELbpu5IR0zeXdktOSNO8jffdewDRoKPcVcPDtC-c_Scj6uBrUZv-T0VvM1FAtjXs1ClJS5hDpYs9_SrA0Br4CA"
  }
}
```
