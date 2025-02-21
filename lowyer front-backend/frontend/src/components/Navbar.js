import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => scrollToSection("hero")}>الرئيسية</Link></li>
        <li><Link to="/" onClick={() => scrollToSection("about")}>من نحن</Link></li>
        <li><Link to="/" onClick={() => scrollToSection("services")}>خدماتنا</Link></li>
        <li><Link to="/" onClick={() => scrollToSection("contact")}>تواصل معنا</Link></li>
        <li><Link to="/" className="consult-btn" onClick={() => scrollToSection("contact")}>اطلب استشارة فورية</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
