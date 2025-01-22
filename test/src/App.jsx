import React, { useReducer } from "react";
import Display from "./components/Display";
import NumberButtons from "./components/NumberButtons";
import OperatorButtons from "./components/OperatorButtons";
import { calculatorReducer, initialState } from "./reducer/CalculatorReducer";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <div className="calculator">
      <Display value={state.displayValue} />
      <div className="buttons">
        <NumberButtons dispatch={dispatch} />
        <OperatorButtons dispatch={dispatch} />
      </div>
    </div>
  );
};

export default App;