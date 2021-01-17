import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Cover from "./componants/Cover";
import Category from "./componants/Category";
import Cart from "./componants/Cart";

function App() {
  const [infos, setInfos] = useState({});
  const [cart, setCart] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      // const response = await axios.get(
      //   "https://deliveroo-backend28.herokuapp.com/"
      // );
      const response = await axios.get("http://localhost:3100/");
      setInfos(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (id) => {
    let newCart = [...cart];

    const itemAlreadyInCart = cart.find((cartItem) => cartItem.id === id);

    if (itemAlreadyInCart) {
      const index = cart.indexOf(itemAlreadyInCart);
      newCart[index].quantity += 1;
      setCart(newCart);
    } else {
      let mealSelected = null;
      infos.categories.forEach((category) => {
        category.meals.forEach((meal) => {
          if (meal.id === id) {
            mealSelected = meal;
          }
        });
      });

      newCart.push({
        id: mealSelected.id,
        price: mealSelected.price,
        name: mealSelected.title,
        quantity: 1,
      });

      setCart(newCart);
    }
  };

  const removeFromCart = (id) => {
    let newCart = [...cart];

    const mealToDelete = cart.find((cartItem) => cartItem.id === id);
    const index = cart.indexOf(mealToDelete);

    newCart[index].quantity -= 1;

    const notZeroQuantityCart = newCart.filter(
      (cartItem) => cartItem.quantity > 0
    );
    setCart(notZeroQuantityCart);

    // for (let i = 0; i < newCart.length; i++) {
    //   if (newCart[i].title === props.title) {
    //     newCart[i].quantity = newCart[i].quantity - 1;
    //     if (newCart[i].quantity === 0) {
    //       newCart.splice(i, 1);
    //     }
    //     setCart(newCart);
    //     return;
    //   }
    // }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="header-bloc">
        <div className="container">
          <header>
            <img src="./assets/Deliveroo-Logo.jpg" alt="logo" />
          </header>
        </div>
      </div>
      <div>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <div className="cover-bloc">
              <div className="container">
                <Cover
                  title={infos.restaurant.name}
                  text={infos.restaurant.description}
                  imageURL="./assets/header-image.jpg"
                />
              </div>
            </div>
            <div className="container content-bloc">
              <div className="content">
                {infos.categories.map((category, index) => (
                  <Category
                    title={category.name}
                    meals={category.meals}
                    key={index}
                    addToCart={addToCart}
                  />
                ))}
              </div>
              <div className="cart-bloc">
                <Cart
                  cart={cart}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
