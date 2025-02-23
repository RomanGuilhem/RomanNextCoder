"use client"

import { useRouter } from "next/navigation";  
import useItemById from "@/hooks/useItemById";  
import ItemDetailContainer from "@/Components/ItemDetailContainer";
import Loader from "@/Components/Loader";

const ItemDetail = () => {
  const router = useRouter();

  const { id } = router.query || {}; 

  if (!id) {
    return <Loader />;
  }

  const { product, loading } = useItemById(id);

  if (loading) {
    return <Loader />;
  }

  return (
    <ItemDetailContainer product={product} />
  );
};

export default ItemDetail;
