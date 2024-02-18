import React from "react";
import { Link } from "react-router-dom";
import womensubcategory from "./womensubcategory";

function WomenCategory() {
  function createSubCategory(subcategory) {
    return (
      <>
        <div className="sub-category">
          <h3 className="women-sub-category-heading">{subcategory.heading}</h3>
          <div className="sub-category-links-wrapper">
            <Link
              to={`/Women/${subcategory.heading}/${subcategory.links[0]}`}
              className="category-link"
            >
              <p className="sub-category-links">{subcategory.links[0]}</p>
            </Link>
            <Link
              to={`/Women/${subcategory.heading}/${subcategory.links[1]}`}
              className="category-link"
            >
              <p className="sub-category-links">{subcategory.links[1]}</p>
            </Link>
            <Link
              to={`/Women/${subcategory.heading}/${subcategory.links[2]}`}
              className="category-link"
            >
              <p className="sub-category-links">{subcategory.links[2]}</p>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="women-category">
      <Link to="/Women" className="women-heading-container">
        <p className="category-item">Women</p>
      </Link>

      <div className="women-wrapper">
        {womensubcategory.map(createSubCategory)}
      </div>
    </div>
  );
}

export default WomenCategory;
