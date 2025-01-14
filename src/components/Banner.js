import { useState } from 'react';
import '../styles/banner.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Banner() {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <div className="kasa-banner">
            <img src={logo} alt="Kasa" className="kasa-logo" />
            <nav>
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={activeLink === 'home' ? 'active' : ''}
                            onClick={() => handleLinkClick('home')}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/a-propos"
                            className={activeLink === 'about' ? 'active' : ''}
                            onClick={() => handleLinkClick('about')}
                        >
                            A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Banner;
