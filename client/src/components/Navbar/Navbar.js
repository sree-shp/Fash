import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarNew.css";
import Category from "./Category";
import SearchBox from "./SearchBox";
import LastMenu from "./LastMenu";
import HamburgerMenu from "./HamburgerMenu";
import axios from "axios";

function Navbar({ userName, setUserName, removeCookies }) {
  const [hamburger, setHamburger] = useState(false);
  const [account, setAccount] = useState(false);

  function accountClickHandler() {
    setAccount(!account);
  }

  function HamburgerClickHandler() {
    setHamburger(!hamburger);
  }

  async function logOutHandler() {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASEURL}api/users/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      setUserName("");
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="navbar">
      <Link to="/" className="brand-name">
        FASH
      </Link>
      <div className="menu-options">
        <Link to="/Search">
          <div className="search-wrapper">
            <div className="navbar-search-icon-container">
              <img
                className="search-icon"
                src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png"
              />
            </div>
          </div>
        </Link>

        <div className="account">
          <img
            className="account-icon"
            onClick={accountClickHandler}
            src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
            alt="profile"
          />
          {account && (
            <>
              <div className="backdrop" onClick={accountClickHandler}></div>
              <div
                className={`account-container ${!account ? "movetoright" : ""}`}
              >
                <h3>Welcome</h3>
                <div className="account-items-wrapper">
                  <div className="your-account-wrapper">
                    {userName ? (
                      <div className="logout-container">
                        <span className="username">{userName} </span>
                        <span className="logout-button" onClick={() => {logOutHandler(); accountClickHandler();}}>LogOut</span>
                      </div>
                    ) : (
                      <Link to="/login">
                        <span> To Access your account and manage orders</span>
                        <br></br>
                        <button onClick={accountClickHandler} className="login-register-button" type="submit">
                          Login / Register
                        </button>
                      </Link>
                    )}
                  </div>
                  <Link to="/Cart" onClick={accountClickHandler}>
                    <div className="cart-wrapper">
                      <span>Cart</span>
                    </div>
                  </Link>
                  <Link to="/Orders" onClick={accountClickHandler}>
                    <div className="wishlist-wrapper">
                      <span>Orders</span>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        {/* <div className="hamburger-icon" onClick={HamburgerClickHandler}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {hamburger && (
          <>
            <div className="backdrop" onClick={HamburgerClickHandler}></div>
            <HamburgerMenu />
          </>
        )} */}
      </div>

      <Category />
      <SearchBox source="navbar-search-container" />
      <LastMenu
        userName={userName}
        setUserName={setUserName}
        removeCookies={removeCookies}
        logOutHandler={logOutHandler}
      />
    </div>
  );
}

export default Navbar;
