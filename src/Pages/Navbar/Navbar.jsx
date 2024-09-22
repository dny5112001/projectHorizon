import React from 'react'
import './Navbar.css'
import logo from '../Assets/horizon logo.png'
import cart from '../Assets/cart.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="search">
                <input type="text" placeholder='Search Items ...' />
            </div>

            <div className="contact">
                <p>About Us</p>
                <p>Contact Us</p>
            </div>

            <div className="login-cart">
                <button>Register</button>
                <img src={cart} alt="" />
            </div>
        </div>
    )
}

export default Navbar
