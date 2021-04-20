import React from "react";
import ReactDOM from "react-dom";
import "../components/Features.scss";
import feature1 from "../images/icon-online.svg";

const Features = () => (
  <>
    <div className="Feature-section">
      <div className="Headline">
        <h1>Why choose Easybank?</h1>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="f-list">
        <div className="feat-box">
          <img src={feature1} alt="icon"></img>
          <h3>
            <p></p>
          </h3>
        </div>
        <div className="feat-box">
          <img></img>
          <h3>
            <p></p>
          </h3>
        </div>
        <div className="feat-box">
          <img></img>
          <h3>
            <p></p>
          </h3>
        </div>
        <div className="feat-box">
          <img></img>
          <h3>
            <p></p>
          </h3>
        </div>
      </div>
    </div>
  </>
);

export default Features;
