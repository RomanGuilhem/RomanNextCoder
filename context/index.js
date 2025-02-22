"use client"
import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);

  return (
    <CartContext.Provider value={{ cartState, setCartState }}>
      {children}
    </CartContext.Provider>
  );
};

export default { CartContext, CartProvider };