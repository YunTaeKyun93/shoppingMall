import React from "react";
import MainPage from "../../components/main-page";
import Header from "../../components/header";
import useAuth from "../../services/auth";

const MainPagePage = () => {
  const auth = useAuth(); // import

  return (
    <div>
      <Header />
      <MainPage />
      <button onClick={() => auth.setIsLoggedIn(!auth.isLoggedIn)}>
        로그인/로그아웃
      </button>
    </div>
  );
};

export default MainPagePage;
