import { useState, useEffect, useRef } from "react";

function useStateWithLogger(initialState) {
  const [state, setState] = useState(initialState);
  const previousState = useRef(initialState);

  useEffect(() => {
    console.log(`State changed from ${previousState.current} to ${state}`);
    previousState.current = state;
  }, [state]);

  return [state, setState];
}

export default useStateWithLogger;
