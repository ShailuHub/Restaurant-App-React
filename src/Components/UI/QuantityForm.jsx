import React from "react";
import Button from "./Button";

function QuantityForm(props) {
  return (
    <React.Fragment>
      <form className="menu-order-form">
        <div className="form-input">
          <label htmlFor="add-quantity">Qty</label>
          <button type="button">-</button>
          <input
            type="text"
            name="add-quantity"
            id="add-quantity"
            readOnly
            value={props.quantity}
          />
          <button type="button">+</button>
        </div>
        {props.buttonRequired ? <Button /> : ""}
      </form>
    </React.Fragment>
  );
}

export default QuantityForm;
