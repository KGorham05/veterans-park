import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = props => (
    <div id="navb">
        <Link className="justify-vertical-center" to="/">VMP</Link>
        <Link className="justify-vertical-center" to="/history">Park History</Link>
        <Link className="justify-vertical-center" to="/letters">Letters</Link>
        <Link className="justify-vertical-center" to="/gallery">Gallery</Link> 
        <Link className="justify-vertical-center" to="/press">Press</Link>
        <Link className="justify-vertical-center" to="/support">Support</Link>
        <Link className="justify-vertical-center" to="/visit">Visit</Link>        
        <Link className="justify-vertical-center" to="/visit">Vista, CA</Link>
    </div>

);

export default Navbar;