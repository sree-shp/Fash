import React from "react";
import { Link } from "react-router-dom";
import mensubcategory from "./mensubcategory";

function MenCategory() {
  function createSubCategory(subcategory, index) {
    return (
      <li key={index}>
        <div className="sub-category">
          <h3 className="men-sub-category-heading">{subcategory.heading}</h3>
          <div className="sub-category-links-wrapper">
            <Link
              to={`/Men/${subcategory.heading}/${subcategory.links[0]}`}
              className="category-link"
            >
              <p className="sub-category-links">{subcategory.links[0]}</p>
            </Link>
            <Link
              to={`/Men/${subcategory.heading}/${subcategory.links[1]}`}
              className="category-link"
            >
              <p className="sub-category-links">{subcategory.links[1]}</p>
            </Link>
            <Link
              to={`/Men/${subcategory.heading}/${subcategory.links[2]}`}
              className="category-link"
            >
              <p className="sub-category-links">{subcategory.links[2]}</p>
            </Link>
          </div>
        </div>
      </li>
    );
  }

  return (
    <div className="men-category">
      <Link to="/Men" className="men-heading-container">
        <p className="category-item">Men</p>
      </Link>

      <div className="men-wrapper">{mensubcategory.map(createSubCategory)}</div>
    </div>
  );
}

export default MenCategory;
