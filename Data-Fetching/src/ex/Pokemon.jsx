import { useEffect, useState } from "react";

function Pokemon() {
  // const [pokemon, setPokemon] = useState(null);

  // useEffect(() => {
  //   const url = "https://pokeapi.co/api/v2/pokemon/ditto";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setPokemon(json));
  // }, []);

  // const [pokemon, setPokemon] = useState(null);

  // useEffect(() => {
  //   const url = "https://pokeapi.co/api/v2/pokemon/vikas";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setPokemon(json));
  // }, []);

  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  try {
    // make api call to fetch some data

    useEffect(() => {
      const url = "https://pokeapi.co/api/v2/pokemon/ditto";
      fetch(url)
        .then((response) => response.json())
        .then((json) => setPokemon(json));
    }, []);
  } catch (error) {
    setError(error);
  }

  return (
    <>
      {error ? <p>An error occured: {error.message} </p> : null}
      {}
      {/* {pokemon ? 
      <h1>{pokemon?.name}</h1> <img src={pokemon?.sprites.front_default} alt="" />
      {console.log(pokemon?.sprites.front_default)}
      <p>{pokemon?.weight}</p> : null} */}
    </>
  );
}

export default Pokemon;
