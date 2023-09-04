import React from "react";
import "./Error.css"

function Error(props){
    return (
        <div className="overlay">
            <div className="loading-wrapper">
            <div className="loading-container">
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"/>
                
                <span>{props.msg}</span>
            </div>
            </div>
        </div>
    )
}

export default Error;