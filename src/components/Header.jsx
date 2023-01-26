import { NavLink } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { FaReact } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const Header = () => {
  const {logout} = useLogout();

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
          </ul>
        </nav>
      </div>
      <Button
        variant="dark"
        className="mx-3"
        onClick={logout}
      >
        Log out
      </Button>
    </header>
  );
};

export default Header;
