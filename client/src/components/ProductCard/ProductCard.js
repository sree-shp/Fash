import React from "react";
import "./ProductCard.css";
import Skeleton from "react-loading-skeleton";



function ProductCard(props) {

  return (
    <div className="product-card">
      <img className="product-img" src={props.productImg} alt="" />

      <div className="product-details-wrapper">
        <h3 className="product-name">{props.productBrand}</h3>

        <div className="price-wrapper">
          <div className="price-wrapper">
            <p className="product-price">Rs {props.productDiscountedPrice}</p>
            <p className="origin-price">{props.productPrice}</p>
          </div>
          <p className="product-discount">{props.productDiscount}% Off</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

