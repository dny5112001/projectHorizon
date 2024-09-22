import React from "react";
import "./CartContent.css";
import Cart_items from "../cart_items/Cart_items";

const CartContent = () => {
  return (
    <div>
      <div className="cartcontent-container">
        <div className="container-content-1">
          <p>Shopping Cart (10) items </p>
          <div>
            <Cart_items />
            <Cart_items />
          </div>
        </div>
        <div className="container-content-2">
          <div className="payment_button">Proceed to pay</div>
          <div className="order_summary">
            <p style={{fontWeight:700 ,fontSize:18}}>Order Summary (6) items</p>
            <p>Payable Amount : 5000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
