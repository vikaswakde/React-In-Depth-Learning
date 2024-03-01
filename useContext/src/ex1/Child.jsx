import { useContext } from "react";
import { MyContext } from "./Parent.jsx";

function Child() {
  const [stringValue, setStringValue] = useContext(MyContext);

  function handleChange() {
    setStringValue((prev) => "vikas");
  }

  return (
    <>
      <h1>{stringValue}</h1>
      <button onClick={handleChange}>Change Value</button>
    </>
  );
}

export default Child;
