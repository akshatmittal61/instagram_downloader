import React from 'react'
import favicon from '../images/favicon.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <div className="footer-left-image">
                    <a className="footer-left-image__link" href="/" target="_self">
                        <img className="footer-left-image__img" src={favicon} alt="favicon" />
                    </a>
                </div>
            </div>
            <div className="footer-right">
                <span>&copy; Akshat Mittal</span>
                <span>Check out my other projects on GitHub: <a href="https://github.com/akshatmittal61">@akshatmittal61</a></span>
                <div>
                    <a href="https://akshatmittal61.github.io/Whack-A-Mole">Whack A Mole Game</a>
                    <a href="https://akshatmittal61.github.io/tic-tac-toe">Tic Tac Toe Game</a>
                </div>
                <div className="footer-right__contact">
                    <span className="footer-right__contact__img">
                        <img src={favicon} alt="https://instagram.com/akshatmittal61" />
                    </span>
                    <a href="https://instagram.com/akshatmittal61">@akshatmittal61</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
