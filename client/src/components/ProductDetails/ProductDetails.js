import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Skeletons/ProductCardSkeleton";
import Photos from "../Photos/Photos";
import "./ProductDetails.css";
import Error from "../Error/Error";

function ProductDetails() {
    const params = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError ] = useState("");
    const discount = 15;
    const [selectSize, setSelectSize] = useState();
    const [isAdded, setIsAdded] = useState(false)
    
    

    useEffect( function(){
        async function fetchData()  {
            try{
                setLoading(true);
            const res = await axios.get("https://fash-ti87.vercel.app/api/products/getProductDetails",
            {
                params: {
                    _id: params.id 
                }
            });
            setData(res.data[0]);
            setLoading(false);
        }catch(err){
            console.error(err.message);
            setError("Something went wrong");
            setLoading(false);
        } 
        }
        fetchData();
    }, [params.id])

    async function handleFormSubmit(event){
        event.preventDefault();
        
        try{
            setLoading(true);
            const res = await axios.post("https://fash-ti87.vercel.app/api/cart/addToCart",
            {
                
                    
                    productId: data._id,
                    quantity: 1,
                    size: selectSize,
                    price: data.price,
                    img: data.images[0],
                    name: data.name,
                    brand: data.brand
                
            },{
                withCredentials: true
            })
            setLoading(false);
            setIsAdded(true);

        }catch(err){
            console.error(err.message);
            setError("Something went wrong");
            setLoading("false");
        }
    }

    function handleSizeChange(event) {
        setSelectSize(event.target.value);
    }

    return(
        <div className="product-details">
            <div className="photos-pane">
                
                {loading && <Loading />}
                {!loading && !error && data && <Photos images={data.images}/>}
                {error && <Error />}
            </div>
            <div className="details-pane">
                <div className="heading">
                    {data && <><h1 className="product-brand-name">{data.brand}</h1>
                    <span className="product-desc">{data.name}</span>
                    
                    </>}
                </div>
                <div className="order-options">
                    {/* <p className="rating"> {data.rating} rating </p> */}
                    <div className="price">
                        {data && <>
                        <span className="final-price">Rs.{Math.round(data.price - (data.price * (discount/100)))}</span>
                        <span className="original-price">Rs.{data.price}</span>
                        <span className="discount-percentage">{discount + "% Off"}</span>
                        </>}
                    </div>
                    <div className="place-order">
                    <p className="select-size-heading">Select Size</p>
                        <form className="order-form" onSubmit={handleFormSubmit}>
                           
                            <div className="select size">
                                <label className="small">
                                    <input 
                                        type="radio" 
                                        value="XS" 
                                        name="size" 
                                        checked={"size" === "XS"}
                                        onChange={handleSizeChange}
                                         />XS
                                </label>
                                <label>
                                <input 
                                        type="radio" 
                                        value="S" 
                                        name="size" 
                                        checked={"size" === "S"}
                                        onChange={handleSizeChange}
                                         />S
                                </label>
                                <label>
                                <input 
                                        type="radio" 
                                        value="M" 
                                        name="size" 
                                        checked={"size" === "M"}
                                        onChange={handleSizeChange}
                                         />M
                                </label>
                                <label>
                                <input 
                                        type="radio" 
                                        value="L" 
                                        name="size" 
                                        checked={"size" === "L"}
                                        onChange={handleSizeChange}
                                         />L
                                </label>
                                <label>
                                    <input 
                                            type="radio" 
                                            value="XL" 
                                            name="size" 
                                            checked={"size" === "XL"}
                                            onChange={handleSizeChange}
                                            />XL
                                </label>
                                <br />
                                 <button type="submit">Add to Cart</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;