import React from "react";
import Meal from "./Meal";

const Category = (props) => {
  const { title, meals, addToCart } = props;
  return (
    <div>
      <h2>{title}</h2>
      <div className="meal-list">
        {meals.map((meal, index) => (
          <Meal
            key={meal.id}
            title={meal.title}
            description={
              meal.description.length < 45
                ? ""
                : meal.description.substring(0, 45) + "..."
            }
            price={meal.price}
            picture={meal.picture}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
