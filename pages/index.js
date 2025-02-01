import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchProductos } from "../utils/api"; 

const Home = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProductos = async () => {
            try {
                const data = await fetchProductos(); 
                setProductos(data);
            } catch (err) {
                setError(`Error al cargar los productos: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        loadProductos();
    }, []);

    if (loading) return <Text>Cargando productos...</Text>;
    if (error) return <Text color="red.500">{error}</Text>;

    return (
        <Box p={5}>
            <Heading mb={6}>Nuestros Productos</Heading>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
                {productos.map(({ id, name, type, price, description }) => (
                    <Box key={id} borderWidth={1} borderRadius="lg" overflow="hidden" p={5}>
                        <Heading size="md">{name}</Heading>
                        <Text mt={2}>{type}</Text>
                        <Text mt={2}>${price}</Text>
                        <Text mt={2}>{description}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Home;
