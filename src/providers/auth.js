import { useState, useMemo, createElement } from "react";
import AuthContext from "../contexts/auth";

const AuthProvider = ({ contexts, children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={useMemo(
        () => ({ isLoggedIn, setIsLoggedIn }),
        [isLoggedIn, setIsLoggedIn]
      )}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
