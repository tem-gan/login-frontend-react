import { useRef } from "react";
import classes from "./RegisterForm.module.css";
import { Link } from "react-router-dom";
function RegisterForm(props) {
  const createUsernameInputRef = useRef();
  const createPasswordInputRef = useRef();

  function sHandler(event) {
    event.preventDefault();

    const enteredNewUsername = createUsernameInputRef.current.value;
    const enteredNewPassword = createPasswordInputRef.current.value;

    const loginData = {
      username: enteredNewUsername,
      password: enteredNewPassword,
    };
    props.onSignIn(loginData);
  }

  return (
    <form className={classes.form} onSubmit={sHandler}>
      <div className={classes.control}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          required
          id="username"
          ref={createUsernameInputRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">password</label>
        <input
          type="text"
          required
          id="password"
          ref={createPasswordInputRef}
        />
      </div>
      <div className={classes.actions}>
        <button>Create Account</button>
      </div>
      <div>
        <Link to="/">
          <button type="button">Go back</button>
        </Link>
      </div>
    </form>
  );
}
export default RegisterForm;
