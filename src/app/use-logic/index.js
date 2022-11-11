import { useState } from "react";
import useService from "../../services";
const useLogic = () => {
  const [authenticate, setAuthenticate] = useState(false);
  const service = useService();
  return {
    users: service.users,
    authenticate,
    setAuthenticate,
    createUser: service.createUser
  };
};
export default useLogic;
