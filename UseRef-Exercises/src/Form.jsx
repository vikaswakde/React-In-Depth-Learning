import { useRef, useState } from "react";

const Form = () => {
  const formRef = useRef(null);
  const [pText, setPText] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    let paraText = "";

    for (const [name, value] of formData) {
      paraText += `[${name}] :  ${value} <br/> `;
    }

    setPText(paraText);
  };

  return (
    <>
      <form onSubmit={submitForm} ref={formRef}>
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email" />
        <input type="number" name="age" placeholder="age" />
        <button type="submit">Submit</button>;
      </form>
      <p>{pText}</p>
    </>
  );
};

export default Form;
