import { useState } from "react";

const useService = () => {
  const [state, setState] = useState({
    users: []
  });
 

  return{
    users: state.users,
  
  }
};
export default useService;
