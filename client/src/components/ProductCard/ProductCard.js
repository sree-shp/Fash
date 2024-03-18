import React from "react";
import "./ProductCard.css";

function ProductCard({
  productImg,
  productBrand,
  productDiscount,
  productDiscountedPrice,
  productPrice,
}) {
  return (
    <div className="product-card">
      <img className="product-img" src={productImg} alt="" />

      <div className="product-details-wrapper">
        <h3 className="product-name">{productBrand}</h3>

        <div className="price-details-wrapper">
          <div className="price-wrapper">
            <p className="product-price">Rs {productDiscountedPrice}</p>
            <p className="origin-price">{productPrice}</p>
          </div>
          <p className="product-discount">{productDiscount}% Off</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
