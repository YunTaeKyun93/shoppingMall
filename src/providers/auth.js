import { useState, useMemo, createElement, useCallback } from "react";
import AuthContext from "../contexts/auth";

const loggedInUserIdKey = "logged-in-user";
const loggedInAdminIdKey = "logged-in-admin";

const AuthProvider = ({ contexts, children }) => {
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
    },
    [setState]
  );

  const logout = useCallback(() => {
    setState({ userId: null });
    setAdminState({ adminId: null });
    window.localStorage.removeItem(loggedInUserIdKey);
    window.localStorage.removeItem(loggedInAdminId);
  }, [setState, setAdminState]);

  const adminLogin = useCallback(
    (userId) => {
      setAdminState({ userId });
      window.localStorage.setItem(loggedInAdminIdKey, userId);
      console.log("adminLogin");
    },
    [setAdminState]
  );

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
          adminLogin
        }),
        [state, adminState, login, logout, adminLogin]
      )}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
