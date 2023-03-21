// import React from "react";
// import { useEffect, useState } from "react";
// import { collection, getDocs, getFirestore } from "firebase/firestore";
// import ItemList from "./ItemList";
// import { Container, Grid, Heading } from "@chakra-ui/react";
// import { useParams } from "react-router-dom";

// const ItemListContainer = () => {
//   const { category } = useParams();
//   const [products, setProducts] = useState([]);




//   useEffect(() => {
//     const db = getFirestore();

//     const itemsCollection = collection(db, "ortopedicproducts");

//     getDocs(itemsCollection).then((snapshot) => {
//       const docs = snapshot.docs.map((doc) => doc.data());
//       category
//         ? setProducts(docs.filter((product) => product.category === category))
//         : setProducts(docs);
//     });
//   }, [category]);
  




//   useEffect(() => {
//     async function getProducts() {
//       try {
//         const response = await fetch("/src/data.json");
//         const productsList = await response.json();
//         category
//           ? setProducts(
//               productsList.filter((product) => product.category === category)
//             )
//           : setProducts(productsList);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getProducts();
//   }, [category]);


//   return (
//     <>
//       <Container className="productsTitle" centerContent>
//         <Heading>Remeras Disponibles</Heading>
//       </Container>
//       <div className="productListContainer">
//         <Grid templateColumns="repeat(3, 1fr)" gap={6}>
//           <ItemList products={products} />
//         </Grid>
//       </div>
//     </>
//   );
// };

// export default ItemListContainer;









import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemList from "./ItemList";
import { Center, Container, Grid, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "remeras");

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setIsLoading(false);
      category
        ? setProducts(docs.filter((product) => product.category === category))
        : setProducts(docs);
    });
  }, [category]);

  return (
    <>
      <Container className="productsTitle" centerContent>
        <Heading>Nuestros Productos</Heading>
      </Container>
      {isLoading && (
        <Center>
          <Spinner thickness="4px" speed="0.50s" size="xl"/>
        </Center>
      )}
      <div className="productListContainer">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <ItemList products={products} />
        </Grid>
      </div>
    </>
  );
};

export default ItemListContainer;