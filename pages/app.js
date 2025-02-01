"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../layouts/MainLayout";
import { CartProvider } from "../context/CartContext";
import "../globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CartProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </CartProvider>
    </ChakraProvider>
  );
}

export default MyApp;
