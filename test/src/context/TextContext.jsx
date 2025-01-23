import React, { createContext, useReducer } from "react";
import textReducer, { initialState } from "../reducer/TextReducer";

export const TextContext = createContext();

const TextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(textReducer, initialState);

  return (
    <TextContext.Provider value={{ state, dispatch }}>
      {children}
    </TextContext.Provider>
  );
};

export default TextProvider;