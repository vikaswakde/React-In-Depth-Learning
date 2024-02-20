import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  const handleClick = () => setCount(() => count + 1);

  const handleClick2 = () => setCount2(() => count2 + 1);

  // useEffect(() => {
  //   console.log("hello useEffect here");
  //   // return () => console.log("Rerendered Cleanup/ Unmountedk")
  //   return () => console.log("Clean up / unmount previous")
  // }, [count2]);

  // useEffect(() => {
  //   const randomNum = Math.floor(Math.random() * 1000);
  //   const id = setInterval(() => {
  //     console.log(`[${randomNum}] - Re-rendered`);
  //   }, 1000);
  //   return () => clearInterval(id);
  // });

  return (
    <>
      <h1>Hello Testing Hooks</h1>
      <p>{count}</p>
      <button onClick={handleClick}>Increment Count</button>
      <br />
      <br />
      <p>{count2}</p>
      <button onClick={handleClick2}>UseEffect will be executed</button>
    </>
  );
};

export default App;
