"use client"

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export const Item = ({ item }) => {
  return (
    <Flex p={6} alignItems="center" justifyContent="center" margin="17px">
      <Box
        bg={useColorModeValue("gray.300", "gray.800")}
        width="250px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {item.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )}

        <Image src={item.thumbnail} alt={`Imagen de ${item.title}`} roundedTop="lg" />

        <Box p="6">
          {item.isNew && (
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              Nuevo
            </Badge>
          )}

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="xl" fontWeight="semibold" as="h4" lineHeight="tight">
              {item.title}
            </Box>
            <Link href={`/itemdetail/${item.id}`}>
              <Tooltip
                label="Agregar al carrito"
                bg="white"
                placement="top"
                color="gray.800"
                fontSize="1.2em"
              >
                <Icon as={FaShoppingCart} h={7} w={7} alignSelf="center" />
              </Tooltip>
            </Link>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="xl" fontWeight="medium">
              ★ {item.rating ? item.rating.toFixed(1) : "N/A"}
            </Box>
            <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color="gray.600" fontSize="lg">
                $
              </Box>
              {item.price ? item.price.toFixed(2) : "0.00"}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

const ItemListContainer = ({ products = [] }) => {
  return (
    <Flex wrap="wrap">
      {Array.isArray(products) && products.length ? (
        products.map((item) => <Item key={item.id} item={item} />)
      ) : (
        <Box>No hay productos disponibles.</Box>
      )}
    </Flex>
  );
};

export default ItemListContainer;
