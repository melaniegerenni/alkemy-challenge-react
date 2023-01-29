import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { NavLink, useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { FaReact } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Search from "./Search";
import Badge from "react-bootstrap/Badge";

const Header = () => {
  const { favs } = useContext(GlobalContext);
  const { logout } = useLogout();
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <header className="bg-warning d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <FaReact className="m-3 fs-1" />
        <nav>
          <ul className="list-inline d-flex p-2 gap-3 my-auto">
            <li>
              <NavLink
                to="/"
                className="text-dark text-decoration-none list-inline-item"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/list"
                className="text-dark text-decoration-none list-inline-item"
              >
                List
              </NavLink>
            </li>

            <li className="position-relative">
              <NavLink
                to="/favorites"
                className="text-dark text-decoration-none list-inline-item"
              >
                Favs
              </NavLink>
              {favs.length > 0 && (
                <Badge
                  pill
                  bg="success"
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {favs.length}
                </Badge>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className="d-flex gap-5 align-items-center">
        <Search />
        <Button
          variant="dark"
          className="mx-3"
          onClick={token ? logout : () => navigate("/")}
        >
          {token ? "Log out" : "Log in"}
        </Button>
      </div>
    </header>
  );
};

export default Header;
