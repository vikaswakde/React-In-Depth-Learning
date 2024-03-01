import { useState } from "react";

function Names() {
  const [names, setNames] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const addName = () => {
    setNames((prevName) => [...prevName, inputText]);
  };

  const filteredNames = names
    .filter((name) => name.startsWith("A"))
    .map((name) => <p>{name}</p>);

  return (
    <>
      <input type="text" value={inputText} onChange={handleInput} />
      <button onClick={addName}>Add Name</button>
      {filteredNames}
    </>
  );
}

export default Names;
