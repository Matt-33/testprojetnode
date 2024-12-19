import React from "react";
import PostForm from "../components/ PostForm";
import PostList from "../components/ PostList";

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      <PostForm onPostCreated={() => window.location.reload()} />
      <PostList />
    </div>
  );
};

export default Posts;
