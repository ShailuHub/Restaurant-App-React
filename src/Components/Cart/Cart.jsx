import Modal from "../UI/Modal";
import "./Cart.css";
import CartItems from "./CartItems";

const foodItems = [
  {
    id: Math.random().toString(),
    mealName: "Litti Choka",
    imageUrl: "./assests/litti-choka.png",
    price: 50,
    quantity: 2,
  },
  {
    id: Math.random().toString(),
    mealName: "Litti Choka",
    imageUrl: "./assests/litti-choka.png",
    price: 50,
    quantity: 2,
  },
  {
    id: Math.random().toString(),
    mealName: "Litti Choka",
    imageUrl: "./assests/litti-choka.png",
    price: 50,
    quantity: 2,
  },
];
const Cart = (props) => {
  let totalPrice = 0;
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
        {foodItems.map((item, idx) => {
          totalPrice += item.quantity * item.price;
          return <CartItems key={idx} details={item} />;
        })}
        <div className="cart-total-price">
          <span>Total</span>
          <span>Rs. {totalPrice}</span>
        </div>
        <button className="place-order-btn">place order</button>
      </div>
    </Modal>
  );
};

export default Cart;
