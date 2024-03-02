import useTimer from "./useTimer.jsx";

function App() {
  const timer = useTimer();
  return (
    <>
      <h1>Timer: {timer}</h1>
    </>
  );
}

export default App;
