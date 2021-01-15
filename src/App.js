import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

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
      {isLoading ? <h1>Loading...</h1> : <h1>{infos.restaurant.name}</h1>}
    </div>
  );
}

export default App;
