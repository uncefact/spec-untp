# Validate Jargon Artefacts GitHub Action

This repository contains a custom GitHub Action that automates the validation of Jargon-generated UNTP artifacts, including JSON-LD contexts, schemas, and sample credentials. The validation ensures that generated artifacts comply with appropriate specifications before release.

## Features
- **Automated Validation**: Checks JSON-LD contexts, schemas, and sample credentials.
- **Webhook Integration**: Triggers validation upon receiving Jargon snapshot events.
- **Dockerized Execution**: Runs in an isolated container environment.
- **GitHub Actions Support**: Easily integrates into GitHub workflows.
- **Validation Reporting**: Outputs validation results for further processing.

## Installation
This GitHub Action is designed to be used within a workflow in the [`spec-untp`](https://github.com/uncefact/spec-untp) repository.

## Usage
To use this action in your GitHub workflow, add the following YAML configuration to your `.github/workflows/validate.yml` file:

```yaml
name: Validate Jargon Artefacts

on:
  repository_dispatch:
    types: [jargon_onSnapshot]

jobs:
  validate-jargon-artefacts:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Run Validate Jargon Artefacts
        id: validate
        uses: ./.github/actions/validate-jargon-artefacts
        with:
          jargon-webhook-payload: ${{ toJSON(github.event.client_payload) }}
      
      - name: Show Validation Result
        run: |
          echo "Jarogn Artefacts Validation Result: ${{ steps.validate.outputs.validation-result }}"
```

## Inputs
| Name | Description | Required |
|------|-------------|----------|
| `jargon-webhook-payload` | The JSON payload from the Jargon webhook | Yes |

## Outputs
| Name | Description |
|------|-------------|
| `validation-result` | The validation result of the artifacts |

## Implementation Details
- **Docker-based execution**: The action runs inside a Docker container using `node:21-alpine`.
- **Validation Scripts**:
  - `schemaValidation.js`: Validates sample credentials against their schema and the context used in the sample credentials.
  - `contextValidation.js`: Validates JSON-LD context files.
- **Error Handling**: If validation fails, the action sets the workflow as failed.

## Development

### Running Locally
To test this action locally, clone the repository and run:

```sh
# Build the Docker image
docker build -t validate-jargon-artefacts .

# Run the Docker container
docker run --rm -e INPUT_JARGON-WEBHOOK-PAYLOAD='{"artefacts": {...}}' validate-jargon-artefacts
```

### Modifying the Action

- Update `src/index.js` for core validation logic.
- Update `src/contextValidation.js` and `src/schemaValidation.js` for context and schema validation.
- Update `src/utils.js` for utility functions.
- Update `Dockerfile` for Docker image changes.
- Modify `action.yml` for input/output changes.
