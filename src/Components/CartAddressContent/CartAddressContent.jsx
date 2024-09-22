import React from 'react'
import './CartAddressContent.css'

const CartAddressContent = () => {
  return (
    <div>
    <div className="cartcontent-container">
      <div className="container-content-1">
        <p>Delivery Address </p>
        <div>
            <div className='cart-address-content-1'>
                <input type="text" name="name" id="name" placeholder='Enter name' />
                <input type="text" name="phone" id="phone" placeholder='Enter mobile number' />
            </div>
            <div>
                <input type="text" name="address" id="address" placeholder='Area & Street' />
            </div>
            <div className='cart-address-content-1'>
                <input type="text" placeholder='Landmark' />
                <input type="number" name="Pincode" id="Pincode" placeholder='Pincode' />
            </div>
            <div className='cart-address-content-2'>
                <input type="text" name="city" id="city" placeholder='City' />
                <input type="text" name="state" id="state" placeholder='State' />
              
            </div>
            <div>
                <div className='deliver'>Deliver here</div>
            </div>
        </div>

      </div>
      <div className="container-content-2">
        <div className="order_summary">
          <p style={{fontWeight:700 ,fontSize:18}}>Order Summary (6) items</p>
          <p>Payable Amount : 5000</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartAddressContent