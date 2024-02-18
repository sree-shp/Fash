import React, { useEffect, useState } from "react";
import "./Orders.css";
import axios from "axios";
import OrderList from "../OrderList/OrderList";
import Loading from "../Modals/Loading";
import Error from "../Modals/Error";
import NoOrders from "./7117861_3298067.jpg";

function Orders() {
  const [orders, setOrders] = useState();
  const [orderItems, setOrderItems] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [hightlight, setHighlight] = useState("All");

  // To get Orders from server

  useEffect(() => {
    async function fetchOrders() {
      try {
        setLoading(true);
        setMessage("Loading Your Orders");
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASEURL}api/orders/getOrders`,
          {
            withCredentials: true,
          }
        );
        setOrders(res.data.order);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
        setMessage(err.response.data.msg);
        console.error(err.message);
        setTimeout(() => {
          setError(false);
        }, 1000);
      }
    }
    fetchOrders();
  }, []);

  // To Create list of Order Items

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
      {orders && orders.length != 0 ? (
        <>
          {loading && <Loading msg={message} />}
          {error && <Error msg={message} />}
          <h2 className="orders-heading">Your Orders</h2>
          <div className="orders-type"> 
            <div className={`${hightlight==="All" ? "highlight-orders-type": ""}`} onClick={(event) => {setHighlight(event.target.textContent)}}>
                All
            </div>
            <div className={`${hightlight==="On-Going" ? "highlight-orders-type": ""}`} onClick={(event) => {setHighlight(event.target.textContent)}}>
                On-Going
            </div>
            <div className={`${hightlight==="Delivered" ? "highlight-orders-type": ""}`} onClick={(event) => {setHighlight(event.target.textContent)}}>
                Delivered
            </div>
            <div className={`${hightlight==="Cancelled" ? "highlight-orders-type": ""}`} onClick={(event) => {setHighlight(event.target.textContent)}}>
                Cancelled
            </div>
          </div>
          <div className="order-wrapper">
            {orders && orders.map(createOrderItem)}
          </div>
        </>
      ) : (
        <div className="no-orders">
          <img src={NoOrders} />
          <span>No Orders Found</span>
        </div>
      )}
    </div>
  );
}

export default Orders;
