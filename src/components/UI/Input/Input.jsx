import React from "react";
import style from './style.module.css';

const Input = (props) => {
  return (
    <input
      className={style.input }
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
