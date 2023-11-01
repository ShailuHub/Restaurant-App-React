import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";

function QuantityForm(props) {
  const [quantity, setQuantity] = useState(props.quantity);
  const [isIncrementDisabled, setIsIncrementDisabled] = useState(quantity >= 5);
  const [isDecrementDisabled, setIsDecrementDisabled] = useState(quantity <= 1);
  const [buttonText, setButtonText] = useState({
    text: "Add to Cart",
    changeBtnState: false,
    type: "submit",
  });
  const enteredQuantityRef = useRef();
  useEffect(() => {
    // This code runs when the component is initially rendered
    setIsIncrementDisabled(quantity >= 5);
    setIsDecrementDisabled(quantity <= 1);
  }, [quantity]);

  const quantityButtonHandler = (event) => {
    if (event.target.name === "INCREMENT" && quantity < 5) {
      setQuantity(quantity + 1);
    } else if (event.target.name === "DECREMENT" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (event.target.name === "INCREMENT" && props.onAdd) {
      props.onAdd();
    }
    if (event.target.name === "DECREMENT" && props.onRemove) {
      props.onRemove();
    }
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    const imageUrl = props.allMealRef.imageRef.current.src;
    const price = +props.allMealRef.priceRef.current.innerHTML.split(" ")[1];
    const mealName = props.allMealRef.mealNameRef.current.innerHTML;
    const quantity = +enteredQuantityRef.current.value;
    const selectedMeals = {
      imageUrl: imageUrl,
      price: price,
      mealName: mealName,
      quantity: quantity,
    };

    props.onAddToCart(selectedMeals);
    setButtonText({
      text: "Show cart",
      changeBtnState: true,
      type: "button",
    });
    setIsIncrementDisabled((previousState) => !previousState);
    setIsDecrementDisabled((previousState) => !previousState);
  };
  return (
    <React.Fragment>
      <form className="menu-order-form" onSubmit={handleFormSubmission}>
        <div className="form-input">
          <label htmlFor="add-quantity">Qty</label>
          <button
            type="button"
            onClick={quantityButtonHandler}
            name="DECREMENT"
            disabled={isDecrementDisabled}
          >
            -
          </button>
          <input
            ref={enteredQuantityRef}
            type="text"
            name="add-quantity"
            id="add-quantity"
            readOnly
            value={quantity}
          />
          <button
            type="button"
            onClick={quantityButtonHandler}
            name="INCREMENT"
            disabled={isIncrementDisabled}
          >
            +
          </button>
        </div>
        {props.buttonRequired ? (
          <Button buttonState={buttonText} onClick={props.onShowCart} />
        ) : (
          ""
        )}
      </form>
    </React.Fragment>
  );
}

export default QuantityForm;
