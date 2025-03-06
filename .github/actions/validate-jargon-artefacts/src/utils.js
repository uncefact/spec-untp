const core = require('@actions/core');

async function fetchArtefactData (url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      core.setFailed(`Failed to fetch ${url}: ${response.statusText}`);
      return null;
    }

    return response.json();
  } catch (error) {
    core.setFailed(`Error fetching artefact data: ${error.message}`);
    return null;
  }
}

function getValidationResultOutput({ validateCredentialsResult, validateContextInCredentialResult, validateContextResult }) {
  if (validateCredentialsResult.valid !== undefined && validateCredentialsResult.valid === false) {
    return 'Failed';
  }

  if (validateContextInCredentialResult.valid !== undefined && validateContextInCredentialResult.valid === false) {
    return 'Failed';
  }

  if (validateContextResult.valid !== undefined && validateContextResult.valid === false) {
    return 'Failed';
  }

  return 'Passed';
}

module.exports = { fetchArtefactData, getValidationResultOutput };