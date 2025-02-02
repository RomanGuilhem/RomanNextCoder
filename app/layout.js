"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../../Components/MainLayout";
import { CartProvider } from "../context/CartContext";
import "../globals.css";

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