import React from "react";
import "./Women.css";
import Banner from "../Banner/Banner";
import WImg1 from "./napat-saeng-mVGW8j9rrC4-unsplash-removebg-preview.png";
import WImg2 from "./rafaella-mendes-diniz-et_78QkMMQs-unsplash-removebg-preview.png";
import womenCategories from "../Category/WomenCategory/categories";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";

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

function Women() {
  return (
    <div className="Women">
      <Banner EoSSLink="/End Of Season Sale/Women">
        <img className="women-img1" src={WImg1} alt="" />
        <img className="women-img2" src={WImg2} alt="" />
      </Banner>

      <div className="second-section">
        <h1 className="second-section-heading">SHOP BY CATEGORY</h1>
        <div className="category-wrapper">
          {womenCategories.map(createCategoryCard)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Women;
