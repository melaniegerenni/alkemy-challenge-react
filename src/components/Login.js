import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

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
        navigate("/listado");
      });
  };

  return (
    <>
      <h2>Inicia sesión</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Email</span>
          <input type="text" name="email" />
        </label>
        <br />
        <label>
          <span>Contraseña</span>
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
};

export default Login;
