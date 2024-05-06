import React from "react";
import useUsersContext from "../hooks/useUsersContext";

const User = ({ user }) => {
  const { id, username } = user;

  const { users, setUsers } = useUsersContext();

  const handleDeleteUser = (id) => {
    const filteredUser = users.filter((user) => user.id !== id);
    setUsers(filteredUser);
  };
  return (
    <article className=" bg-slate-700 p-5 text-white rounded flex flex-col gap-4 justify-center items-center">
      <h2 className=" text-xl font-bold">{id}</h2>
      <h1 className=" text-4xl font-semibold">{username}</h1>
      <button
        onClick={() => handleDeleteUser(id)}
        className=" bg-red-500 py-1 px-4 rounded font-semibold capitalize"
      >
        delete
      </button>
    </article>
  );
};

export default User;
