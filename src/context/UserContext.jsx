import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, username: "Mamunur Roshid" },
    { id: 2, username: "Mizanur Rahman" },
    { id: 3, username: "Munayem Billah" },
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
