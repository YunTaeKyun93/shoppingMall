import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/auth";

const loggedInUserIdKey = "logged-in-user";
const loggedInAdminIdKey = "logged-in-admin";

const AuthProvider = ({ contexts, children }) => {
  const navigate = useNavigate();
  let initialState;

  const loggedInUserId = window.localStorage.getItem(loggedInUserIdKey);
  if (loggedInUserId != null) {
    initialState = {
      userId: loggedInUserId
    };
  } else {
    initialState = {
      userId: null
    };
  }
  const loggedInAdminId = window.localStorage.getItem(loggedInAdminIdKey);
  if (loggedInAdminId != null) {
    initialState = {
      adminId: loggedInAdminId
    };
  } else {
    initialState = {
      adminId: null
    };
  }

  const [state, setState] = useState(initialState);
  const [adminState, setAdminState] = useState(initialState);
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
  }, [setState]);

  const adminLogin = useCallback(
    (adminId) => {
      setAdminState({ adminId });
      window.localStorage.setItem(loggedInAdminIdKey, adminId);
    },
    [setAdminState]
  );

  const adminLogout = useCallback(() => {
    setAdminState({ adminId: null });
    window.localStorage.removeItem(loggedInAdminIdKey);
    alert("로그아웃되었습니다!!");
    navigate("/");
  }, [setAdminState]);

  return (
    <AuthContext.Provider
      value={useMemo(
        () => ({
          isLoggedIn: !!state.userId,
          isAdminLoggedIn: !!adminState.userId,
          userId: state.userId,
          adminId: adminState.adminId,
          login,
          logout,
          adminLogin,
          adminLogout,
          loggedInUserId
          
        }),
        [state, adminState, login, logout, adminLogin, adminLogout]
      )}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
