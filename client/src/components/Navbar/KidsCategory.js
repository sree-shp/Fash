import React from 'react'
import { Link } from 'react-router-dom';

function KidsCategory() {
  return (
    <>
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
    </>
  );
}

export default KidsCategory