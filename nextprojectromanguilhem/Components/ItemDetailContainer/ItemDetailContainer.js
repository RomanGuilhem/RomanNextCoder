import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { CartContext } from "../../../context/CartContext";


export const ItemDetailContainer = ({ item }) => {
  const [count, setCount] = useState(0);
  const { addItem, removeItem } = useContext(CartContext);

  const handleAddItem = () => {
    if (count < item.stock) {
      const newCount = count + 1;
      setCount(newCount);
      addItem(item, newCount);
    }
  };

  const handleRemoveItem = () => {
    if (count > 0) {
      setCount(count - 1);
      removeItem(item);
    }
  };

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={item.thumbnail}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {item.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ${item.price} USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{item.description}</Text>
            </VStack>
          </Stack>
          <Flex>
            <Text>
              Stock:{" "}
              {item.stock > 0 ? item.stock : "No hay unidades disponibles"}
            </Text>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            width={"20%"}
            alignItems={"center"}
          >
            <Button onClick={handleRemoveItem} isDisabled={count === 0}>
              -
            </Button>
            <Text>{count}</Text>
            <Button onClick={handleAddItem} isDisabled={count >= item.stock}>
              +
            </Button>
          </Flex>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};