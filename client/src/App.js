import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import "./App.css";

// function Index() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

function AppRouter() {
  return (
    <Router>
      <div>
        <Navbar/>
      <div className="bod">
        <Carousel/>
      </div>
        
        
      </div>
    </Router>
  );
}

export default AppRouter;