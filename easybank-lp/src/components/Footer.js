import React from "react";
import ReactDOM from "react-dom";
import "../components/Footer.scss";
import logo from "../images/logo-white.svg";
import fb from "../images/icon-facebook.svg";
import ytube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
const Footer = () => (
  <>
    <div className="Footer-section">
      <div className="logos">
        <img className="white-logo" src={logo} alt="easybank logo"></img>
        <div className="socials-logo">
          <img src={fb} alt="facebook logo"></img>
          <img src={ytube} alt="youtube logo"></img>
          <img src={twitter} alt="twitter logo"></img>
          <img src={pinterest} alt="pinterest logo"></img>
          <img src={instagram} alt="instagram logo"></img>
          <div className="footer-navigation">
            <div className="links">
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <a href="#">Blog</a>
            </div>
            <div className="links">
              <a href="#">Careers</a>
              <a href="#">Support</a>
              <a href="#">Privacy Policy</a>
            </div>
            <button className="request-btn"> Request Invite</button>
            <p>© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
