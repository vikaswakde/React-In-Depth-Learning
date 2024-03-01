import { useState } from "react";

function Auth() {
  const [password, setPassword] = useState("");

  const pText =
    password === "secret"
      ? "Successfully logged in "
      : "Enter correct password ";

  function checkPassword(e) {
    setPassword((prev) => e.target.value);
  }

  return (
    <>
      <input type="text" onInput={checkPassword} />
      <p>{pText}</p>
    </>
  );
}

export default Auth;
