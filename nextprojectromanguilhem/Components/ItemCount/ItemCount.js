import { useEffect, useState } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount((prev) => prev + 1);
  const handleRemove = () => setCount((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    console.log("ItemCount component mounted");
  }, []);

  return (
    <Flex align="center" gap={4}>
      <Button onClick={handleRemove} colorScheme="red" size="sm" aria-label="Disminuir cantidad">
        -
      </Button>
      <Text fontSize="lg" fontWeight="bold">{count}</Text>
      <Button onClick={handleAdd} colorScheme="green" size="sm" aria-label="Aumentar cantidad">
        +
      </Button>
    </Flex>
  );
};

export default ItemCount;
