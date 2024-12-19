import React, { useEffect, useState } from "react";
import { getPosts, deletePost } from "../api";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data } = await getPosts();
    setPosts(data);
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              {post.title} by {post.author}
              <button onClick={() => handleDelete(post._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
