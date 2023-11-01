import { useState } from "react";
import Header from "./Components/Layout/Header";
import MealSummary from "./Components/Meals/MealSummary";
import MenuItems from "./Components/Meals/MenuItems";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MealSummary />
      <MenuItems onShowCart={showCartHandler} />
    </CartProvider>
  );
}

export default App;
