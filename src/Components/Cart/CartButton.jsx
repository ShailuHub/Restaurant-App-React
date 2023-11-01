import CartContext from "../../store/cart-context";
import "./CartButton.css";
import { useContext } from "react";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((total, item) => {
    return (total += item.quantity);
  }, 0);
  return (
    <button className="cart-btn" onClick={props.onClick}>
      <span className="material-symbols-outlined cart-icon">local_mall</span>
      <span>your cart</span>
      <span>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
