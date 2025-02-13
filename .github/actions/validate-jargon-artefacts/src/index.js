const core = require('@actions/core');
const { validateCredentialsSchemas } = require('./schemaValidation');
const { validateContextInCredential, validateContext } = require('./contextValidation');

/**
 * Validate Jargon artefacts including sample credentials and JSON-LD context
 * @param {*} jargonArtefact 
 * @returns void
 */
async function validateJargonArtefacts(jargonArtefact) {
  try {
    if (!jargonArtefact || !jargonArtefact.artefacts) {
      return core.setFailed('No Jargon artefact payload found.');
    }
    if (jargonArtefact.action && jargonArtefact.action.test) {
      return core.info('Jargon artefact is a test action. Skipping validation.');
    }

    core.info('Validating Jargon artefacts...');

    // Validate sample credentials against its JSON schemas
    const { jsonSchemas = [], jsonldContext } = jargonArtefact.artefacts;
    core.info(`\nJson Schemas: ${JSON.stringify(jsonSchemas)}`);
    if (jsonSchemas && jsonSchemas.length) {
      core.info('\n\nValidating sample credentials against schemas...');
      await validateCredentialsSchemas(jsonSchemas);
      core.info('Sample cretidentials against schemas validation complete.');

      // Validate JSON-LD context in credentials
      core.info('\n\nValidating context in credentials...');
      await validateContextInCredential(jsonSchemas);
      core.info('Context in credentials validation complete.');

    }

    // Validate JSON-LD context
    core.info(`\n\nJson LD context: ${JSON.stringify(jsonldContext)}`);
    if (jsonldContext) {
      core.info('Validating context...');
      await validateContext(jsonldContext);
      core.info('Context validation complete.');
    }

    core.info('\nJargon artefacts validation complete.');
  } catch (error) {
    core.setFailed(`Error validating Jargon artefacts: ${error.message}`);
  }
}

/**
 * Run the action
 */
async function run() {
  try {
      const jargonArtefactPayload = process.env['INPUT_JARGON-WEBHOOK-PAYLOAD'];
      const jargonArtefact = JSON.parse(jargonArtefactPayload);
      core.info(`Jargon artefact payload: ${JSON.stringify(jargonArtefact)}`);

      await validateJargonArtefacts(jargonArtefact);
  } catch (error) {
      core.setFailed(`Unexpected error: ${error.message}`);
  }
}

run();


validateJargonArtefacts({
  "action": {
    "name": "onSnapshot",
    "type": "snapshot"
  },
  "artefacts": {
    "dataModel": {
      "fileName": "huy_nguyen_Test_dataModel.svg",
      "url": "https://jargon.sh/user/huy_nguyen/Test/s/4/artefacts/diagram/render.svg?light=true"
    },
    "jsonSchemas": [
      {
        "fileName": "huy_nguyen_Test_DigitalProductPassport_jsonSchema.json",
        "url": "https://f25e-115-79-32-109.ngrok-free.app/api/valid-dpp-context"
      },
      {
        "fileName": "huy_nguyen_Test_DigitalProductPassport_instance_jsonSchema.json",
        "url": "https://f25e-115-79-32-109.ngrok-free.app/api/all-valid"
      }
    ],
    "jsonldContext": {
      "fileName": "huy_nguyen_Test_jsonldContext.json",
      "url": "https://f25e-115-79-32-109.ngrok-free.app/api/test-context-valid"
    },
    "jsonldVocab": {
      "fileName": "huy_nguyen_Test_jsonld.json",
      "url": "https://jargon.sh/user/huy_nguyen/Test/s/4/artefacts/jsonld/render.jsonld"
    }
  },
  "domain": {
    "account": "huy_nguyen",
    "name": "Test",
    "url": "https://jargon.sh/user/huy_nguyen/Test"
  },
  "settings": {
    "jsonld": {
      "generate": true,
      "prefix": "",
      "uri": ""
    }
  },
  "snapshot": {
    "description": "v0.0.5",
    "index": 4,
    "url": "https://jargon.sh/user/huy_nguyen/Test/s/4/editor"
  }
})