  import React from "react";
  import "./Navbar.css";
  import logo from "../Assets/horizon logo.png";
  import cart from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";


  const Navbar = () => {
    return (
      <div className="nav">


        <div className="logo">
          <Link to='/'><img src={logo} alt="" /></Link>
        </div>

        <div className="search">
          <input type="text" placeholder="Search products .." />
        </div>

        <div className="menu">
        <Link to='/about'  style={{textDecoration:'none',color:"#000"}}><p>About us</p></Link>
          <Link to='/contact' style={{textDecoration:'none',color:"#000"}}><p>Contact Us</p></Link>
        </div>

        <div className="cart">
         <Link to='/register' style={{textDecoration:'none',color:"#000"}}> <button>Register</button></Link>
          <Link to='/cart' style={{textDecoration:'none',color:"#000"}}><img src={cart} alt="" /></Link>
        </div>


      </div>
    );
  };

  export default Navbar;
