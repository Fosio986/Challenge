import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";
import TextInput from "./TextInput";
import TextStyleSelector from "./TextStyleSelector";
import TextSizeSelector from "./TextSizeSelector";

const TextForm = () => {
  const { state, dispatch } = useContext(TextContext);
  const { text, color, size } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({
        type: "ADD_TEXT",
        payload: { text, color, size }, // Ajoute le texte avec ses styles
      });
      dispatch({ type: "CLEAR_TEXT" }); // Réinitialise le texte
    } else {
      console.log("Le texte ne peut pas être vide.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput />
      <TextStyleSelector />
      <TextSizeSelector />
      <button type="submit">Valider</button>
    </form>
  );
};

export default TextForm;