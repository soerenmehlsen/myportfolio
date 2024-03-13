import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={isOpen ? "mobile-menu active" : "mobile-menu"}
        onClick={toggleMenu}
      >
        <div>
          <ul className="mobile-menu-items">
            <li className="mobile-menu-item">
              <a href="/" className="mobile-menu-links">
                Work
              </a>
            </li>
            <li className="mobile-menu-item">
              <a href="/Skills" className="mobile-menu-links">
                Skills
              </a>
            </li>
            <li className="mobile-menu-item">
              <a href="/About" className="mobile-menu-links">
                About
              </a>
            </li>
            <li className="mobile-menu-item">
              <a href="/Resume" className="mobile-menu-links">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
