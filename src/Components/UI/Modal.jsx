import { createPortal } from "react-dom";
import React from "react";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClick}></div>;
};
const ModalOverlay = (props) => {
  return (
    <React.Fragment>
      <div className="modal">{props.children}</div>
    </React.Fragment>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {createPortal(<Backdrop onClick={props.onCloseCart} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
