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

  async function removeCartItemHandler(event) {
    try {
      setLoading(true);
      setMessage("Removing cart item");
      await axios.delete(
        `${process.env.REACT_APP_API_BASEURL}/api/v2/cart/${props.id}`,
        {
          withCredentials: true,
        }
      );
      props.setCartUpdate((state) => !state);
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

  async function handleChangeSize(e) {
    setSize(e.target.textContent);
    setHighlight(e.target.textContent);
    try {
      setLoading(true);
      const res = await axios.patch(
        `${process.env.REACT_APP_API_BASEURL}/api/v2/cart/${props.id}`,
        {
          update: {
            size: e.target.textContent,
          },
        },
        {
          withCredentials: true,
        }
      );
      props.setCartUpdate((state) => !state);
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

  async function quantityChangeHandler(e) {
    let value;
    if (e.target.textContent === "-") {
      if (quantity > 1) {
        value = -1;
        setQuantity(quantity - 1);
      } else return;
    }
    if (e.target.textContent === "+") {
      setQuantity(quantity + 1);
      value = +1;
    }
    try {
      setLoading(true);
      const res = await axios.patch(
        `${process.env.REACT_APP_API_BASEURL}/api/v2/cart/${props.id}`,
        {
          update: {
            quantity: value,
          },
        },
        {
          withCredentials: true,
        }
      );
      props.setCartUpdate((state) => !state);
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
            <button className="remove-item" onClick={removeCartItemHandler}>
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
                  onClick={handleChangeSize}
                >
                  XS
                </div>
                <div
                  className={`small ${highlight === "S" ? "highlight" : ""}`}
                  onClick={handleChangeSize}
                >
                  S
                </div>
                <div
                  className={`middle ${highlight === "M" ? "highlight" : ""}`}
                  onClick={handleChangeSize}
                >
                  M
                </div>
                <div
                  className={`large ${highlight === "L" ? "highlight" : ""}`}
                  onClick={handleChangeSize}
                >
                  L
                </div>
                <div
                  className={`extra-large ${
                    highlight === "XL" ? "highlight" : ""
                  }`}
                  onClick={handleChangeSize}
                >
                  XL
                </div>
              </div>
            </div>

            <div className="cart-item-quantity">
              <div className="dec-quantity" onClick={quantityChangeHandler}>
                -
              </div>
              <span className="cart-quantity">{quantity}</span>
              <div className="inc-quantity" onClick={quantityChangeHandler}>
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
