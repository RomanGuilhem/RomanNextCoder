"use client" 
import React from "react";
import { useParams } from "react-router";
import { useItemById } from "../hooks";
import { ItemDetailContainer, Loader } from "../../Components";
import Link from "next/link";

const ItemDetail = () => {
    const { id } = useParams();

    const { product, loading } = useItemById(id);

    return loading ? <Loader /> : <ItemDetailContainer item={product} />;
};

export default ItemDetail;