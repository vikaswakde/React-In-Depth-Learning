import { useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);

  const handleClick = async () => {
    // setCount((previousCount) => previousCount + 1);
    // setCount((previousCount) => previousCount + 1);
    await console.log(setCount(count + 1));
    setTimeout(() => {
      console.log(setCount(count + 1));
      //   console.log("timeout log")
      console.log(count);
    }, 2000);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
    </>
  );
}

export default Counter2;
