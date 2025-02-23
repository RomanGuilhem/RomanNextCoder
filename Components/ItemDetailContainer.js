"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { MdLocalShipping } from "react-icons/md";
import { CartContext } from "@/app/context/CartContext";
import Image from "next/image";

const ItemDetailContainer = ({ item }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <Text>Error: No se pudo cargar el carrito</Text>;
  }

  const { addItem, removeItem, cartState } = cartContext;

  if (!item) {
    return <Text>Error: No se encontraron detalles del producto</Text>;
  }

  const cartItem = cartState.find((cartItem) => cartItem.id === item.id);
  const count = cartItem ? cartItem.qtyItem : 0;

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} py={18}>
        <Flex>
          {item.thumbnail ? (
            <Image
              src={item.thumbnail}
              alt={"Imagen del producto"}
              width={500}
              height={500}
              style={{ borderRadius: "8px", objectFit: "cover" }}
            />
          ) : (
            <Text>Este producto no tiene una imagen disponible</Text>
          )}
        </Flex>
        <Stack spacing={6}>
          <Box as={"header"}>
            <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
              {item.title}
            </Heading>
            <Text color={useColorModeValue("gray.900", "gray.400")} fontWeight={300} fontSize={"2xl"}>
              ${item.price} USD
            </Text>
          </Box>

          <Stack spacing={4} divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />}>
            <VStack spacing={4}>
              <Text fontSize={"lg"}>{item.description}</Text>
            </VStack>
          </Stack>

          <Flex>
            <Text>
              Stock: {item.stock && item.stock > 0 ? item.stock : "No hay unidades disponibles"}
            </Text>
          </Flex>

          <Flex justifyContent={"space-between"} width={"20%"} alignItems={"center"}>
            <Button onClick={() => removeItem(item)} isDisabled={count === 0}>-</Button>
            <Text>{count}</Text>
            <Button onClick={() => addItem(item, 1)} isDisabled={count >= item.stock || item.stock === 0}>+</Button>
          </Flex>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>Envío en 2-3 días hábiles</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ItemDetailContainer;
