import RegisterForm from "../components/RegisterForm";
import { useHistory } from "react-router";

function Register() {
  const history = useHistory();

  function createUserHandler(loginData) {
    fetch("http://localhost:8080/user", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Create Account</h1>
      <RegisterForm onSignIn={createUserHandler} />
    </section>
  );
}
export default Register;
