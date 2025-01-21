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

} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { CartWidget } from '../CartWidget/CartWidget'
import { CiCoffeeBean } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useItems } from '../../hooks';


export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { itemsData } = useItems("categories");

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Link to="/">
                    <Box><CiCoffeeBean style= {{ fontSize: "30px" }} /></Box>
                    </Link>
                    <Menu>
                        <MenuButton as={Button} cursor="pointer" style={{ marginLeft: 150 }}>
                            Categorias
                        </MenuButton>
                        <MenuList height={"300px"} overflowY={"scroll"}>
                            {itemsData.map((category) => (
                                <MenuItem key={category.slug}>
                                    <Link to={`/category/${category.slug}`}>{category.name}</Link>
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
                                    <Link to="/">
                                    <MenuItem>Inicio</MenuItem>
                                    </Link>
                                    <MenuItem>Ajustes</MenuItem>
                                    <MenuItem>Cerrar sesion</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
