import React from "react";
import {
  Box,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Container maxW="100%" className="navbar">
        <Box>
          <Link to={"/"}>
            <h1 className="brandName">Remeras Store</h1>
          </Link>
        </Box>
        <Box>
          <Link to="/"><span> Inicio </span></Link>
        </Box>
        <Menu>
            <MenuButton className="menuButton">
              Producto <span className="chevron"></span>
            </MenuButton>
            <MenuList className="productMenu">
            <Link to={"/catalog"}>
              <MenuItem className="productMenuItem">Remeras</MenuItem>
            </Link>
            <MenuDivider />
            <Link to={`/category/${"talle-s"}`}>
              <MenuItem className="productMenuItem">Talle S</MenuItem>
            </Link>
            <Link to={`/category/${"talle-m"}`}>
            <MenuItem className="productMenuItem">Talle M</MenuItem>
            </Link>
            <Link to={`/category/${"talle-l"}`}>
            <MenuItem className="productMenuItem">Talle L</MenuItem>
            </Link>
            <Link to={`/category/${"talle-xl"}`}>
            <MenuItem className="productMenuItem">Talle XL</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Box>
          <span>Contacto</span>
        </Box>
        <Box>
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Navbar;