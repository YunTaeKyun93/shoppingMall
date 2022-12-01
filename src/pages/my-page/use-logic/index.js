import { useState, useEffect } from "react";
import useReadUser from "../../../services/read-user";
import useAuth from "./../../../services/auth/index";
import useUpdateUserInfo from "./../../../services/update-user-info/index";
import userNotFound from "./../../../errors/userNotFound";
import DuplicatedIdError from "../../../errors/duplicated-id";
import FailureToComplyWithEamilFormat from "../../../errors/failure-to-comply-with-email-format";
const useLogic = () => {
  const auth = useAuth();
  const id = auth.userId;
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const readUser = useReadUser();
  const updateUserInfo = useUpdateUserInfo();

  const init = async () => {
    try {
      const user = await readUser(id);
      setUser(user);
    } catch (error) {
      if (error instanceof userNotFound) {
        alert("해당하는 유저ID를 가진 유저를 찾을 수 없습니다");
        return;
      }
    }
  };

  useEffect(() => {
    init();
  }, []);

  const attachErrorHandler = (fn) => {
    const newFn = async (...args) => {
      try {
        await fn(...args);
        setEmail(null);
      } catch (error) {
        if (error instanceof DuplicatedIdError) {
          alert("중복된 아이디가 있습니다.");
          return;
        }
        if (error instanceof FailureToComplyWithEamilFormat) {
          alert("이메일 형식이 맞지 않습니다.");
          return;
        }
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

  const updatePassword = attachErrorHandler(async () => {
    await updateUserInfo(id, { password });
    init();
  });
  return {
    user,
    isLoading: !user,
    email,
    setEmail,
    password,
    setPassword,
    updateEmail,
    updatePassword
  };
};
export default useLogic;
