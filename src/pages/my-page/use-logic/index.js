import { useEffect,useState } from 'react';
import useReadUser from "./../../../services/read-user/index";

const useLogic = () => {
  const [user, setUser] = useState(null);
  const readUser = useReadUser();
  const init = async () => {
    const user = await readUser();
    setUser(user);
  };
  
  useEffect(()=>{
    init();
  },[])
};
export default useLogic;
