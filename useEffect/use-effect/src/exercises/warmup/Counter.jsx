import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(() => counter + 1);
  };

  //   renders only on mount
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  //   renderes only when state is chaned/ count is updated
  useEffect(() => {
    console.log("Counter state Changed");
  }, [counter]);

  return (
    <>
      <h1> {counter} </h1>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default Counter;
