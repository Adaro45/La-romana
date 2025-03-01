import React, { useState } from "react";
import "./styles/ProductDetailModal.css";
const ProductDetailModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="modal-info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {product.specs && (
            <div className="modal-specs">
              <h4>Detalles del producto:</h4>
              <ul>
                {product.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
