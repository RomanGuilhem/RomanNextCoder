import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import Loader  from "../Components/Loader/Loader";   
import useItems from "../hooks/useItem";

const Home = () => {
    const { itemsData, loading } = useItems("products");
    return loading ? <Loader /> : <ItemListContainer products={itemsData} />;
};

export default Home;