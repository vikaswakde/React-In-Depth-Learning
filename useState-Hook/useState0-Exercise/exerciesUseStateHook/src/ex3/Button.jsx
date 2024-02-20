function Button({ check, setCheck }) {
  function handleClick() {
    if (check === "Logged In") {
      setCheck("Logged Out")
    } else {
        setCheck("Logged In")
    }
  }
  return (
    <>
      <button onClick={handleClick}>"Toggle Login"</button>
    </>
  );
}

export default Button;
