import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Login = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

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
        title: <p>Los campos no pueden estar vacíos</p>,
      });
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      MySwal.fire({
        icon: "warning",
        title: <p>No ha ingresado un email válido</p>,
      });
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      MySwal.fire({
        icon: "warning",
        title: <p>Credenciales inválidas</p>,
      });
      return;
    }
    console.log("Ok! Estamos listos para enviar la información");
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        MySwal.fire({
          title: <p>Perfecto! Ingresaste correctamente</p>,
          icon: "success",
        });
        const token = res.data.token;
        localStorage.setItem("token", token);
        navigate("/list");
      });
  };

  const token = localStorage.getItem("token");
  

  return (
    <>
      {token ? (
        <Navigate to="/list" />
      ) : (
        <form
          onSubmit={submitHandler}
          className="d-flex flex-column gap-3 container"
        >
          <h2>Inicia sesión</h2>
          <label className="d-flex flex-column">
            <span>Email</span>
            <input type="text" name="email" />
          </label>
          <label className="d-flex flex-column">
            <span>Contraseña</span>
            <input type="password" name="password" />
          </label>
          <Button type="submit" variant="dark">
            Ingresar
          </Button>
        </form>
      )}
    </>
  );
};

export default Login;
