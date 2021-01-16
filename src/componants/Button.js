import React from "react";

const Button = (props) => {
  const { title, handleClick } = props;
  return (
    <button className="cart-button" onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
