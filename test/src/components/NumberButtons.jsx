import React from "react";

const NumberButtons = ({ dispatch }) => {
  const handleClick = (number) => {
    dispatch({ type: "ADD_DIGIT", payload: number });
  };

  return (
    <div className="number-buttons">
      {[...Array(10).keys()].map((num) => (
        <button key={num} onClick={() => handleClick(String(num))}>
          {num}
        </button>
      ))}
    </div>
  );
};

export default NumberButtons;