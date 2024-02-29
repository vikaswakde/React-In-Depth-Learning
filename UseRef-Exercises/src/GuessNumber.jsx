import { useEffect, useRef, useState } from "react";

const GuessNumber = () => {
  const randomNumber = useRef(null);
  const inputRef = useRef(null);
  const [pText, setPText] = useState("");

  const handleGuess = () => {
    const random = randomNumber.current;
    console.log(random);
    let { value: inputGuess } = inputRef.current;
console.log('This is inputGuess', inputGuess)
    if (inputGuess == random) {
      setPText("you win");
    } else if (inputGuess < random) {
      setPText("you guess to low!");
    } else {
      setPText("You gussed to high!");
    }
  };

  useEffect(() => {
    randomNumber.current = Math.floor(Math.random() * 10);
  }, []);

  return (
    <>
      <h1>Guess the number!</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleGuess}>Guess...</button>
      <p>{pText}</p>
    </>
  );
};

export default GuessNumber;
