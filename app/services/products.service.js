import axios from "axios";

async function getAllProducts() {
    return await axios.get("https://dummyjson.com/products");
}

async function getProductById(id) {
    return await axios.get(`https://dummyjson.com/products/${id}`);
}

async function getAllCategories() {
    return await axios.get("https://dummyjson.com/products/categories");
}

async function getProductsByCategory(categoryId) {
    return await axios.get(
        `https://dummyjson.com/products/category/${categoryId}`
    );
}

export default {
    getAllProducts,
    getProductById,
    getAllCategories,
    getProductsByCategory
};