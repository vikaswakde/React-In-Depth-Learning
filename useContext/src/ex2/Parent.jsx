import { createContext } from "react";
import Child from "./Child.jsx";

const MyContext1 = createContext();
const MyContext2 = createContext();

const contextState1 = 22;
const contextState2 = "Royal-Number";

function Parent() {
  return (
    <>
      <MyContext1.Provider value={contextState1}>
        <MyContext2.Provider value={contextState2}>
          <Child />
        </MyContext2.Provider>
      </MyContext1.Provider>
    </>
  );
}

export default Parent;

export { MyContext1, MyContext2 };
