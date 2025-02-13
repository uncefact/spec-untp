const core = require('@actions/core');
const jsonld = require('jsonld');
const { splitSchemasAndInstances } = require('./schemaValidation');
const { fetchArtefactData } = require('./utils');

/**
 * Validate JSON-LD context
 * @param {*} jsonldContext 
 * @returns void
 */
async function validateContext(jsonldContext) {
  try {
    const context = await fetchArtefactData(jsonldContext.url);

    // Run JSON-LD context expansion
    await jsonld.expand(context);
  } catch (error) {
    core.setFailed(`Error validating context: ${JSON.stringify(error)}`);
  }
}

/**
 * Validate JSON-LD context in credentials
 * @param {*} jsonSchemas
 * @returns void
 */
async function validateContextInCredential(jsonSchemas) {
  const { instances } = splitSchemasAndInstances(jsonSchemas);
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
      fetchedInstances.map(async ({ json }) => jsonld.expand(json, { safe: true }))
    );
  } catch (error) {
    core.setFailed(`Error validating context in credentials: ${JSON.stringify(error)}`);
  }
}

module.exports = { validateContext, validateContextInCredential };