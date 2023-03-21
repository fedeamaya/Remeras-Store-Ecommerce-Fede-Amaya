import React, { useState } from "react";
import { Grid, Center, Button, GridItem } from "@chakra-ui/react";

const ItemCount = ({ productStock, onAdd}) => {
  const [counter, setCounter] = useState(0);

  const plusItem = () => {
    counter < productStock ? setCounter(counter + 1) : counter;
  };

  const minusItem = () => {
    counter > 0 ? setCounter(counter - 1) : counter;
  };

  return (
    <>
      <Grid
        w="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap="1"
      >
        <GridItem>
          <Center>
            <Button
              w="100%"
              colorScheme="yellow"
              className="itemCountBtn"
              onClick={minusItem}
            >
              <span className="itemCountSymbol">-</span>
            </Button>
          </Center>
        </GridItem>
        <GridItem className="itemCounter">{counter}</GridItem>
        <GridItem>
          <Center>
            <Button w="100%" colorScheme="yellow" onClick={plusItem}>
              <span className="itemCountSymbol">+</span>
            </Button>
          </Center>
        </GridItem>
        <GridItem colSpan={3}>
          <Button w="100%" colorScheme="green" className="addToCartBtn" onClick={()=>onAdd(counter)}>
            Añadir al carrito
          </Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default ItemCount;