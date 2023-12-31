import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Category from "./Category";
import SearchBox from "./SearchBox";
import LastMenu from "./LastMenu";


function Navbar({ userName, setUserName, removeCookies }) {
  
  return (
    <div className="Navbar">
      <Link to="/" className="brand-name">
        FASH
      </Link>
      <Category />
      <SearchBox />
      <LastMenu 
      userName={userName}
      setUserName={setUserName}
      removeCookies={removeCookies}
      />
    </div>
  );
}

export default Navbar;
