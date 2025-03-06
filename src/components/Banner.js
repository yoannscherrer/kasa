import { useEffect, useState } from 'react';
import '../styles/banner.scss';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Banner() {
    
    return (
        <div className="kasa-banner">
            <img src={logo} alt="Kasa" className="kasa-logo" />
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/a-propos"
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Banner;
