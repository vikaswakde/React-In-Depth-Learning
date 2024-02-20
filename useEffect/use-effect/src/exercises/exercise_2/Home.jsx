import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(() => count + 1);
  };

  return (
    <>
      <h1>Visits: {count}</h1>
      <button onClick={handleClick}>+</button>
    </>
  );
};

export default Home;
