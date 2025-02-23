"use client";

import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);

  const addItem = (product, qtyItem) => {
    setCartState((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      return existingProduct
        ? prevCart.map((item) =>
            item.id === product.id
              ? { ...item, qtyItem: item.qtyItem + qtyItem }
              : item
          )
        : [...prevCart, { ...product, qtyItem }];
    });
  };

  const removeItem = (product) => {
    setCartState((prevCart) =>
      prevCart
        .map((item) =>
          item.id === product.id ? { ...item, qtyItem: item.qtyItem - 1 } : item
        )
        .filter((item) => item.qtyItem > 0)
    );
  };

  const deleteItem = (product) => {
    setCartState((prevCart) =>
      prevCart.filter((item) => item.id !== product.id)
    );
  };
  const clearCart = () => setCartState([]);

  return (
    <CartContext.Provider value={{ cartState, addItem, removeItem, clearCart, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
