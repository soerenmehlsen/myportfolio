import React from 'react';
import './Navbar.css';
import 'material-symbols';


const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="/" className="navbar-logo">
                        Søren Mehlsen <i className="fab fa-typo3"></i>
                    </a>
                    <div className="menu-icon">
                        <i className="fas fa-bars"></i>
                    </div>

                    <ul className="nav-menu">
                        <li className="nav-item">
                            <a href="/" className="nav-links">
                                Work
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/Skills" className="nav-links">
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/About" className="nav-links">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/Resume" className="nav-links">
                                Resume
                            </a>
                        </li>
                    </ul>
                    <button className="menu-btn" onClick={()=>{}}>
                        <span 
                        className={"material-symbols-outlined"}
                        style={{ fontSize: "1.8rem"}}>
                            menu
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;