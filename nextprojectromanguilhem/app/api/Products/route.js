export const fetchProductos = async () => {
    try {
        const response = await fetch('/api/productos'); 
        if (!response.ok) {
            throw new Error(`Error al obtener los productos: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error en fetchProductos:", error);
        throw error;
    }
};
