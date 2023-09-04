import React from "react";
import OrderItem from "../OrderItem/OrderItem";

function OrderList(props){
    console.log(props.orderItems.length)

    // function createOrderItem(item){
    //     console.log(item)
    //     return (
    //         <OrderItem 
    //             img={item.img}
    //             brand={item.brand}
    //             name={item.name}
    //             size={item.size}
    //             price={item.price}
    //             quantity={item.quantity}
    //         />
    //     )
    
    return (<>
        <div className="order-details">
                <span className="order-id">Order Id: {props.orderId}</span>
                <span className="order-id">Total: {props.total}</span>
                </div>
                {props.orderItems && <OrderItem 
                img={props.orderItems[0].img}
                brand={props.orderItems[0].brand}
                name={props.orderItems[0].name}
                size={props.orderItems[0].size}
                price={props.orderItems[0].price}
                quantity={props.orderItems[0].quantity}
                length={props.orderItems.length}
            />}
                </>
    )
}

export default OrderList;