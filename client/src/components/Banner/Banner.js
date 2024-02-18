import React from "react";
import "./BannerNew.css";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div className="first-section">
      
      <div className="first-section-description">
        <h1>
          END  OF SEASON <br /> SALE
        </h1>
        <h2>40-70%</h2>
        <Link to={props.EoSSLink}>
          <button className="shop-now">Shop Now</button>
        </Link>
      </div>
      {props.children}
      
    </div>
  );
}

export default Banner;
