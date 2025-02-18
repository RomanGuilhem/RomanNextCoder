"use client";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Link from "next/link";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>({children})</main>
      <Footer />
    </>
  );
};

export default MainLayout;