import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const useLogin = () => {
  const { setLoading } = useContext(GlobalContext);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post("http://challenge-react.alkemy.org", {
        email,
        password,
      });
      MySwal.fire({
        title: <p>Great! Log in successful</p>,
        icon: "success",
        confirmButtonColor: "#000",

      });
      const token = response.data.token;
      sessionStorage.setItem('token', token);
      setLoading(false);
      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };

  return { login };
};

export default useLogin;
