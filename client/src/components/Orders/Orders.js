import React, { useEffect, useState } from "react";
import "./Orders.css";
import axios from "axios";
import OrderList from "../OrderList/OrderList";
import Loading from "../Modals/Loading";
import Error from "../Modals/Error";

function Orders() {
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [hightlight, setHighlight] = useState("All");
  const [active, setActive] = useState();

  // To get Orders from server

  useEffect(() => {
    async function fetchOrders() {
      try {
        setLoading(true);
        setMessage("Loading Your Orders");
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASEURL}/api/v2/order`,
          {
            withCredentials: true,
          }
        );
        setOrders(res.data.data.orders);
        setActive(res.data.data.orders[0]._id);

        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
        // setMessage(err.response.data.msg);
        console.error(err.message);
        setTimeout(() => {
          setError(false);
        }, 1000);
      }
    }
    fetchOrders();
  }, []);

  function orderClickHandler(id) {
    setActive(id);
  }

  // To Create list of Order Items

  function createOrdersList(order) {
    return (
      <li
        key={order._id}
        className={`order-list-item ${
          active === order._id ? "highlight-order" : ""
        } `}
        onClick={() => orderClickHandler(order._id)}
      >
        <div className="order-id-container">
          <div className="order-id-heading">Order Id </div>
          <div className="order-id"> {order._id}</div>
        </div>
        <div className="order-items-container">
          <div className="order-items-heading">Items </div>
          <div className="order-id"> {order.orderItems.length}</div>
        </div>
        <div className="order-total-container">
          <div className="order-total-heading">Total </div>
          <div className="order-id"> {order.total}</div>
        </div>
      </li>
    );
  }

  function createOrderItem(order) {
    return (
      <OrderList
        key={order._id}
        orderId={order._id}
        total={order.total}
        orderItems={order.orderItems}
      />
    );
  }

  return (
    <div className="orders">
      {orders && orders.length !== 0 ? (
        <>
          {loading && <Loading msg={message} />}
          {error && <Error msg={message} />}
          <h2 className="orders-heading">Your Orders</h2>
          <div className="orders-type">
            <div
              className={`${
                hightlight === "All" ? "highlight-orders-type" : ""
              }`}
              onClick={(event) => {
                setHighlight(event.target.textContent);
              }}
            >
              All
            </div>
            <div
              className={`${
                hightlight === "On-Going" ? "highlight-orders-type" : ""
              }`}
              onClick={(event) => {
                setHighlight(event.target.textContent);
              }}
            >
              On-Going
            </div>
            <div
              className={`${
                hightlight === "Delivered" ? "highlight-orders-type" : ""
              }`}
              onClick={(event) => {
                setHighlight(event.target.textContent);
              }}
            >
              Delivered
            </div>
          </div>
          <div className="order-wrapper">
            <div className="orders-list">
              {orders && orders.map(createOrdersList)}
            </div>
            <div className="order-details-container">
              {orders && orders.map(createOrderItem)}
            </div>

            {orders &&
              orders.map((order) => {
                if (order._id === active) {
                  return (
                    <OrderList
                      key={order._id}
                      orderId={order._id}
                      total={order.total}
                      orderItems={order.orderItems}
                    />
                  );
                }
              })}
          </div>
        </>
      ) : (
        <div className="no-orders">
          <img alt="No Orders Found" src="images/7117861_3298067.jpg" />
          <span>No Orders Found</span>
        </div>
      )}
    </div>
  );
}

export default Orders;
