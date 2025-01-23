import React from "react";

const TextInput = ({ text, setText }) => {
  return (
    <div>
      <label>Saisir un texte :</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Entrez votre texte"
      />
    </div>
  );
};

export default TextInput;