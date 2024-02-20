import { useEffect, useState } from "react";

const Interval = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(() => count + 1);
  };

  //   useEffect(() => {
  //     setInterval(() => {
  //     //   console.log("Interval Say's Hello!!!");
  //     //   return () => console.log("return interval!!!");
  //     }, 1000);
  //   }, []);
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Interval Say's Hello!!");
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

export default Interval;
