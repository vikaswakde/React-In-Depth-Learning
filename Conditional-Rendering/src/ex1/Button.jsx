import { useState } from "react";

function Button() {
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const [toggle, setToggle] = useState(false);
  return (

    const buttonText = toggle ? "Loading..." : "Click Me"

    <button onClick={handleToggle}>{buttonText}</button>
  );
}

export default Button;
