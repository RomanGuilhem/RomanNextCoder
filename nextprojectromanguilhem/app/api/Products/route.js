export const fetchProductos = async () => {
    const response = await fetch('/api/productos'); 
    if (!response.ok) {
        throw new Error('Error al obtener los productos');
    }
    return await response.json();
};