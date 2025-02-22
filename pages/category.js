import React from "react";
import useItemsByCategory from "../hooks/useItemsByCategory";
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";
import Loader from "../../Components/Loader/Loader";
import { useParams } from "react-router";
import Link from "next/link";

const Category = () => {
    const { id } = useParams();

    const { productsData, loading } = useItemsByCategory(id);

    return loading ? <Loader /> : <ItemListContainer products={productsData} />;
};

export default Category;