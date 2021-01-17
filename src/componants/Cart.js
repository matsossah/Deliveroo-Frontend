import React from "react";
import Button from "./Button";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cart, addToCart, removeFromCart } = props;
  const handleClick = () => {
    alert("Valideyyyy");
  };
  return (
    <div className="cart">
      <Button title="Valider mon panier" handleClick={handleClick} />
      {cart.map((cartItem, index) => (
        <CartItem
          title={cartItem.title}
          price={cartItem.price}
          quantity={cartItem.quantity}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          key={index}
        />
      ))}
    </div>
  );
};

export default Cart;
