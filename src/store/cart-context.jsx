import React from "react";

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItem: (item) => {},
  updateQuantity: (id) => {},
  deleteItem: (id) => {},
});

export default CartContext;
