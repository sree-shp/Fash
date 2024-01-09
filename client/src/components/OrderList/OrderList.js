import React from "react";
import OrderItem from "../OrderItem/OrderItem";

function OrderList(props){
    
    
    return (
      <div className="order-details-wrapper">
        <div className="order-details">
          <span className="order-id">Order Id: {props.orderId}</span>
          <span className="order-id">Total: {props.total}</span>
        </div>
        {props.orderItems && (
          <OrderItem
            img={props.orderItems[0].img}
            brand={props.orderItems[0].brand}
            name={props.orderItems[0].name}
            size={props.orderItems[0].size}
            price={props.orderItems[0].price}
            quantity={props.orderItems[0].quantity}
            length={props.orderItems.length}
          />
        )}
      </div>
    );
}

export default OrderList;