import React from "react";

const Counter = (props) => {
  const { title, price, quantity, cart, addToCart, removeFromCart } = props;
  console.log(quantity);
  console.log(title);

  return (
    <div>
      <button
        onClick={() => {
          removeFromCart(props);
        }}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => {
          addToCart(props);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
