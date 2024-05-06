import { useState } from "react";
import Users from "./components/Users";
import NewUsers from "./components/NewUsers";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <NewUsers />
      <Users />
    </UserProvider>
  );
}

export default App;
