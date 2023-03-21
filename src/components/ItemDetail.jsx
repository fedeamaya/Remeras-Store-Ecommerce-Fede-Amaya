import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/ShoppingCartContext";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
} from "@chakra-ui/react";

const ItemDetail = ({ product }) => {
  const { handleAddToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    handleAddToCart(product,quantity);
  };

  return (
    <>
      <Card className="itemDetailCard">
        <CardHeader className="itemDetailName">{product.name}</CardHeader>
        <CardBody>
          <img
            className="itemDetailImg"
            src={product.image}
            alt="Item image"
          ></img>
          <br />
          <p>{product.description}</p>
          <br />
          <p>
            <b>Precio:</b> ${product.price}
          </p>
          <p>
            <b>Stock:</b> {product.stock}
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <ItemCount productStock={product.stock} onAdd={onAdd} />
        </CardFooter>
      </Card>
    </>
  );
};

export default ItemDetail;