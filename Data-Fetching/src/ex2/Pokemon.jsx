import { useState, useRef } from "react";

const cache = new Map();

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const pokemonCache = useRef(new Map());

  function searchPokemon() {
    const pokemonName = inputRef.current.value;

    if (pokemonCache.current.has(pokemonName)) {
      setPokemon(pokemonCache.current.get(pokemonName));
      return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        if (!response.ok) {
          setError(true);
          return;
        }
        return response.json();
      })
      .then((json) => {
        setPokemon(json);
        pokemonCache.current.set(pokemonName, json);
      });
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={searchPokemon}>Search!</button>
      
      {error && <p>Sorry, that pokemon does not exit</p>}
      <img src={pokemon?.sprites.front_default} alt="" />
      <p>{pokemon?.weight}</p>
    </>
  );
}

export default Pokemon;
