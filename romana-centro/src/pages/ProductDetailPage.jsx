// ProductDetailPage.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { allProducts as products } from "../files"; // Asegúrate de que este array incluya el producto
import "./styles/ProductDetailPage.css";
import ImagePreviewOverlay from "../components/ImagePreviewOverlay";

export default function ProductDetailPage() {
  const { id } = useParams(); // ID de la URL
  // Buscamos el producto con el ID correspondiente
  const product = products.find((p) => p.id === parseInt(id));
  const phoneNumber = "+525648210476";

  // Estados para la vista previa de imágenes
  const [previewImage, setPreviewImage] = useState(null);
  const [previewAlt, setPreviewAlt] = useState("");

  // Estado para el contador de unidades
  const [quantity, setQuantity] = useState(1);

  // Extraemos precio_unidad y CantXcaja
  const precioUnidad = product.Precio_unidad;
  const cantXcaja = product.CantXcaja;

  // Verificamos si el producto tiene precio asignado
  const hasPrice = precioUnidad !== undefined && precioUnidad !== null;

  // Calcula el precio total y el precio por caja solo si tiene precio
  const totalPrice = hasPrice ? quantity * precioUnidad : 0;
  const pricePerBox = hasPrice ? cantXcaja * precioUnidad : 0;

  const handleImageClick = (key, detailUrl) => {
    setPreviewImage(detailUrl);
    setPreviewAlt(key);
  };

  const closePreview = () => {
    setPreviewImage(null);
    setPreviewAlt("");
  };

  // Funciones para el contador
  const handleDecrease = (e) => {
    e.stopPropagation();
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = (e) => {
    e.stopPropagation();
    setQuantity(quantity + 1);
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
          {/* Imagen principal */}
          <img src={product.image} alt={product.title} className="main-image" />
        </div>
              </div>

        <div className="product-info">
          <div className="product-info_details">
            <div className="product-description">
              <h1>{product.title}</h1>
              <p className="description">{product.description}</p>

              {product.specs && (
                <div className="product-specs">
                  <h4>Detalles del producto:</h4>
                  <ul>
                    {product.specs.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="product-counter">
              <h3>Cantidad de unidades</h3>
              <div className="counter-controls">
                <button className="counter-btn" onClick={handleDecrease}>
                  -
                </button>
                <span className="counter-value">{quantity}</span>
                <button className="counter-btn" onClick={handleIncrease}>
                  +
                </button>
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
            </div>
          </div>
          <div className="product-actions">
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

        {previewImage && (
          <ImagePreviewOverlay
            imageUrl={previewImage}
            alt={previewAlt}
            onClose={closePreview}
          />
        )}
      </div>
    </div>
  );
}
