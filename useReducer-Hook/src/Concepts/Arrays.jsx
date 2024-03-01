import { useReducer } from "react";

function arrReducer(prevState, action) { 
  return [...prevState, action.value]
}

function Arrays() {
  const [state, dispatch] = useReducer(arrReducer, []);

  const add = () => {
    dispatch({ type: "add", value: 1337 });
  };

  return (
    <>
      <h1>Arrays</h1>
      <p>{JSON.stringify(state, null, 2)}</p>
      <button onClick={add}>Add to Array</button>
    </>
  );
}

export default Arrays;
