import React from "react";

const Counter = (props) => {
  const { quantity, setCart } = props;

  return (
    <div>
      <button>-</button>
      <span>{quantity}</span>
      <button>+</button>
    </div>
  );
};

export default Counter;
