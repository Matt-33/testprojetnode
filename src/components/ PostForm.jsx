import React, { useState, useEffect } from "react"; // Ajoute useEffect ici
import { createPost } from "../api";

const PostForm = ({ onPostCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    user_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(formData);
    onPostCreated();
    setFormData({ title: "", author: "", content: "", user_id: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="Content"
        value={formData.content}
        onChange={handleChange}
      ></textarea>
      <input
        name="user_id"
        placeholder="User ID"
        value={formData.user_id}
        onChange={handleChange}
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
