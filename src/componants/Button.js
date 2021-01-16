import React from "react";

const Button = (props) => {
  const { title } = props;
  return <button className="cart-button">{title}</button>;
};

export default Button;
