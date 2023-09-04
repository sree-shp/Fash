import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import profile from "./round-account-button-with-user-inside.png";
import settings from "./settings.png";
import men from "./boss.png";
import women from "./woman.png";
import kids from "./children.png";
import orders from "./shopping-list.png";
import user from "./user.png";
import cart from "./shopping-cart (3).png";
import heart from "./heart (1).png";
import axios from "axios";

function Navbar(props) {
  var [isActive, active] = useState(false, () => {
    isActive = !isActive;
  });
  const [cartNumber, setCartNumber] = useState(0);

  const { userName, setUserName, removeCookies } = props;

  // useEffect(() => {
  //   const hamburgerIcon = document.getElementsByClassName("hamburger-menu");
  //   const hamburgerWrapper =
  //     document.getElementsByClassName("hamburger-wrapper");

  //   hamburgerIcon[0].addEventListener("click", function () {
  //     active();
  //     hamburgerWrapper[0].classList.toggle("active");
  //   });
  // }, []);

  return (
    <div className="Navbar">
      {/* HAMBURGER MENU

      <div className="hamburger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="hamburger-wrapper active">
        <div className="hamburger-item profile-container">
          <img className="user-icon" src={user} alt="" />
          <h4 className="account-name">User</h4>
        </div>
        <div className="hamburger-item">
          <img className="men-icon" src={men} alt="" />
          <h4 className="men-name">Men</h4>
        </div>
        <div className="hamburger-item">
          <img className="women-icon" src={women} alt="" />
          <h4 className="women-name">Women</h4>
        </div>
        <div className="hamburger-item">
          <img className="kids-icon" src={kids} alt="" />
          <h4 className="kids-name">Kids</h4>
        </div>
        <div className="hamburger-item">
          <img className="orders-icon" src={orders} alt="" />
          <h4 className="orders-name">Orders</h4>
        </div>
        <div className="hamburger-item settings-container">
          <img className="settings-icon" src={settings} alt="" />
          <h4 className="settings-name">Settings</h4>
        </div>
      </div> */}

      {/* NAVBAR */}

      <Link to="/" className="brand-name">
        FASH
      </Link>
      <div className="categories">
        <Link to="/Men" className="men-heading-container">
          <p className="category-item">Men</p>
        </Link>

        <div className="men-wrapper">
          <div className="sub-category">
            <h3 className="men-sub-category-heading">TopWear</h3>
            <div className="sub-category-links-wrapper">
              <Link to="/Men/TopWear/T-Shirts" className="category-link">
                <p className="sub-category-links"> T-Shirts</p>
              </Link>
              <Link to="/Men/TopWear/Casual Shirts" className="category-link">
                <p className="sub-category-links">Casual Shirts</p>
              </Link>
              <Link to="/Men/TopWear/Formal Shirts" className="category-link">
                <p className="sub-category-links">Formal Shirts</p>
              </Link>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="men-sub-category-heading">BottomWear</h3>
            <div className="sub-category-links-wrapper">
              <Link to="/Men/BottomWear/Jeans" >
                <p className="sub-category-links"> Jeans</p>
              </Link>
              <Link to="/Men/BottomWear/Casual Trousers" >
                <p className="sub-category-links">Casual Trousers</p>
              </Link>
              <Link to="/Men/BottomWear/Formal Trousers" >
                <p className="sub-category-links">Formal Trousers</p>
              </Link>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="men-sub-category-heading">FootWear</h3>
            <div className="sub-category-links-wrapper">
              <Link to="/Men/FootWear/Casual Shoes" >
                <p className="sub-category-links"> Casual Shoes</p>
              </Link>
              <Link to="/Men/FootWear/Sports Shoes" >
                <p className="sub-category-links">Sports Shoes</p>
              </Link>
              <Link to="/Men/FootWear/Formal Shoes" >
                <p className="sub-category-links">Formal Shoes</p>
              </Link>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="men-sub-category-heading">ActiveWear</h3>
            <div className="sub-category-links-wrapper">
              <Link to="/Men/ActiveWear/Active T-Shirts" >
                <p className="sub-category-links"> Active T-Shirts</p>
              </Link>
              <Link to="/Men/ActiveWear/Track Pants and Shorts" >
                <p className="sub-category-links">Track Pants & Shorts</p>
              </Link>
              <Link to="/Men/ActiveWear/Track Suits" >
                <p className="sub-category-links">Tracksuits</p>
              </Link>
            </div>
          </div>
        </div>

        <Link to="/Women" className="women-heading-container">
          <p className="category-item">Women</p>
        </Link>

        <div className="women-wrapper">
          <div className="sub-category">
            <h3 className="women-sub-category-heading">Indian & Fusion wear</h3>
            <div className="sub-category-links-wrapper">
              <Link to="/Women/Indian & Fusion Wear/Kurtas & Suits">
              <p className="sub-category-links"> Kurtas & Suits</p>
              </Link>
              <Link to="/Women/Indian & Fusion Wear/Kurtis, Tunics & Tops">
              <p className="sub-category-links">Kurtis, Tunics & Tops</p>
              </Link>
              <Link to="/Women/Indian & Fusion Wear/Sarees">
              <p className="sub-category-links">Sarees</p>
              </Link>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="women-sub-category-heading">Western Wear</h3>
            <div className="sub-category-links-wrapper">
              <Link to="/Women/Western Wear/Dresses/">
                <p className="sub-category-links"> Dresses</p>
              </Link>
              <Link to="/Women/Western Wear/Tops">
                <p className="sub-category-links">Tops</p>
              </Link>
              <Link to="/Women/Western Wear/T Shirts">
                <p className="sub-category-links">T Shirts</p>
              </Link>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="women-sub-category-heading">FootWear</h3>
            <div className="sub-category-links-wrapper">
              <Link to="Women/FootWear/Flats">
                <p className="sub-category-links"> Flats</p>
              </Link>
              <Link to="Women/FootWear/Casual/Shoes">
                <p className="sub-category-links">Casual Shoes</p>
              </Link>
              <Link to="Women/FootWear/Heels">
                <p className="sub-category-links">Heels</p>
              </Link>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="women-sub-category-heading">Sports & ActiveWear</h3>
            <div className="sub-category-links-wrapper">
              <Link to="Women/Sports & ActiveWear/Clothing">
                <p className="sub-category-links"> Clothing</p>
              </Link>
              <Link to="Women/Sports & ActiveWear/FootWear">
                <p className="sub-category-links">Footwear</p>
              </Link>
              <Link to="Women/Sports & ActiveWear/Sports Accessories">
                <p className="sub-category-links">Sports Accessories</p>
              </Link>
            </div>
          </div>
        </div>

        <Link to="/Kids" className="kids-heading-container">
          <p className="category-item">Kids</p>
        </Link>

        <div className="kids-wrapper">
          <div className="sub-category">
            <h3 className="kids-sub-category-heading">Boys Clothing</h3>
            <div className="sub-category-links-wrapper">
              <Link to="Kids/Boys Clothing/T-Shirts">
                <p className="sub-category-links"> T-Shirts</p>
              </Link>
              <Link to="Kids/Boys Clothing/Shirts">
                <p className="sub-category-links">Shirts</p>
              </Link>
              <Link to="Kids/Boys Clothing/Shorts">
                <p className="sub-category-links">Shorts</p>
              </Link>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="kids-sub-category-heading">Girls Clothing</h3>
            <div className="sub-category-links-wrapper">
              <Link to="Kids/Girls Clothing/Dresses">
                <p className="sub-category-links"> Dresses</p>
              </Link>
              <Link to="Kids/Girls Clothing/Tops">
                <p className="sub-category-links">Tops</p>
              </Link>
              <Link to="Kids/Girls Clothing/T-Shirts">
                <p className="sub-category-links">T-Shirts</p>
              </Link>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="kids-sub-category-heading">FootWear</h3>
            <div className="sub-category-links-wrapper">
              <Link to="Kids/FootWear/Flip Flops">
                <p className="sub-category-links"> Flip Flops</p>
              </Link>
              <Link to="Kids/FootWear/Casual Shoes">
                <p className="sub-category-links">Casual Shoes</p>
              </Link>
              <Link to="Kids/FootWear/Sports Shoes">
                <p className="sub-category-links">Sports Shoes</p>
              </Link>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="kids-sub-category-heading">Infants</h3>
            <div className="sub-category-links-wrapper">
              <Link to="Kids/Infants/Bodysuits">
                <p className="sub-category-links"> Bodysuits</p>
              </Link>
              <Link to="Kids/Infants/Rompers & Sleepsuits">
                <p className="sub-category-links">Rompers & Sleepsuits</p>
              </Link>
              <Link to="Kids/Infants/Clothing Sets">
                <p className="sub-category-links">Clothing Sets</p>
              </Link>
            </div>
          </div>
        </div>

        <Link to="/LifeStyle" className="lifestyle-heading-container">
          <p className="category-item">Lifestyle</p>
        </Link>

        <div className="lifestyle-wrapper">
          <div className="sub-category">
            <h3 className="lifestyle-sub-category-heading">
              Bed Linen & Furnishing
            </h3>
            <div className="sub-category-links-wrapper">
              <Link to="Kids/Bed Linen & Furnishing/Bed Runners">
                <p className="sub-category-links"> Bed Runners</p>
              </Link>
              <Link to="Kids/Bed Linen & Furnishing/Mattress Protectors">
                <p className="sub-category-links">Mattress Protectors</p>
              </Link>
              <Link to="Kids/Bed Linen & Furnishing/Bedsheets">
                <p className="sub-category-links">Bedsheets</p>
              </Link>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="lifestyle-sub-category-heading">Bath</h3>
            <div className="sub-category-links-wrapper">
              <Link to="Lifestyle/Bath/Bath Towels">
                <p className="sub-category-links">Bath Towels</p>
              </Link>
              <Link to="Lifestyle/Bath/Hand & Face Towels">
                <p className="sub-category-links">Hand & Face Towels</p>
              </Link>
              <Link to="Lifestyle/Bath/Beach Towels">
                <p className="sub-category-links">Beach Towels</p>
              </Link>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="lifestyle-sub-category-heading">Lamps & Lighting</h3>
            <div className="sub-category-links-wrapper">
              <Link to="Lifestyle/Lamps & Lighting/Floor Lamps">
                <p className="sub-category-links"> Floor Lamps</p>
              </Link>
              <Link to="Lifestyle/Lamps & Lighting/Ceiling Lamps">
                <p className="sub-category-links">Ceiling Lamps</p>
              </Link>
              <Link to="Lifestyle/Lamps & Lighting/Table Lamps">
                <p className="sub-category-links">Table Lamps</p>
              </Link>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="lifestyle-sub-category-heading">Home Décor</h3>
            <div className="sub-category-links-wrapper">
              <Link to="Lifestyle/Home Decor/Plants & Planters">
                <p className="sub-category-links">Plants & Planters</p>
              </Link>
              <Link to="Lifestyle/Home Decor/Aromas & Candles">
                <p className="sub-category-links">Aromas & Candles</p>
              </Link>
              <Link to="Lifestyle/Home Decor/Clocks">
                <p className="sub-category-links">Clocks</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="search-container">
        <input
          className="search-textbox"
          placeholder="Search for products, brands and more"
          type="text"
        />
      </div>
      <div className="last-menu">
        <Link className="cart-container" to="/Cart">
          <div className="cart-wrapper">
            <img className="cart-icon" src={cart} alt="cart" />
            <p>Cart</p>
          </div>
        </Link>
        <div className="wishlist-container">
          <img className="wishlist-icon" src={heart} alt="" />
          <p>Wishlist</p>
        </div>
        <div className="profile-container">
          <img className="profile-icon" src={profile} alt="" />
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

export default Navbar;
