import React from "react";
import "./App.css";
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import Itemdetail from "./Itemdetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Shop" exact component={Shop} />
        <Route path="/Shop/:id" exact component={Itemdetail} />
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;
