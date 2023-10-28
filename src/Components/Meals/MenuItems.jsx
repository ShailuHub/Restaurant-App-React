import React from "react";
import MenuCard from "../UI/MenuCard";
import "./MenuItems.css";

const mealItems = [
  {
    id: Math.random().toString(),
    mealName: "Litti Choka",
    about: "Two pure ghee litti choka make your day or night",
    description:
      "It is famous Bihari reciepe cooked by our 5 star Bihari Chef.",
    imageUrl: "./assests/litti-choka.png",
    orderNo: 1,
    price: 50,
  },
  {
    id: Math.random().toString(),
    mealName: "Litti Choka",
    about: "Two pure ghee litti choka make your day or night",
    description:
      "It is famous Bihari reciepe cooked by our 5 star Bihari Chef.",
    imageUrl: "./assests/litti-choka.png",
    orderNo: 1,
    price: 50,
  },
  {
    id: Math.random().toString(),
    mealName: "Litti Choka",
    about: "Two pure ghee litti choka make your day or night",
    description:
      "It is famous Bihari reciepe cooked by our 5 star Bihari Chef.",
    imageUrl: "./assests/litti-choka.png",
    orderNo: 1,
    price: 50,
  },
  {
    id: Math.random().toString(),
    mealName: "Litti Choka",
    about: "Two pure ghee litti choka make your day or night",
    description:
      "It is famous Bihari reciepe cooked by our 5 star Bihari Chef.",
    imageUrl: "./assests/litti-choka.png",
    orderNo: 1,
    price: 50,
  },
  {
    id: Math.random().toString(),
    mealName: "Litti Choka",
    about: "Two pure ghee litti choka make your day or night",
    description:
      "It is famous Bihari reciepe cooked by our 5 star Bihari Chef.",
    imageUrl: "./assests/litti-choka.png",
    orderNo: 1,
    price: 50,
  },
  {
    id: Math.random().toString(),
    mealName: "Litti Choka",
    about: "Two pure ghee litti choka make your day or night",
    description:
      "It is famous Bihari reciepe cooked by our 5 star Bihari Chef.",
    imageUrl: "./assests/litti-choka.png",
    orderNo: 1,
    price: 50,
  },
  {
    id: Math.random().toString(),
    mealName: "Litti Choka",
    about: "Two pure ghee litti choka make your day or night",
    description:
      "It is famous Bihari reciepe cooked by our 5 star Bihari Chef.",
    imageUrl: "./assests/litti-choka.png",
    orderNo: 1,
    price: 50,
  },
  {
    id: Math.random().toString(),
    mealName: "Litti Choka",
    about: "Two pure ghee litti choka make your day or night",
    description:
      "It is famous Bihari reciepe cooked by our 5 star Bihari Chef.",
    imageUrl: "./assests/litti-choka.png",
    orderNo: 1,
    price: 50,
  },
];

const MenuItems = () => {
  return (
    <React.Fragment>
      <div className="container section-menu-item ">
        <h2 className="section-meal-subheading">
          <span>Our</span> Menu
        </h2>
        <div className="menu-item">
          {mealItems.map((item) => {
            return <MenuCard key={item.id} details={item} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuItems;
