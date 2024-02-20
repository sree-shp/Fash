import React from 'react'
import { Link } from 'react-router-dom';
import kidssubcategory from './kidssubcategory';

function KidsCategory() {

  function createSubCategory(subcategory, index) {
    return (
      <li key={index}>
        <div className="sub-category">
          <h3 className="kids-sub-category-heading">{subcategory.heading}</h3>
          <div className="sub-category-links-wrapper">
            <Link
              to={`/Kids/${subcategory.heading}/${subcategory.links[0]}`}
              className="category-link"
            >
              <p className="sub-category-links">{subcategory.links[0]}</p>
            </Link>
            <Link
              to={`/Kids/${subcategory.heading}/${subcategory.links[1]}`}
              className="category-link"
            >
              <p className="sub-category-links">{subcategory.links[1]}</p>
            </Link>
            <Link
              to={`/Kids/${subcategory.heading}/${subcategory.links[2]}`}
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
    <div className='kids-category'>
      <Link to="/Kids" className="kids-heading-container">
        <p className="category-item">Kids</p>
      </Link>

      <div className="kids-wrapper">
      {kidssubcategory.map(createSubCategory)}
        
      </div>
    </div>
  );
}

export default KidsCategory