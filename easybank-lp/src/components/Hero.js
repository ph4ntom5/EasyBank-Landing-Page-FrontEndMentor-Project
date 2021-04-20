import React from "react";
import ReactDOM from "react-dom";
import "../components/Hero.scss";
import mockupImage from "../images/bg-intro-mobile.svg";
import phoneMockups from "../images/image-mockups.png";

const Hero = () => (
  <>
    <div className="Hero-img">
      <img
        className="Bg-blobs"
        src={mockupImage}
        alt="Background green and violet blob shapes"
      ></img>
      <img
        className="Mobile-phones"
        src={phoneMockups}
        alt="Mobile Phones showing a software app"
      ></img>
    </div>
    <div className="Headline">
      <h1>Next generation digital banking</h1>
      <p>
        Take your financial life online.Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing and much more.
      </p>
    </div>
    <button className="request-btn"> Request Invite</button>
  </>
);

export default Hero;
