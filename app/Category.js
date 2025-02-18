import React from "react";
import { useItemsByCategory } from "../hooks";
import { ItemListContainer, Loader } from "../../Components";
import { useParams } from "react-router";
import Link from "next/link";

export const Category = () => {
    const { id } = useParams();

    const { productsData, loading } = useItemsByCategory(id);

    return loading ? <Loader /> : <ItemListContainer products={productsData} />;
};