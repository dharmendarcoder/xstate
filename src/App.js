import logo from "./logo.svg";
import "./App.css";
import Child from "./Components/Child";
import { useMachine } from "@xstate/react";
import { MachineContext, toggleMachine } from "./Machine";

function App() {
  const [current, send] = useMachine(toggleMachine);
  const machine = [current, send];
  return (
    <>
      <MachineContext.Provider value={machine}>
        <div className="App">
          <button onClick={(e) => send("TOGGLE")}>{current.value}</button>
          <Child />
        </div>
      </MachineContext.Provider>
    </>
  );
}

export default App;
