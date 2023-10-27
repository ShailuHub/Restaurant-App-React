import React from "react";
import Header from "./Components/Layout/Header";
import MealSummary from "./Components/Meals/MealSummary";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MealSummary />
    </React.Fragment>
  );
}

export default App;
