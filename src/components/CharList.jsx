import React, { useEffect, useState } from 'react'
import { getAllCharacters, getId, getImage } from '../utils/charUtils';

export const CharList = () => {
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

      setCharacters(allCharacters);
    };

    fetchData();
  }, []);

  return (
    <>
      <ul>
        {characters.map(({ id, img, name }) => (
          <li key={id}>
            <div>
              <img src={img} alt={name} />
              <p>{name}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
