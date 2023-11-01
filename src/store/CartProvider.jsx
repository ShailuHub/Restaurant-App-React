import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD-TO-CART") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updateItem;
    let updateItems;
    let updatedPrice =
      state.totalPrice + action.item.quantity * action.item.price;
    if (existingCartItem) {
      updateItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }
    return {
      items: updateItems,
      totalPrice: updatedPrice,
    };
  }

  if (action.type === "REMOVE-FROM-CART") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedPrice = state.totalPrice - existingCartItem.price;
    let updateItems;
    let updateItem;
    if (existingCartItem) {
      updateItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem;
    }
    return {
      items: updateItems,
      totalPrice: updatedPrice,
    };
  }

  if (action.type === "DELETE-CART") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedPrice =
      state.totalPrice - existingCartItem.quantity * existingCartItem.price;
    const updateItems = state.items.filter((item) => {
      return action.id !== item.id;
    });
    console.log(updateItems);
    return {
      items: updateItems,
      totalPrice: updatedPrice,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD-TO-CART",
      item: item,
    });
  };
  const updateQuantityCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE-FROM-CART",
      id: id,
    });
  };

  const deleteItemHandler = (id) => {
    dispatchCartAction({
      type: "DELETE-CART",
      id: id,
    });
  };
  const contextValue = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    updateQuantity: updateQuantityCartHandler,
    deleteItem: deleteItemHandler,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
