import React from "react";
import ReactLoading from "react-loading";
import "./Modal.css";

function Loading(props){
    return (
        <div className="overlay">
            <div className="modal-wrapper">
            <div className="modal-container">
                
                <ReactLoading type="spin" color="#f4555d" height={50} width={50} />
                <span>{props.msg}</span>
            </div>
            </div>
        </div>
    )
}

export default Loading;