"use client" 
import React from "react";
import { useParams } from "react-router";
import useItemById from "../hooks/useItemById";
import ItemDetailContainer from "../../Components/ItemDetailContainer/ItemDetailContainer";
import Loader from "../../Components/Loader/Loader";
import Link from "next/link";

const ItemDetail = () => {
    const { id } = useParams();

    const { product, loading } = useItemById(id);

    return loading ? <Loader /> : <ItemDetailContainer item={product} />;
};

export default ItemDetail;