"use client";

import { useParams } from "next/navigation";
import useItemById from "@/hooks/useItemById";
import ItemDetailContainer from "@/Components/ItemDetailContainer";
import Loader from "@/Components/Loader";

const ItemDetail = () => {
    const { id } = useParams();
console.log("ID obtenido de useParams:", id);


    if (!id) return <Loader />; 
    const { product, loading } = useItemById(id);

    console.log("Producto obtenido:", product); 

    return loading ? <Loader /> : product ? <ItemDetailContainer item={product} /> : <p>Producto no encontrado</p>;
};

export default ItemDetail;
