export const fetchSpecies = async (species) => {
  const speciesRequests = species.map(async (speciesUrl) => {
    const response = await fetch(speciesUrl);
    const speciesData = await response.json();
    return speciesData.name;
  });
  const speciesTitle = await Promise.all(speciesRequests);
  return speciesTitle;
}

export const replaceFilmEndpointsWithObjects = async (characters) => {
  for (let character of characters) {
    const species = character.species;
    const speciesTitle = await fetchSpecies(species);
    character.species = speciesTitle;
  }
  return characters;
}
