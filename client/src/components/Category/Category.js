import React, { useState } from "react";
import "./Category.css";

function Category(props) {
  const [active, setActive] = useState(false);

  function onMouseEnter(){
      setActive(true)
  }

  function onMouseLeave() {
    setActive(false);
  }
  return (
    <div className="category" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="image-container" >
        <img className={"category-image " +  (active? "zoom-in": "zoom-out")} src={props.img} alt="" />
        <div className="category-details">
          <div
            className={"category-color-card " + (active ? "active": "inactive")}
            style={{ backgroundColor: props.color }}></div>
          <h2 className="category-name">{props.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Category;
