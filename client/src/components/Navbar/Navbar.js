import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="container-fluid" id="navbar">
        <div className="row">
            <div className="col-md-3">
                <div className="text-center">
                    <p>Home</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="text-center">
                    <p>About</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="text-center">
                    <p>Statue</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="text-center">
                    <p>Letters</p>
                </div>
            </div>
        </div>
    </div>

);

export default Navbar;