import React from "react";
import "../components/Navigation.scss";
import hamburger from "../images/icon-hamburger.svg";
import logo from "../images/logo.svg";
const Navigation = () => (
  <>
    <nav>
      <img src={hamburger} alt="hamburger icon"></img>
      <img className="logo" src={logo} alt="easybank logo"></img>
    </nav>
  </>
);

export default Navigation;
