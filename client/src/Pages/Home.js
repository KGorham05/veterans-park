import React from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Plaque from "../components/Plaque";

function Home() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1 px-0">
                        <Navbar />
                    </div>
                    <div className="col-md-11">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 id="title-text">VETERANS MEMORIAL PARK</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <Carousel />
                            </div>
                            <div className="col-md-4">
                                <Plaque />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Home;