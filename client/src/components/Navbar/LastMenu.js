import React from 'react';
import { Link } from 'react-router-dom';
import profile from "./round-account-button-with-user-inside.png";
import cart from "./shopping-cart (3).png";
import heart from "./heart (1).png";

function LastMenu(props) {
    const { userName, setUserName, removeCookies } = props;
  return (
    <div className="LastMenu">
      <div className="last-menu">
        <Link className="cart-container" to="/Cart">
          <div className="cart-wrapper">
            <img className="cart-icon" src={cart} alt="cart" />
            <p>Cart</p>
          </div>
        </Link>
        <div className="wishlist-container">
          <img className="wishlist-icon" src={heart} alt="wishlist" />
          <p>Wishlist</p>
        </div>
        <div className="profile-container">
          <img className="profile-icon" src={profile} alt="profile" />
          <p>Profile</p>
        </div>
        <div className="profile-wrapper">
          <div className="welcome-text">
            {userName ? (
              <>
                <h3 className="welcome">Welcome</h3>
                <h3 className="username">{userName} </h3>
              </>
            ) : (
              <Link to="/login">
                <span className="login-message">
                  {" "}
                  To Access your account and manage orders
                </span>
                <br></br>
                <button className="login-register-button" type="submit">
                  LOGIN/REGISTER
                </button>
              </Link>
            )}
          </div>

          {userName && (
            <div className="profile-links-wrapper">
              <hr></hr>
              <Link to="/Orders">
                <p className="profile-links"> Orders</p>
              </Link>
              <p className="profile-links">Wishlist</p>
              <Link to="/">
                <button
                  className="login-register-button"
                  type="submit"
                  onClick={() => {
                    setUserName("");
                    removeCookies("token", { path: "/" });
                  }}>
                  Logout
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LastMenu