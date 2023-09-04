import React from "react";

function OrderItem(props){
    return (
        <div className="order-item-details">
            <div className="order-column ">
                <img className="order-item-img" src={props.img} />
            
            <div className="order-sub-column">
                <p>{props.brand} - {props.name}</p>
                <p></p>
                <p>Size: {props.size}</p>
                <p>Quantity: {props.quantity}</p>
                <p>Price: {props.price}</p>
                {props.length>1? <span>and {(props.length)-1} more items</span>:<span></span>}
            </div>
            </div>
            <div>
                <p>Status: Delivered</p>
            </div>
        </div>
    )
}

export default OrderItem