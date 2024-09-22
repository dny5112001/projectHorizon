import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div>
      <div className="cartcontent-container">
        <div className="container-content-1">
          <p>Your Order will be delivered at: </p>
          <div>
            <p className="checkout_order_address">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto ipsum officia ea libero cum laborum et, autem nam.
              Distinctio sint obcaecati sit illo magni maiores tenetur
            </p>
          </div>

          <div>
            <div className='deliver'>Checkout</div>
          </div>
        </div>
        <div className="container-content-2">
          <div className="order_summary">
            <p style={{ fontWeight: 700, fontSize: 18 }}>
              Order Summary (6) items
            </p>
            <p>Payable Amount : 5000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
