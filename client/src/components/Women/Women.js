import React from "react";
import "./Women.css";
import Banner from "../Banner/Banner";
import womenCategories from "../Category/WomenCategory/categories";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import CategoryNavbar from "../CategoryNavbar/CategoryNavbar";

function createCategoryCard(category) {
  return (
    <Link to={`/Women/${category.subCategory}/${category.name}`}>
      <Category
        key={category.id}
        img={category.img}
        name={category.name}
        discount={category.discount}
        color={category.color}
      />
    </Link>
  );
}

function Women() {
  return (
    <div className="Women">
      <CategoryNavbar highlight="Women" />
      <Banner EoSSLink="/End Of Season Sale/Women">
        <img
          className="women-img1"
          src="images/rafaella-mendes-diniz-et_78QkMMQs-unsplash-removebg-preview.png"
          alt=""
        />
        <img
          className="women-img2"
          src="images/napat-saeng-mVGW8j9rrC4-unsplash-removebg-preview.png"
          alt=""
        />
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
