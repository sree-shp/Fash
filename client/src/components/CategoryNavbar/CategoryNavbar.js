import React from "react";
import "./CategoryNavbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function CategoryNavbar(props) {
    const [highlight, setHighlight] = useState(props.highlight);
  return (
    <div className="category-navbar">
      <Link className={`category-navbar-button ${highlight === "Men" ? "highlight-category-navbar": ""}`}  to="/Men">
        Men
      </Link>
      <Link className={`category-navbar-button ${highlight === "Women" ? "highlight-category-navbar": ""}`}  to="/Women">
        Women
      </Link>
      <Link className={`category-navbar-button ${highlight === "Kids" ? "highlight-category-navbar": ""}`}  to="/Kids">
        Kids
      </Link>
      <Link  className={`category-navbar-button ${highlight === "LifeStyle" ? "highlight-category-navbar": ""}`}  to="/LifeStyle">
        LifeStyle
      </Link>
    </div>
  );
}

export default CategoryNavbar;
