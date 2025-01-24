export const fetchProductos = async () => {
    const response = await fetch('/api/productos'); // Ajusta la ruta según tu API
    if (!response.ok) {
        throw new Error('Error al obtener los productos');
    }
    return await response.json();
};