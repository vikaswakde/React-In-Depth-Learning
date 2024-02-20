import { useState } from "react";
import Button from "./Button.jsx";

function Profile() {
  const [check, setCheck] = useState("Logged In");
  return (
    <>
      <p>{check}</p>

      <Button check={check} setCheck={setCheck} />
    </>
  );
}

export default Profile;
