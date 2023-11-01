import React, { useContext } from "react";
import MenuCard from "../UI/MenuCard";
import "./MenuItems.css";
import CartContext from "../../store/cart-context";

const mealItems = [
  {
    id: "101",
    mealName: "Litti Choka",
    about: "Two pure ghee litti choka make your day or night",
    description:
      "It is famous Bihari reciepe cooked by our 5 star Bihari Chef.",
    imageUrl: "./assests/litti-choka.png",
    orderNo: 101,
    price: 50,
  },
  {
    id: "102",
    mealName: "Hot Samosa",
    about: "Two hot samosa open your brain. Refresh you to back your work.",
    description:
      "It is famous Bihari reciepe cooked by our 5 star Bihari Chef.",
    imageUrl: "./assests/Hot Samosa.png",
    orderNo: 102,
    price: 30,
  },
  {
    id: "103",
    mealName: "Cool Dahi Bada",
    about: "Four pure buffalow milk Dahi Bada cools you ",
    description:
      "It is famous Bihari reciepe cooked by our 5 star Bihari Chef.",
    imageUrl: "./assests/Dahi Bada.png",
    orderNo: 103,
    price: 70,
  },
  {
    id: "104",
    mealName: "Spicy Panipur",
    about: "Six Panipur name is enough to fill your mouth with water",
    description:
      "It is famous Bihari reciepe cooked by our 5 star Bihari Chef.",
    imageUrl: "./assests/Spicy Panipuri.png",
    orderNo: 104,
    price: 60,
  },
  {
    id: "105",
    mealName: "Hot Paratha",
    about: "Two piece pure ghee made Paratha make your food delicious",
    description:
      "It is famous Bihari reciepe cooked by our 5 star Bihari Chef.",
    imageUrl: "./assests/Hot Paratha.png",
    orderNo: 105,
    price: 30,
  },
  {
    id: "106",
    mealName: "Hot Jalebi",
    about: "How can you forget your childhood's special. Enjoy four Jalebi",
    description:
      "It is famous Bihari reciepe cooked by our 5 star Bihari Chef.",
    imageUrl: "./assests/Hot Jalebi.png",
    orderNo: 106,
    price: 20,
  },
];

const MenuItems = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCart = (selectedMeals) => {
    const { mealName, price, quantity, imageUrl } = selectedMeals;
    cartCtx.addItem({
      id: Math.random().toString(),
      mealName: mealName,
      imageUrl: imageUrl,
      price: price,
      quantity: quantity,
    });
  };

  return (
    <React.Fragment>
      <div className="container section-menu-item ">
        <h2 className="section-meal-subheading">
          <span>Our</span> Menu
        </h2>
        <div className="menu-item">
          {mealItems.map((item) => {
            return (
              <MenuCard
                key={item.id}
                details={item}
                onShowCart={props.onShowCart}
                onAddToCart={addToCart}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuItems;
