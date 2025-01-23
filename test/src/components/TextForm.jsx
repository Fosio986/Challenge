import React, { useState, useContext } from "react";
import { TextContext } from "../context/TextContext";
import TextInput from "./TextInput";
import TextStyleSelector from "./TextStyleSelector";
import TextSizeSelector from "./TextSizeSelector";

const TextForm = () => {
  const { dispatch } = useContext(TextContext);
  const [text, setText] = useState("");
  const [color, setColor] = useState("palevioletred");
  const [size, setSize] = useState("15");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({
        type: "ADD_TEXT",
        payload: { text, color, size },
      });
      setText(""); // Réinitialise le champ texte
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput text={text} setText={setText} />
      <TextStyleSelector color={color} setColor={setColor} />
      <TextSizeSelector size={size} setSize={setSize} />
      <button type="submit">Valider</button>
    </form>
  );
};

export default TextForm;