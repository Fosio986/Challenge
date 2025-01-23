import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";

const TextInput = () => {
  const { state, dispatch } = useContext(TextContext);

  // Fonction de gestion de changement de texte
  const handleChange = (e) => {
    dispatch({ type: "SET_TEXT", payload: e.target.value });
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