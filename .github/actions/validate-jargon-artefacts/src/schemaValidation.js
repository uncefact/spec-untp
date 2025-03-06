const core = require('@actions/core');
const addFormats = require('ajv-formats');
const Ajv2020 = require('ajv/dist/2020');
const { fetchArtefactData } = require('./utils');

const ajv = new Ajv2020({
  allErrors: true,
  strict: false,
  validateFormats: false,
});
addFormats(ajv);

const jsonSchemaSuffix = '_jsonSchema.json';
const jsonInstanceSuffix = '_instance_jsonSchema.json';

/**
 * Validate sample credentials against their JSON schemas using AJV
 * @param jsonSchemas is an array of JSON schemas and instances
 * @returns { valid: boolean }
 */

async function validateCredentialsSchemas (jsonSchemas) {
  const schemaAndInstancePairs = await pairSchemasAndInstances(jsonSchemas);
  if (!schemaAndInstancePairs || !schemaAndInstancePairs.length) {
    core.setFailed('No schema and instance pairs found.');
    return { valid: false };
  }

  const results = schemaAndInstancePairs.map(({ schema, instance }) => {
    core.info(`Validating sample credential "${instance.fileName}" against schema "${schema.fileName}"`);
    const validate = ajv.compile(schema.json);
    const isValid = validate(instance.json);

    // Check if all errors are additionalProperties
    const onlyAdditionalPropertiesErrors = validate?.errors?.every((error) => error.keyword === 'additionalProperties');
    const combinedResult = isValid || onlyAdditionalPropertiesErrors;

    core.info(`Sample credential "${instance.fileName}" validation result: ${combinedResult ? 'passed' : 'failed'}.`);
    return {
      schemaFileName: schema.fileName,
      schemaUrl: schema.url,
      instanceFileName: instance.fileName,
      instanceUrl: instance.url,
      valid: combinedResult,
      errors: validate.errors,
    };
  });

  const finalResult = results.every(({ valid }) => valid);
  core.info(`All sample credentials validation result: ${finalResult ? 'passed' : 'failed'}.`);

  if (!finalResult) {
    core.setFailed(`Sample credentials validation failed: ${JSON.stringify(results)}`);
  }

  return { valid: !!finalResult };
}

/**
 * Pair JSON schemas and instances
 * @param jsonSchemas is an array of JSON schemas and instances
 * @returns { schema: {fileName, url, json}, instance: {fileName, url, json} }
 */

async function pairSchemasAndInstances (jsonSchemas) {
  try {
    const { schemas, instances } = splitSchemasAndInstances(jsonSchemas);
    core.info(`Schemas: ${JSON.stringify(schemas)}`);
    core.info(`Instances: ${JSON.stringify(instances)}\n`);

    const schemaFileNames = Object.keys(schemas);
    const pairPromises = schemaFileNames.map(async schemaFileName => {
      const baseName = schemaFileName.replace(jsonSchemaSuffix, '');
      const instanceFileName = `${baseName}${jsonInstanceSuffix}`;

      if (!instances[instanceFileName]) {
        core.setFailed(`No instance found for schema "${schemaFileName}".`);
        return null;
      }

      const [schemaJson, instanceJson] = await Promise.all([
        fetchArtefactData(schemas[schemaFileName]),
        fetchArtefactData(instances[instanceFileName])
      ]);
      if (!schemaJson || !instanceJson) {
        core.setFailed(`Failed to fetch schema "${schemaFileName}" or instance "${instanceFileName}".`);
        return null;
      }

      core.info(`Fetched schema "${schemaFileName}" and instance "${instanceFileName}".`);

      return { 
        schema: { fileName: schemaFileName, url: schemas[schemaFileName], json: schemaJson },
        instance: { fileName: instanceFileName, url: instances[instanceFileName], json: instanceJson }
      };
    });

    const pairs = await Promise.all(pairPromises); // Fetch all pairs in parallel
    return pairs.filter(pair => pair); // Remove null values
  } catch (error) {
    core.setFailed(`Error pairing schemas and instances: ${error.message}`);
  }
}

/**
 * Split JSON schemas and instances into separate objects
 * @param jsonSchemas is an array of JSON schemas and instances
 * @returns {schemas: {fileName: url}, instances: {fileName: url}}
 */

function splitSchemasAndInstances (jsonSchemas) {
  const schemas = {};
  const instances = {};

  for (const schema of jsonSchemas) {
    // Check if schema is a JSON schema and not an instance
    if (schema.fileName.includes(jsonSchemaSuffix) && !schema.fileName.includes('_instance')) {
      schemas[schema.fileName] = schema.url;
      // Check if schema is an instance
    } else if (schema.fileName.includes(jsonInstanceSuffix)) {
      instances[schema.fileName] = schema.url;
    }
  }

  return { schemas, instances };
}

module.exports = { validateCredentialsSchemas, pairSchemasAndInstances, splitSchemasAndInstances };