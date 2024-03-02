import { useEffect, useState } from "react";

function Pokemon() {
  const [pokemonPage, setPokemonPage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0";
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          setError(true);
          return;
        }
        return response.json();
      })
      .then((json) => {
        setPokemonPage(json);
      });
  }, []);

  console.log(pokemonPage);

  function prev() {
    fetch(pokemonPage.previous)
      .then((response) => {
        if (!response.ok) {
          setError(true);
          return;
        }
        return response.json();
      })
      .then((json) => {
        setPokemonPage(json);
      });
  }

  function next() {
    fetch(pokemonPage.next)
      .then((response) => {
        if (!response.ok) {
          setError(true);
          return;
        }
        return response.json();
      })
      .then((json) => {
        setPokemonPage(json);
      });
  }
  return (
    <>
      <h1>Pokemon List</h1>
      {pokemonPage?.results.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
      {pokemonPage.next && <button onClick={next}>Next</button>}
      {pokemonPage.previous && <button onClick={prev}>Previous</button>}
    </>
  );
}

export default Pokemon;
