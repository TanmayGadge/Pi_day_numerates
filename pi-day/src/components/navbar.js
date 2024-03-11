import React from "react";
import "./nav.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <p className="department-link">
          Mathematics and Statistics Department | MITWPU
        </p>
      </div>
      <div className="navbar-right">
        <a href="https://numeratesth.web.app/" className="website-link">
          Visit our website
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
