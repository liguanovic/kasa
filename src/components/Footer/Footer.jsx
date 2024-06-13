import logo from "../../assets/logofooter.png";

import "./footer.css";

const Footer = () => {

    return (
        <footer className="footer">
            <img src={logo} alt="logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer
