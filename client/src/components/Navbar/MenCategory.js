import React from 'react'
import { Link } from 'react-router-dom';

function MenCategory() {
  return (
    <>
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
            <Link to="/Men/BottomWear/Jeans">
              <p className="sub-category-links"> Jeans</p>
            </Link>
            <Link to="/Men/BottomWear/Casual Trousers">
              <p className="sub-category-links">Casual Trousers</p>
            </Link>
            <Link to="/Men/BottomWear/Formal Trousers">
              <p className="sub-category-links">Formal Trousers</p>
            </Link>
          </div>
        </div>
        <div className="sub-category">
          <h3 className="men-sub-category-heading">FootWear</h3>
          <div className="sub-category-links-wrapper">
            <Link to="/Men/FootWear/Casual Shoes">
              <p className="sub-category-links"> Casual Shoes</p>
            </Link>
            <Link to="/Men/FootWear/Sports Shoes">
              <p className="sub-category-links">Sports Shoes</p>
            </Link>
            <Link to="/Men/FootWear/Formal Shoes">
              <p className="sub-category-links">Formal Shoes</p>
            </Link>
          </div>
        </div>
        <div className="sub-category">
          <h3 className="men-sub-category-heading">ActiveWear</h3>
          <div className="sub-category-links-wrapper">
            <Link to="/Men/ActiveWear/Active T-Shirts">
              <p className="sub-category-links"> Active T-Shirts</p>
            </Link>
            <Link to="/Men/ActiveWear/Track Pants & Shorts">
              <p className="sub-category-links">Track Pants & Shorts</p>
            </Link>
            <Link to="/Men/ActiveWear/Tracksuits">
              <p className="sub-category-links">Tracksuits</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenCategory