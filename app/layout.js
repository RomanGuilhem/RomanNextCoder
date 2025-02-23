import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import CartProvider from "./context/CartContext";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SuperOnline</title>
      </head>
      <body>
        <ChakraProvider>
            <CartProvider>
              <NavBar />
              <main>{children}</main>
              <Footer />
            </CartProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
