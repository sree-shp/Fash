import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../Footer/Footer";
import Category from "../Category/Category";
import categories from "../Category/HomeCategory/categories";
import Banner from "../Banner/Banner";
import CategoryNavbar from "../CategoryNavbar/CategoryNavbar";

function createCategoryCard(category, index) {
  return (
    <li key={index}>
      <Link to={"/" + category.name}>
        <Category
          key={category.id}
          img={category.img}
          name={category.name}
          discount={category.discount}
          color={category.color}
        />
      </Link>
    </li>
  );
}

function Home() {
  return (
    <div className="home">
      <CategoryNavbar highlight="" />
      {/* Banner */}

      <Banner EoSSLink="/End Of Season Sale">
        <div className="img-wrapper">
          <img className="male" src="images/pngegg (1).png" alt="" />

          <img className="female" src="images/PngItem_384787.png" alt="" />
        </div>
      </Banner>

      {/* Category */}

      <div className="second-section">
        <h1 className="second-section-heading">SHOP BY CATEGORY</h1>
        <div className="category-wrapper">
          {categories.map(createCategoryCard)}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
