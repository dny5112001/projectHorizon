import React from "react";
import "./Categorylanding.css";
import Navbar from "../Navbar/Navbar";
import theme from "../Assets/theme.png";
import tilesbg1 from "../Assets/tilesbg1.webp";
import floorbg from "../Assets/floorbg.png";
import wallbg from "../Assets/wallbg.jpg";
import kitchenbg from "../Assets/kitchenbg.png";
import bathroombg from "../Assets/bathroombg.webp";
import parkingoutdoorbg from "../Assets/parkingoutdoorbg.jpeg";
import marblesandbordersbg from "../Assets/marblesandbordersbg.webp";
import trend1 from "../Assets/trend1.jpeg";
import { Link } from "react-router-dom";

const CategoryLanding = () => {
  return (
    <div className="category-landing">
      <div className="bg-container">
        <div className="bg-image">
          <div className="bg-text">
            <h1>TILES</h1>
            <div className="grey-box">
              <p>
                Premium tiles that are detailed with perfection.
                <br /> Each tile is made using state-of-the-art technology
                making them strong, durable & easy to maintain.
              </p>
            </div>
          </div>
          <img src={tilesbg1} alt="Tiles Background" />
        </div>
      </div>
      <div className="category-background">
        <h3>Categories</h3>
        <hr />
        <div className="category-section">
          <div className="category-row">
            <div className="category-image-container">
              <img src={floorbg} alt="Floor Tiles" />
              <p>Floor Tiles</p>
            </div>
            <div className="category-image-container">
              <img src={wallbg} alt="Wall Tiles" />
              <p>Wall Tiles</p>
            </div>
            <div className="category-image-container">
              <img src={kitchenbg} alt="Kitchen Tiles" />
              <p>Kitchen Tiles</p>
            </div>
            <div className="category-image-container">
              <img src={bathroombg} alt="Sanitary Tiles" />
              <p>Sanitary Tiles</p>
            </div>
          </div>
          <div className="category-row">
            <div className="category-image-container">
              <img src={parkingoutdoorbg} alt="Parking & Outdoor Tiles" />
              <p>Parking & Outdoor Tiles</p>
            </div>
            <div className="category-image-container">
              <img src={marblesandbordersbg} alt="Marbles and Borders" />
              <p>Marbles and Borders</p>
            </div>
          </div>
        </div>
      </div>
      <div className="theme-section">
        <img src={theme} alt="Home Themes" />
        <div className="theme-box">
          <div className="theme-content">
            <h2>Home Themes</h2>
            <p>Brighten up your homes with our Home Themes</p>
            <Link to={"/homethemepage"}>
              <button>Explore Themes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryLanding;
