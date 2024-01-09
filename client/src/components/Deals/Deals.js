import React from "react";
import "./Deals.css";

function Deals(props) {
  return (
    <div className="deals">
      <div className="deals-img-container">
        <img className="deals-img" src={props.img} alt="" />
      </div>
      <div className="deals-details">
        <h1 className="deals-name">{props.name}</h1>
        <h2 className="deals-discount">{props.discount}</h2>
        <button className="deals-shop-now" type="submit">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Deals;
