import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useCreateAccount from "../../../services/create-account";

const useLogic = () => {
  const navigate = useNavigate();

  const createUser = useCreateAccount();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    createUser({ email, name, password });
    alert("회원가입이 완료되었습니다");
    navigate("/");
  };
  return {
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    onSubmit
  };
};

export default useLogic;
