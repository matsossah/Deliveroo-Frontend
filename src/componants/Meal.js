import React from "react";

const Meal = (props) => {
  const { title, description, price, picture } = props;
  return (
    <div className="meal-card">
      <div className="meal-content">
        <p className="meal-title">{title}</p>
        <p className="meal-description">{description}</p>
        <p className="meal-price">{Number(price)}€</p>
      </div>
      <div className="meal-picture">
        {picture && <img src={picture} alt="" />}
      </div>
    </div>
  );
};

export default Meal;
