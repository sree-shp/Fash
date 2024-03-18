import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Modals/Loading";
import Photos from "../Photos/Photos";
import "./ProductDetails.css";
import Error from "../Modals/Error";

function ProductDetails() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const discount = 15;
  const [selectSize, setSelectSize] = useState("S");
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(
    function () {
      async function fetchData() {
        try {
          setLoading(true);
          const res = await axios.get(
            `${process.env.REACT_APP_API_BASEURL}/api/v2/product/${params.id}`
          );
          setData(res.data.data.product[0]);
          setLoading(false);
        } catch (err) {
          setLoading(false);
          setError(true);
          setErrorMsg("Login/Resgister to add to cart");
          setTimeout(() => {
            setError(false);
          }, 1000);
        }
      }
      fetchData();
    },
    [params]
  );

  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASEURL}/api/v2/cart`,
        {
          productId: data._id,
          quantity: quantity,
          size: selectSize,
        },
        {
          withCredentials: true,
        }
      );

      setLoading(false);
      setIsAdded(true);
    } catch (err) {
      setLoading(false);
      setError(true);
      setErrorMsg("Login/Resgister to add to cart");
      setTimeout(() => {
        setError(false);
      }, 1000);
      console.error(err.message);
    }
  }

  function handleSizeChange(event) {
    setSelectSize(event.target.value);
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
    <div className="product-details">
      <div className="photos-pane">
        {loading && <Loading msg="Loading Product..." />}
        {!loading && !error && data && <Photos images={data.images} />}
        {error && <Error msg={errorMsg} />}
      </div>
      <div className="details-wrapper">
        <div className="details-pane">
          <div className="heading">
            {data && (
              <>
                <h1 className="product-brand-name">{data.productBrand}</h1>
                <span className="product-desc">{data.productName}</span>
              </>
            )}
          </div>
          <div className="order-options">
            <div className="price">
              {data && (
                <>
                  <div className="price-row-1">
                    <span className="final-price">
                      Rs. {data.discountedPrice}
                    </span>
                    <span className="discount-percentage">
                      {discount + "% Off"}
                    </span>
                  </div>
                  <div>
                    <span className="original-price">MRP Rs.{data.mrp}</span>
                  </div>
                </>
              )}
            </div>
            <div className="place-order">
              <div className="quantity-wrapper">
                <p>Select Quantity</p>
                <div className="quantity-selector">
                  <div
                    className="decrease-quantity"
                    onClick={decQuantityHandler}
                  >
                    -
                  </div>
                  <span className="quantity">{quantity}</span>
                  <div
                    className="increase-quantity"
                    onClick={incQuantityHandler}
                  >
                    +
                  </div>
                </div>
              </div>
              <p className="select-size-heading">Select Size</p>
              <form className="order-form" onSubmit={handleFormSubmit}>
                <div className="select-size">
                  <label
                    className={"size " + (selectSize === "XS" ? "select" : "")}
                    htmlFor="xs"
                  >
                    <input
                      id="xs"
                      type="radio"
                      value="XS"
                      name="size"
                      checked={"size" === "XS"}
                      onChange={handleSizeChange}
                    />
                    XS
                  </label>
                  <label
                    htmlFor="s"
                    className={"size " + (selectSize === "S" ? "select" : "")}
                  >
                    <input
                      id="s"
                      type="radio"
                      value="S"
                      name="size"
                      checked={"size" === "S"}
                      onChange={handleSizeChange}
                    />
                    S
                  </label>
                  <label
                    htmlFor="m"
                    className={"size " + (selectSize === "M" ? "select" : "")}
                  >
                    <input
                      id="m"
                      type="radio"
                      value="M"
                      name="size"
                      checked={"size" === "M"}
                      onChange={handleSizeChange}
                    />
                    M
                  </label>
                  <label
                    htmlFor="l"
                    className={"size " + (selectSize === "L" ? "select" : "")}
                  >
                    <input
                      id="l"
                      type="radio"
                      value="L"
                      name="size"
                      checked={"size" === "L"}
                      onChange={handleSizeChange}
                    />
                    L
                  </label>
                  <label
                    htmlFor="xl"
                    className={"size " + (selectSize === "XL" ? "select" : "")}
                  >
                    <input
                      id="xl"
                      type="radio"
                      value="XL"
                      name="size"
                      checked={"size" === "XL"}
                      onChange={handleSizeChange}
                    />
                    XL
                  </label>
                  <br />
                </div>
                <div className="btn-container">
                  <button className="add-to-cart-btn" type="submit">
                    Add to Cart
                  </button>
                  <button className="add-to-cart-btn" type="submit">
                    Buy Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
