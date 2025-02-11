import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export const PokemonView = () => {
  const location = useLocation();

  const [pokemon, setPokemon] = useState({});

  const getDataDetails = async () => {
    try {
      console.log(location.state.url);
      const res = await fetch(location.state.url);
      const data = await res.json();
      console.log(data);
      setPokemon(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getDataDetails();
  }, []);
  return (
    <>
      <ul>
        <li>Name: {pokemon.name}</li>

      { pokemon.sprites ? <li><img src={pokemon.sprites.front_shiny} /></li> : null}
        

        <li>Moves:
          <ol>
            {pokemon.moves ? pokemon.moves.map((moveObj) => (
              <li key={moveObj.move.name}>{moveObj.move.name}</li>
            )) : <div></div>}
          </ol>
        </li>
      </ul>
    </>
  )
}
