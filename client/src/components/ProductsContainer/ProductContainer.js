import "./ProductContainer.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import Filters from "../Filters/Filters";

function ProductContainer(props) {
  const [active, setActive] = useState(false);

  function filtersClickHandler() {
    setActive(!active);
  }

  function handleSortChange(event) {
    props.setSort(event.target.value);
  }

  //Function to create Product cards
  function createProductCard(product, index) {
    return (
      <>
        {/* Based on productGroup element, if present, include it in the Link address, if not, dont include   */}
        {props.productGroup ? (
          <li key={index}>
            <Link
              to={
                "/" +
                props.productGroup +
                "/" +
                props.productSubCategory +
                "/" +
                props.ProductContainerName +
                "/" +
                product._id
              }
            >
              <ProductCard
                key={index}
                productImg={product.images[0]}
                productBrand={product.brand}
                productPrice={product.price}
                productDiscountedPrice={product.discountedPrice}
                productDiscount={product.discount}
              />
            </Link>
          </li>
        ) : (
          <li key={index}>
            <Link to={"/" + props.ProductContainerName + "/" + product._id}>
              <ProductCard
                key={index}
                productImg={product.images[0]}
                productBrand={product.brand}
                productPrice={product.price}
                productDiscountedPrice={product.discountedPrice}
                productDiscount={product.discount}
              />
            </Link>
          </li>
        )}
      </>
    );
  }

  return (
    <div className="product-container">
      <div className="product-container-header">
        <h2 className="product-container-heading">
          {/* to capitalize the text */}
          {props.ProductContainerName.charAt(0).toUpperCase() +
            props.ProductContainerName.slice(1)}
        </h2>

        <div onClick={filtersClickHandler} className="filters-icon-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3839/3839020.png"
            alt=""
            className="filter-icon"
          />
        </div>
        {active && (
          <>
            
            <div className="filters-container" >
            <div className="backdrop" onClick={filtersClickHandler}></div>
              <div className="filters-pane">
                <div className="product-sort-wrapper">
                  <span>Sort:</span>
                  <select onChange={handleSortChange}>
                    <option value={1}>Price: Lowest to Highest</option>
                    <option value={-1}> Price: Highest to Lowest</option>
                  </select>
                </div>
                <Filters />
              </div>
            </div>
          </>
        )}
      </div>
      {/* Map the array objects received as props from the ProductBrowser  */}
      <div className="product-card-wrapper">
        {props.list.map(createProductCard)}
      </div>
    </div>
  );
}

export default ProductContainer;
