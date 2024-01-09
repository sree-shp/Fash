import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../Footer/Footer";
import Category from "../Category/Category";
import categories from "../Category/HomeCategory/categories";
import Deals from "../Deals/Deals";
import dealsList from "../Deals/Deallist";
import male from "./pngegg (1).png";
import female from "./PngItem_384787.png";
import Banner from "../Banner/Banner";
import bg1 from "./pexels-codioful-(formerly-gradienta)-7130469.jpg";
import bg2 from "./pexels-codioful-(formerly-gradienta)-7130555 (1).jpg";
import bg3 from "./pexels-codioful-(formerly-gradienta)-7130498 (1).jpg";
import bg4 from "./pexels-codioful-(formerly-gradienta)-7130490.jpg";



function createCategoryCard(category) {
  return (
    <Link to= {"/" + category.name}  >
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

function createDealsCard(deals,index) {

  return (
    <div className="carasouel-images">
      <img className="bg-img-carasouel" src={bg4} />
      <Link to={"/" + deals.name}>
        <Deals
          key={deals.id}
          img={deals.img}
          name={deals.name}
          discount={deals.discount}
          index={index}
        />
      </Link>
    </div>
  );
}

function Home() {
  return (
    <div className="Home">
      {/* Banner */}

      <Banner EoSSLink="/End Of Season Sale">
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
{/* 
      <div className="third-section">
        <h1 className="third-section-heading">DEALS OF THE DAY</h1>
        <div className="deals-wrapper">
          <Carousel showThumbs={false} showArrows={false} showIndicators={false} showStatus={false} interval="2000" infiniteLoop autoPlay>{dealsList.map(createDealsCard)}</Carousel>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}

export default Home;
