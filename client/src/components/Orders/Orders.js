import React, { useEffect, useState } from "react";
import "./Orders.css"
import axios from "axios";
import OrderList from "../OrderList/OrderList";
import Loading from "../Modals/Loading";
import Error from "../Modals/Error";
import NoOrders from "./7117861_3298067.jpg"

function Orders() {
    const [ orders, setOrders ] = useState();
    const [orderItems, setOrderItems] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
 
    // To get Orders from server 

    useEffect(() => {
        async function fetchOrders () {
            try{
                setLoading(true);
                setMessage("Loading Your Orders");
                const res = await axios.get("https://fash-ti87.vercel.app/api/orders/getOrders",{
                    withCredentials: true
                })
                setOrders(res.data.order)
                setLoading(false);
            }catch(err){
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
    }, [])

    // To Create list of Order Items 

    function createOrderItem(order){
       console.log(order.orderItems)
        return(
            <OrderList
                key={order._id}
                orderId={order._id}
                total={order.total}
                orderItems={order.orderItems}
            />
        )
    }

    return (
        <div className="orders">
            {orders && orders.length != 0 ?<>{loading && <Loading msg={message} />}
            {error && <Error msg={message} />}
            <h2 className="orders-heading">Your Orders</h2>
            <div className="order-wrapper">
                {orders && orders.map(createOrderItem)}
            </div>
            </>:
            <div className="no-orders">
                <img src={NoOrders} />
                <span>No Orders Found</span>
            </div>}
        </div>
    )
}

export default Orders;