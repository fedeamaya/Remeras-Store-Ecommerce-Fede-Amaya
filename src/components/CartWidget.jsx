import { Badge } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const CartWidget = () => {

  const {totalItems} = useContext(CartContext);

  return (
    <>
        <button className="cart">
        <Badge fontSize="1em" className="cartCounter">{totalItems}</Badge>
        <span className="itemCart material-symbols-outlined">shopping_basket</span>
        </button>
    </>
  );
};

export default CartWidget;