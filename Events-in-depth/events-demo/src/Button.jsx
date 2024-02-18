export default function logStr() {
  // eslint-disable-next-line no-unused-vars
  function handleClick(e) {
    console.log("Hello There");
  }
  return <button onClick={handleClick}> Click Me</button>;
}
