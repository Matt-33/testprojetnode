import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("token");
      alert("Vous êtes déconnecté.");
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
        <button onClick={handleLogout}>{token ? "Logout" : "Login"}</button>
      </nav>
    </div>
  );
};

export default Home;
