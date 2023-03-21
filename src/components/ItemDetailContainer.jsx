// import React from "react";
// import ItemDetail from "./ItemDetail";
// import { useState, useEffect } from "react";
// import { doc, getDoc, getFirestore } from "firebase/firestore";
// import { useParams } from "react-router-dom";

// const ItemDetailContainer = () => {
//   const { id } = useParams();

//   const [product, setProduct] = useState({});

//   useEffect(() => {

//     const db = getFirestore();

//     const item = doc(db, "remerasstore", `${id}`);
//     console.log(getDoc(item));
//     getDoc(item)
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           setProduct(snapshot.find((item) => item.id === id));
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   useEffect(() => {
//     async function getProductsList() {
//       try {
//         const response = await fetch("/src/data.json");
//         const productList = await response.json();
//         setProduct(productList.find((item) => item.id === id));
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getProductsList();
//   }, [id]);


//   return (
//     <>
//       <ItemDetail product={product} />
//     </>
//   );
// };

// export default ItemDetailContainer;


import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const db = getFirestore();

    const item = doc(db, "remeras", id);
    getDoc(item)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  
  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};


export default ItemDetailContainer;
