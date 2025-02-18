import { Box, Flex, Icon, Link } from "@chakra-ui/react";
import { FaLinkedin, FaXTwitter, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <Box as="footer" bg="blue.600" color="white" p={4} textAlign="center">
      <Flex justify="center" gap={4}>
        <Link href="https://www.linkedin.com/feed/" isExternal>
          <Icon as={FaLinkedin} boxSize={6} />
        </Link>
        <Link href="https://twitter.com/?lang=es" isExternal>
          <Icon as={FaXTwitter} boxSize={6} />
        </Link>
        <Link href="https://www.youtube.com/" isExternal>
          <Icon as={FaYoutube} boxSize={6} />
        </Link>
        <Link href="https://www.facebook.com/?locale=es_LA" isExternal>
          <Icon as={FaFacebook} boxSize={6} />
        </Link>
        <Link href="https://www.instagram.com/" isExternal>
          <Icon as={FaInstagram} boxSize={6} />
        </Link>
      </Flex>
    </Box>
  );
}

export default Footer;
