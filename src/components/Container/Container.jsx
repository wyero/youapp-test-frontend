import React from "react";
import style from "./style.module.css";

const Container = (props) => {
  return (
    <div className={`${style.container} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;
