import React from "react";
import "./OrderItem.css";

function OrderItem(props) {
  return (
    <div className="order-item-details">
      <div className="order-column">
        <div className="order-item-img-container">
          <img className="order-item-img" src={props.img} />
        </div>

        <div className="order-details-column">
          <div className="order-details-row">
            <span className="order-item-brand">{props.brand}</span>
            <span className="order-item-name">{props.name}</span>
            <span className="order-item-price">Rs.{props.price}</span>
            <span className="order-item-size">Size: {props.size}</span>
            <span className="order-item-quantity">
              Quantity: {props.quantity}
            </span>
            <div className="order-status-container">
              <div className="check-icon-container">
                <img
                  className="check-icon"
                  src="images/checked.png"
                  alt="delivered"
                />
              </div>
              <span className="order-status">Delivered</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <p>Status: Delivered</p>
      </div> */}
    </div>
  );
}

export default OrderItem;
