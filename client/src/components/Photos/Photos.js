import React, { useState } from "react";
import "./Photos.css"

function Photos(props) {
    const [img, setImg] = useState(props.images);
    function createPhotosGrid(photo){
        return(
            <div className="photo-card">
               <img className="photo-card-img" src={photo} />
            </div>
        )
    }
    return (
        <div className="photos">
            <div className="photo-options">
                {img.map(createPhotosGrid)}
                 
             </div>
             <div className="photo-display">
                <img className="photo-display-img" src={img[0]} />
                
             </div>
             
        </div>
    )
}

export default Photos;