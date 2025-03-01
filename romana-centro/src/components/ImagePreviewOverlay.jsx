import React, { useState, useRef } from "react";
import "./styles/ImagePreviewOverlay.css";

const ImagePreviewOverlay = ({ imageUrl, alt, onClose }) => {
  const [lensVisible, setLensVisible] = useState(false);
  const [bgPosition, setBgPosition] = useState("0% 0%");
  const imgRef = useRef(null);

  const handleMouseEnter = () => {
    setLensVisible(true);
  };

  const handleMouseLeave = () => {
    setLensVisible(false);
  };

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    if (!img) return;
    const rect = img.getBoundingClientRect();
    // Calcula la posición del mouse como porcentaje respecto a la imagen
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setBgPosition(`${x}% ${y}%`);
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <button className="overlay-close" onClick={onClose}>
          ×
        </button>
        <img
          ref={imgRef}
          src={process.env.PUBLIC_URL + imageUrl}
          alt={alt}
          className="overlay-image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        />
        {lensVisible && (
          <div
            className="zoom-lens"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + imageUrl})`,
              backgroundPosition: bgPosition,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default ImagePreviewOverlay;
