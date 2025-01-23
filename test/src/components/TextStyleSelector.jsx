import React from "react";

const TextStyleSelector = ({ color, setColor }) => {
  return (
    <div>
      <label>Style de texte :</label>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="palevioletred">palevioletred</option>
        <option value="tomato">tomato</option>
      </select>
    </div>
  );
};

export default TextStyleSelector;