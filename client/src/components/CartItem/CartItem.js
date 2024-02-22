import React, { useState } from "react";
import "./CartItem.css";
import axios from "axios";
import Loading from "../Modals/Loading";
import Error from "../Modals/Error";

function CartItem(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [quantity, setQuantity] = useState(props.quantity);
  const [size, setSize] = useState(props.size);
  const [highlight, setHighlight] = useState(props.size);
  const [active, setActive] = useState(false);

  async function onClick(event) {
    try {
      setLoading(true);
      setMessage("Removing cart item");
      await axios.post(
        `${process.env.REACT_APP_API_BASEURL}api/cart/removeItem`,
        {
          id: props.id,
        },
        {
          withCredentials: true,
        }
      );
      props.setSelectedId(props.id);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
      setMessage(err.response.data.msg);
      console.error(err.message);
    }
  }

  function decQuantityHandler() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function incQuantityHandler() {
    setQuantity(quantity + 1);
  }
  return (
    <div className="cart-item-wrapper list">
      {loading && <Loading msg={message} />}
      {error && <Error msg={message} />}
      <div className="cart-item">
        <div className="cart-img-container">
          <img alt="cart item" className="cart-img" src={props.img} />
        </div>
        <div className="cart-product-details">
          <div className="cart-row-1">
            <div>
              <span className="cart-product-brand">{props.brand}</span>
              <br />
              <div className="cart-product-desc">{props.name}</div>
              <br />
            </div>
            <button className="remove-item" onClick={onClick}>
              <img
                alt="remove item"
                src="images/trash-can.png"
                className="remove-icon"
              />
            </button>
          </div>

          <div className="cart-row-2">
            <span className="cart-item-price">Rs. {props.price}</span>
            <div
              className={`cart-product-size ${active ? "active-border" : ""}`}
              onClick={() => {
                setActive(!active);
              }}
            >
              <span>{size}</span>
              <div className="downarrow-container">
                <img
                  alt="downarrow"
                  src="images/downward-arrow.png"
                  className="downarrow"
                />
              </div>
              <div
                className={`size-options-wrapper ${
                  active ? "size-wrapper-active" : ""
                }`}
              >
                <div
                  className={`extra-small ${
                    highlight === "XS" ? "highlight" : ""
                  }`}
                  onClick={(event) => {
                    setSize(event.target.textContent);
                    setHighlight("XS");
                  }}
                >
                  XS
                </div>
                <div
                  className={`small ${highlight === "S" ? "highlight" : ""}`}
                  onClick={(event) => {
                    setSize(event.target.textContent);
                    setHighlight("S");
                  }}
                >
                  S
                </div>
                <div
                  className={`middle ${highlight === "M" ? "highlight" : ""}`}
                  onClick={(event) => {
                    setSize(event.target.textContent);
                    setHighlight("M");
                  }}
                >
                  M
                </div>
                <div
                  className={`large ${highlight === "L" ? "highlight" : ""}`}
                  onClick={(event) => {
                    setSize(event.target.textContent);
                    setHighlight("L");
                  }}
                >
                  L
                </div>
                <div
                  className={`extra-large ${
                    highlight === "XL" ? "highlight" : ""
                  }`}
                  onClick={(event) => {
                    setSize(event.target.textContent);
                    setHighlight("XL");
                  }}
                >
                  XL
                </div>
              </div>
            </div>

            <div className="cart-item-quantity">
              <div className="dec-quantity" onClick={decQuantityHandler}>
                -
              </div>
              <span className="cart-quantity">{quantity}</span>
              <div className="inc-quantity" onClick={incQuantityHandler}>
                +
              </div>
            </div>

            {/* <div className="cart-column close">
              {props.price * props.quantity}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
