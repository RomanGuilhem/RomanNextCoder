import { Flex, Spinner, Text } from "@chakra-ui/react";

export const Loader = ({ size = "xl", color = "blue.500", message = "Loading..." }) => {
  return (
    <Flex
      height={"90vh"}
      width={"100vw"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color={color}
        size={size}
        aria-label="Loading content"
      />
      <Text mt={4} fontSize="lg" color={color}>
        {message}
      </Text>
    </Flex>
  );
};
