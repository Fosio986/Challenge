import React, { useState, useContext } from "react";
import { PostContext } from "./PostContext";

const PostForm = () => {
  const { dispatch } = useContext(PostContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch({ type: "ADD_POST", payload: { id: Date.now(), title } }); // Ajoute un nouveau post
      setTitle(""); // Réinitialise le champ
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ajouter un nouveau post"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default PostForm;