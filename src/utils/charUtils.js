import { fetchFilms, replaceFilmEndpointsWithObjects } from "./filmsUtils";
import { fetchSpecies } from "./speciesUtils";
import { fetchStarships } from "./starshipsUtils";

export const getAllCharacters = async () => {
  let allCharacters = [];
  let nextUrl = "https://swapi.dev/api/people/";

  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json();
    allCharacters = allCharacters.concat(data.results);
    nextUrl = data.next;
  }

  const charactersWithFilmTitles= replaceFilmEndpointsWithObjects(allCharacters)

  return charactersWithFilmTitles;
};

export const getCharacter = async (id) => {
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  const character = await response.json();

  return {
    ...character,
    films: await fetchFilms(character.films),
    starships: await fetchStarships(character.starships),
    species: await fetchSpecies(character.species)
  };
}

export const getId = (url) => {
  return url.replace("https://swapi.dev/api/people/", "").replace(/\//g, "");
}

export const getImage = (id) => {
  return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
};