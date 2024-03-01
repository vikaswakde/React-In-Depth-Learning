import { createContext, useState } from "react";
import Child from "./Child.jsx";

const MyContext = createContext();

function Parent() {
  const [initState, setInitState] = useState("Hello!");

  return (
    <MyContext.Provider value={[initState, setInitState]}>
      <Child />
    </MyContext.Provider>
  );
}

export default Parent;
export { MyContext };
