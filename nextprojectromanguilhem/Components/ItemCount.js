import { useEffect, useState } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";

export const ItemCount = () => {
  const [state, setState] = useState(0);

  const handleAdd = () => {
    setState((prevState) => prevState + 1);
  };

  const handleRemove = () => {
    setState((prevState) => Math.max(prevState - 1, 0)); // Prevent negative count
  };

  useEffect(() => {
    console.log("useEffect with empty dependencies");
  }, []);

  return (
    <Flex>
      <Button onClick={handleRemove} aria-label="Remove item">
        -
      </Button>
      <Text mx={4}>{state}</Text>
      <Button onClick={handleAdd} aria-label="Add item">
        +
      </Button>
    </Flex>
  );
};