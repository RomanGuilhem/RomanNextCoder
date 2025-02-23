"use client";

import React, { useContext, useState } from "react";
import { Flex, Button, Input, Heading, Stack } from "@chakra-ui/react";
import { db } from "@/Firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation"; 
import { CartContext } from "@/app/context/CartContext";

const Payment = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { cartState } = useContext(CartContext);
  const router = useRouter(); 

  const handleCreateOrder = () => {
    if (cartState.length === 0) {
      Swal.fire({
        title: "Tu carrito está vacío",
        text: "No puedes realizar un pedido sin productos en el carrito.",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      return;
    }

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
          "Se creó la orden correctamente, para futuras consultas deberás utilizar el siguiente identificador: " +
          id,
        showConfirmButton: true,
        confirmButtonText: "Aceptar",
      }).then(() => {
        router.push("/"); 
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
        <Input
          padding={"10px"}
          type="text"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          padding={"10px"}
          type="text"
          placeholder="Apellido"
          onChange={(e) => setLastName(e.target.value)}
        />

        <Input
          padding={"10px"}
          type="email"
          placeholder="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button padding={"10px"} colorScheme="teal" size="lg" onClick={handleCreateOrder}>
          Completar pedido
        </Button>
      </Stack>
    </Stack>
  );
};

export default Payment;
