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

module.exports = { fetchArtefactData };