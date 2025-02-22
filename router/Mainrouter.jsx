import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "../pages/category";
import Checkout from "../pages/checkout";
import Home from "../pages/index";
import  ItemDetail from "../pages/itemDetail";
import  NotFound from "../pages/404";
import  Payment from "../pages/payment";
import NavBar from "../components/NavBar";

const MainRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;