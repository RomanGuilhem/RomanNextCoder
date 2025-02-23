"use client";

import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "@/app/context/CartContext"; 
import Link from "next/link"; 

const CartWidget = () => {
  const context = useContext(CartContext);

  if (!context) {
    console.error("Error: CartContext no está disponible.");
    return null;
  }

  const { cartState } = context;
  console.log("Cart State:", cartState);

  const totalItems = cartState?.reduce((acc, item) => acc + item.qtyItem, 0) || 0;

  return (
    <Link href="/checkout" 
      style={{
        display: "flex",
        marginRight: "40px",
        alignItems: "center",
        width: "50px",
        justifyContent: "space-between",
      }}
    >
      <FaShoppingCart size={25} />
      {totalItems}
    </Link>
  );
};

export default CartWidget;
