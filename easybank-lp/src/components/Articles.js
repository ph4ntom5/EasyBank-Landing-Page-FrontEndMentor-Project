import React from "react";
import "../components/Articles.scss";
import articleimg1 from "../images/image-currency.jpg";
import articleimg2 from "../images/image-restaurant.jpg";
import articleimg3 from "../images/image-plane.jpg";
import articleimg4 from "../images/image-confetti.jpg";

const Articles = () => (
  <>
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

export default Articles;
