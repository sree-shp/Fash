import React from "react";
import Banner from "../Banner/Banner";
import KImg1 from "./kayan-baby-kPXq-jxhMkk-unsplash-removebg-preview.png";
import KImg2 from "./kin-li-a--1--Cmut8-unsplash-removebg-preview.png";
import "./Kids.css";
import kidsCategories from "../Category/KidsCategory/categories";
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

function Kids() {
  return (
    <div className="Kids">
      <Banner EoSSLink="/End Of Season Sale/Kids">
        <img className="kids-img1" src={KImg1} alt="" />
        <img className="kids-img2" src={KImg2} alt="" />
      </Banner>

      <div className="second-section">
        <h1 className="second-section-heading">SHOP BY CATEGORY</h1>
        <div className="category-wrapper">
          {kidsCategories.map(createCategoryCard)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kids;
