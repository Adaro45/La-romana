"use client"

import { useState, useEffect, useRef } from "react"
import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"
import "./styles/Cart.css"

export default function Cart() {
  const { cart, addBoxToCart, removeBoxFromCart, removeFromCart } = useCart()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const cartRef = useRef(null)

  // Calcular el total de productos en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  // Calcular el subtotal
  const subtotal = cart.reduce((acc, item) => {
    return acc + item.quantity * item.Precio_unidad
  }, 0)

  // Cerrar el carrito al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  if (cart.length === 0 && !isOpen)
    return (
      <button className="cart-toggle-button" onClick={() => setIsOpen(true)} aria-label="Abrir carrito">
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
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </button>
    )

  return (
    <div ref={cartRef} className={`cart-container ${isOpen ? "open" : ""}`}>
      {!isOpen ? (
        <button className="cart-toggle-button" onClick={() => setIsOpen(true)} aria-label="Abrir carrito">
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
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </button>
      ) : (
        <div className="cart">
          <div className="cart-header">
            <h3>Carrito de Compra</h3>
            <button className="cart-close" onClick={() => setIsOpen(false)} aria-label="Cerrar carrito">
              ×
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="cart-empty">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
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
              <p>Tu carrito está vacío</p>
              <button
                className="cart-shop-button"
                onClick={() => {
                  navigate("/productos")
                  setIsOpen(false)
                }}
              >
                Ir a comprar
              </button>
            </div>
          ) : (
            <>
              <ul className="cart-items">
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image || "/placeholder.svg"} alt={item.title} width="60" height="60" />
                    </div>
                    <div className="cart-item-details">
                      <h4>{item.title}</h4>
                      <p className="cart-item-price">
                        ${item.Precio_unidad} × {item.quantity} = ${item.Precio_unidad * item.quantity}
                      </p>
                      <div className="cart-item-cajas">
                        <span>Cajas: {(item.quantity / item.CantXcaja).toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="cart-item-actions">
                      <button
                        className="cart-item-button"
                        onClick={() => addBoxToCart(item.id)}
                        aria-label="Agregar caja"
                      >
                        +
                      </button>
                      <button
                        className="cart-item-button"
                        onClick={() => removeBoxFromCart(item.id)}
                        aria-label="Quitar caja"
                      >
                        -
                      </button>
                      <button
                        className="cart-item-button remove"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Eliminar producto"
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
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-summary">
                <div className="cart-subtotal">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <button
                  className="checkout-button"
                  onClick={() => {
                    navigate("/compra")
                    setIsOpen(false)
                  }}
                >
                  Finalizar Compra
                </button>
                <button className="continue-shopping" onClick={() => setIsOpen(false)}>
                  Seguir comprando
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

