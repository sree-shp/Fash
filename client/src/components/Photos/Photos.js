import React, { useState } from "react";
import "./Photos.css";

function Photos(props) {
  const img = props.images;
  const [selectedImg, setSelectedImg] = useState(0);

  function createPhotosGrid(photo, index) {
    return (
      <li key={index}>
        <div
          className={`photo-card ${
            selectedImg === index ? "highlight-image " : ""
          }`}
          key={index}
          onClick={() => {
            setSelectedImg(index);
          }}
        >
          <img className="photo-card-img" src={photo} alt="" />
        </div>
      </li>
    );
  }
  return (
    <div className="photos">
      <div className="photo-display">
        <img className="photo-display-img" src={img[selectedImg]} alt="" />
      </div>
      <div className="photo-options">{img.map(createPhotosGrid)}</div>
    </div>
  );
}

export default Photos;
