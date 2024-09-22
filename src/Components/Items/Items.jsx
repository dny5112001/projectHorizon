import React from "react";
import "./Items.css";
// import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="product-item">
      <img onClick={window.scrollTo(0, 0)} src={props.img} alt="" />
      <p>{props.type}</p>
    </div>
  );
};

export default Item;
