import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";

const TextSizeSelector = () => {
  const { state, dispatch } = useContext(TextContext);

  // Gestion du changement de taille
  const handleChange = (e) => {
    dispatch({ type: "ADD_SIZE", payload: e.target.value }); // Action pour mettre à jour la taille
  };

  return (
    <div>
      <label>Taille du texte :</label>
      <select value={state.size} onChange={handleChange}>
        {[15, 16, 17, 18, 19, 20].map((s) => (
          <option key={s} value={s}>
            {s}px
          </option>
        ))}
      </select>
    </div>
  );
};

export default TextSizeSelector;