import { NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-warning d-flex align-items-center">
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
    </header>
  );
};

export default Header;
