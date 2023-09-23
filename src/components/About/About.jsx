import React from "react";
import style from "./style.module.css";
import { IoIosAdd } from "react-icons/io";

const About = () => {
  return (
    <div className={style.about}>
      <div>
        <input type="file" id="image" hidden />
        <label htmlFor="image" className={style.inputImage}>
          <div>
            <IoIosAdd className={style.icon} />
          </div>
          Add Image
        </label>
      </div>
      <div className={style.inputControl}>
        <label htmlFor="name">display name</label>
        <input type="text" placeholder="Enter Name" />
      </div>
      <div className={`${style.inputControl} ${style.inputGender}`}>
        <label htmlFor="gender">gender</label>
        <select id="gender" placeholder="select gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className={style.inputControl}>
        <label htmlFor="date">birthday</label>
        <input type="text" placeholder="DD MM YYYY" id="date" />
      </div>
      <div className={style.inputControl}>
        <label htmlFor="horoscope">horoscope</label>
        <input type="text" placeholder="--" id="horoscope" />
      </div>
      <div className={style.inputControl}>
        <label htmlFor="zodiac">zodiac</label>
        <input type="text" placeholder="--" id="zodiac" />
      </div>
      <div className={style.inputControl}>
        <label htmlFor="height">height</label>
        <input type="text" placeholder="Add Height" id="height" />
      </div>
      <div className={style.inputControl}>
        <label htmlFor="weight">weight</label>
        <input type="text" placeholder="Add Weight" id="weight" />
      </div>
    </div>
  );
};

export default About;
