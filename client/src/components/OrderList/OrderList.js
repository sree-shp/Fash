import React from "react";
import OrderItem from "../OrderItem/OrderItem";
import "./OrderList.css";

function OrderList(props) {
  function createOrderItems(orderItem) {
    return (
      <OrderItem
        img={orderItem.productData[0].images[0]}
        brand={orderItem.productData[0].productBrand}
        name={orderItem.productData[0].productName}
        size={orderItem.size}
        price={orderItem.productData[0].discountedPrice}
        quantity={orderItem.quantity}
        length={orderItem.length}
      />
    );
  }

  return (
    <div className="order-details-wrapper">
      <div className="order-details">
        <span className="order-id">
          <span>Order Id</span> {props.orderId}
        </span>
        <div className="order-details-row2">
          <div className="item-length">
            <span>Items</span> {props.orderItems.length}
          </div>
          <div className="order-total">
            <span> Total </span> {props.total}
          </div>
        </div>
      </div>
      {props.orderItems && props.orderItems.map(createOrderItems)}
    </div>
  );
}

export default OrderList;
