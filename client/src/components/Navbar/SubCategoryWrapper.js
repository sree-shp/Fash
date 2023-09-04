import React from "react";
import {Link} from "react-router-dom";
import "./SubCategoryWrapper.css";

function SubCategoryWrapper(props) {
    return (
        <div className="sub-category-wrapper">
            <div className="sub-category">
                <h3 className={props.subCategory.subCategory}>{props.subCategory.subCategory}</h3>
                <div className="sub-category-links-wrapper">
                    <Link to={"/" + props.category +  "/" + props.subCategoryName1} className="category-link">
                        <p className="sub-category-links">{props.subCategoryName1}</p>
                    </Link>
                    <Link to={"/" + props.category +"/" + props.subCategoryName2} className="category-link">
                        <p className="sub-category-links">{props.subCategoryName2}</p>
                    </Link>
                    <Link to={"/" + props.category + "/" + props.subCategoryName3} className="category-link">
                        <p className="sub-category-links">{props.subCategoryName3}</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SubCategoryWrapper;