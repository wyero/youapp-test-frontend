import React, { useState } from "react";
import Container from "../../components/Container/Container";
import style from "./style.module.css";
import Card from "../../components/UI/Card/Card";
import { useNavigate } from "react-router-dom";
import Back from "../../components/UI/Back/Back";

const Profile = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const openAboutHandler = () => {
    setOpen(true);
  };

  return (
    <Container>
      <Back />
      <div className={style.profile}>
        <img src="" alt="" />
        <p>@johndoe123,</p>
      </div>
      <Card
        title="About"
        description="Add in your your to help others know you better"
        onClick={openAboutHandler}
        open={open}
      />
      <Card
        title="Interest"
        description="Add in your interest to find a better match"
        onClick={() => navigate('/interest')}
      />
    </Container>
  );
};

export default Profile;
