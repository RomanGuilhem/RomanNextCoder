import { Flex, Spinner, Text, VisuallyHidden } from "@chakra-ui/react";

export const Loader = ({ 
  size = "xl", 
  color = "blue.500", 
  message = "Cargando...", 
  srOnlyMessage = "El contenido se está cargando, por favor espere." 
}) => {
  return (
    <Flex
      minHeight="100vh"
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      aria-live="polite"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color={color}
        size={size}
        aria-label={srOnlyMessage}
      />
      <Text mt={4} fontSize="lg" color={color}>
        {message}
      </Text>
      <VisuallyHidden>{srOnlyMessage}</VisuallyHidden>
    </Flex>
  );
};
