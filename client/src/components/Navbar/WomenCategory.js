import React from 'react'
import { Link } from 'react-router-dom';

function WomenCategory() {
  return (
    <>
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
            <Link to="/Women/Western Wear/T-Shirts">
              <p className="sub-category-links">T-Shirts</p>
            </Link>
          </div>
        </div>
        <div className="sub-category">
          <h3 className="women-sub-category-heading">FootWear</h3>
          <div className="sub-category-links-wrapper">
            <Link to="Women/FootWear/Flats">
              <p className="sub-category-links"> Flats</p>
            </Link>
            <Link to="Women/FootWear/Casual Shoes">
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
    </>
  );
}

export default WomenCategory