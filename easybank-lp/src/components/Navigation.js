import React, { useState } from "react";
import "../components/Navigation.scss";
import hamburger from "../images/icon-hamburger.svg";
import closeMenuX from "../images/icon-close.svg";
import logo from "../images/logo.svg";
function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  let menu;
  let menuMask;

  if (showMenu) {
    menu = (
      <div className="mob-menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </div>
    );

    menuMask = (
      <div onClick={() => setShowMenu(false)} className="close-menu"></div>
    );
  }

  return (
    <nav>
      <img
        src={hamburger}
        alt="hamburger icon"
        onClick={() => setShowMenu(!showMenu)}
      ></img>

      <img className="logo" src={logo} alt="easybank logo"></img>
      {menuMask}
      {menu}
    </nav>
  );
}

export default Navigation;
