import React from 'react'
import './Themeproduct.css'
import themeprod from '../Assets/themeprod.webp'
import wallbg from '../Assets/wallbg.jpg'

const Themeproduct = () => {

    return (
        <div className="container">
            <div className='imagepg'>
                <img src={themeprod} alt="Your Image" className="image" />
            </div>
            <div className="productheading">
                <button className="back-button">Back</button>
                <h2>Products</h2>
            </div>
            <hr className="line" />
            <p className="product-description">Get ready to enter zen mode and indulge in the serene wilderness that is 'Tropical Escape' by Morning Room Design & Decor. A perfect mix of earthy shades, wooden textures, and lots of green, it's your perfect getaway for some peaceful and luxurious 'me time'.

            </p>

            <div className="product-container-wrapper">
                <div className="product-container">
                    <div className="image-container">
                        <img src={wallbg} alt="Product 1" className="product-image" />
                    </div>
                    <div className="content-container">
                        <h3>Product 1</h3>
                        <p>Description of Product 1</p>
                        <button>View</button>
                    </div>
                </div>
                <div className="product-container">
                    <div className="image-container">
                        <img src={wallbg} alt="Product 1" className="product-image" />
                    </div>
                    <div className="content-container">
                        <h3>Product 1</h3>
                        <p>Description of Product 1</p>
                        <button>View</button>
                    </div>
                </div>
                <div className="product-container">
                    <div className="image-container">
                        <img src={wallbg} alt="Product 1" className="product-image" />
                    </div>
                    <div className="content-container">
                        <h3>Product 1</h3>
                        <p>Description of Product 1</p>
                        <button>View</button>
                    </div>
                </div>
                <div className="product-container">
                    <div className="image-container">
                        <img src={wallbg} alt="Product 1" className="product-image" />
                    </div>
                    <div className="content-container">
                        <h3>Product 1</h3>
                        <p>Description of Product 1</p>
                        <button>View</button>
                    </div>
                </div>
                <div className="product-container">
                    <div className="image-container">
                        <img src={wallbg} alt="Product 1" className="product-image" />
                    </div>
                    <div className="content-container">
                        <h3>Product 1</h3>
                        <p>Description of Product 1</p>
                        <button>View</button>
                    </div>
                </div>
                <div className="product-container">
                    <div className="image-container">
                        <img src={wallbg} alt="Product 1" className="product-image" />
                    </div>
                    <div className="content-container">
                        <h3>Product 1</h3>
                        <p>Description of Product 1</p>
                        <button>View</button>
                    </div>
                </div>
                {/* Add more product containers here */}
            </div>
            <button className='design'>DESIGN YOUR HOME NOW!!</button>

        </div>
    );
}

export default Themeproduct;