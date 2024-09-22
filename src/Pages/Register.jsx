import React, { useState } from "react";
import "./CSS/Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faAddressCard,
  faMapMarkerAlt,
  faCity,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    state: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  const stateNames = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <div className="registerContainer">
      <div className="formContainer">
        <h1 className="formTitle">Horizon-Decor</h1>
        <div className="inputGroup">
          <FontAwesomeIcon icon={faUser} className="inputIcon" />
          <input
            type="text"
            placeholder="First Name"
            className="inputField"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputGroup">
          <FontAwesomeIcon icon={faUser} className="inputIcon" />
          <input
            type="text"
            placeholder="Last Name"
            className="inputField"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputGroup">
          <FontAwesomeIcon icon={faEnvelope} className="inputIcon" />
          <input
            type="email"
            placeholder="Email Address"
            className="inputField"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputGroup">
          <FontAwesomeIcon icon={faAddressCard} className="inputIcon" />
          <input
            type="text"
            placeholder="Full Address"
            className="inputField"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputGroup">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="inputIcon" />
          <select
            id="state"
            className="inputField"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            {stateNames.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="inputGroup">
          <FontAwesomeIcon icon={faCity} className="inputIcon" />
          <input
            type="text"
            placeholder="City"
            className="inputField"
            id="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputGroup">
          <FontAwesomeIcon icon={faLock} className="inputIcon" />
          <input
            type="password"
            placeholder="New Password"
            className="inputField"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputGroup">
          <FontAwesomeIcon icon={faLock} className="inputIcon" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="inputField"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submitButton" onClick={handleSubmit}>
          Submit
        </button>
        <div className="footer">
          <h1 className="footerText">Already have an account?</h1>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <p className="footerLink">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
