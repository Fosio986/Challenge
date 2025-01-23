import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";

const TextInput = () => {
  const { state, dispatch } = useContext(TextContext);

  // Gestion du changement de texte
  const handleChange = (e) => {
    dispatch({ type: "UPDATE_TEXT", payload: e.target.value }); // Action pour mettre à jour le texte
  };

  return (
    <div>
      <label>Saisir un texte :</label>
      <input
        type="text"
        value={state.text}
        onChange={handleChange}
        placeholder="Entrez votre texte"
      />
    </div>
  );
};

export default TextInput;