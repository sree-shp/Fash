import React, { useEffect } from "react";
import "./ProductContainer.css";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";
import {Link} from "react-router-dom";

function ProductContainer(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(props.list);
    console.log(props.list)
  }, [props.list]);

  
function createProductCard(product) {
  
  return (
    <Link to={"/"+ props.productGroup+"/"+props.productSubCategory+"/" + props.ProductContainerName+ "/" + product._id}  >
    <ProductCard
      key={product._id}
      productImg={product.images[0]}
      productBrand={product.brand}
      productPrice={product.price}
    />
    </Link>
  );
}


  return (
    <div className="product-container">
      <h2 className="product-container-heading">
        {props.ProductContainerName}
      </h2>
      <div className="product-card-wrapper">
        {props.list.map(createProductCard)}
      </div>
    </div>
  );
}

export default ProductContainer;
