import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/adlife-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Toggle mobile nav
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // Close mobile nav
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <nav className="navbar-container">
      {/* Logo */}
      <a href="#home">
        <img src={logo} alt="adlife logo" className="logo" loading="lazy" />
      </a>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
      </ul>

      <a href="#contact">
        <button className="global-btn nav-links">Contact Us</button>
      </a>

      {/* Hamburger Icon */}
      <div className="harmburger" onClick={toggleMobileNav}>
        <RxHamburgerMenu className="harmburger-icon" />
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isMobileNavOpen ? "open" : ""}`}>
        <ul className="mobile-links">
          <li>
            <a href="#home" onClick={closeMobileNav}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMobileNav}>
              About Us
            </a>
          </li>
        </ul>

        <a href="#contact">
          <button className="global-btn" onClick={closeMobileNav}>
            Contact Us
          </button>
        </a>

        <IoCloseCircleOutline className="close-icon" onClick={closeMobileNav} />
      </div>
    </nav>
  );
};

export default Navbar;
