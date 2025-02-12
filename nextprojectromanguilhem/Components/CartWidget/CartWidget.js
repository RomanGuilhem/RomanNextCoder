import { useContext } from "react";
import { IoIosCart } from "react-icons/io";
import { CartContext } from "../../../context/CartContext";
import Link from "next/link";


export const CartWidget = () => {
  const { cartState } = useContext(CartContext);

  console.log(cartState);

  const totalItems = cartState?.reduce((acc, item) => acc + item.qtyItem, 0) || 0;

  return (
    <Link to="/checkout"
      style={{
        display: "flex",
        marginRight: "40px",
        alignItems: "center",
        width: "50px",
        justifyContent: "space-between",
      }}
    >
      <IoIosCart size={25} />
      {totalItems}
    </Link>
  );
};
