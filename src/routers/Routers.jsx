import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register, Login, Profile, Interest } from "../pages";
import AuthContext from "../store/auth-context";

const Routers = () => {
  const ctx = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {ctx.isLoggedIn && (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/interest" element={<Interest />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default Routers;
