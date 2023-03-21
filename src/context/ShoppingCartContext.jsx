import { createContext, useState } from "react";
export const CartContext = createContext(null);

import React from "react";

const ShoppingCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const isInCart = (id) => {
    return cart.some((prod) => prod.item.id === id);
  };

  const resetCart = () => {
    setCart([]);
    setTotal(0);
    setTotalItems(0);
    setShowForm(false);
  };

  const handleRemoveItem = (id) => {
    const removedItem = cart.find((prod) => prod.item.id === id);
    setTotal(total - removedItem.item.price * removedItem.quantity);
    setTotalItems(totalItems - removedItem.quantity);
    setCart(cart.filter((prod) => prod.item.id !== id));
    Toastify({
      text: "Se elimino el producto del carrito",
      duration: 2000,
      className: "toastAlert",
      offset: {
        x: 0,
        y: 70,
      },
    }).showToast();
    setShowForm(false);
  };

  const handleAddToCart = (product, quantity) => {
    if (isInCart(product.id)) {
      const updatedCart = cart.map((prod) => {
        if (prod.item.id === product.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
      setTotal(total + product.price * quantity);
    } else {
      const newItem = {
        item: product,
        quantity: quantity,
      };
      setCart([...cart, newItem]);
      setTotal(total + newItem.item.price * newItem.quantity);
    }
    setTotalItems(totalItems + quantity);
    Toastify({
      text: `Agregaste ${quantity} "${product.name}" al carrito! 🛒`,
      duration: 2000,
      className: "toastAlert",
      offset: {
        x: 0,
        y: 70,
      },
    }).showToast();
  };

  const handleShowForm = () => {
    setShowForm(true);
  }

  
  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          total,
          totalItems,
          isInCart,
          resetCart,
          handleAddToCart,
          handleRemoveItem,
          showForm,
          handleShowForm,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default ShoppingCartContextProvider;