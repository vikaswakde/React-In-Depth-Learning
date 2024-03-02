import { useEffect, useState } from "react";

function useTimer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(timer);
      setTimer((prev) => prev + 1);
    }, 1000);

    // clearn up function
    return () => clearInterval(id);
  }, []);

  return timer;
}

export default useTimer;
