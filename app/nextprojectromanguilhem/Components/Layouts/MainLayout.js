"use client";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Link from "next/link";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;