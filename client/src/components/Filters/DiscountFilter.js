import React from "react";
import { useState } from "react";

function DiscountFilter({ filters, setFilters }) {
  const [discount, setDiscount] = useState();

  function handleDiscountChange(event) {
    console.log(event.target.value)
    setDiscount(event.target.value);
    let res;
    filters.forEach((item) => {
      if (item.hasOwnProperty("discount")) return (res = true);
    });
    let result;
    switch (event.target.value) {
      case "10":
        result = { $lte: 10 };
        break;
      case "20":
        result = { $lte: 20 };
        break;
      case "30":
        result = { $lte: 30 };
        break;
      case "40":
        result = { $lte: 40 };
        break;
      case "50":
        result = { $lte: 50};
        break;
    }
    console.log(result)
    if (!res) {
      setFilters([...filters, { discount: result }]);
    } else {
      setFilters(
        filters.filter((item) => {
          if (item.hasOwnProperty("discount")) {
            item.discount = result;
            return item;
          } else {
            return item;
          }
        })
      );
    }
  }

  return (
    <div className="discount-filter">
      <h5 className="filter-heading">Discount</h5>

      <div className="input-wrapper">
        <input
          id="ten"
          name="discount"
          value="10"
          checked={discount === "10"}
          onChange={handleDiscountChange}
          type="radio"
        />
        <label for="ten" className="ten">
          Upto 10%
        </label>
      </div>

      <div className="input-wrapper">
        <input
          id="twenty"
          name="discount"
          value="20"
          checked={discount === "20"}
          onChange={handleDiscountChange}
          type="radio"
        />
        <label for="twenty" className="ten">
          Upto 20%
        </label>
      </div>

      <div className="input-wrapper">
        <input
          id="thirty"
          name="discount"
          value="30"
          checked={discount === "30"}
          onChange={handleDiscountChange}
          type="radio"
        />
        <label for="thirty" className="ten">
          Upto 30%
        </label>
      </div>

      <div className="input-wrapper">
        <input
          id="fourty"
          name="discount"
          value="40"
          checked={discount === "40"}
          onChange={handleDiscountChange}
          type="radio"
        />
        <label for="fourty" className="ten">
          Upto 40%
        </label>
      </div>

      <div className="input-wrapper">
        <input
          id="fifty"
          name="discount"
          value="50"
          checked={discount === "50"}
          onChange={handleDiscountChange}
          type="radio"
        />
        <label for="fifty" className="ten">
          Upto 50%
        </label>
      </div>
    </div>
  );
}

export default DiscountFilter;
