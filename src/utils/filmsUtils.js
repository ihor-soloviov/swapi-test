export const fetchFilms = async (films) => {
  const filmRequests = films.map(async (filmUrl) => {
    const response = await fetch(filmUrl);
    const filmData = await response.json();
    return filmData.title;
  });
  const filmTitles = await Promise.all(filmRequests);
  return filmTitles;
}

export const replaceFilmEndpointsWithObjects = async (characters) => {
  for (let character of characters) {
    const films = character.films;
    const filmTitles = await fetchFilms(films);
    character.films = filmTitles;
  }
  return characters;
}
