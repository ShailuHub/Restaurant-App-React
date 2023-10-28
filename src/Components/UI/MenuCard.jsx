import React from "react";
import "./MenuCard.css";
import QuantityForm from "./QuantityForm";

const MenuCard = (props) => {
  const { mealName, about, description, imageUrl, orderNo, price } =
    props.details;
  return (
    <React.Fragment>
      <div className="menu-container">
        <figure>
          <img src={imageUrl} alt="menu item image" />
        </figure>
        <div className="menu-content">
          <p>{mealName}</p>
          <p>{about}</p>
        </div>
        <div className="menu-description">
          <p>{description}</p>
        </div>
        <div className="menu-price">
          <p>ORDER NO: {orderNo}</p>
          <p>Rs. {price}</p>
        </div>
        <QuantityForm buttonRequired={true} quantity={0} />
      </div>
    </React.Fragment>
  );
};

export default MenuCard;
