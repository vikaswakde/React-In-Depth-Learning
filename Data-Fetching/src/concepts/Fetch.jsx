import { useEffect, useState } from "react";

function Fetch() {
  let [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <p>
      {data?.name}, {data?.weight}
    </p>
  );
}

export default Fetch;
