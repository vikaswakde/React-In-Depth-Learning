import { useEffect, useState } from "react";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/mootin";
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          setError(true);
          return;
        }
        return response.json();
      })
      .then((json) => setPokemon(json));
  }, []);

  console.log(pokemon);

  if (error) {
    return <p>Sorry Something went wrong!</p>;
  }

  return (
    <>
      <h2>{pokemon?.name}</h2>
    </>
  );
}

export default Pokemon;
