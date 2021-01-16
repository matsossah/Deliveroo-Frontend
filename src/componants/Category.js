import React from "react";
import Meal from "./Meal";

const Category = (props) => {
  const { title, meals } = props;
  return (
    <div className="category-bloc">
      <h2>{title}</h2>
      <div className="meal-list">
        {meals.map((meal, index) => (
          <Meal
            key={meal.id}
            title={meal.title}
            description={meal.description.substring(0, 50) + "..."}
            price={meal.price}
            picture={meal.picture}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
