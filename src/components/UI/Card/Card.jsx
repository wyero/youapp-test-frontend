import React, { useState } from "react";
import style from "./style.module.css";
import { BiEditAlt } from "react-icons/bi";
import About from "../../About/About";

const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <p>{props.title}</p>
        <button
          style={{
            fontSize: 18,
            cursor: "pointer",
            background: "none",
            color: "white",
            border: "none",
          }}
          onClick={props.onClick || ""}
        >
          {!props.open ? (
            <BiEditAlt />
          ) : (
            <button
              style={{
                fontSize: 12,
                color: "rgba(243, 237, 166, 1)",
                fontWeight: 500,
                background: 'none',
                border: 'none'
              }}
            >
              Save & Update
            </button>
          )}
        </button>
      </div>
      {props.open ? <About /> : <p>{props.description}</p>}
    </div>
  );
};

export default Card;
