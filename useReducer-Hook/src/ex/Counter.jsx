import { useReducer } from "react";

const reduce = (state, action) => {
  switch (action.type) {
    case "UP":
      return state + action.value;
    case "DOWN":
      return state - action.value;
    case "RESET":
      return 0;
    default:
      throw new Error("Invalid Action Type");
  }
};

const Counter = () => {
  const [counter, dispatchCounter] = useReducer(reduce, 0);

  function add() {
    dispatchCounter({ type: "UP", value: 1 });
  }
  const sub = () => {
    dispatchCounter({ type: "DOWN", value: 1 });
  };
  const reset = () => {
    dispatchCounter({ type: "RESET" });
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter;
