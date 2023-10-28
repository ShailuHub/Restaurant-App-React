import React from "react";
import Logo from "../UI/Logo";
import "./Header.css";
import CartButton from "../Cart/CartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="section-navbar">
        <div className="container">
          <div className="navbar-brand">
            <Logo />
          </div>
          {/* <nav className="navbar">nav item</nav> */}
          <div className="navbar-cart">
            <CartButton onClick={props.onShowCart} />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
