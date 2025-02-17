"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../../Components/Layouts/MainLayout.js";
import { CartProvider } from "../context/CartContext";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <ChakraProvider>
      <CartProvider>
        <MainLayout>
          {children}
        </MainLayout>
      </CartProvider>
    </ChakraProvider>
  );
}