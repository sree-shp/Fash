import React from "react";
import { Link } from "react-router-dom";
import MenCategory from "./MenCategory";
import WomenCategory from "./WomenCategory";
import KidsCategory from "./KidsCategory";
import LifestyleCategory from "./LifestyleCategory";

function Category(){
    return (
      <div className="categories">
        <MenCategory />

        <WomenCategory />

        <KidsCategory />

        <LifestyleCategory />
      </div>
    );
}

export default Category;