import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const useUsersContext = () => {
  return useContext(UserContext);
};

export default useUsersContext;
