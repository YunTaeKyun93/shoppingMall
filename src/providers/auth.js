import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/auth";

const loggedInUserIdKey = "logged-in-user";
const loggedInAdminIdKey = "logged-in-admin";

const getInitialState = () => {
  const initialState = {};

  const loggedInUserId = window.localStorage.getItem(loggedInUserIdKey);
  if (loggedInUserId != null) {
    initialState.userId = loggedInUserId;
  } else {
    initialState.userId = null;
  }
  const loggedInAdminId = window.localStorage.getItem(loggedInAdminIdKey);
  if (loggedInAdminId != null) {
    initialState.adminId = loggedInAdminId;
  } else {
    initialState.adminId = null;
  }

  return initialState;
};

const AuthProvider = ({ contexts, children }) => {
  const navigate = useNavigate();

  const [state, setState] = useState(getInitialState());

  const login = useCallback(
    (userId) => {
      setState({ userId });
      window.localStorage.setItem(loggedInUserIdKey, userId);
      window.localStorage.removeItem(loggedInAdminIdKey);
    },
    [setState]
  );

  const logout = useCallback(() => {
    setState({ userId: null });
    window.localStorage.removeItem(loggedInUserIdKey);
    alert("로그아웃되었습니다.");
    navigate("/");
  }, [setState, navigate]);

  const adminLogin = useCallback(
    (adminId) => {
      setState({ ...state, adminId });
      window.localStorage.setItem(loggedInAdminIdKey, adminId);
    },
    [setState,state]
  );

  const adminLogout = useCallback(() => {
    setState({ ...state, adminId: null });
    window.localStorage.removeItem(loggedInAdminIdKey);
    alert("로그아웃되었습니다!!");
    navigate("/");
  }, [setState, navigate,state]);

  return (
    <AuthContext.Provider
      value={useMemo(
        () => ({
          isLoggedIn: !!state.userId,
          isAdminLoggedIn: !!state.adminId,
          userId: state.userId,
          adminId: state.adminId,
          login,
          logout,
          adminLogin,
          adminLogout,
        }),
        [state, login, logout, adminLogin, adminLogout]
      )}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
