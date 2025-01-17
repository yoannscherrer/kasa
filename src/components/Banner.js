import { useEffect, useState } from 'react';
import '../styles/banner.scss';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

function Banner() {
    const location = useLocation(); 
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        const pathname = location.pathname;

        if (pathname.startsWith('/logement') || pathname === '/404') {
            setActiveLink(null);
        } else if (pathname === '/') {
            setActiveLink('home');
        } else if (pathname === '/a-propos') {
            setActiveLink('about');
        }
    }, [location.pathname]);

    return (
        <div className="kasa-banner">
            <img src={logo} alt="Kasa" className="kasa-logo" />
            <nav>
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={activeLink === 'home' ? 'active' : ''}
                            onClick={() => setActiveLink('home')}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/a-propos"
                            className={activeLink === 'about' ? 'active' : ''}
                            onClick={() => setActiveLink('about')}
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
