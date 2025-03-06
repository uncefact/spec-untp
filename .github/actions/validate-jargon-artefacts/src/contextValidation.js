const core = require('@actions/core');
const jsonld = require('jsonld');
const { splitSchemasAndInstances } = require('./schemaValidation');
const { fetchArtefactData } = require('./utils');

/**
 * Validate JSON-LD context
 * @param jsonldContext is a JSON-LD context object
 * @returns { valid: boolean }
 */
async function validateContext(jsonldContext) {
  try {
    const context = await fetchArtefactData(jsonldContext.url);
    if (!context) {
      throw new Error(`Failed to fetch JSON-LD context "${jsonldContext.url}".`);
    }

    // Run JSON-LD context expansion
    await jsonld.expand(context);
    core.info('Context validation results: passed.');
    return { valid: true };
  } catch (error) {
    core.setFailed(`Error validating context: ${error.message} ${JSON.stringify(error)}`);
    core.info('Context validation results: failed.');
    return { valid: false };
  }
}

/**
 * Validate JSON-LD context in credentials
 * @param rawArtefactData is an array of JSON schemas and instances
 * @returns { valid: boolean }
 */
async function validateContextInCredential(rawArtefactData) {
  const { instances } = splitSchemasAndInstances(rawArtefactData);
  const instanceFileNames = Object.keys(instances);

  // Fetch all instances in parallel
  const fetchedInstances = await Promise.all(instanceFileNames.map(async instanceFileName => {
    const instanceJson = await fetchArtefactData(instances[instanceFileName]);

    return {
      fileName: instanceFileName,
      url: instances[instanceFileName],
      json: instanceJson,
    }
  }));

  try {
    // Expand all fetched instances
    await Promise.all(
      fetchedInstances.map(async ({ json, url }) => {
        core.info(`Validating "${url}"`);
        return jsonld.expand(json, { safe: true });
      })
    );

    core.info('Context in credentials validation results: passed.');
    return { valid: true };
  } catch (error) {
    core.setFailed(`Error validating context in credentials: ${JSON.stringify(error)}`);
    core.info('Context in credentials validation results: failed.');
    return { valid: false };
  }
}

module.exports = { validateContext, validateContextInCredential };