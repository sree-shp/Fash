import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

function SearchBox(props) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  //Misc states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  //To get the search Reults

  useEffect(() => {
    async function fetchSearch() {
      try {
        //Loading is set to true which is set to false at the end
        setLoading(true);
        //Store the response from the axios get method with the searchQuery sent as params
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASEURL}/api/v2/search?searchQuery=${search}`
        );
        //update the results state with the fetched data
        setResults(res.data.data.search);
        //Loading is set to false
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        //When an error occurs, error message is set
        setError("Something went wrong");
        //Loading is set to false
        setLoading(false);
      }
    }
    //Calls the above function immediately to execute the function
    fetchSearch();
  }, [search]);

  function createResultsList(searchItem) {
    return (
      <Link
        to={"/Search/" + searchItem._id}
        onClick={(e) => {
          setSearch("");
        }}
      >
        <div className="search-item-box">
          <img className="search-item-img" src={searchItem.images[0]} alt="" />
          <div className="search-item-details">
            <span className="search-item-brand">{searchItem.productBrand}</span>
            <span className="search-item-name">{searchItem.productName}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <>
      <div className={props.source}>
        <div className="search-icon-container">
          <img
            alt="search bar"
            className="searchbar-icon"
            src="images/loupe.png"
            onClick={(e) => {
              setSearch("");
            }}
          />
        </div>
        {/* Search input box */}
        <input
          name="search"
          value={search}
          onChange={(e) => onChange(e)}
          className="search-textbox"
          placeholder="Search for products, brands and more"
          type="text"
        />

        {/* Search Results Box */}
        {search && (
          <div className="search-results-box">
            {/* Loading element displays until the response is received */}
            {loading && (
              <div className="react-loader-box">
                <ReactLoading
                  className="react-loader"
                  type="spin"
                  color="#f4555d"
                  height={50}
                  width={50}
                />
              </div>
            )}
            {/* Displays,if loading is completed, results length is equal to 0  */}
            {!loading && !results.length && (
              <div className="results-wrapper">
                <span className="results-heading">Results</span>
                <span>No Matches Found</span>
              </div>
            )}
            {/* After results is fetched, maps the results as a list */}
            {!loading & results.length ? (
              <div className="results-wrapper">
                <span className="results-heading">Results</span>
                {results.map(createResultsList)}
              </div>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBox;
