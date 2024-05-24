import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [items, setItems] = useState([]);
  async function getFruits() {
    let url = "http://localhost:1130/data/fruits";
    let method = {
      method: "GET",
    };
    let response = await fetch(url, method);
    let data = await response.json();
    setData(data);
    setItems(data.items);
  }

  async function getVegetables() {
    let url = "http://localhost:1130/data/vegetables";
    let method = {
      method: "GET",
    };
    let response = await fetch(url, method);
    let data = await response.json();
    setData(data);
    setItems(data.items);
  }
  async function getAnimals() {
    let url = "http://localhost:1130/data/animals";
    let method = {
      method: "GET",
    };
    let response = await fetch(url, method);
    let data = await response.json();

    setData(data);
    setItems(data.items);
  }

  useEffect(() => {
    getFruits();
  }, []);
  return (
    <div className="App">
      <button onClick={getFruits}>Get Fruits</button>
      <button onClick={getVegetables}>Get Vegetables</button>
      <button onClick={getAnimals}>Get Animals</button>
      <div className="items">
        <h1>{data.type}</h1>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
