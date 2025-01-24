export async function getProducts() {
    try{
    const url = categoria
    ?"https://dummyjson.com/products/category/" + categoria
    :"https://dummyjson.com/products"

    const data = await fetch (url)
    const { products } = await data.json()
    return products

} catch (error) {
    console.error(error);
    
}}