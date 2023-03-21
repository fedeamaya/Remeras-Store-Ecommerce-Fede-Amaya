import { GridItem } from "@chakra-ui/react";
import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      {products?.map((product) => (
        <GridItem key={product.id}>
          <Item
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            description={product.description}
            stock={product.stock}
            image={product.image}
          />
        </GridItem>
      ))}
    </>
  );
};

export default ItemList;