import { useContext } from "react";

import Modal from "../UI/Modal";
import "./Cart.css";
import CartItems from "./CartItems";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  let totalPrice = 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.updateQuantity(id);
  };
  const cartItemDeleteHandler = (id) => {
    cartCtx.deleteItem(id);
  };

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className="cart-container">
        <p>
          Your <span>Items</span>{" "}
          <span className="material-symbols-outlined cart-icon">
            local_mall
          </span>
          <button onClick={props.onCloseCart}>X</button>
        </p>
        <div className="cart-item-list-container">
          {cartCtx.items.map((item, idx) => {
            totalPrice += item.quantity * item.price;
            return (
              <CartItems
                key={idx}
                details={item}
                onAdd={cartItemAddHandler.bind(null, item)}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onDelete={cartItemDeleteHandler.bind(null, item.id)}
              />
            );
          })}
        </div>
        <div className="cart-total-price">
          <span>Total</span>
          <span>Rs. {cartCtx.totalPrice}</span>
        </div>
        <button className="place-order-btn">place order</button>
      </div>
    </Modal>
  );
};

export default Cart;
