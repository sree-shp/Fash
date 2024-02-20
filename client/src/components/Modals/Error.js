import React from "react";
import "./Modal.css"

function Error(props){
    return (
        <div className="overlay">
            <div className="modal-wrapper">
            <div className="modal-container">
                <img alt="error-icon" className="error-icon" src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"/>
                
                <span>{props.msg}</span>
            </div>
            </div>
        </div>
    )
}

export default Error;