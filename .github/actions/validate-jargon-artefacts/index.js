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
      core.info('Jargon artefact is a test action.');
    }

    core.info('Validating Jargon artefacts...');

    // Validate sample credentials against its JSON schemas
    const { jsonSchemas = [], jsonldContext } = jargonArtefact.artefacts;
    core.info(`Json Schemas: ${JSON.stringify(jsonSchemas)}`);
    if (jsonSchemas && jsonSchemas.length) {
      core.info('Validating sample credentials against schemas...');
      await validateCredentialsSchemas(jsonSchemas);
      core.info('Sample cretidentials against schemas validation complete.');

      // Validate JSON-LD context in credentials
      core.info('Validating context in credentials...');
      await validateContextInCredential(jsonSchemas);
      core.info('Context in credentials validation complete.');

    }

    // Validate JSON-LD context
    core.info(`Json LD context: ${JSON.stringify(jsonldContext)}`);
    if (jsonldContext) {
      core.info('Validating context...');
      await validateContext(jsonldContext);
      core.info('Context validation complete.');
    }

    core.info('Jargon artefacts validation complete.');
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
