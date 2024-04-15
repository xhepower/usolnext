"use client";
import { useState } from "react";
import { User, UsersContainerProps } from "../../../../types";
import UserCard from "./UserCard";
import AddUser from "./AddUser";
import UserList from "./UserList";

export default function UsersContainer({ users, role }: UsersContainerProps) {
  const [creandoUser, setCreandoUser] = useState(false);
  console.log(typeof setCreandoUser);
  return (
    <div className="users-container">
      <h2>Usuarios</h2>
      {creandoUser ? (
        <AddUser setCreandoUser={setCreandoUser}></AddUser>
      ) : (
        <UserList
          users={users}
          role={role}
          setCreandoUser={setCreandoUser}
        ></UserList>
      )}
    </div>
  );
}
