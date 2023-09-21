import React, { useState } from "react";
import "./Photos.css"

function Photos(props) {
    const [img, setImg] = useState(props.images);
    const [selectedImg, setSelectedImg] = useState(0);
    

    function createPhotosGrid(photo, index){
        return(
            <div className={(selectedImg === index ? "highlight-image ": "photo-card ")} key={index} onClick = { () => {setSelectedImg(index)}}>
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
                <img className="photo-display-img" src={img[selectedImg]} />
                
             </div>
             
        </div>
    )
}

export default Photos;