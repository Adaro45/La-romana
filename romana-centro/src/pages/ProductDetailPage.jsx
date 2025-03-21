import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { allProducts as products } from "../files";
import "./styles/ProductDetailPage.css";
import ImagePreviewOverlay from "../components/ImagePreviewOverlay";
import Cart from "../components/Cart"; // Importamos el carrito
import { useCart } from "../context/CartContext";

export default function ProductDetailPage() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const phoneNumber = "+525648210476";
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);
  const [previewAlt, setPreviewAlt] = useState("");
  const [boxQuantity, setBoxQuantity] = useState(0);

  const precioUnidad = product?.Precio_unidad || 0;
  const cantXcaja = product?.CantXcaja || 1;
  const hasPrice = precioUnidad > 0;
  const totalUnits = boxQuantity * cantXcaja;
  const totalPrice = hasPrice ? totalUnits * precioUnidad : 0;
  const pricePerBox = hasPrice ? cantXcaja * precioUnidad : 0;
  if (!product) {
    return (
      <div className="product-detail-page">
        <h2>Producto no encontrado</h2>
        <Link to="/productos">Volver a productos</Link>
      </div>
    );
  }
  const handleImageClick = (key, detailUrl) => {
    setPreviewImage(detailUrl);
    setPreviewAlt(key);
  };

  const closePreview = () => {
    setPreviewImage(null);
    setPreviewAlt("");
  };

  const handleBoxDecrease = () => {
    if (boxQuantity > 1) setBoxQuantity(boxQuantity - 1);
  };

  const handleBoxIncrease = () => {
    setBoxQuantity(boxQuantity + 1);
  };

  const handleAddToCart = () => {
    if (totalUnits > 0) {
      addToCart({ ...product, quantity: totalUnits });
    }
  };

  if (!product) {
    return (
      <div className="product-detail-page">
        <h2>Producto no encontrado</h2>
        <Link to="/productos">Volver a productos</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-main-page">
      <div className="product-detail-page">
                <button className="back-button" onClick={() => navigate("/productos")}>
            ← Volver
          </button>
        <div className="product-images-container">
          <div className="detail-images">
            <ul>
              {product.details &&
                Object.entries(product.details).map(([key, detail]) => (
                  <li key={key} onClick={() => handleImageClick(key, detail)}>
                    <img src={detail} alt={key} className="detail-image" />
                  </li>
                ))}
            </ul>
          </div>
          <div className="product-images">
            <img src={product.image} alt={product.title} className="main-image" />
          </div>
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="description">{product.description}</p>
          {product.specs && (
            <ul className="product-specs">
              {product.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
              <li>Precio por unidad: ${precioUnidad} MXN</li>
              <li>Cantidad de unidadespor caja: {cantXcaja}</li>
            </ul>
          )}

          <div className="product-counter">
            <h3>Cantidad de Cajas</h3>
            <div className="counter-controls">
              <button className="counter-btn" onClick={handleBoxDecrease}>-</button>
              <span className="counter-value">{boxQuantity}</span>
              <button className="counter-btn" onClick={handleBoxIncrease}>+</button>
            </div>
          </div>

          <div className="price-info">
            {hasPrice ? (
              <>
                <p>Total: {totalPrice} MXN</p>
                <p>Precio por caja: {pricePerBox} MXN</p>
              </>
            ) : (
              <p>Contactar con asesor</p>
            )}
          </div>

          <div className="product-actions">
            <button onClick={handleAddToCart} className="add-to-cart-button buy-button">
              Agregar al Carrito
            </button>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="buy-button"
            >
              Comprar Ahora
            </a>
          </div>
        </div>
      </div>

      {/* 🛒 Se muestra el carrito en la página del producto */}
      <Cart />
      {previewImage && (
        <ImagePreviewOverlay imageUrl={previewImage} alt={previewAlt} onClose={closePreview} />
      )}
    </div>
  );
}