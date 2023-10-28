import React, { useCallback, useState } from "react";
import Header from "./Components/Layout/Header";
import MealSummary from "./Components/Meals/MealSummary";
import MenuItems from "./Components/Meals/MenuItems";
import Cart from "./Components/Cart/Cart";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  return (
    <React.Fragment>
      {isCartShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MealSummary />
      <MenuItems />
    </React.Fragment>
  );
}

export default App;
