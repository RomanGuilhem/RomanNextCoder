"use client"
import React, { useContext, useState } from "react";
import { Flex, Button, Input, Heading, Stack } from "@chakra-ui/react";
import { CartContext } from "../context";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

export const Payment = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { cartState } = useContext(CartContext);

  const handleCreateOrder = () => {
    if (name === "" || lastName === "" || email === "") {
      Swal.fire({
        title: "No se pudo realizar el pedido!",
        text: "Debes completar todos los campos",
        icon: "error",
        confirmButtonText: "Reintentar",
      });

      return;
    }

    const total = cartState.reduce(
      (acc, item) => acc + item.price * item.qtyItem,
      0
    );
    const orderObj = {
      buyer: {
        name,
        lastName,
        email,
      },
      items: cartState.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          qty: item.qtyItem,
        };
      }),
      total,
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, orderObj).then(({ id }) => {
      Swal.fire({
        icon: "success",
        title:
          "Se creo la orden correctamente, para futuras consultas deberás utilizar el siguiente identificador: " +
          id,
        showConfirmButton: true,
        confirmButtonText: "Aceptar",
      });
    });
  };

  return (
    <Stack
      w={"100vw"}
      h={"60vh"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      padding={"10px"}
    >
      <Heading>Realizar pedido</Heading>
      <Stack
      spacing={4}
        flexDirection={"column"}
        w={"50vw"}
        h={"20vh"}
        display={"flex"}
        justifyContent={"space-between"}
        padding={"10px"}
      >
        <Input padding={"10px"}
          type="text"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />

        <Input padding={"10px"}
          type="text"
          placeholder="Apellido"
          onChange={(e) => setLastName(e.target.value)}
        />
        
        <Input padding={"10px"}
          type="email"
          placeholder="Correo electronico"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button padding={"10px"} colorScheme="teal" size="lg" onClick={handleCreateOrder}>
          Completar pedido
        </Button>
      </Stack>
    </Stack>
  );
};


<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>