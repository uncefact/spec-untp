const core = require('@actions/core');
const { validateCredentialsSchemas } = require('./schemaValidation');
const { validateContextInCredential, validateContext } = require('./contextValidation');
const { getValidationResultOutput } = require('./utils');

/**
 * Validate Jargon artefacts including sample credentials and JSON-LD context
 * @param jargonArtefact is the Jargon artefact payload
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
    const { jsonSchemas: rawArtefactData = [], jsonldContext } = jargonArtefact.artefacts;
    const validationResult = {};
    core.info(`Json Schemas: ${JSON.stringify(rawArtefactData)}`);
    if (rawArtefactData && rawArtefactData.length) {
      core.info('Validating sample credentials against schemas...');
      validationResult.validateCredentialsResult = await validateCredentialsSchemas(rawArtefactData);
      core.info('Sample cretidentials against schemas validation complete.');

      // Validate JSON-LD context in credentials
      core.info('Validating context in credentials...');
      validationResult.validateContextInCredentialResult = await validateContextInCredential(rawArtefactData, jsonldContext);      
      core.info('Context in credentials validation complete.');
    }

    // Validate JSON-LD context
    core.info(`\n\nJson LD context: ${JSON.stringify(jsonldContext)}`);
    if (jsonldContext) {
      core.info('Validating context...');
      validationResult.validateContextResult = await validateContext(jsonldContext);
      core.info('Context validation complete.');
    }

    core.info(JSON.stringify(validationResult, null, 2));
    const resultOutput = getValidationResultOutput(validationResult);

    core.setOutput('validation-result', resultOutput);
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
