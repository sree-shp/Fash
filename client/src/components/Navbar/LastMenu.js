import React from "react";
import { Link } from "react-router-dom";
import profile from "./round-account-button-with-user-inside.png";
import cart from "./shopping-cart (3).png";
import order from "./shopping-list.png";

function LastMenu(props) {
  const { userName, logOutHandler } = props;

  return (
    <div className="last-menu">
      <Link to="/Cart">
        <div className="cart-container">
          <div className="icon-container">
            <img className="cart-icon" src={cart} alt="cart" />
          </div>
          <p>Cart</p>
        </div>
      </Link>
      <Link to="/Orders">
        <div className="wishlist-container">
          <div className="icon-container">
            <img className="wishlist-icon" src={order} alt="wishlist" />
          </div>
          <p>Orders</p>
        </div>
      </Link>

      <div className="profile-container">
        <div className="icon-container">
          <img className="profile-icon" src={profile} alt="profile" />
        </div>
        <p>Profile</p>
        <div className="profile-wrapper">
          <div className="welcome-text">
            {userName ? (
              <>
                <span className="welcome">Welcome, </span>
                <span className="username">{userName} </span>
              </>
            ) : (
              <Link to="/login">
                <span> To Access your account and manage orders</span>
                <br></br>
                <button className="login-register-button" type="submit">
                  Login / Register
                </button>
              </Link>
            )}
          </div>

          {userName && (
            <div className="profile-links-wrapper">
              <Link to="/Orders">
                <p className="profile-links"> Orders</p>
              </Link>
              <Link to="/">
                <span className="logout-btn" onClick={logOutHandler}>
                  Logout
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LastMenu;
