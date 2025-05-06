const core = require('@actions/core');
const jsonld = require('jsonld');
const { splitSchemasAndInstances } = require('./schemaValidation');
const { fetchArtefactData } = require('./utils');
const { JARGON_INSTANCES_TO_VALIDATE, JARGON_CONTEXT_IRI_PREFIX } = require('./config');

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
 * @param jsonldContext is the context object provided by Jargon
 * @returns { valid: boolean }
 */
async function validateContextInCredential(rawArtefactData, jsonldContext) {
  const { instances } = splitSchemasAndInstances(rawArtefactData);
  const instanceFileNames = Object.keys(instances);

  // Filter out secondary instances that lack @context.
  const mainInstanceFileNames = instanceFileNames.filter(instanceFileName =>
    JARGON_INSTANCES_TO_VALIDATE.some(validInstance => instanceFileName.includes(validInstance))
  );

  if (!mainInstanceFileNames.length) {
    core.info(`
      No permitted sample instances found for JSON-LD expansion. 
      Ensure the instance file name is present in JARGON_INSTANCES_TO_VALIDATE. 
      Current JARGON_INSTANCES_TO_VALIDATE: ${JARGON_INSTANCES_TO_VALIDATE.join(', ')}
    `);
    return { valid: false };
  }

  // Fetch all permitted instances in parallel
  const fetchedInstances = await Promise.all(mainInstanceFileNames.map(async instanceFileName => {
    const instanceJson = await fetchArtefactData(instances[instanceFileName]);

    if (instanceJson && jsonldContext && JARGON_CONTEXT_IRI_PREFIX) {
      const context = instanceJson['@context'];

      if(context && Array.isArray(context) && jsonldContext.url) {
      // Replace the deployed @context IRI with the Jargon context IRI
      instanceJson['@context'] = context.map(context =>
          context.includes(JARGON_CONTEXT_IRI_PREFIX) ? jsonldContext.url : context
        );
      }
    }

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