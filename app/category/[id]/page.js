"use client";

import useItemsByCategory from "@/hooks/useItemsByCategory";
import ItemListContainer from "@/Components/ItemListContainer"; 
import Loader from "@/Components/Loader";
import { useParams } from "next/navigation";

const Category = () => {
    const { id } = useParams();

    const { productsData, loading } = useItemsByCategory(id);

    return loading ? <Loader /> : <ItemListContainer products={productsData} />;
};

export default Category;