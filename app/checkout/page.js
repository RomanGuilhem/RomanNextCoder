"use client";

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Checkout = () => {
  const { cartState, addItem, removeItem, deleteItem } = useContext(CartContext);
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <VStack spacing={4}>
      <Heading>Checkout</Heading>
      {cartState.length === 0 ? (
        <Text>Tu carrito está vacío</Text>
      ) : (
        cartState.map((item) => (
          <Box key={item.id} p={4} borderWidth={1} borderRadius="md" mb={4}>
            <HStack>
              <Text>{item.title}</Text>
              <IconButton
                icon={<MinusIcon />}
                onClick={() => removeItem(item)}
                aria-label="Decrementar cantidad"
              />
              <Text>{item.qtyItem}</Text>
              <IconButton
                icon={<AddIcon />}
                onClick={() => addItem(item, 1)}
                aria-label="Incrementar cantidad"
              />
              <IconButton
                icon={<DeleteIcon />}
                onClick={() => deleteItem(item)}
                aria-label="Eliminar ítem"
              />
            </HStack>
          </Box>
        ))
      )}
      <Button onClick={handleGoBack} colorScheme="blue">
        Volver
      </Button>
      <Button as={Link} href="/payment">
        Comprar
      </Button>
    </VStack>
  );
};

export default Checkout;
