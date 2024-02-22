import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <h3 className="socials-heading">KEEP IN TOUCH</h3>
        <div className="socials-links">
          <img className="socials-links-img" src="images/facebook.png" alt="" />
          <img
            className="socials-links-img"
            src="images/instagram (1).png"
            alt=""
          />
          <img
            className="socials-links-img"
            src="images/twitter-sign.png"
            alt=""
          />
          <img className="socials-links-img" src="images/youtube.png" alt="" />
        </div>
      </div>
      <p className="rights">© 2023 www.fash.com. All rights reserved.</p>
    </div>
  );
}

export default Footer;
