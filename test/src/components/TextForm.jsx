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
    if (text && text.trim()) {
      dispatch({
        type: "ADD_TEXT",
        payload: { text, color, size },
      });
      dispatch({ type: "CLEAR_TEXT" }); // Action pour vider le champ de texte après soumission
    }
    else{
        console.log("le texte ne peut pas être vide");
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