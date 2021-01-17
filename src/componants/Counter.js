import React from "react";

const Counter = (props) => {
  const { id, quantity, addToCart, removeFromCart } = props;

  return (
    <div>
      <button
        onClick={() => {
          removeFromCart(id);
        }}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => {
          addToCart(id);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
