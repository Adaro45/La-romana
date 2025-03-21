"use client"

import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "./styles/ProductCard.css"

const ProductCard = ({ product, isExclusive = false }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (product.CantXcaja) {
      addToCart(product)
    }
  }

  return (
    <Link to={`/producto/${product.id}`} className="product-link">
      <article className={`product-card ${isExclusive ? "exclusive" : ""}`}>
        <div className="card-image-container">
          <img src={product.image || "/placeholder.svg"} alt={product.title} loading="lazy" width="300" height="300" />
          {product.Precio_unidad && (
            <div className="product-price">
              ${product.Precio_unidad} <span className="price-unit">MXN</span>
            </div>
          )}
        </div>
        <div className="card-content">
          <h3>{product.title}</h3>
          <p>{product.description}</p>

          {product.specs && (
            <div className="product-specs-card">
              <h4>Características:</h4>
              <ul>
                {product.specs.slice(0, 2).map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
                {product.specs.length > 2 && <li>Y más características...</li>}
              </ul>
            </div>
          )}

          <div className="card-actions">
            <button className="card-button view-details">Ver detalles</button>

            {product.CantXcaja && (
              <button
                className="card-button add-to-cart"
                onClick={handleAddToCart}
                aria-label={`Agregar ${product.title} al carrito`}
              >
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
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Agregar
              </button>
            )}
          </div>
        </div>

        {isExclusive && <div className="product-badge exclusive">Exclusivo</div>}
        {product.CantXcaja && <div className="product-badge available">Disponible</div>}
      </article>
    </Link>
  )
}

export default ProductCard

