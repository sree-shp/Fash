import React, { useEffect, useState } from "react";
import Filters from "../Filters/Filters";
import ProductContainer from "../ProductsContainer/ProductContainer";
import "./ProductsBrowser.css"
import axios from "axios";
import Loading from "../Skeletons/ProductCardSkeleton";
import Error from "../Error/Error";
import ProductCardSkeleton from "../Skeletons/ProductCardSkeleton";


function ProductsBrowser(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    

    useEffect(function () {
       async function fetchData(){
            try{
                setLoading(true);
                const res = await axios.get( 
                    "https://fash-ti87.vercel.app/api/products/getProducts",
                    {
                        params: {
                            name: props.title
                        }
                    })
                setData(res.data);
            if(res.data.length === 0){ setError("No Matches Found")}else setError("");
                console.log(res)
                setLoading(false);
            }catch(err){
                console.error(err.message);
                setError("Something went Wrong");
                setLoading(false);
            }            
       }
       fetchData(); 
    }, [props.title])


    return (
        <div className="product-browser">
            <Filters />
            {loading && <ProductCardSkeleton />}
            
            {!loading && !error  && <ProductContainer
                ProductContainerName={props.title}
                list={data}
            />}
            {error && <Error msg={error}/>}
        </div>
    )
}

export default ProductsBrowser;