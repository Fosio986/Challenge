import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";

const TextSizeSelector = () => {
  const { state, dispatch } = useContext(TextContext);

  const handleChange = (e) => {
    dispatch({ type: "SET_SIZE", payload: e.target.value });
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