import React from 'react';
import Button from './Button';
import Theme from './theme';
import logobw from '../images/logobw.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <div className="header-left-image">
                    <a className="header-left-image__link" href="https://instagram.com">
                        <img className="header-left-image__img" src={logobw} alt="Instagram" />
                    </a>
                </div>
            </div>
            <div className="header-right">
                <nav className="header-right-nav">
                    <ul className="header-right-nav-list">
                        <li className="header-right-nav-list-item">
                            <a className="header-right-nav-link" href="#" target="_self">
                                <span className="material-icons">home</span>
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="header-right-nav-list-item">
                            <a className="header-right-nav-link" href="#" target="_self">
                                <span className="material-icons">contact_phone</span>
                                <span>Contact us</span>
                            </a>
                        </li>
                        <li className="header-right-nav-list-item">
                            <Theme />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
