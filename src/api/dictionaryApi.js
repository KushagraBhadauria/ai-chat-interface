export const fetchDefinition = async (word) => {
  console.log(`Workspaceing definition for ${word}...`);
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

    if (!response.ok) {
        if(response.status === 404) {
             throw new Error(`Sorry, could not find a definition for "${word}".`);
        }
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    // Return the first result's first meaning
    return data[0];
  } catch (error) {
    console.error("Dictionary API fetch error:", error);
    throw error;
  }
};