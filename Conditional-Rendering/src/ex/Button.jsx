function Button({ loading }) {
  return <button>{loading ? "Loading..." : "Click me!"}</button>;
}

export default Button;
