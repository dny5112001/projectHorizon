import React from "react";
import CartContent from "../Components/CartContent/CartContent";
import cart from "../Components/Assets/cart.png";
import './CSS/cart.css'
import { IoLocationSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import CartAddressContent from "../Components/CartAddressContent/CartAddressContent";
import Checkout from "../Components/Checkout/Checkout";

const Cart = () => {
  return (
    <>
      <div className="status_pending">
        <div>
          <img src={cart} alt="" />
        </div>
        <div>
          <IoLocationSharp className="address" />
        </div>
        <div>
          <FaRupeeSign className="payment"/>
        </div>
      </div>
      <CartContent />;
      {/* <CartAddressContent/> */}
      {/* <Checkout /> */}

    </>
  );
};

export default Cart;
