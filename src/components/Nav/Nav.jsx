import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./nav.css";

const Nav = () => {
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        <img src={logo} alt="logo Kasa" />
      </Link>
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
