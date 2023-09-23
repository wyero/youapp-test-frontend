import React, { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [user, setUser] = useState([]);
  const [isLoggIn, setIsLoggIn] = useState(false);
  const registerHandler = (email, username, password) => {
    const newUser = {
      id: Math.random().toString(),
      email: email,
      username: username,
      password: password,
      token: Math.random().toString(),
    };
    const updateUser = [...user, newUser];
    setUser(updateUser);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const loginHandler = (email, password) => {
    const savedUsers = JSON.parse(localStorage.getItem("user"));

    if (savedUsers) {
      const userLogin = savedUsers.find(
        (user) =>
          (user.email === email || user.username === email) &&
          user.password === password
      );

      if (userLogin) {
        setIsLoggIn(true);
      } else {
        setIsLoggIn(false);
      }
    } else {
      console.log("Tidak ada pengguna yang terdaftar");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        onRegister: registerHandler,
        user,
        onLogin: loginHandler,
        isLoggedIn: isLoggIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
