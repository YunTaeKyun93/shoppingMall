import { useContext } from "react";
import UserContext from "../../contexts/user";

const useUser = () => {
  const userValue = useContext(UserContext);
  
  return userValue;
};

export default useUser;
