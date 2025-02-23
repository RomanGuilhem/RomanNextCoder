"use client";

import ItemListContainer from "@/Components/ItemListContainer";
import Loader  from "@/Components/Loader";   
import useItems from "@/hooks/useItem";

const Home = () => {
    const { itemsData, loading } = useItems("products");
    return loading ? <Loader /> : <ItemListContainer products={itemsData} />;
};

export default Home;