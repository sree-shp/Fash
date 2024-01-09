import React from "react";
import { useState } from "react";

function PriceFilter({ filters, setFilters }){
    const [ priceChecked, setPriceChecked ] = useState(
        new Array(5).fill(false)
      );

    function handlePriceChange(event, position){
        
        let result1,result2;
        switch (event.target.value) {
          case "100-1000":
            result1 = {
              discountedPrice: {
                "[gt]": "100",
              },
            };
            result2 = { discountedPrice: { "[lt]": "1000" } };
            break;
          case "1000-2000":
            result1 = {
              discountedPrice: {
                "[gt]": "1000",
              },
            };
            result2 = { discountedPrice: { "[lt]": "2000" } };
            break;
          case "2000-3000":
           result1 = {
             discountedPrice: {
               "[gt]": "2000",
             },
           };
           result2 = { discountedPrice: { "[lt]": "3000" } };
            break;
          case "3000-4000":
           result1 = {
             discountedPrice: {
               "[gt]": "3000",
             },
           };
           result2 = { discountedPrice: { "[lt]": "4000" } };
            break;
          case ">4000":
            result1 = {
              discountedPrice: {
                "[gt]": "4000",
              },
            };
            result2 = {discountedPrice: {"[lt]": "10000"}}
            break;
        }
        const updatedPriceState = priceChecked.map((item, index) => 
          index === position ? !item : item
        )
        setPriceChecked(updatedPriceState);
        if(!priceChecked[position]){
          setFilters((filters) => ([...filters, result1]));
         
          setFilters((filters) => ([...filters, result2]));
        }
        else{
          setFilters(filters.filter((item) => {
              if (JSON.stringify(item) === JSON.stringify(result1) || JSON.stringify(item) === JSON.stringify(result2)) {
                return;
              } else {
                return item;
              }
          }));
        }
      }

    return(
        <div className="price-filter">

          <h5 className="filter-heading">Price</h5>

          <div className="input-wrapper">
            <input 
              id="option-one"
              name="100-1000"
              value="100-1000" 
              type="checkbox"
              onChange={(e) => handlePriceChange(e, 0)} />
            <label for="option-one" className="price-label">
              Rs.100 to Rs.1000
            </label>
          </div>

          <div className="input-wrapper">
            <input 
              id="option-two" 
              name="1000-2000"
              value="1000-2000" 
              type="checkbox"
              onChange={(e) => handlePriceChange(e, 1)} />
            <label for="option-two" className="price-label">
              Rs.1000 to Rs.2000
            </label>
          </div>

          <div className="input-wrapper">
            <input 
              id="option-three"
              name="2000-3000"
              value="2000-3000" 
              type="checkbox"
              onChange={(e) => handlePriceChange(e, 2)} />
            <label for="option-three" className="price-label">
              Rs.2000 to Rs.3000
            </label>
          </div>

          <div className="input-wrapper">
            <input 
              id="option-four" 
              name="3000-4000"
              value="3000-4000" 
              type="checkbox"
              onChange={(e) => handlePriceChange(e, 3)} />
            <label for="option-four" className="price-label">
              Rs.3000 to Rs.40000
            </label>
          </div>

          <div className="input-wrapper">
            <input 
              id="option-five" 
              name=">4000"
              value=">4000" 
              type="checkbox"
              onChange={(e) => handlePriceChange(e, 4)} />
            <label for="option-five" className="price-label">
              Greater than Rs.4000
            </label>
          </div>

        </div>
    )
}

export default PriceFilter;