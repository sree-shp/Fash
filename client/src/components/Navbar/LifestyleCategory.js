import React from 'react'
import { Link } from 'react-router-dom';

function LifestyleCategory() {
  return (
    <>
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
    </>
  );
}

export default LifestyleCategory