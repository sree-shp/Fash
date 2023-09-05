import React, { useEffect, useState } from "react";
import "./Cart.css"
import axios from "axios";
import CartItem from "../CartItem/CartItem";
import Loading from "../Modals/Loading";
import Error from "../Modals/Error";
import EmptyCart from "./8882810.jpg";

function Cart(props){
    const [cartData, setCartData] = useState();
    const [products, setProducts] = useState();
    const {selectedId, setSelectedId} = props
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        async function getCart(){
            try{
                setLoading(true);
                setMessage("Loading your cart")
                const res = await axios.get("https://fash-server.onrender.com/api/cart/getCart",
                {
                    withCredentials: true
                });
                setCartData(res.data.cart);
                setProducts(res.data.cart.product)
                console.log(cartData);
                
                setLoading(false);
            }catch(err){
                setLoading(false);
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 1000)
                console.error(err.message)
            }
        }
        getCart();
    }, [selectedId])

    function createCartItem(cartItem) {
        return(
            <CartItem 
                setSelectedId={setSelectedId}
                key={cartItem._id}
                id={cartItem._id}
                brand={cartItem.brand}
                name={cartItem.name}
                img={cartItem.img}
                price={cartItem.price}
                quantity={cartItem.quantity} 
                size={cartItem.size}
            />
        )
    } 

    
    
    async function submitHandler(event){
        event.preventDefault();
        try{
            setLoading(true);
            setMessage("Placing Order")
            const res = await axios.post("https://fash-server.onrender.com/api/orders/placeOrder",{
                products: cartData.product,
                total: cartData.total
            },{
                withCredentials: true
            })

            console.log(res.status)
            setLoading(false);
            
        }catch(err){
            setLoading(false);
            setError(true);
            setMessage(err.response.data.msg);
            setTimeout(() => {
                setError(false);
            }, 1000);
            console.error(err.message)
        }
    }

    return (
        <div className="cart">
            {loading && <Loading msg={message} />}
            {error && <Error msg={message} />}
            {products && products.length != 0 ?<><h2 className="cart-heading">
                Your Shopping Cart
            </h2>
            <div className="checkout">
            <h4> Sub-total </h4>
            {cartData? <h3 >{cartData.total}</h3>: 0}
            <div className="checkout-button-container">
            <button className="checkout-button" onClick={submitHandler}>Place Order</button>
            </div>
            </div>
            <div className="cart-details-wrapper">
            <div className="cart-heading-wrapper">
                <div className="cart-column">
                    <span className="cart-column-heading">Item</span>



                </div>
                <div className="cart-column">
                    <span className="cart-column-heading">Price</span>
                </div>
                <div className="cart-column">
                    <span className="cart-column-heading">Quanity</span>
                </div>
                <div className="cart-column">
                    <span className="cart-column-heading">Total</span>
                </div>
            </div>
            
           {products &&  products.map(createCartItem)}
           </div>
           
           <div className="total">
           
                
           
                <h4> Sub-total </h4>
                {cartData? <h3 className="total-amount">{cartData.total}</h3>: 0}
           </div>
           </>
           :
           <>
           <div className="no-product-cart">
            <img src={EmptyCart} />
            <span >
                No Products in Cart
            </span>
           </div>
           </>
           }
        </div>
    )
}

export default Cart;