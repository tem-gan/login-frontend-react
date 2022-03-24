import React, { useState } from "react";

import classes from "../components/LoginForm.module.css";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const onSignin = () => {
    const loginData = {
      username: state.username,
      password: state.password,
    };
    fetch("http://localhost:8080/user/method", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        history.push("/profile/" + state.username);
      } else {
        history.push("/register");
      }
    });
  };

  return (
    <>
      <h1>Log in</h1>
      {/* <form className={classes.form}> */}
      <div className={classes.control}>
        <label htmlFor="usernname">username</label>
        <input
          type="text"
          required
          id="username"
          value={state.username}
          onChange={(e) =>
            setState({
              ...state,
              username: e.target.value,
            })
          }
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">password</label>
        <input
          type="password"
          required
          id="password"
          value={state.password}
          onChange={(e) =>
            setState({
              ...state,
              password: e.target.value,
            })
          }
        />
      </div>
      <div className={classes.actions}>
        <button onClick={onSignin}>Login</button>
      </div>
      <div>
        <Link to="/register">
          <button type="button">Create Account</button>
        </Link>
      </div>
      {/* </form> */}
    </>
  );
}
export default Login;
