import React from "react";
import "./Footer.css";
import fb from "./facebook.png";
import insta from "./instagram (1).png";
import twitter from "./twitter-sign.png";
import youtube from "./youtube.png";

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <h3 className="socials-heading">KEEP IN TOUCH</h3>
        <div className="socials-links">
          <img className="socials-links-img" src={fb} alt="" />
          <img className="socials-links-img" src={insta} alt="" />
          <img className="socials-links-img" src={twitter} alt="" />
          <img className="socials-links-img" src={youtube} alt="" />
        </div>
      </div>
      <p className="rights">© 2023 www.fash.com. All rights reserved.</p>
    </div>
  );
}

export default Footer;
