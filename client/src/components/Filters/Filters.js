import React, { useState } from "react";
import "./Filters.css";
import BrandsFilter from "./BrandsFilter";
import PriceFilter from "./PriceFilter";
import DiscountFilter from "./DiscountFilter";

function Filters({ filters, setFilters }) {
  
  
  return (
    <div className="Filters">
      <h3 className="filters-heading">FILTERS</h3>

      <form className="filters-form">

        <BrandsFilter filters={filters} setFilters={setFilters}/> 

        <hr></hr>

        <PriceFilter filters={filters} setFilters={setFilters} />

        <hr></hr>

        <DiscountFilter filters={filters} setFilters={setFilters} />
        
      </form>
    </div>
  );
}

export default Filters;
