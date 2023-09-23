import React, { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  onRegister: () => {},
  onLogin: () => {},
});

export default AuthContext;
