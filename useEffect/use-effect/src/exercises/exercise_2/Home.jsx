import { useEffect, useState } from "react";
import Section from "./Section.jsx";

const Home = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("Home has re-reloaded");
  });

  useEffect(() => {
    let id = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id)

  }, []);

  return (
    <>
      <h1>Time on page: {timer} second(s)</h1>
      <Section />
    </>
  );
};

export default Home;
