export const getAllCharacters = async () => {
  let allCharacters = [];
  let nextUrl = "https://swapi.dev/api/people/";

  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json();
    allCharacters = allCharacters.concat(data.results);
    nextUrl = data.next;
  }

  return allCharacters;
};

export const getId = (url) => {
  return url.replace("https://swapi.dev/api/people/", "").replace(/\//g, "");
}

export const getImage = (id) => {
  return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
};