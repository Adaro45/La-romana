import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import "./styles/Products.css";
import { products } from "../files";

export default function Products() {
  return (
    <div className="products-page">
      <div className="products-grid">
        {products.map((product) => (
          <ScrollAnimation key={product.id}>
            <Link to={`/producto/${product.id}`} className="product-link">
              <article
                className={`product-card ${
                  product.title === "Romana" ? "exclusive" : ""
                }`}
              >
                <div className="card-image-container">
                  <img src={product.image} alt={product.title} loading="lazy" />
                </div>
                <div className="card-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
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
              </article>
            </Link>
          </ScrollAnimation>
        ))}
      </div>

      {/* Banner final */}
      <div className="development-banner">
        <p>¡Sitio en desarrollo!</p>
        <p>Estamos ampliando nuestro catálogo. Para más información:</p>
        <Link to="/contacto" className="banner-button">
          Contactar a un asesor
        </Link>
      </div>
    </div>
  );
}