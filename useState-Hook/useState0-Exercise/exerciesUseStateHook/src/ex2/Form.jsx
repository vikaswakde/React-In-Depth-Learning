import { useState } from "react";
// import usesstat

function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleInput = (event) => {
    event.preventDefault();
    setMessage(
      `The first name is ${fname} \n The last name is ${lname} \n The Email is ${email}`
    );
    setFname("");
    setLname("");
    setEmail("");
  };

  return (
    <>
      <form action="" onSubmit={handleInput}>
        <input
          type="text"
          name="fname"
          value={fname}
          onInput={(event) => setFname(event.target.value)}
        />

        <input
          type="text"
          name="email"
          value={lname}
          onInput={(event) => setLname(event.target.value)}
          id=""
        />

        <input
          type="email"
          name="email"
          value={email}
          onInput={(event) => setEmail(event.target.value)}
        />

        <button onClick={handleInput}>Submit</button>
      </form>
      <h2>{message}</h2>
    </>
  );
}
export default Form;
// function
// usestate  for each

// handle submit -->

// form
// input --> onChange => set"state"<- value

// button --> onclick

// h1 --> log message
