import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agrega un producto en múltiplos de CantXcaja
  const addToCart = (product) => {
    if (!product.CantXcaja) return; // Evitar productos sin cajas definidas

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + item.CantXcaja } : item
        );
      }
      return [...prevCart, { ...product, quantity: product.CantXcaja }];
    });
  };

  // Agregar una caja completa
  const addBoxToCart = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.CantXcaja
          ? { ...item, quantity: item.quantity + item.CantXcaja }
          : item
      )
    );
  };

  // Quitar una caja completa
  const removeBoxFromCart = (itemId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === itemId && item.CantXcaja) {
            const newQuantity = item.quantity - item.CantXcaja;
            return newQuantity >= 1 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };

  // Eliminar un producto completamente del carrito
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        addBoxToCart,
        removeBoxFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
