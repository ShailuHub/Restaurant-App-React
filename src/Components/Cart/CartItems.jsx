import React from "react";
import QuantityForm from "../UI/QuantityForm";
import "./CartItems.css";

const CartItems = (props) => {
  const { id, mealName, imageUrl, price, quantity } = props.details;
  return (
    <React.Fragment>
      <div className="cart-list-container">
        <figure>
          <img src={imageUrl} alt="food item images" />
        </figure>
        <div className="cart-list-form">
          <div className="cart-list-name">
            <p>{mealName}</p>
            <p>{price}</p>
          </div>
          <div className="cart-list-form-input">
            <QuantityForm quantity={quantity} />
            <button className="remove-item-btn">remove</button>
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default CartItems;
