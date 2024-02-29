const { useRef, useEffect } = require("react");

const App = () => {
  
  const ref = useRef(0);
  console.log(ref);

  const handleClick = () => {
    ref.current++;
    console.log(ref);
  }

  useEffect(() => {
    console.log('ref changed!', ref);
  })



  return (
    <>
    <h1>Hello</h1>
    <button onClick={handleClick}>Click me</button>
    </>
  )

}

export App;