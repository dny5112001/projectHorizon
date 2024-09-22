import React from "react";
import "./Newsletter.css";

const NewsLetter = () => {
  return (
    <div className="newsletterContainer">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className="inputContainer">
        <input type="email" placeholder="Your email address" />
        <div className="subs-btn">Subscribe</div>
      </div>
    </div>
  );
};

export default NewsLetter;
