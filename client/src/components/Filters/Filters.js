import React, { useState } from "react";
import "./Filters.css";
import BrandsFilter from "./BrandsFilter";
import PriceFilter from "./PriceFilter";
import DiscountFilter from "./DiscountFilter";

function Filters({ filters, setFilters }) {
  
  
  return (
    <div className="filters">
      <h3 className="filters-heading">Filters</h3>

      <form className="filters-form">

        <BrandsFilter filters={filters} setFilters={setFilters}/> 

        

        <PriceFilter filters={filters} setFilters={setFilters} />

        

        <DiscountFilter filters={filters} setFilters={setFilters} />
        
      </form>
    </div>
  );
}

export default Filters;
