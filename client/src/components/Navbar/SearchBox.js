import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import clear from "./icons8-clear.svg";

function SearchBox() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState();

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
          "https://fash-server.onrender.com/api/search/searchByProducts",
          {
            params: {
              searchQuery: search,
            },
          }
        );
        //update the results state with the fetched data
        setResults(res.data.results);
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
        }}>
        <div className="search-item-box">
          <img className="search-item-img" src={searchItem.images[0]} />
          <div className="search-item-details">
            <span className="search-item-brand">{searchItem.brand}</span>
            <span className="search-item-name">{searchItem.name}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="SearchBox">
      <div className="search-container">
        {/* Search input box */}
        <input
          name="search"
          value={search}
          onChange={(e) => onChange(e)}
          className="search-textbox"
          placeholder="Search for products, brands and more"
          type="text"
        />
        {/* Clear icon */}
        <img
          className="clear-search"
          src={clear}
          onClick={(e) => {
            setSearch("");
          }}
        />
      </div>

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
          {!loading && !results.length && <span>No Matches Found</span>}
          {/* After results is fetched, maps the results as a list */}
          {results && results.map(createResultsList)}
        </div>
      )}
    </div>
  );
}

export default SearchBox