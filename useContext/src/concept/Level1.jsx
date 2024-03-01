import { useContext } from "react";
import { AuthContext } from "./Level3.jsx";

function level1() {
  const [authState, setAuthState] = useContext(AuthContext);

  function add() {
    setAuthState((prevState) => {
      return { ...prevState, add: 123 };
    });
  }

  return (
    <>
      <h3>Level 1</h3>
      <button onClick={add}>Add to context</button>
      <p>{JSON.stringify(authState, null, 2)}</p>
    </>
  );
}

export default level1;
