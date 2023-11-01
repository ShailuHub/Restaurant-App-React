import React from "react";
import QuantityForm from "../UI/QuantityForm";
import "./CartItems.css";

const CartItems = (props) => {
  const { id, mealName, imageUrl, price, quantity } = props.details;
  console.log(quantity);
  return (
    <React.Fragment>
      <div className="cart-list-container">
        <figure>
          <img src={imageUrl} alt="food item images" />
        </figure>
        <div className="cart-list-form">
          <div className="cart-list-name">
            <p>{mealName}</p>
            <p>Rs. {price}</p>
          </div>
          <div className="cart-list-form-input">
            <QuantityForm
              quantity={quantity}
              onAdd={props.onAdd}
              onRemove={props.onRemove}
            />
            <button className="remove-item-btn" onClick={props.onDelete}>
              delete
            </button>
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default CartItems;
