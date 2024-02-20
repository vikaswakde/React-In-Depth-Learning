import { useEffect, useState } from "react";

const Section = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // prevent memeory leaks;
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h2>Time on Page: {Math.floor(elapsedSeconds)} seconds(s)</h2>
    </>
  );
};

export default Section;
