import {
  Box,
  Flex,
  Avatar,
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
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import CartWidget from '../CartWidget/CartWidget';
import { CiCoffeeBean } from "react-icons/ci";
import Link from "next/link";
import useItems from '../../hooks/useItem';

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { itemsData } = useItems("categories");

  return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
              <Link href="/">
                  <CiCoffeeBean style={{ fontSize: "30px" }} />
              </Link>
              <Menu>
                  <MenuButton as={Button} cursor="pointer" style={{ marginLeft: 150 }}>
                      Categorias
                  </MenuButton>
                  <MenuList height={"300px"} overflowY={"scroll"}>
                      {itemsData.map((category) => (
                          <MenuItem key={category.slug}>
                              <Link href={`/category/${category.slug}`}>
                                  {category.name}
                              </Link>
                          </MenuItem>
                      ))}
                  </MenuList>
              </Menu>

              <Flex alignItems={'center'}>
                  <CartWidget />
                  <Stack direction={'row'} spacing={7}>
                      <Button onClick={toggleColorMode}>
                          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                      </Button>
                      <Menu>
                          <MenuButton
                              as={Button}
                              rounded={'full'}
                              variant={'link'}
                              cursor={'pointer'}
                              minW={0}>
                              <Avatar
                                  size={'sm'}
                                  src={'https://fotos.perfil.com/2023/06/13/trim/720/410/messi-copa-del-mundo-1588008.jpg'}
                              />
                          </MenuButton>
                          <MenuList alignItems={'center'}>
                              <br />
                              <Center>
                                  <Avatar
                                      size={'2xl'}
                                      src={'https://fotos.perfil.com/2023/06/13/trim/720/410/messi-copa-del-mundo-1588008.jpg'}
                                  />
                              </Center>
                              <br />
                              <Center>
                                  <p>ADMIN</p>
                              </Center>
                              <br />
                              <MenuDivider />
                              <MenuItem>
                                  <Link href="/">Inicio</Link>
                              </MenuItem>
                              <MenuItem>Ajustes</MenuItem>
                              <MenuItem>Cerrar sesión</MenuItem>
                          </MenuList>
                      </Menu>
                  </Stack>
              </Flex>
          </Flex>
      </Box>
  );
}

export default NavBar;
