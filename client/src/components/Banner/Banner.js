import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div className="first-section">
      <div className="first-section-description">
        <h1 className="sale-heading">
          END OF SEASON <br /> SALE
        </h1>
        <h2 className="discount">40-70%</h2>
        <Link to={props.EoSSLink}>
          <button className="shop-now">Shop Now</button>
        </Link>
      </div>

      {props.children}
    </div>
  );
}

export default Banner;
