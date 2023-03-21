import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ShoppingCartContext from "./context/ShoppingCartContext";

const App = () => {
  return (
    <>
      <ShoppingCartContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Welcome welcome="Bienvenidos a Remeras Store" />}
            />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/catalog" element={<ItemListContainer />} />
            <Route
              exact
              path="/category/:category"
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </ShoppingCartContext>
    </>
  );
};

export default App;