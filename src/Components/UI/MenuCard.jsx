import React, { useRef } from "react";
import "./MenuCard.css";
import QuantityForm from "./QuantityForm";

const MenuCard = (props) => {
  const imageRef = useRef();
  const priceRef = useRef();
  const mealNameRef = useRef();
  const { mealName, about, description, imageUrl, orderNo, price, quantity } =
    props.details;
  const allMealRef = {
    imageRef: imageRef,
    priceRef: priceRef,
    mealNameRef: mealNameRef,
  };
  return (
    <React.Fragment>
      <div className="menu-container">
        <figure>
          <img ref={imageRef} src={imageUrl} alt="menu item image" />
        </figure>
        <div className="menu-content">
          <p ref={mealNameRef}>{mealName}</p>
          <p>{about}</p>
        </div>
        <div className="menu-description">
          <p>{description}</p>
        </div>
        <div className="menu-price">
          <p>ORDER NO: {orderNo}</p>
          <p ref={priceRef}>Rs. {price}</p>
        </div>
        <QuantityForm
          buttonRequired={true}
          quantity={quantity || 1}
          onShowCart={props.onShowCart}
          onAddToCart={props.onAddToCart}
          allMealRef={allMealRef}
        />
      </div>
    </React.Fragment>
  );
};

export default MenuCard;
