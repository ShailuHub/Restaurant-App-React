import React from "react";
import "./MealSummary.css";

const MealSummary = () => {
  return (
    <React.Fragment>
      <main>
        <div className="section-meal-container container">
          <div className="section-meal-summary">
            <h1 className="section-meal-subheading">
              <span>Delicious</span> food,
            </h1>
            <h1 className="section-meal-subheading">
              <span>Delivered</span> to you
            </h1>
            <p className="section-meal-heading">
              Choose your favourite meal from our broad selection of available
              meals and enjoy delicious lunch or dinner at home.
            </p>
            <p className="section-meal-heading">
              All our meals are cooked with high-quality ingredients,
              just-in-time and of course by experienced chefs!
            </p>
          </div>
          <div className="section-meal-image">
            <figure>
              <img src="./assests/delievry-boy.png" alt="meal section image" />
            </figure>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MealSummary;
