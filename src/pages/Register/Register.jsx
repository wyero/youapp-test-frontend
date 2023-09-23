import React, { useContext, useState } from "react";
import Input from "../../components/UI/Input/Input";
import Container from "../../components/Container/Container";
import style from "./style.module.css";
import Button from "../../components/UI/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Back from "../../components/UI/Back/Back";
import AuthContext from "../../store/auth-context";

const Register = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: "",
    username: "",
    password: "",
    confirmPass: "",
  });
  const [valid, setValid] = useState(true);
  const [msg, setMsg] = useState("");

  const inputChangeHandler = (input, value) => {
    if (
      userInput.email.trim().length !== 0 &&
      userInput.username.trim().length !== 0 &&
      userInput.password.trim().length !== 0 &&
      userInput.confirmPass.trim().length !== 0
    ) {
      setValid(false);
    } else {
      setValid(true);
    }
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const registerHandler = (event) => {
    event.preventDefault();
    if (userInput.password !== userInput.confirmPass) {
      setMsg("password and confirm password do not match");
      return;
    }
    if (userInput.password.length < 8 || userInput.confirmPass.length < 8) {
      setMsg("password must be longer than or equal to 8 characters");
      return;
    } else {
      ctx.onRegister(userInput.email, userInput.username, userInput.password);
      navigate("/");
    }
  };

  return (
    <Container className={style.background}>
      <Back to="/" />
      <section style={{ margin: "0 1rem" }}>
        <h1 style={{ fontSize: 24, marginBottom: "1rem" }}>Register</h1>
        <p className={style.msgError}>{msg}</p>
        <form onSubmit={registerHandler}>
          <p className={style.msgError}>{msg.title}</p>
          <Input
            type="email"
            placeholder="Enter Email"
            value={userInput["email"]}
            onChange={(event) =>
              inputChangeHandler("email", event.target.value)
            }
          />
          <Input
            type="text"
            placeholder="Create Username"
            value={userInput["username"]}
            onChange={(event) =>
              inputChangeHandler("username", event.target.value)
            }
          />
          <Input
            type="password"
            placeholder="Create Password"
            value={userInput["password"]}
            onChange={(event) =>
              inputChangeHandler("password", event.target.value)
            }
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={userInput["confirmPass"]}
            onChange={(event) =>
              inputChangeHandler("confirmPass", event.target.value)
            }
          />
          <Button disabled={valid} className={`${valid && style.valid}`}>register</Button>
        </form>
        <div className={style.link}>
          <p>
            Have an account?{" "}
            <Link to="/" className={style.linktoLogin}>
              Login here
            </Link>
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Register;
