import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemList from "./ItemList";
import { Container, Grid, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "remeras");

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      category
        ? setProducts(docs.filter((product) => product.category === category))
        : setProducts(docs);
    });
  }, [category]);

  return (
    <>
      <Container className="productsTitle" centerContent>
        <Heading>Remeras Disponibles</Heading>
      </Container>
      <div className="productListContainer">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <ItemList products={products} />
        </Grid>
      </div>
    </>
  );
};

export default ItemListContainer;

