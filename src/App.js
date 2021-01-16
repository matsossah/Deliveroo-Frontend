import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Cover from "./componants/Cover";
import Category from "./componants/Category";

function App() {
  const [infos, setInfos] = useState({});
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <img src="./assets/Deliveroo-Logo.jpg" alt="logo" />
      </header>
      <div>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <Cover
              title={infos.restaurant.name}
              text={infos.restaurant.description}
              imageURL="./assets/header-image.jpg"
            />
            <div className="content">
              {infos.categories.map((category, index) => (
                <Category
                  title={category.name}
                  meals={category.meals}
                  key={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
