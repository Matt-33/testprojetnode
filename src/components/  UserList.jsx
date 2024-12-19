import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../api";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          {user.name} ({user.email})
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
