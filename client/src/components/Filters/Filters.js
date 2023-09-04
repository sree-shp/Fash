import React from "react";
import "./Filters.css";

function Filters() {
  return (
    <div className="Filters">
      <h3 className="filters-heading">FILTERS</h3>
      <form className="filters-form">
        <div className="brands-filter">
          <h5 className="filter-heading">Brands</h5>
          <div className="input-wrapper">
            <input id="roadster" type="checkbox" />
            <label htmlFor="roadster" className="brands-label">
              Roadster
            </label>
          </div>
          <div className="input-wrapper">
            <input id="wrogn" type="checkbox" />
            <label htmlFor="wrogn" className="brands-label">
              WROGN
            </label>
          </div>
          <div className="input-wrapper">
            <input id="HRX" type="checkbox" />
            <label htmlFor="HRX" className="brands-label">
              HRX
            </label>
          </div>
          <div className="input-wrapper">
            <input id="Puma" type="checkbox" />
            <label htmlFor="Puma" className="brands-label">
              Puma
            </label>
          </div>
          <div className="input-wrapper">
            <input id="Allen-Solly" type="checkbox" />
            <label htmlFor="Allen-Solly" className="brands-label">
              Allen-Solly
            </label>
          </div>
        </div>
        <hr></hr>
        <div className="price-filter">
          <h5 className="filter-heading">Price</h5>
          <div className="input-wrapper">
            <input id="option-one" type="checkbox" />
            <label htmlFor="option-one" className="price-label">
              Rs.100 to Rs.1000
            </label>
          </div>
          <div className="input-wrapper">
            <input id="option-two" type="checkbox" />
            <label htmlFor="option-two" className="price-label">
              Rs.1000 to Rs.3000
            </label>
          </div>
          <div className="input-wrapper">
            <input id="option-three" type="checkbox" />
            <label htmlFor="option-three" className="price-label">
              Rs.3000 to Rs.6000
            </label>
          </div>
          <div className="input-wrapper">
            <input id="option-four" type="checkbox" />
            <label htmlFor="option-four" className="price-label">
              Rs.6000 to Rs.10000
            </label>
          </div>
          <div className="input-wrapper">
            <input id="option-five" type="checkbox" />
            <label htmlFor="option-five" className="price-label">
              Greater than Rs.10000
            </label>
          </div>
        </div>
        {/* <hr></hr>
        <div className="color-filter">
          <h5 className="filter-heading">Color</h5>
          <div className="input-wrapper">
            <input id="red" type="checkbox" />
            <label htmlFor="red" className="color-label">
              Red
            </label>
          </div>
          <div className="input-wrapper">
            <input id="black" type="checkbox" />
            <label htmlFor="black" className="color-label">
              Black
            </label>
          </div>
          <div className="input-wrapper">
            <input id="White" type="checkbox" />
            <label htmlFor="White" className="color-label">
              White
            </label>
          </div>
          <div className="input-wrapper">
            <input id="violet" type="checkbox" />
            <label htmlFor="violet" className="color-label">
              Violet
            </label>
          </div>
          <div className="input-wrapper">
            <input id="blue" type="checkbox" />
            <label htmlFor="blue" className="color-label">
              Blue
            </label>
          </div>
        </div> */}
        <hr></hr>
        <div className="discount-filter">
          <h5 className="filter-heading">Discount</h5>
          <div className="input-wrapper">
            <input id="ten" name="discount" type="radio" />
            <label htmlFor="ten" className="ten">
              Upto 10%
            </label>
          </div>
          <div className="input-wrapper">
            <input id="twenty" name="discount" type="radio" />
            <label htmlFor="twenty" className="ten">
              Upto 20%
            </label>
          </div>
          <div className="input-wrapper">
            <input id="thirty" name="discount" type="radio" />
            <label htmlFor="thirty" className="ten">
              Upto 30%
            </label>
          </div>
          <div className="input-wrapper">
            <input id="fourty" name="discount" type="radio" />
            <label htmlFor="fourty" className="ten">
              Upto 40%
            </label>
          </div>
          <div className="input-wrapper">
            <input id="fifty" name="discount" type="radio" />
            <label htmlFor="fifty" className="ten">
              Upto 50%
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filters;
