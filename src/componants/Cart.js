import React from "react";
import Button from "./Button.js";

const Cart = (props) => {
  const { cart, setCart } = props;
  const handleClick = () => {
    alert("Valideyyyy");
  };
  return (
    <div className="cart">
      <Button title="Valider mon panier" handleClick={handleClick} />
      {cart.map((cartItem, index) => (
        <p key={index}>{cartItem.title}</p>
      ))}
    </div>
  );
};

export default Cart;
