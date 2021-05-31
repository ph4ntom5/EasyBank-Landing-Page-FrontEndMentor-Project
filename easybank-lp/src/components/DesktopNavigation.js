import React from "react";
import DesktopLogo from "../images/logo.svg";
import "./DesktopNavigation.scss";
const DesktopNavigation = () => {
  return (
    <>
      <nav className="Desktop-Nav-bar">
        <img src={DesktopLogo} alt="EasyBank logo"></img>

        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
        <button className="request-btn2"> Request Invite</button>
      </nav>
    </>
  );
};

export default DesktopNavigation;
