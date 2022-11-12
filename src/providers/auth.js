import { useState, useMemo, createElement, useCallback } from "react";
import AuthContext from "../contexts/auth";

const loggedInUserIdKey = 'logged-in-user'; 
const loggedInAdminIdKey = 'logged-in-admin';
const AuthProvider = ({ contexts, children }) => {
  let initialState;

  const loggedInUserId = window.localStorage.getItem(loggedInUserIdKey);
  if (loggedInUserId != null) {
    initialState = {
      userId: loggedInUserId,
    };
  } else {
    initialState = {
      userId: null,
    };
  }
console.log(loggedInUserId)
  const loggedInAdminId = window.localStorage.getItem(loggedInAdminIdKey);
  if(loggedInAdminId !== null){
    initialState  = {

    }
  }

  // ytk@123
  const [state, setState] = useState(initialState);

  const login = useCallback((userId) => {
    setState({userId});
    window.localStorage.setItem(loggedInUserIdKey, userId);
  }, [setState]);

  const logout = useCallback(() => {
    setState({userId: null});
    window.localStorage.removeItem(loggedInUserIdKey);
  }, [setState]);

  const adminLogin = useCallback((userId)=>{
  
  })
  return (
    <AuthContext.Provider
      value={useMemo(() => ({
        isLoggedIn: !!state.userId,
        userId: state.userId,
        login,
        logout,
      }), [state, login, logout])}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
