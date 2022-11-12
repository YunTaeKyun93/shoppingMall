import React from "react";
import Header from "../../components/header";
import useLogic from "./use-logic/index";

const SignInPage = () => {
  const logic = useLogic();

  return (
    <div>
      <Header />
      <input
        value={logic.email}
        onChange={(event) => {
          logic.setEmail(event.target.value);
        }}
        placeholder="이메일"
      />
      <input
        type="password"
        value={logic.password}
        onChange={(event) => {
          logic.setPassword(event.target.value);
        }}
        placeholder="비밀번호"
      />
      <input
        type="button"
        value={"로그인"}
        onClick={(event) => {
          logic.login();
        }}
      />
    </div>
  );
};

export default SignInPage;
