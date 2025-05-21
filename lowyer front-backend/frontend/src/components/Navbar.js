import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className={`navbar-container ${isMenuOpen ? "menu-open" : ""}`}>
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Burger Menu */}
        <div className="burger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => scrollToSection("hero")}>Home</Link></li>
          <li><Link to="/" onClick={() => scrollToSection("about")}>About Us</Link></li>
          <li><Link to="/" onClick={() => scrollToSection("services")}>Our Services</Link></li>
          <li><Link to="/" onClick={() => scrollToSection("contact")}>Contact Us</Link></li>
          <li><Link to="/" className="consult-btn" onClick={() => scrollToSection("contact")}>Request a Consultation</Link></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
