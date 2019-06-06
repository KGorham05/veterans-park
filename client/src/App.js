import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Plaque from "./components/Plaque";
import Home from "./Pages/Home";
import "./App.css";

function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default AppRouter;