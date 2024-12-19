import React, { useState } from "react";
import { createUser } from "../api";

const UserForm = ({ onUserCreated }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    last_name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(formData);
    onUserCreated();
    setFormData({ email: "", name: "", last_name: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        type="password"
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
