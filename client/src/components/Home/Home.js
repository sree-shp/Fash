import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import Category from "../Category/Category";
import categories from "../Category/HomeCategory/categories";
import Deals from "../Deals/Deals";
import dealsList from "../Deals/Deallist";

import male from "./pngegg (1).png";
import female from "./PngItem_384787.png";
import Banner from "../Banner/Banner";

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

function createDealsCard(deals) {
  return (
    <Deals
      key={deals.id}
      img={deals.img}
      name={deals.name}
      discount={deals.discount}
    />
  );
}

function Home() {
  return (
    <div className="Home">
      {/* Banner */}

      <Banner>
        <img className="male" src={male} alt="" />
        <img className="female" src={female} alt="" />
      </Banner>

      {/* Category */}

      <div className="second-section">
        <h1 className="second-section-heading">SHOP BY CATEGORY</h1>
        <div className="category-wrapper">
          {categories.map(createCategoryCard)}
        </div>
      </div>

      {/* Deals of the day  */}

      <div className="third-section">
        <h1 className="third-section-heading">DEALS OF THE DAY</h1>
        <div className="deals-wrapper">{dealsList.map(createDealsCard)}</div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
