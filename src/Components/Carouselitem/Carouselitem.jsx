import React from "react";
import "./Carouselitem.css";

const Carouselitem = (props) => {
  console.log(props);
  return (

    <div className="item-outercontainer">
      <div className="container">
        <div className="content">
          <div className="info">
            <h1>{props.title}</h1>
            <p>
             {props.description}
            </p>
            <button>Get Products</button>
          </div>

          <img src={props.icon} alt="" />
        </div>
      </div>
      </div>

  );
};

export default Carouselitem;


