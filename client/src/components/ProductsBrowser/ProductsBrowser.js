import React, { useEffect, useState } from "react";
import ProductContainer from "../ProductsContainer/ProductContainer";
import "./ProductsBrowser.css";
import axios from "axios";
import Error from "../Error/Error";
import ProductCardSkeleton from "../Skeletons/ProductCardSkeleton";

//Entry point to view products
//Refer Component Tree
//ProductBrowser -->  ProductContainer --> ProductCard

function ProductsBrowser(props) {
  // State to store fetched Products
  const [data, setData] = useState([]);

  // Extra States
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // State for filters
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState(1);

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

          //Store the response from the axios get method with the name and filters sent as params
          let res;

          if (props.EoSS) {
            res = await axios.get(
              `${process.env.REACT_APP_API_BASEURL}api/products/getEndOfSeasonSaleProducts`,
              {
                params: {
                  group: props.title,

                  filters: filters,
                  sort: sort,
                },
              }
            );
          } else {
            res = await axios.get(
              `${process.env.REACT_APP_API_BASEURL}api/products/getProducts`,
              {
                params: {
                  name: props.title,
                  group: props.group,
                  filters: filters,
                  sort: sort,
                },
              }
            );
          }
          //Update the results state with the fetched data
          setData(res.data);
          //Checks if the array is empty and sets error message
          if (res.data.length === 0) {
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
    [filters, props.title, sort]
  );

  return (
    <div className="product-browser">
      {/* Filters Component with filters state and its set function sent as props  */}
      {/* <Filters filters={filters} setFilters={setFilters}/> */}
      {/* if loading, show skeleton */}
      {loading && <ProductCardSkeleton />}
      {/* Not loading, No error, show ProductContainer with title, category, group sent as a props */}
      {!loading && !error && (
        <ProductContainer
          ProductContainerName={props.title || props.EoSSheading}
          productSubCategory={props.subCategory}
          productGroup={props.group}
          list={data}
          sort={sort}
          setSort={setSort}
          filters={filters}
          setFilters={setFilters}
        />
      )}
      {/* if error, show Error component with error state sent as props */}
      {error && <Error msg={error} />}
    </div>
  );
}

export default ProductsBrowser;
