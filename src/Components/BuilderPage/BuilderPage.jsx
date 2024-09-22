import React, { useState } from "react";
import "./BuilderPage.css";
import builder from "../Assets/builder.jpg";
import { FaCheckCircle, FaShippingFast, FaCreditCard } from "react-icons/fa";
import br1 from "../Assets/br1.jpg";
import br2 from "../Assets/br2.jpg";
import br3 from "../Assets/br3.webp";
import br4 from "../Assets/br4.jpg";
import br5 from "../Assets/br5.jpg";
import br6 from "../Assets/br6.webp";
import br7 from "../Assets/br7.jpg";
import br8 from "../Assets/br8.jpg";
import br9 from "../Assets/br9.jpg";
import br10 from "../Assets/br10.jpg";
import br11 from "../Assets/br11.jpg";
import build1 from "../Assets/build1.jpg";
import build2 from "../Assets/build2.jpg";
import build3 from "../Assets/build3.jpg";
import build4 from "../Assets/build4.jpg";
import build5 from "../Assets/build5.jpg";

const BuilderPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formType, setFormType] = useState("");

  const handleButtonClick = (type) => {
    setFormType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormType("");
  };

  return (
    <div className="page-container">
      <div className="main-content">
        <div className="left-content">
          <h1>Build with us</h1>
          <p>All your needs in just one place</p>
        </div>
        <div className="right-content">
          <img src={builder} alt="Building Image" />
        </div>
      </div>
      <div className="icon-section">
        <div className="icon-container">
          <FaCheckCircle className="icon" />
          <p>Quality Products</p>
        </div>
        <div className="icon-container">
          <FaShippingFast className="icon" />
          <p>Assured Delivery</p>
        </div>
        <div className="icon-container">
          <FaCreditCard className="icon" />
          <p>Flexible Payment Cycles</p>
        </div>
      </div>

      <div className="deal-section">
        <h2>Get your best deal</h2>
        <button
          className="deal-button"
          onClick={() => handleButtonClick("Full Project Quotation")}
        >
          Full Project Quotation
        </button>
        <button
          className="deal-button"
          onClick={() => handleButtonClick("Request Quotations")}
        >
          Request Quotations
        </button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            {formType === "Full Project Quotation" && (
              <form>
                <h2>Get the Best Deal for your Project</h2>
                <label>
                  Project Name:
                  <input type="text" name="projectName" required />
                </label>
                <div className="dropdown-container">
                  <label>
                    City:
                    <select name="city" required>
                      <option value="City1">City1</option>
                      <option value="City2">City2</option>
                      <option value="City3">City3</option>
                    </select>
                  </label>
                  <label>
                    State:
                    <select name="state" required>
                      <option value="State1">State1</option>
                      <option value="State2">State2</option>
                      <option value="State3">State3</option>
                    </select>
                  </label>
                </div>
                <label>
                  RERA Number:
                  <input type="text" name="reraNumber" required />
                </label>
                <label>
                  GST Number:
                  <input type="text" name="gstNumber" required />
                </label>
                <label>
                  Product Type:
                  <select name="productType" required>
                    <option value="ProductType1">Product Type 1</option>
                    <option value="ProductType2">Product Type 2</option>
                    <option value="ProductType3">Product Type 3</option>
                  </select>
                </label>
                <label>
                  Quantity:
                  <input type="number" name="quantity" required />
                </label>
                <button type="submit">Submit</button>
              </form>
            )}
            {formType === "Request Quotations" && (
              <form>
                <h2>Get Price Quotations</h2>
                <label>
                  Product Category:
                  <select name="productCategory" required>
                    <option value="ProductType1">Product Type 1</option>
                    <option value="ProductType2">Product Type 2</option>
                    <option value="ProductType3">Product Type 3</option>
                  </select>
                </label>
                <label>
                  Product Name:
                  <select name="productName" required>
                    <option value="ProductName1">Product Name 1</option>
                    <option value="ProductName2">Product Name 2</option>
                    <option value="ProductName3">Product Name 3</option>
                  </select>
                </label>
                <label>
                  Size and Specifications:
                  <input type="text" name="specifications" required />
                </label>
                <label>
                  Quantity:
                  <input type="number" name="quantity" required />
                </label>
                <button type="submit">Get Quotation</button>
              </form>
            )}
          </div>
        </div>
      )}
      <div className="brand-section">
        <h2>Top Brands</h2>
        <div className="brand-container">
          <div className="brand-box">
            <img src={br1} alt="Brand Logo 1" />
          </div>
          <div className="brand-box">
            <img src={br2} alt="Brand Logo 2" />
          </div>
          <div className="brand-box">
            <img src={br3} alt="Brand Logo 3" />
          </div>
          <div className="brand-box">
            <img src={br4} alt="Brand Logo 4" />
          </div>
          <div className="brand-box">
            <img src={br5} alt="Brand Logo 5" />
          </div>
          <div className="brand-box">
            <img src={br6} alt="Brand Logo 6" />
          </div>
          <div className="brand-box">
            <img src={br7} alt="Brand Logo 7" />
          </div>
          <div className="brand-box">
            <img src={br8} alt="Brand Logo 8" />
          </div>
          <div className="brand-box">
            <img src={br9} alt="Brand Logo 9" />
          </div>
          <div className="brand-box">
            <img src={br10} alt="Brand Logo 10" />
          </div>
          <div className="brand-box">
            <img src={br11} alt="Brand Logo 11" />
          </div>
        </div>
      </div>
      <div className="categorybg">
        <h3>Categories</h3>
        <hr />
        <div className="category">
          <div className="row">
            <div className="image-container">
              <img src={build1} alt="Floor Tiles" />
              <p> Tiles</p>
            </div>
            <div className="image-container">
              <img src={build2} alt="Wall Tiles" />
              <p>Sanitaryware</p>
            </div>
            <div className="image-container">
              <img src={build3} alt="Kitchen Tiles" />
              <p> Bathware & Faucets</p>
            </div>
          </div>
          <div className="row">
            <div className="image-container">
              <img src={build4} alt="Sanitary Tiles" />
              <p>Construction</p>
            </div>
            <div className="image-container">
              <img src={build5} alt="Parking & Outdoor Tiles" />
              <p>Lights and fittings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
