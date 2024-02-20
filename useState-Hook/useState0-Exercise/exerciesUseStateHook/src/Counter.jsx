import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [initialCount, setInitialCount] = useState(count);

  const originalCount = count;
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function resetCount() {
    setCount(initialCount);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
      <button onClick={resetCount}>Reset</button>
    </>
  );
}

export default Counter;
