import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import "./styles/Products.css";
import { products } from "../files";

export default function Products() {
  const navigate = useNavigate();

  return (
    <div className="products-page">
      <div className="products-grid">
        {products.map((product) => (
          <ScrollAnimation key={product.id}>
            <article
              className={`product-card ${product.title === "Romana" ? "exclusive" : ""}`}
              onClick={() => navigate(`/producto/${product.id}`)}
            >
              <div className="card-image-container">
                <img src={product.image} alt={product.title} loading="lazy" />
              </div>
              <div className="card-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                {product.specs && (
                  <div className="product-specs-card">
                    <h4>Detalles del producto:</h4>
                    <ul>
                      {product.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                      <li>Precio: ${product.Precio_unidad} MXN</li>
                      <li>Cantidad por caja: {product.CantXcaja}</li>
                    </ul>
                  </div>
                )}
                {/* El botón de consultar se renderiza sin anidarse en otro Link */}
                <button
                  className="card-button"
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que se active la navegación al detalle
                    navigate("/contacto");
                  }}
                >
                  Consultar opciones
                </button>
              </div>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
