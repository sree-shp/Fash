import React from "react";
import "./Category.css";

function Category(props) {
  return (
    <div className="category">
      <div className="image-backdrop-container">
        <div className="image-container">
          <img className="category-image" src={props.img} alt="" />
        </div>
      </div>

      <div className="category-details">
        <h2 className="category-name">{props.name}</h2>
      </div>
    </div>
  );
}

export default Category;
