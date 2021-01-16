import React from "react";

const Meal = (props) => {
  const { title, description, price, picture } = props;
  return (
    <div className="meal-card">
      <div className="meal-content">
        <p className="meal-title">{title}</p>
        <p className="meal-description">{description}</p>
        <p className="meal-price">{price}</p>
      </div>
      <img src={picture} alt="" />
    </div>
  );
};

export default Meal;
