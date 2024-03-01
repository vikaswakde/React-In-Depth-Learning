// import { useReducer } from "react";
// import Button from "./Button.jsx";

// function reduce(state, action) {
//   switch (action.type) {
//     case "UP":
//       return state + action.value;
//     case "DOWN":
//       return state - action.value;
//     case "RESET":
//       return 0;
//     default:
//       throw new Error("Value not found");
//   }
// }

// const Counter = () => {
//   const [count, dispatch] = useReducer(reduce, 0);

//   function up() {
//     dispatch({ type: "UP", value: 1 });
//   }
//   function down() {
//     dispatch({ type: "DOWN", value: 1 });
//   }

//   function reset() {
//     dispatch({ type: "RESET" });
//   }

//   return (
//     <>
//       <h1>Counter {count}</h1>
//       <Button onClickUp={up} onClickDown={down} onClickReset={reset} />
//     </>
//   );
// };

// export default Counter;

import Button from "./Button.jsx";
import { useReducer } from "react";

function counterReducer(state, action) {
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
}

function Counter() {
  const [counter, counterDispatch] = useReducer(counterReducer, 0);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <Button
        text={"Go Up!"}
        action={{ type: "UP", value: 1 }}
        counterDispatch={counterDispatch}
      />
      <Button
        text={"Go Down"}
        action={{ type: "DOWN", value: 1 }}
        counterDispatch={counterDispatch}
      />
      <Button
        text={"Reset"}
        action={{ type: "RESET" }}
        counterDispatch={counterDispatch}
      />
    </>
  );
}

export default Counter;
