import { useState, useEffect } from "react";
import useReadUser from "../../../services/read-user";
import useAuth from "./../../../services/auth/index";
import useUpdateUserInfo from "./../../../services/update-user-info/index";
const useLogic = () => {
  const auth = useAuth();
  const id = auth.userId;
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const readUser = useReadUser();
  const updateUserInfo = useUpdateUserInfo();



  const init = async () => {
    const user = await readUser(id);
    setUser(user);
  };

  useEffect(() => {
    init();
  }, []);

  console.log("user", user);

  const attachErrorHandler = (fn) => {
    const newFn = async (...args) => {
      try {
        await fn(...args);
      } catch (error) {
        console.error(error);
        alert("알 수 없는 에러가 발생했습니다.");
      }
    };

    return newFn;
  };

  const updateEmail = attachErrorHandler(async () => {
    await updateUserInfo(id, { email });
    init();
  });

  return {
    user,
    isLoading: !user,
    email,
    setEmail,
    password,
    setPassword,
    updateEmail
  };
};
export default useLogic;
