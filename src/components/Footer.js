import '../styles/footer.scss';
import logo from '../assets/logo_black&white.png';

function Footer() {
    return (
        <div className='kasa-footer'>
            <img src={logo} alt="Kasa" className="kasa-logo-footer" />
            <p className="kasa-footer-text">© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;