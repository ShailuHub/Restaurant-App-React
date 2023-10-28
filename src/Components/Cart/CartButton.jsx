import "./CartButton.css";

const CartButton = (props) => {
  return (
    <button className="cart-btn" onClick={props.onClick}>
      <span className="material-symbols-outlined cart-icon">local_mall</span>
      <span>your cart</span>
      <span>3</span>
    </button>
  );
};

export default CartButton;
