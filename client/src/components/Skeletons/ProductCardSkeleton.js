import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ProductCardSkeleton.css";
const array = [0,0,0,0,0,0,0,0]
function ProductCardSkeleton() {
    return(
        <div className="wrapper">
        <Skeleton className="text-container" height={25} width={150} count={1}/>
        <br />
        <div className="grid-container-desktop">
             
        {Array(8).fill(0).map((item, i ) => {
            return(
            
                   
            <div className="card-skeleton">
                <Skeleton className="img-container" height={356} width={257}/>
            <div className="card-row">
                <Skeleton className="text-container" height={25} width={255} count={2}/>
            </div>
            </div>
            
        
            )
        })}
        </div>
        <div className="grid-container-mobile">
             
             {Array(2).fill(0).map((item, i ) => {
                 return(
                 
                        
                 <div className="card-skeleton">
                     <Skeleton className="img-container" height={356} width={200}/>
                 <div className="card-row">
                     <Skeleton className="text-container" height={25} width={60} count={2}/>
                 </div>
                 </div>
                 
             
                 )
             })}
             </div>

        </div>
    )
}

export default ProductCardSkeleton;