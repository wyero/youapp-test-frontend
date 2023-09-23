import React, { useContext, useState } from "react";
import Input from "../../components/UI/Input/Input";
import Container from "../../components/Container/Container";
import style from "./style.module.css";
import Button from "../../components/UI/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Back from "../../components/UI/Back/Back";
import AuthContext from "../../store/auth-context";

const Login = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    usernameEmail: "",
    password: "",
  });
  const [valid, setValid] = useState(true);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
    if (userInput.usernameEmail !== "" && userInput.password !== "") {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    ctx.onLogin(userInput.usernameEmail, userInput.password); 
    if (ctx.isLoggedIn) { 
      navigate("/profile");
    }
  };
  return (
    <Container className={style.background}>
      <Back />
      <section style={{ margin: "0 1rem" }}>
        <h1 style={{ fontSize: 24, marginBottom: "1rem" }}>Login</h1>
        <form onSubmit={loginHandler}>
          <Input
            type="text"
            placeholder="Enter Email"
            value={userInput["usernameEmail"]}
            onChange={(event) =>
              inputChangeHandler("usernameEmail", event.target.value)
            }
          />
          <Input
            type="password"
            placeholder="Enter Password"
            value={userInput["password"]}
            onChange={(event) =>
              inputChangeHandler("password", event.target.value)
            }
          />
          <Button disabled={valid} className={`${valid && style.valid}`}>
            Login
          </Button>
        </form>
        <div className={style.link}>
          <p>
            No account?{" "}
            <Link to="/register" className={style.linktoLogin}>
              Register here
            </Link>
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Login;
