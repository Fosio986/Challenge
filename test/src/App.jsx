import React from "react";
import PostProvider from "./components/PostContext";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const App = () => {
  return (
    <PostProvider>
      <div>
        <h1>Gestion des Posts</h1>
        <PostForm />
        <PostList />
      </div>
    </PostProvider>
  );
};

export default App;