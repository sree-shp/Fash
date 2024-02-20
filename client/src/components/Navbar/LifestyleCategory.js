import React from 'react'
import { Link } from 'react-router-dom';
import lifestylesubcategory from './lifetsylesubcategory';

function LifestyleCategory() {
  function createSubCategory(subcategory, index) {
    return (
      <li key={index}>
        <div className="sub-category">
          <h3 className="lifestyle-sub-category-heading">{subcategory.heading}</h3>
          <div className="sub-category-links-wrapper">
            <Link
              to={`/Lifestyle/${subcategory.heading}/${subcategory.links[0]}`}
              className="category-link"
            >
              <p className="sub-category-links">{subcategory.links[0]}</p>
            </Link>
            <Link
              to={`/Lifestyle/${subcategory.heading}/${subcategory.links[1]}`}
              className="category-link"
            >
              <p className="sub-category-links">{subcategory.links[1]}</p>
            </Link>
            <Link
              to={`/Lifestyle/${subcategory.heading}/${subcategory.links[2]}`}
              className="category-link"
            >
              <p className="sub-category-links">{subcategory.links[2]}</p>
            </Link>
          </div>
        </div>
      </li>
    );
  }
  return (
    <div className='lifestyle-category'>
      <Link to="/LifeStyle" className="lifestyle-heading-container">
        <p className="category-item">Lifestyle</p>
      </Link>

      <div className="lifestyle-wrapper">
      {lifestylesubcategory.map(createSubCategory)}
        
      </div>
    </div>
  );
}

export default LifestyleCategory