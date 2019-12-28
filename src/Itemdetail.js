import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Item({ match }) {
  console.log(match);
  const [item, setitem] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${match.params.id}`)
      .then(res => {
        console.log(res);
        setitem(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h1>Item</h1>
      {item.name}
    </div>
  );
}

export default Item;
