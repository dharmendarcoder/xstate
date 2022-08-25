import React from "react";
import { useMachineValue } from "../Machine";
const Machine = React.createContext();
function Child() {
  const [current] = useMachineValue();

  return (
    <>
      <h1>{current.value}</h1>
    </>
  );
}

export default Child;
