// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// const Pokemon = () => {
//   const [img, setImg] = useState("");

//   useEffect(() => {
//     const file = "https://pokeapi.co/api/v2/pokemon/mankey";
//     // console.log(file);
//     const fileLink = async () => {
//       const fetchFile = await fetch(file);
//       const x = await fetchFile.json();
//       console.log(x);
//       const y = await x.sprites.other['official-artwork'].front_default
//       console.log(y)
//       setImg(() => y)
//     };
//     fileLink();
//     // const file = "https://pokeapi.co/api/v2/pokemon/mankey";
//     // fetch(file)
//     //   .then((x) => x.json())
//     //   .then((y) => y.sprites.other['official-artwork'].front_default);
//   }, []);

//   // const visitUrl =  fetch("https://pokeapi.co/api/v2/pokemon/monkey");

//   return (
//     <>
//       <h1>Mankey</h1>
//       <img src={img} alt="" />
//     </>
//   );
// };

// export default Pokemon;

const Pokemon = () => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon/mankey";
    const getPokemon = async () => {
      const response = await fetch(URL);
      const json = await response.json();

      const imgUrl = json.sprites.other["official-artwork"].front_default;
      setSrc(() => imgUrl);
    };
    getPokemon();
  }, []);

  return (
    <>
      <h1>Mankey</h1>
      <img src={src} alt="Mankey From Pikachu" />
    </>
  );
};

export default Pokemon;
