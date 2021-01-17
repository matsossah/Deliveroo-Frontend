import React from "react";
import Counter from "./Counter";

const CartItem = (props) => {
  const { title, price } = props;

  return (
    <div className="cart-item">
      <div className="cart-item-counter">
        <Counter {...props} />
      </div>
      <p className="cart-item-title">{title}</p>
      <p className="cart-item-price">{Number(price)}€</p>
    </div>
  );
};

export default CartItem;
