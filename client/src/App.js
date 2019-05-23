import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar"

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
        
        <Carousel/>
        <Navbar/>
        
        {/* <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} /> */}
      </div>
    </Router>
  );
}

export default AppRouter;