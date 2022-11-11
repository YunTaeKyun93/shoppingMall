import React, { createElement } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import useLogic from "./use-logic";
import AuthProvider from "../providers/auth";
import MainPage from "../pages/main";
import MyPage from "../pages/my-page";
import SignUpPage from "../pages/sign-up";
import SignInPage from "../pages/sign-in";
import UserProvider from "./../providers/user";
const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev
      }),
    children
  );
const App = () => {
  const navigate = useNavigate();
  const logic = useLogic();

  return (
    <AppProvider contexts={[AuthProvider, UserProvider]}>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="my-page" element={<MyPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
