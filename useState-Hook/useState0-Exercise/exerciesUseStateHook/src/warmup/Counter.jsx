import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((previousCount) => previousCount + 1);
  };
  const decrementCount = () => {
    setCount((previousCount) => previousCount - 1);
  };

  return (
    <>
      <h1>Counter :{count}</h1>
      <button onClick={incrementCount}>➕</button>
      <button onClick={decrementCount}>➖ </button>
    </>
  );
}

export default Counter;
