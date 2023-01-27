import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const useLogout = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const logout = () => {
    MySwal.fire({
      title: "Are you sure you want to log out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("token");
        navigate("/");
      }
    });
  };

  return { logout };
};

export default useLogout;
