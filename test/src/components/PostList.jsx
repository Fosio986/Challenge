import React, { useContext } from "react";
import { PostContext } from "./PostContext";

const PostList = () => {
  const { state } = useContext(PostContext);
  const { posts } = state;

  return (
    <div>
      <h2>Liste des Posts</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>Aucun post pour le moment.</p>
      )}
    </div>
  );
};

export default PostList;