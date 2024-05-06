import React, { useState } from "react";
import useUsersContext from "../hooks/useUsersContext";

const NewUsers = () => {
  const [username, setUsername] = useState("");
  const { users, setUsers } = useUsersContext();

  const handleAddUser = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: username };
    setUsers((prevUser) => [...prevUser, newUser]);
    setUsername("");
  };
  return (
    <div className=" text-center bg-slate-400 py-6">
      <div className=" bg-slate-800 text-white w-[400px] h-[150px] mx-auto flex flex-col justify-center items-center rounded-md">
        <h2 className=" text-3xl font-semibold capitalize">Register Users</h2>
        <form onSubmit={handleSubmit} className=" mt-4 w-full">
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleAddUser}
            required
            placeholder="Enter your user name"
            className=" w-[80%] rounded-md p-1 text-black"
          />
          <button className=" bg-red-500 py-1 px-4 capitalize font-bold rounded-md mt-3">
            Add user
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUsers;
