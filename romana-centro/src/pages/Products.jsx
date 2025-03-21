import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import "./styles/Products.css";
import { products } from "../files";
import Cart from "../components/Cart";
import { useCart } from "../context/CartContext";

export default function Products() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <div className="products-page">
      <Cart />
      <div className="products-grid">
        {products.map((product) => (
          <ScrollAnimation key={product.id}>
            <article
              className={`product-card ${
                product.title === "Romana" ? "exclusive" : ""
              }`}
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
              <button className="cart-button"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                Agregar al carrito
              </button>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
