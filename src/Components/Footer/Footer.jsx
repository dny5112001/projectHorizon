    import React from 'react'
    import './Footer.css'
    import logo from '../Assets/horizon logo.png'
    import instagram_icon from '../Assets/instagram_icon.png'
    import pinterest_icon from '../Assets/pinterest.png'
    import whatsapp_icon from '../Assets/whatsapp.png'

    const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerlogo">
                <img src={logo} alt=""/>
            </div>
            <ul className='footer-links'>
            <li>Company</li> 
            <li>Products</li> 
            <li>Offices</li> 
            <li>About</li> 
            <li>Contact</li> 
            </ul>
            <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram_icon} alt=""  className='insta'/>
            </div>
            <div className="footer-icon-container">
                <img src={pinterest_icon} alt=""  className='pinterest'/>
            </div>
            <div className="footer-icon-container">
                <img src= {whatsapp_icon} alt=""  className='whatsapp'/>
            </div>
            </div>
            

            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Rights Reserved</p>
            </div>
        </div>
    )
    }

    export default Footer