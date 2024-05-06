import React from "react";
import User from "./User";
import useUsersContext from "../hooks/useUsersContext";

const Users = () => {
  const { users, setUsers } = useUsersContext();
  return (
    <section className=" bg-slate-300 h-screen grid grid-cols-3 gap-5 p-10">
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </section>
  );
};

export default Users;
