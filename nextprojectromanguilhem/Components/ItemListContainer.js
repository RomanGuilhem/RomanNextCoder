"use client";

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { IoIosCart } from "react-icons/io";
import Link from "next/link";

export const Item = ({ item }) => {
  return (
    <Flex p={6} alignItems="center" justifyContent="center" margin={"17px"}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        width="250px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {item.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )}

        <Image src={item.thumbnail} alt={`Picture of ${item.images}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {item.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              {item.title}
            </Box>
            <Tooltip
              label="Agregar al carrito"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <Link href={`/item/${item.id}`} passHref>
                <chakra.a display={"flex"}>
                  <Icon as={IoIosCart} h={7} w={7} alignSelf={"center"} />
                </chakra.a>
              </Link>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="xl" fontWeight="medium">
              ★ {item.rating}
            </Box>
            <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                $
              </Box>
              {item.price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export const ItemListContainer = ({ products = [] }) => {
  return (
    <Flex wrap={"wrap"}>
      {products.length > 0 ? (
        products.map((item) => {
          return <Item key={item.id} item={item} />;
        })
      ) : (
        <Box>No hay productos disponibles.</Box>
      )}
    </Flex>
  );
};