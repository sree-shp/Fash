import React from "react";
import "./LifeStyle.css";
import Banner from "../Banner/Banner";
import lifeStyleCategories from "../Category/LifeStyleCategory/categories";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import bg from "./gray-sofa-brown-living-room-with-copy-space.jpg";

function createCategoryCard(category) {
  return (
    <Category
      key={category.id}
      img={category.img}
      name={category.name}
      discount={category.discount}
      color={category.color}
    />
  );
}

function LifeStyle() {
  return (
    <div className="lifeStyle">
      <div className="lifestyle-first-section">
        <div className="bg-container">
          <img className="bg-img" src={bg} />
        </div>
        <div className="lifestyle-first-section-description">
          <h1 className="lifestyle-sale-heading">
            END OF SEASON SALE
          </h1>
          <h2 className="lifestyle-discount">40-70%</h2>
          <Link>
            <button className="shop-now">Shop Now</button>
          </Link>
        </div>
      </div>

      <div className="second-section">
        <h1 className="second-section-heading">SHOP BY CATEGORY</h1>
        <div className="category-wrapper">
          {lifeStyleCategories.map(createCategoryCard)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LifeStyle;
