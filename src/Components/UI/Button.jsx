import React from "react";
import "./Button.css";
function Button(props) {
  const classes = `btn ${
    props.buttonState.changeBtnState ? "new-button-state" : ""
  }`;
  return (
    <React.Fragment>
      <button
        type={props.buttonState.type}
        className={classes}
        onClick={props.buttonState.type === "button" ? props.onClick : null}
      >
        {props.buttonState.text}
      </button>
    </React.Fragment>
  );
}

export default Button;
