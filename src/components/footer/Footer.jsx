import React from "react";
import "./Footer.css";
import logo from "../../assets/adlife-logo.svg";
import { FaLocationDot } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="adlife logo" className="logo" />
          <p>
            Discover the Delicious <br /> Side of Vegan
          </p>
        </div>

        <div className="nav">
          <p>Navigation</p>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="nav">
          <p>Business Hours</p>
          <ul>
            <li>Mon - Fri: 9:00 AM - 6:00 PM </li>
            <li>Sat: 9:00 AM - 5:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
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
