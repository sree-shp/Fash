import React from "react";
import { useState } from "react";

function BrandsFilter({filters, setFilters}){

    // State for check boxes 
    const [ brandsChecked, setBrandsChecked ] = useState(
        new Array(5).fill(false)
      );

    // Handler function 
    // Finds which the choice is selected and updates the brands checked state
    function handleBrandsChange(event, position){
        // Store a new array
        // if index matches the position, its value is toggled to either true or false
        const updatedBrandsState = brandsChecked.map((item, index) => 
          index === position ? !item : item
        )
        // The state is updated from which we can find out which choice has
        setBrandsChecked(updatedBrandsState);
        if(!brandsChecked[position]){
          setFilters([...filters, {brand: event.target.value}]);
        }
        else{
          setFilters((filters) => {
            filters.filter((item) => {
              if(item.brand === event.target.value){
                return
              }
              else{
                return item;
              }
          })
          })
        }
      }

    return(
        <div className="brands-filter">

          <h5 className="filter-heading">Brands</h5>
          
          <div className="input-wrapper">
            <input 
              checked={brandsChecked[0]}
              name="Roadster"
              value="Roadster" 
              id="roadster" 
              type="checkbox" 
              onChange={(e) => handleBrandsChange(e,0)}/>
            <label for="roadster" className="brands-label">
              Roadster
            </label>
          </div>

          <div className="input-wrapper">
            <input 
              checked={brandsChecked[1]}
              name="wrogn" 
              value="wrogn"
              id="wrogn" 
              type="checkbox" 
              onChange={(e) => handleBrandsChange(e,1)}/>
            <label for="wrogn" className="brands-label">
              WROGN
            </label>
          </div>

          <div className="input-wrapper">
            <input 
              checked={brandsChecked[2]}
              name="HRX" 
              value="HRX"
              id="HRX" 
              type="checkbox" 
              onChange={(e) => handleBrandsChange(e,2)}/>
            <label for="HRX" className="brands-label">
              HRX
            </label>
          </div>

          <div className="input-wrapper">
            <input 
              checked={brandsChecked[3]}
              name="Puma" 
              value="Puma"
              id="Puma" 
              type="checkbox" 
              onChange={(e) => handleBrandsChange(e,3)}/>
            <label for="Puma" className="brands-label">
              Puma
            </label>
          </div>

          <div className="input-wrapper">
            <input 
              checked={brandsChecked[4]}
              name="Allen-Solly"
              value="Allen-Solly" 
              id="Allen-Solly" 
              type="checkbox" 
              onChange={(e) => handleBrandsChange(e,4)}/>
            <label for="Allen-Solly" className="brands-label">
              Allen-Solly
            </label>
          </div>

        </div>

    );
}

export default BrandsFilter;