import React from "react";
import "./Navbar.css";
import "material-symbols";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav/MobileNav";
import { Twirl as Hamburger } from "hamburger-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false); // This is the state that will be used to toggle the mobile menu
  const [activeLink, setActiveLink] = useState(window.location.pathname); // This is the state that will be used to set the active link (the link that is currently being viewed
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={() => setOpenMenu(!openMenu)} />
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Søren Mehlsen <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon">
            <i className="fas fa-bars"></i>
          </div>

          <ul className="nav-menu">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-links ${activeLink === "/" ? "active" : ""}`}
                onClick={() => setActiveLink("/")}
              >
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Skills"
                className={`nav-links ${
                  activeLink === "/Skills" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/Skills")}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/About"
                className={`nav-links ${
                  activeLink === "/About" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/About")}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={`nav-links ${
                  activeLink === "/Contact" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/Contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
          <Hamburger toggled={openMenu} toggle={setOpenMenu} size={25} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
