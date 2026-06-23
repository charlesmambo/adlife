import React from "react";
import "./Footer.css";
import logo from "../../assets/adlife-logo.svg";
import { FaLocationDot } from "react-icons/fa6";
import { MdContactPhone, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="adlife logo" className="logo" loading="lazy" />
          </Link>
          <p>
            Discover the Delicious <br /> Side of Vegan
          </p>
        </div>

        {/* Navigation */}
        <div className="nav">
          <p>Navigation</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Business Hours */}
        <div className="nav">
          <p>Business Hours</p>
          <ul>
            <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
            <li>Sat: 9:00 AM - 5:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="nav">
          <p>Contact Us</p>
          <ul>
            <li className="footer-ctc">
              <MdEmail className="ctc-icon" />
              customercare@adlifesoy.co.za
            </li>
            <li className="footer-ctc">
              <MdContactPhone className="ctc-icon" />
              +27 71 471 9214
            </li>
          </ul>
        </div>
      </div>

      <p className="ft-rights">
        &copy; {currentYear} adLife. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
