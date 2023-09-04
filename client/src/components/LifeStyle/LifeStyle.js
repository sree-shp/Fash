import React from "react";
import "./LifeStyle.css";
import Banner from "../Banner/Banner";
import lifeStyleCategories from "../Category/LifeStyleCategory/categories";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";

function createCategoryCard(category) {
  return (
    <Category
      key={category.id}
      img={category.img}
      name={category.name}
      discount={category.discount}
    />
  );
}

function LifeStyle() {
  return (
    <div className="LifeStyle">
      <Banner></Banner>

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
