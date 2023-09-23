import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { AiOutlineLeft } from "react-icons/ai";
import AuthContext from "../../../store/auth-context";

const Back = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <header className={style.header}>
      <Link to={props.to} className={`${style.back} ${props.className}`}>
        <AiOutlineLeft />
        <span style={{ fontSize: 14 }}>Back</span>
      </Link>
      {ctx.isLoggedIn && props.page !== "interest" && <p>@johndoe123</p>}
      {props.page === "interest" && (
        <button className={style.button}>Save</button>
      )}
    </header>
  );
};

export default Back;
