import CountdownAnimation from "./components/CountdownAnimation";
import SetPomodoro from "./components/SetPomodoro";

function App() {
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be Productive the right way</small>   
      <SetPomodoro />   
      {/* <CountdownAnimation /> */}
    </div>
  );
}

export default App;
