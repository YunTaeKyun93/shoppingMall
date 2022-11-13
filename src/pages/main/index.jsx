import React from "react";
import MainPage from "../../components/main-page";
import Header from "../../components/header";
import useAuth from "../../services/auth";
import AdminMainPage from "./../admin/main/index";

const MainPagePage = () => {
  const auth = useAuth(); // import

  return (
    <div>
      {!auth.isLoggedIn && !auth.isAdminLoggedIn && <Header />}
      {auth.isLoggedIn && (
        <>
          <Header /> <MainPage />
        </>
      )}
      {auth.isAdminLoggedIn && <AdminMainPage />}
    </div>
  );
};

export default MainPagePage;
