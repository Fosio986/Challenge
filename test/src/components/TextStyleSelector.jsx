import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";

const TextStyleSelector = () => {
  const { state, dispatch } = useContext(TextContext);

  // Gestion du changement de couleur
  const handleChange = (e) => {
    dispatch({ type: "ADD_COLOR", payload: e.target.value }); // Action pour mettre à jour la couleur
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