import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchProductos } from "@/utils/api"; // Asegúrate de crear esta función para obtener productos

export const Home = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProductos = async () => {
            try {
                const data = await fetchProductos(); // Llama a la función que obtiene los productos
                setProductos(data);
            } catch (err) {
                setError("Error al cargar los productos");
            } finally {
                setLoading(false);
            }
        };

        loadProductos();
    }, []);

    if (loading) {
        return <Text>Cargando productos...</Text>;
    }

    if (error) {
        return <Text color="red.500">{error}</Text>;
    }

    return (
        <Box p={5}>
            <Heading mb={6}>Nuestros Productos</Heading>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
                {productos.map((producto) => (
                    <Box key={producto.id} borderWidth={1} borderRadius="lg" overflow="hidden" p={5}>
                        <Heading size="md">{producto.name}</Heading>
                        <Text mt={2}>{producto.type}</Text>
                        <Text mt={2}>${producto.price}</Text>
                        <Text mt={2}>{producto.description}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Home;