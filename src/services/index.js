import { useState } from "react";
import createCreateUser from './actions/create-user';
const useService = () => {
  const [state, setState] = useState({
    users: []
  });
  const createUser = createCreateUser({state, setState})

  return{
    users: state.users,
    createUser,
  }
};
export default useService;
