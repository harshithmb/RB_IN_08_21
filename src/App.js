import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/products";
import ProductDetails from "./components/productDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/product/:productid" component={ProductDetails} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
