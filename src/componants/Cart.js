import React from "react";
import Button from "./Button";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cart, addToCart, removeFromCart } = props;
  const handleClick = () => {
    alert("LVQM");
  };

  let subTotal = 0;
  let deliveryFees = 2.5;
  cart.forEach(
    (cartItem) => (subTotal += Number(cartItem.price) * cartItem.quantity)
  );
  let total = subTotal + deliveryFees;
  return (
    <div className="cart">
      <Button title="Valider mon panier" handleClick={handleClick} />
      <div className="cart-items">
        {cart.map((cartItem, index) => (
          <CartItem
            id={cartItem.id}
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
      <hr />
      <div className="cart-line">
        <span>Sous-total: </span>
        <span>{subTotal}€</span>
      </div>
      <div className="cart-line">
        <span>Frais de livraison: </span>
        <span>{deliveryFees}€</span>
      </div>
      <div className="cart-line">
        <span>Total: </span>
        <span>{total}€</span>
      </div>
    </div>
  );
};

export default Cart;
