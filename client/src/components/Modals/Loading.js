import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";

function Loading(props){
    return (
        <div className="overlay">
            <div className="loading-wrapper">
            <div className="loading-container">
                
                <ReactLoading type="spin" color="#f4555d" height={50} width={50} />
                <span>{props.msg}</span>
            </div>
            </div>
        </div>
    )
}

export default Loading;