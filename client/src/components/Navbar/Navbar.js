import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Category from "./Category";
import SearchBox from "./SearchBox";
import LastMenu from "./LastMenu";


function Navbar(props) {

  const { userName, setUserName, removeCookies } = props;
  
  return (
    <div className="Navbar">
      <Link to="/" className="brand-name">
        FASH
      </Link>
      <Category />
      <SearchBox />
      <LastMenu 
      userName 
      setUserName
      removeCookies
      />
    </div>
  );
}

export default Navbar;
