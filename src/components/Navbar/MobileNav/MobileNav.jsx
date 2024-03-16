import React from "react";
import "./MobileNav.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const [activeLink, setActiveLink] = useState(window.location.pathname); // This is the state that will be used to set the active link (the link that is currently being viewed
  const location = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <>
      <div
        className={isOpen ? "mobile-menu active" : "mobile-menu"}
        onClick={toggleMenu}
      >
        <div>
          <ul className="mobile-menu-items">
            <li className="mobile-menu-item">
              <Link
                to="/"
                className={`mobile-menu-item ${
                  activeLink === "/" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/")}
              >
                Work
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link
                to="/Skills"
                className={`mobile-menu-item ${
                  activeLink === "/Skills" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/Skills")}
              >
                Skills
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link
                to="/About"
                className={`mobile-menu-item ${
                  activeLink === "/About" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/About")}
              >
                About
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link
                to="/Resume"
                className={`mobile-menu-item ${
                  activeLink === "/Resume" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/Resume")}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
