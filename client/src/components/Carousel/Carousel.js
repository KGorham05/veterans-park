import React from "react";
import "./Carousel.css";

const Carousel = props => (
  <div id="carouselControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div class="carousel-img-style">
          <img src="https://s3-media1.fl.yelpcdn.com/bphoto/765nHWRB41qMX7hW3fApXg/o.jpg" className="d-block w-100" alt="fountain at night with statue" />
        </div>
      </div>
      <div className="carousel-item">
        <div class="carousel-img-style">
          <img src="https://s3-media1.fl.yelpcdn.com/bphoto/kjuKX8NQMOXCy0tLb8LMKg/o.jpg" className="d-block w-100" alt="2nd image" />
        </div>
      </div>
      <div className="carousel-item">
        <div class="carousel-img-style">
          <img src="https://s3-media1.fl.yelpcdn.com/bphoto/tR4_HqbwixRrEv8eFGkj8w/o.jpg" className="d-block w-100" alt="3rd image" />
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Carousel;
