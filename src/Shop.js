import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Shop() {
  const [items, setitems] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        console.log(res);
        setitems(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/shop/${item.id}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Shop;
