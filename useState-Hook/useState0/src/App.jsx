import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  let add = () => {

    console.log(count);
    setCount(count + 1);
    console.log(count);
    
  };

  return <button onClick={add}>count: {count}</button>;
}

export default App;
