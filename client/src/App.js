import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Plaque from "./components/Plaque"
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-1">
              <Navbar />
            </div>
            <div className="col-md-11">
              <div className="row">
                <h1>VETERANS MEMORIAL PARK</h1>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <Carousel />
                </div>
                <div className="col-md-5">
                  <Plaque />
                </div>
              </div>

            </div>




          </div>
        </div>



      </div>
    </Router>
  );
}

export default AppRouter;