import React from "react";

const TextSizeSelector = ({ size, setSize }) => {
  return (
    <div>
      <label>Taille du texte :</label>
      <select value={size} onChange={(e) => setSize(e.target.value)}>
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