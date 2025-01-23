import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";

const TextStyleSelector = () => {
  const { state, dispatch } = useContext(TextContext);

  const handleChange = (e) => {
    dispatch({ type: "SET_COLOR", payload: e.target.value });
  };

  return (
    <div>
      <label>Style de texte :</label>
      <select value={state.color} onChange={handleChange}>
        <option value="palevioletred">palevioletred</option>
        <option value="tomato">tomato</option>
      </select>
    </div>
  );
};

export default TextStyleSelector;