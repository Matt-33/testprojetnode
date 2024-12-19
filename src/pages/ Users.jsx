import React from "react";
import UserForm from "../components/ UserForm";
import UserList from "../components/  UserList";

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <UserForm onUserCreated={() => window.location.reload()} />
      <UserList />
    </div>
  );
};

export default Users;
