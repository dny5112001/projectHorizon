import React from 'react'
import './Cart_items.css'
import order_pic from '../Assets/bathroombg.webp'
const Cart_items =   ()=>{
    return (
        <div className="cart_items_container">
            <div className="cart_img_container">
            <img src={order_pic} alt="" />
            </div>

            <div className="cart_item_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing .Lorem ipsum dolor sit amet consectetur adipisicing .</p>
            <p>5000 rupees</p>
            </div>
            

            <div className="cart_remove-item">
            <p>x</p>
            </div>
        </div>
    )
}
export default Cart_items;