import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [infos, setInfos] = useState({});
  const fetchData = async () => {
    try {
      // const response = await axios.get(
      //   "https://deliveroo-backend28.herokuapp.com/"
      // );
      const response = await axios.get("http://localhost:3100/");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>HELLO</h1>
    </div>
  );
}

export default App;
