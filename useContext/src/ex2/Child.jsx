import { useContext } from "react";
import { MyContext1, MyContext2 } from "./Parent.jsx";

function Child() {
  const value1 = useContext(MyContext1);
  const value2 = useContext(MyContext2);

  //   const { value1, setValue1 } = useContext(MyContext1);
  //   const { value2, setValue2 } = useContext(MyContext2);
  //   console.log(value1);
  console.log(MyContext1);
  return (
    <>
      {/* <h1>Hello</h1> */}
      <p>{value1}</p>
      <p>{value2}</p>
    </>
  );
}

export default Child;
