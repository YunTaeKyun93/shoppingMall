import { useContext } from "react";
import AuthContext from "../../contexts/auth";

const useAuth = () => {
  const authValue = useContext(AuthContext);

  return authValue;
};

export default useAuth;
