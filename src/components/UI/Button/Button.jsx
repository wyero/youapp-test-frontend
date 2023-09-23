import React from "react";
import style from "./style.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || ""}
      className={`${style.button} ${props.className}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
