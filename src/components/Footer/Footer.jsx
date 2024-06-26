import logo from '../../assets/logofooter.png';

import './footer.css';

/**
 * Renders the footer component with a logo and a copyright notice.
 *
 * @return {JSX.Element} The rendered footer component.
 */
const Footer = () => {

    return (
        <footer className='footer'>
            <img src={logo} alt='logo Kasa' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer
