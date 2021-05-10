import React from "react";
import ReactDOM from "react-dom";
import "../components/Features.scss";
import feature1 from "../images/icon-online.svg";
import feature2 from "../images/icon-budgeting.svg";
import feature3 from "../images/icon-onboarding.svg";
import feature4 from "../images/icon-api.svg";
import articleimg1 from "../images/image-currency.jpg";
import articleimg2 from "../images/image-restaurant.jpg";
import articleimg3 from "../images/image-plane.jpg";
import articleimg4 from "../images/image-confetti.jpg";

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
          <img className="online" src={feature1} alt="icon"></img>
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="feat-box">
          <img src={feature2} alt="dollar sign on mobile screen"></img>
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month.Receive notifications
            when you're close to your hitting limits.
          </p>
        </div>
        <div className="feat-box">
          <img src={feature3} alt="people"></img>
          <h3>Fast Onboarding</h3>
          <p>
            We don't do branches.Open your acocunt in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="feat-box">
          <img src={feature4} alt="microchip"></img>
          <h3>Open API</h3>
          <p>
            Manage your savings, investments,pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
    <div className="Articles">
      <div className="Article-headline">
        <h2>Latest Articles</h2>
        <div className="Article-component">
          <div className="component-style">
            <img src={articleimg1} alt="UK pound money bills"></img>
            <span>By Claire Robinson</span>
            <h4>Receive money in any currency with no fees</h4>
            <p>
              The world is getting smaller and we're becoming more mobile.So why
              should you be forced to only receive money in a single...
            </p>
          </div>
          <div className="component-style">
            <img src={articleimg2} alt="UK pound money bills"></img>
            <span>By Wilson Hutton</span>
            <h4>Treat yourself without worrying about money</h4>
            <p>
              Our simple budgeting feature allows you to seperate out your
              spending and set realistic limits each month. That means you...
            </p>
          </div>
          <div className="component-style">
            <img src={articleimg3} alt="UK pound money bills"></img>
            <span>By Wilson Hutton</span>
            <h4>Take your Easybank card wherever you go</h4>
            <p>
              We want you to enjoy your travels.This is why we don't charge any
              fees on purchases while you're abroad.We'll even show you...
            </p>
          </div>
          <div className="component-style">
            <img src={articleimg4} alt="UK pound money bills"></img>
            <span>By Claire Robinson</span>
            <h4>Our invite-only Beta accounts are now live!</h4>
            <p>
              After a lot of hard work by the whole team, we're excited to
              launch our closed beta. It's easy to request an invite through the
              site...
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Features;
