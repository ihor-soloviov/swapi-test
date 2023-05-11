import React, { useEffect, useState } from 'react'
import { CharList } from '../components/CharList'
import { getAllCharacters, getId, getImage } from '../utils/charUtils';

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllCharacters();

      const allCharacters = response.map((char) => {
        const id = getId(char.url);
        const img = getImage(id);

        return {
          ...char,
          img,
          id,
        };
      });
      console.log(allCharacters)
      setCharacters(allCharacters);
    };

    fetchData();
  }, []);
  return (
      <CharList characters={characters}/>
  )
}
