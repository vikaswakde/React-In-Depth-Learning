function Input() {
  function handleInput(e) {
    // console.log(e);
    const inputValue = e.target.value;
    const tagName = e.target.tagName;
    const id = e.target.getAttribute("id");
    const log = `[${tagName} id=${id}]: ${inputValue}`;
    console.log(log);
  }
  return <input type="text" id="username" onInput={handleInput} />;
}

export default Input;
