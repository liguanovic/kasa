import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./nav.css";

const Nav = () => {
return (
    <nav>
        <Link to="/">
            <img src={logo} alt="logo Kasa" />
        </Link>
        <ul>
            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/about">A propos</Link>
            </li>
        </ul>
    </nav>
)

}

export default Nav