import Banner from "../Banner/Banner";
import "./Men.css";
import menCategories from "../Category/MenCategory/menCategories";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import CategoryNavbar from "../CategoryNavbar/CategoryNavbar";

function createCategoryCard(category) {
  return (
    <div>
      <Link
        to={`/Men/${category.category}/${category.subCategory}`}
        className="category-link"
      >
        <Category
          key={category.id}
          img={category.img}
          category={category.subCategory}
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
      <CategoryNavbar highlight="Men" />
      <Banner EoSSLink="/End Of Season Sale/Men">
        <img
          className="men-img1"
          src="images/dieter-blom-YAHCLVsRUBw-unsplash-removebg-preview.png"
          alt=""
        />
        <img
          className="men-img2"
          src="images/m-brauer-jM-6ezSckAA-unsplash-removebg-preview.png"
          alt=""
        />
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
