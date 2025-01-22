import React from "react";

const OperatorButtons = ({ dispatch }) => {
  const handleOperatorClick = (operator) => {
    dispatch({ type: "SET_OPERATOR", payload: operator });
  };

  const handleCalculate = () => {
    dispatch({ type: "CALCULATE" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="operator-buttons">
      <button onClick={() => handleOperatorClick("+")}>+</button>
      <button onClick={() => handleOperatorClick("-")}>-</button>
      <button onClick={() => handleOperatorClick("*")}>x</button>
      <button onClick={() => handleOperatorClick("/")}>/</button>
      <button onClick={handleCalculate}>=</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default OperatorButtons;