import React from "react";
import "./Plaque.css";

const Plaque = props => (
    <div className="container">
        <div className="row">
            <h1 className="col-md-12 title text-center">Veterans Memorial Park</h1>
        </div>
        <div className="row">
            <p className="p-text">
                Between the years 1965 and 1975 more than 2.5 Million U.S. military personnel served within the borders of South Vietnam. Over 58,000 American soldiers lost their lives, 2,000 soldiers were recorded as missing in action, and more than 300,000 soldiers were injured. Many returned home and never fully recovered from the trauma of war.
            </p>
            <p className="p-text">
                We give our thanks and dedicate this park to all who served and to their families who checked their mailbox daily, hoping for reassurance that their loved ones were alive and well. 
            </p>
            <p className="p-text">
                On May 15, 1969, our family was forever changed by the knock on the front door that brought the news that our 19 year old brother Ernie, had died of wounds received while assisting a fellow soldier. That knock began an unending journey of grief, especially for our parents, Carl and Mary Pinamonti. This park is a step on that journey. A place for quiet reflection, and a place to celebrate the strength and love of family.
            </p>
            <p className="p-text">
                We gratefully acknowledge the City of Vista, Affirmed Housing, and the generosity of many private donors whose support helped make this park a reality. 
            </p>


        </div>
    </div>


);

export default Plaque;