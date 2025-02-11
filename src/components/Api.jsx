import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Api = () => {
  const [pokemonList, setPokemon] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
      const data = await res.json();
      setPokemon(data.results); 
      console.log(data.results); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  


  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ol>
        {pokemonList.map((singlePokemon,index) => (
          <li key={index}>
            {singlePokemon.name}
            <button onClick={() => navigate('/pokemon-view', { state: singlePokemon})}>See more details</button>  
          </li>
        ))}
      </ol>
    </div>
  );
};
