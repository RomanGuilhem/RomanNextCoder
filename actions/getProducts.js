export async function getProducts(categoria = "") {
    try {
        const url = categoria
            ? `https://dummyjson.com/products/category/${categoria}`
            : "https://dummyjson.com/products";

        const response = await fetch(url);
        const { products } = await response.json();
        return products;
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return [];
    }
}
