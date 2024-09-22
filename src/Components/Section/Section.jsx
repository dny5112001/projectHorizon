import React, { useState } from "react";
import "./Section.css";
import { Link } from "react-router-dom";
import sample1 from "../Assets/ExlusiveTiles1.webp";
import category from "../Assets/categorydetails";

const Section = () => {
  return (
    <div className="section">
      <ul className="section__list">
        <li>
          <Link
            to="/product-category/tiles"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <p>Tiles</p>{" "}
          </Link>
          <ul className="hover-menu">
            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>

            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>

            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>

            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>
            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>
            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>
          </ul>
        </li>

        <li>
          <Link
            to="/product-category/bathware"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <p>Bathware</p>
          </Link>
          <ul className="hover-menu">
            <Link
              to="/product-category/bathware/water-closets"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li>
                <img src={category[1].category[0].img} alt="" />
                <p>Water Closets</p>
              </li>
            </Link>

            <Link
              to="/product-category/bathware/washbasins"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li>
                <img src={category[1].category[1].img} alt="" />
                <p>Wash Basins</p>
              </li>
            </Link>

            <Link
              to="/product-category/bathware/Cisterns"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li>
                <img src={category[1].category[2].img} alt="" />
                <p>Cisterns</p>
              </li>
            </Link>

            <Link
              to="/product-category/bathware/combo-pack"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li>
                <img src={category[1].category[3].img} alt="" />
                <p>Combo Pack</p>
              </li>
            </Link>

            <Link
              to="/product-category/bathware/urinals"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li>
                <img src={category[1].category[4].img} alt="" />
                <p>Urinals & Squatting pans</p>
              </li>
            </Link>
          </ul>
        </li>

        <li>
          <Link
            to="/product-category/bathware"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <p>Sanitary Ware</p>
          </Link>

          <ul className="hover-menu">
            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>

            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>

            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>

            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>
            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>
            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>
          </ul>
        </li>

        <li>
          <Link
            to="/product-category/bathware"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <p>Construction</p>
          </Link>

          <ul className="hover-menu">
            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>

            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>

            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>

            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>
            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>
            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>
          </ul>
        </li>

        <li>
          <Link
            to="/product-category/bathware"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <p>Light & Fittings</p>
          </Link>
          <ul className="hover-menu">
            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>

            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>

            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>

            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>
            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>
            <li>
              <img src={sample1} alt="" />
              <p>Tiles</p>
            </li>
          </ul>
        </li>
      </ul>

      <div className="additional">
        <Link to="/Builder" style={{ textDecoration: "none", color: "#000" }}>
          <button style={{ color: "black" }}>Builder</button>
        </Link>
        <Link
          to="/wholesaler"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <button style={{ color: "black", width: "200px" }}>
            WholeSaler/Retailer
          </button>
        </Link>
        <p>More</p>
      </div>
    </div>
  );
};

export default Section;
