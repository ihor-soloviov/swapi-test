export const fetchStarships = async (starships) => {
  const filmRequests = starships.map(async (starshipsUrl) => {
    const response = await fetch(starshipsUrl);
    const starshipData = await response.json();
    return starshipData.name;
  });
  const filmTitles = await Promise.all(filmRequests);
  return filmTitles;
}

export const replaceStarshipsEndpointsWithObjects = async (characters) => {
  for (let character of characters) {
    const starships = character.starships;
    const starshipTitles = await fetchStarships(starships);
    character.starships = starshipTitles;
  }
  return characters;
}
