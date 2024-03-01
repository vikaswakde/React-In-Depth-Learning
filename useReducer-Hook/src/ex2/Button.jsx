// const Button = ({ onClickUp, onClickDown, onClickReset }) => {
//   return (
//     <>
//       <button onClick={onClickUp}>Up</button>
//       <button onClick={onClickDown}>Down</button>
//       <button onClick={onClickReset}>Reset</button>
//     </>
//   );
// };

// export default Button;

function Button({ text, counterDispatch, action }) {
  function handleClick() {
    counterDispatch(action);
  }
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
}

export default Button;
