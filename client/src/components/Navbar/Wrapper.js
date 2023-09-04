import React from "react";
import { Link } from "react-router-dom";
import "./Wrapper.css"
import SubCategoryWrapper from "./SubCategoryWrapper";

function Wrapper(props){
    console.log(props.categoryName);
    return(
        <div className="wrapper">
            <Link to={"/" + props.categoryName} className={"heading-container " + props.categoryName}>
                <p className="category-item">{props.categoryName}</p>
            </Link>

           {props.subCategoryArray.map((sub) => {
               
               <SubCategoryWrapper 
                    subCategory={sub.subCategory} 
                    subCategoryName1={sub.subCategoryName[0]}
                    subCategoryName2={sub.subCategoryName[1]} 
                    subCategoryName3={sub.subCategoryName[2]} 
               />}
            )} 
        
        </div>


    )
}

export default Wrapper