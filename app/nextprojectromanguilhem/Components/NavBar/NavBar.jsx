"use client";
import {
    Box,
    Flex,
    Avatar,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
  } from "@chakra-ui/react";
  import { MoonIcon, SunIcon } from "@chakra-ui/icons";
  import { CartWidget } from "../CartWidget/CartWidget";
  import { CiCoffeeBean } from "react-icons/ci";
  import Link from "next/link";
  import { useItems } from "../../hooks";
  
  export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { itemsData = [] } = useItems("categories");
  
    return (
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/">
            <Box>
              <CiCoffeeBean style={{ fontSize: "30px" }} />
            </Box>
          </Link>
          <Menu>
            <MenuButton as={Button} cursor="pointer" ml={150}>
              Categorías
            </MenuButton>
            <MenuList maxH="300px" overflowY="auto">
              {itemsData.length > 0 ? (
                itemsData.map((category) => (
                  <MenuItem key={category.slug}>
                    <Link to={`/category/${category.slug}`}>{category.name}</Link>
                  </MenuItem>
                ))
              ) : (
                <MenuItem isDisabled>No hay categorías disponibles</MenuItem>
              )}
            </MenuList>
          </Menu>
          <Flex alignItems={"center"}>
            <CartWidget />
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                  <Avatar
                    size={"sm"}
                    src={"https://fotos.perfil.com/2023/06/13/trim/720/410/messi-copa-del-mundo-1588008.jpg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <Center mt={2}>
                    <Avatar
                      size={"2xl"}
                      src={"https://fotos.perfil.com/2023/06/13/trim/720/410/messi-copa-del-mundo-1588008.jpg"}
                    />
                  </Center>
                  <Center mt={2} mb={2}>
                    <Text fontSize="lg" fontWeight="bold">ADMIN</Text>
                  </Center>
                  <MenuDivider />
                  <Link to="/"><MenuItem>Inicio</MenuItem></Link>
                  <MenuItem>Ajustes</MenuItem>
                  <MenuItem>Cerrar sesión</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    );
  };
  