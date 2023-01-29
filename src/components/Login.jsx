import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const {login} = useLogin();
  const MySwal = withReactContent(Swal);
  

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      // eslint-disable-next-line
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email === "" || password === "") {
      MySwal.fire({
        icon: "warning",
        title: <p>Fields can't be empty</p>,
        confirmButtonColor: "#000"
      });
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      MySwal.fire({
        icon: "warning",
        title: <p>You entered an invalid email</p>,
        confirmButtonColor: "#000"
      });
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      MySwal.fire({
        icon: "warning",
        title: <p>Invalid credentials</p>,
        confirmButtonColor: "#000"
      });
      return;
    }
    login(email, password);
  };

  const token = sessionStorage.getItem('token');

  return (
    <>
      {token ? (
        <Navigate to="/list" />
      ) : (
        <form
          onSubmit={submitHandler}
          className="d-flex flex-column gap-3 container mt-3"
        >
          <h2>Log in</h2>
          <label className="d-flex flex-column">
            <span>Email</span>
            <input type="text" name="email" />
          </label>
          <label className="d-flex flex-column">
            <span>Contraseña</span>
            <input type="password" name="password" />
          </label>
          <Button type="submit" variant="dark">
            Log in
          </Button>
        </form>
      )}
    </>
  );
};

export default Login;
