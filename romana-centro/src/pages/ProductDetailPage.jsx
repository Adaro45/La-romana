"use client";

import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { allProducts as products } from "../files";
import "./styles/ProductDetailPage.css";
import ImagePreviewOverlay from "../components/ImagePreviewOverlay";
import Cart from "../components/Cart";
import { useCart } from "../context/CartContext";

export default function ProductDetailPage() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = products.find((p) => p.id === Number.parseInt(id));
  const phoneNumber = "+525648210476";
  const navigate = useNavigate();

  const [previewImage, setPreviewImage] = useState(null);
  const [previewAlt, setPreviewAlt] = useState("");
  const [boxQuantity, setBoxQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  // Para animación de entrada
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Resetear el estado cuando cambia el producto
    setBoxQuantity(1);
    setPreviewImage(null);
    setPreviewAlt("");
    setActiveTab("description");

    // Animación de entrada
    setIsLoaded(false);
    setTimeout(() => setIsLoaded(true), 100);

    // Scroll al inicio
    window.scrollTo(0, 0);
  }, [id]);

  const precioUnidad = product?.Precio_unidad || 0;
  const cantXcaja = product?.CantXcaja || 1;
  const hasPrice = precioUnidad > 0;
  const totalUnits = boxQuantity * cantXcaja;
  const totalPrice = hasPrice ? totalUnits * precioUnidad : 0;
  const pricePerBox = hasPrice ? cantXcaja * precioUnidad : 0;

  if (!product) {
    return (
      <div className="product-not-found">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <h2>Producto no encontrado</h2>
        <p>Lo sentimos, el producto que buscas no está disponible.</p>
        <Link to="/productos" className="btn-primary">
          Volver a productos
        </Link>
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

  const handleImageZoom = () => {
    setIsImageZoomed(!isImageZoomed);
  };

  return (
    <div className={`product-detail-main-page ${isLoaded ? "loaded" : ""}`}>
      <div className="product-detail-container">
        <div className="product-breadcrumbs">
          <Link to="/">Inicio</Link> /<Link to="/productos">Productos</Link> /
          <span>{product.title}</span>
        </div>

        <div className="product-detail-page">
          <div className="product-gallery">
            <div className="product-thumbnails">
              {product.details &&
                Object.entries(product.details).map(([key, detail]) => (
                  <div
                    key={key}
                    className={`thumbnail ${
                      previewImage === detail ? "active" : ""
                    }`}
                    onClick={() => handleImageClick(key, detail)}
                  >
                    <img
                      src={detail || "/placeholder.svg"}
                      alt={key}
                      width="60"
                      height="60"
                      as="image"
                    />
                  </div>
                ))}
            </div>

            <div
              className={`product-main-image ${isImageZoomed ? "zoomed" : ""}`}
              onClick={handleImageZoom}
            >
              <img
                src={previewImage || product.image}
                alt={product.title}
                className="main-image"
                width="500"
                height="500"
                as="image"
              />
              <div className="zoom-hint">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                <span>Click para {isImageZoomed ? "reducir" : "ampliar"}</span>
              </div>
            </div>
          </div>

          <div className="product-info">
            <h1>{product.title}</h1>

            {hasPrice && (
              <div className="product-price-tag">
                ${precioUnidad} <span className="price-unit">MXN</span>
                {cantXcaja > 1 && (
                  <span className="price-per-unit">por unidad</span>
                )}
              </div>
            )}

            <div className="product-tabs">
              <button
                className={`tab-button ${
                  activeTab === "description" ? "active" : ""
                }`}
                onClick={() => setActiveTab("description")}
              >
                Descripción
              </button>
              <button
                className={`tab-button ${
                  activeTab === "specs" ? "active" : ""
                }`}
                onClick={() => setActiveTab("specs")}
              >
                Especificaciones
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "description" && (
                <div className="product-description">
                  <p>{product.description}</p>
                  {cantXcaja > 1 && (
                    <div className="product-packaging">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                      <span>Venta por cajas de {cantXcaja} unidades</span>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "specs" && (
                <div className="product-specs">
                  {product.specs && (
                    <ul>
                      {product.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {hasPrice && (
              <div className="product-counter">
                <h3>Cantidad de Cajas</h3>
                <div className="counter-controls">
                  <button
                    className="counter-btn"
                    onClick={handleBoxDecrease}
                    aria-label="Disminuir cantidad"
                  >
                    -
                  </button>
                  <span className="counter-value">{boxQuantity}</span>
                  <button
                    className="counter-btn"
                    onClick={handleBoxIncrease}
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>
                </div>

                <div className="price-summary">
                  <div className="price-row">
                    <span>Unidades:</span>
                    <span>{totalUnits}</span>
                  </div>
                  <div className="price-row">
                    <span>Precio por caja:</span>
                    <span>${pricePerBox.toFixed(2)} MXN</span>
                  </div>
                  <div className="price-row total">
                    <span>Total:</span>
                    <span>${totalPrice.toFixed(2)} MXN</span>
                  </div>
                </div>
              </div>
            )}

            <div className="product-actions">
              {hasPrice && (
                <button
                  onClick={handleAddToCart}
                  className="add-to-cart-button"
                  aria-label="Agregar al carrito"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  Agregar al Carrito
                </button>
              )}

              <a
                href={`https://wa.me/${phoneNumber}?text=Hola, estoy interesado en el producto: ${product.title} (ID: ${product.id})`}
                target="_blank"
                rel="noopener noreferrer"
                className="buy-now-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Consultar Ahora
              </a>
            </div>

            <div className="product-meta">
              <div className="meta-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                  <line x1="4" y1="22" x2="4" y2="15"></line>
                </svg>
                <span>ID: {product.id}</span>
              </div>

              <div className="meta-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="back-navigation">
          <button className="back-button" onClick={() => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Volver
          </button>
        </div>
      </div>

      <Cart />
      {previewImage && (
        <ImagePreviewOverlay
          imageUrl={previewImage}
          alt={previewAlt}
          onClose={closePreview}
        />
      )}
    </div>
  );
}
