import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";

const TextList = () => {
  const { state, dispatch } = useContext(TextContext);
  const { texts } = state;
  return (
    <div>
      {texts.map((item, index) => (
        <div key={index} style={{ margin: "10px 0" }}>
          <p
            style={{
              color: item.color,
              fontSize: `${item.size}px`,
              margin: "0",
            }}
          >
            {item.text}
          </p>
          <button onClick={() => dispatch({ type: "DELETE_TEXT", payload: index })}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TextList;