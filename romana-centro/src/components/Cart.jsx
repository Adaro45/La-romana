import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./styles/Cart.css";

export default function Cart() {
  const { cart, addBoxToCart, removeBoxFromCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) return null;

  return (
    <div className="cart">
      <h3>Carrito 🛒</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} x {item.quantity / item.CantXcaja} cajas
            <div className="cart-buttons">
              <button className="button-plus" onClick={() => addBoxToCart(item.id)}><b>+</b></button>
              <button className="button-minus" onClick={() => removeBoxFromCart(item.id)}><b>-</b></button>
              <button className="button-trash" onClick={() => removeFromCart(item.id)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="checkout-button" onClick={() => navigate("/compra")}>Finalizar Compra</button>
    </div>
  );
}
