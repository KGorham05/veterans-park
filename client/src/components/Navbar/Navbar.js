import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = props => (
    <div id="navb">
        <Link className="justify-vertical-center" to="/">VMP</Link>
        <Link className="justify-vertical-center">Story</Link>
        <Link className="justify-vertical-center">Letters</Link>
        <Link className="justify-vertical-center">Gallery</Link> 
        <Link className="justify-vertical-center">Press</Link>
        <Link className="justify-vertical-center">Support</Link>
        <Link className="justify-vertical-center">Visit</Link>        
        <Link className="justify-vertical-center">Vista, CA</Link>
    </div>

);

export default Navbar;