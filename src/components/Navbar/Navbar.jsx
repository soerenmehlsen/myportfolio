import React from "react";
import "./Navbar.css";
import "material-symbols";
import { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false); // This is the state that will be used to toggle the mobile menu

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }; // This function will be used to toggle the mobile menu
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
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
          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? (
              <ClearOutlinedIcon style={{ fontSize: "1.8rem" }} />
            ) : (
              <DehazeOutlinedIcon style={{ fontSize: "1.8rem" }} />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
