import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "@/context/AuthContext";
import MainLayout from "@/layouts/MainLayout";

const roboto = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mi App en Next.js",
  description: "Aplicación creada con Next.js y Chakra UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        <ChakraProvider>
          <AuthContextProvider>
            <MainLayout>{children}</MainLayout>
          </AuthContextProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}

