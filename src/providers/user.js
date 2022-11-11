import { useState, useMemo } from "react";

import UserContext from "./../contexts/user";

const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  const value = {
    state: { email, name, password },
    actions: { setEmail, setName, setPassword }
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
