import React, { createContext, useReducer } from "react";
import postReducer, { initialState } from "../reducer/PostReducer";

// Création et exportation du contexte
export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

// Exportation du Provider par défaut
export default PostProvider;