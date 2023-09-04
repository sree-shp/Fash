import React, { useState } from "react";
import "./CartItem.css";
import axios from "axios";
import Loading from "../Modals/Loading";
import Error from "../Modals/Error";

function CartItem( props){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");

    async function onClick(event){
        
        try{
            setLoading(true);
            setMessage("Removing cart item");
            const res = await axios.post("https://fash-ti87.vercel.app/api/cart/removeItem",{
                id: props.id,
            },{
                withCredentials: true
            })
            props.setSelectedId(props.id);
            
            setLoading(false)
        }catch(err){
            setLoading(false)
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 1000);
            setMessage(err.response.data.msg);
            console.error(err.message);
        }

    }
    return (
        <div className="cart-heading-wrapper list">
            {loading && <Loading msg={message} />}
            {error && <Error msg={message} />}
                <div className="cart-column">
                    <img className="cart-img" src={props.img} />
                    <div className="cart-product-details">
                    <span className="cart-product-brand">{props.brand}</span>
                    <br />
                    <span className="cart-product-desc">{props.name}</span>
                    <br />
                    <span >Size: <span className="cart-product-size">{props.size}</span></span>
                    </div>
                </div>
                <div className="cart-column">
                    {props.price}
                </div>
                <div className="cart-column">
                    {props.quantity}
                </div>
                <div className="cart-column close">
                    {props.price * props.quantity}
                    
                </div>
                <button className="remove-item" onClick={onClick}><img className="remove-item-icon" src={"https://cdn-icons-png.flaticon.com/512/61/61155.png"} /></button>
            </div>
    )
}

export default CartItem