import React from "react";
import Banner from "../Banner/Banner";
import KImg1 from "../../";
import KImg2 from "../../";
import "./Kids.css";
import kidsCategories from "../Category/KidsCategory/categories";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import CategoryNavbar from "../CategoryNavbar/CategoryNavbar";

function createCategoryCard(category) {
  return (
    <Link to={`/Kids/${category.category}/${category.subCategory}`}>
      <Category
        key={category.id}
        img={category.img}
        category={category.subCategory}
        discount={category.discount}
        color={category.color}
      />
    </Link>
  );
}

function Kids() {
  return (
    <div className="Kids">
      <CategoryNavbar highlight="Kids" />
      <Banner EoSSLink="/End Of Season Sale/Kids">
        <img
          className="kids-img1"
          src="images/kayan-baby-kPXq-jxhMkk-unsplash-removebg-preview.png"
          alt=""
        />
        <img
          className="kids-img2"
          src="images/kin-li-a--1--Cmut8-unsplash-removebg-preview.png"
          alt=""
        />
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
