import React, { useEffect, useState } from "react";
import "./ProductsBrowser.css";
import axios from "axios";
import Error from "../Error/Error";
import ProductCardSkeleton from "../Skeletons/ProductCardSkeleton";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import Filters from "../Filters/Filters";

//Entry point to view products
//Refer Component Tree
//ProductBrowser -->  ProductContainer --> ProductCard

function ProductsBrowser({
  category,
  categoryGroup,
  subCategory,
  EoSSheading,
}) {
  // State to store fetched Products
  const [data, setData] = useState([]);
  const [heading, setHeading] = useState(
    EoSSheading || subCategory || category || categoryGroup
  );

  // Extra States
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // State for filters
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState(1);

  const [active, setActive] = useState(false);

  function filtersClickHandler() {
    setActive(!active);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  //Function to create Product cards
  function createProductCard(product, index) {
    let link;

    if (EoSSheading) {
      link = `/End Of Season Sale/${categoryGroup}/${product._id}`;
    } else if (!subCategory) {
      link = `/${categoryGroup}/${category}/${product._id}`;
    } else {
      link = `/${categoryGroup}/${category}/${subCategory}/${product._id}`;
    }
    return (
      <li key={index}>
        <Link to={link}>
          <ProductCard
            key={index}
            productImg={product.images[0]}
            productBrand={product.productBrand}
            productPrice={product.mrp}
            productDiscountedPrice={product.discountedPrice}
            productDiscount={product.discount}
          />
        </Link>
      </li>
    );
  }

  //Fetches data from database
  //useEffect with dependencies filters and props.title
  //Everytime filters and props.title change, useEffect runs and fetches the data
  //Name and filters as parameters
  //Name parameter is used for searching the required category
  //Filter is an array

  useEffect(
    function () {
      async function fetchData() {
        try {
          //Loading is set to true which is set to false at the end
          setLoading(true);
          let requestURL;
          if (EoSSheading && categoryGroup === "") {
            requestURL = ``;
          } else if (EoSSheading) {
            requestURL = `/EndOfSeasonSale/${categoryGroup}`;
          } else if (!subCategory) {
            requestURL = `/${categoryGroup}/${category}`;
          } else {
            requestURL = `/${categoryGroup}/${category}/${subCategory}`;
          }
          const res = await axios.get(
            `${process.env.REACT_APP_API_BASEURL}/api/v2/product${requestURL}`
          );

          //Update the results state with the fetched data
          setData(res.data.data.products);
          //Checks if the array is empty and sets error message
          if (res.data.data.products.length === 0) {
            setError("No Matches Found");
          } else setError("");
          //Loading is set to false

          setLoading(false);
        } catch (err) {
          console.error(err.message);
          //when an error occurs, error message is set
          setError("Something went Wrong");
          //Loading is set to false
          setLoading(false);
        }
      }
      //Calls the above function immediately to execute the function
      fetchData();
    },
    [filters, subCategory, category, categoryGroup, sort]
  );

  return (
    <div className="product-browser">
      {/* Filters Component with filters state and its set function sent as props  */}
      {/* <Filters filters={filters} setFilters={setFilters}/> */}
      {/* if loading, show skeleton */}
      {loading && <ProductCardSkeleton />}
      {/* Not loading, No error, show ProductContainer with title, category, group sent as a props */}
      {!loading && !error && (
        <div className="product-container">
          <div className="product-container-header">
            <h2 className="product-container-heading">
              {/* to capitalize the text */}
              {heading.charAt(0).toUpperCase() + heading.slice(1)}
            </h2>

            <div
              onClick={filtersClickHandler}
              className="filters-icon-container"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3839/3839020.png"
                alt=""
                className="filter-icon"
              />
            </div>
            {active && (
              <>
                <div className="filters-container">
                  <div className="backdrop" onClick={filtersClickHandler}></div>
                  <div className="filters-pane">
                    <div className="product-sort-wrapper">
                      <span>Sort:</span>
                      <select onChange={handleSortChange}>
                        <option value={1}>Price: Lowest to Highest</option>
                        <option value={-1}> Price: Highest to Lowest</option>
                      </select>
                    </div>
                    <Filters filters={filters} setFilters={setFilters} />
                  </div>
                </div>
              </>
            )}
          </div>
          {/* Map the array objects received as props from the ProductBrowser  */}
          <div className="product-card-wrapper">
            {data.map(createProductCard)}
          </div>
        </div>
      )}
      {/* if error, show Error component with error state sent as props */}
      {error && <Error msg={error} />}
    </div>
  );
}

export default ProductsBrowser;
