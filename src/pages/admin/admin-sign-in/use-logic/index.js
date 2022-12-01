import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../../../../services/login";
import UserNotFoundByEmailError from "../../../../errors/user-not-found-by-email";
import IncorrectPasswordError from "../../../../errors/incorrect-password";

const useLogic = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const loginService = useLogin();

  const login = () => {
    try {
      loginService({ email, password });
    } catch (error) {
      if (error instanceof UserNotFoundByEmailError) {
        alert("유저를 찾을 수 없습니다");
        return;
      }

      if (error instanceof IncorrectPasswordError) {
        alert("비밀번호가 일치하지 않습니다");
        return;
      }

      alert("알 수 없는 에러가 발생하였습니다");
      console.error(error);

      return;
    }

    navigate("/admin");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    login
  };
};

export default useLogic;
