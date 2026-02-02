import React from "react";
import "./Navbar.css";
import logo from "../../assets/adlife-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="adlife logo" className="logo" />
      </Link>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>

      <Link to="/contact">
        <button className="global-btn">Contact Us</button>
      </Link>
    </nav>
  );
};

export default Navbar;
