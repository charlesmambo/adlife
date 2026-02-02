import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/adlife-logo.svg";
import { Link } from "react-router-dom";
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
      <Link to="/">
        <img src={logo} alt="adlife logo" className="logo" />
      </Link>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>

      <Link to="/contact">
        <button className="global-btn nav-links">Contact Us</button>
      </Link>

      {/* Hamburger Icon */}
      <div className="harmburger" onClick={toggleMobileNav}>
        <RxHamburgerMenu className="harmburger-icon" />
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isMobileNavOpen ? "open" : ""}`}>
        <ul className="mobile-links">
          <li>
            <Link to="/" onClick={closeMobileNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMobileNav}>
              About Us
            </Link>
          </li>
        </ul>

        <Link to="/contact">
          <button className="global-btn" onClick={closeMobileNav}>
            Contact Us
          </button>
        </Link>

        <IoCloseCircleOutline className="close-icon" onClick={closeMobileNav} />
      </div>
    </nav>
  );
};

export default Navbar;
