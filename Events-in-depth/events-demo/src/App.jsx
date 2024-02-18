function App(){
  function handleClick(e, num){
    console.log(e);
    console.log(num);
}

// return <p onClick={handleClick}>Hello React</p>;
// return <p onClick={(e) => handleClick(e)}>Hello React</p>
return <p onClick={(e) => handleClick(e, 42)}>Hello World React!</p>
}


export default App;
