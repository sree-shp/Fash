import Banner from "../Banner/Banner";
import MImg1 from "./dieter-blom-YAHCLVsRUBw-unsplash-removebg-preview.png";
import MImg2 from "./m-brauer-jM-6ezSckAA-unsplash-removebg-preview.png";
import "./Men.css";
import menCategories from "../Category/MenCategory/menCategories";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import CategoryNavbar from "../CategoryNavbar/CategoryNavbar";

function createCategoryCard(category) {
  const categoryLink = `/Men/${category.subCategory}/${category.name}`;

  return (
    <div>
      <Link to={categoryLink} className="category-link">
        <Category
          key={category.id}
          img={category.img}
          name={category.name}
          discount={category.discount}
          color={category.color}
        />
      </Link>
    </div>
  );
}

function Men() {
  return (
    <div className="Men">
      <CategoryNavbar highlight="Men"/>
      <Banner EoSSLink="/End Of Season Sale/Men">
        <img className="men-img1" src={MImg1} alt="" />
        <img className="men-img2" src={MImg2} alt="" />
      </Banner>

      <div className="second-section">
        <h1 className="second-section-heading">SHOP BY CATEGORY</h1>
        <div className="men-category-wrapper">
          {menCategories.map(createCategoryCard)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Men;
