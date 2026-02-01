import React from "react";
import "./Navbar.css";
import logo from "../../assets/adlife-logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img src={logo} alt="adlife logo" className="logo" />
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
      </ul>
      <button className="global-btn">Contact Us</button>
    </nav>
  );
};

export default Navbar;
