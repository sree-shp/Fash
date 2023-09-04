import React from "react";
import "./ProductCard.css";
import Skeleton from "react-loading-skeleton";



function ProductCard(props) {

  return (
    <div className="product-card" >
      
      <img className="product-img" src={props.productImg} alt="" />
      <div className="product-details">
        <h3 className="product-name">{props.productBrand}</h3>
        
        <div className="price-wrapper">
          <p className="product-price">{props.productPrice}</p>
          <p className="origin-price">{props.originPrice}</p>
          <p className="product-discount">{props.discount}</p>
        </div>

        <button className="produt-wishlist" type="submit">
          WISHLIST
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
