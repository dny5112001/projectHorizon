import React from "react";
import "./CSS/About.css";
import Deepak_profile from "../Components/Assets/Deepak_portfolio.jpeg";
import Karan_profile from "../Components/Assets/Karan_portfolio.jpg";
import Dhruv_profile from "../Components/Assets/Dhruv_Portfolio.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="who-we-are">
        <h1>
          Who we are
          <span className="row1"></span>
          <span className="row2"></span>
        </h1>

        <p>
          Horizon-Decor is a dynamic newcomer to the Indian market, poised to
          revolutionize the way you think about home decor. With a fresh
          approach to design and technology, we're not just selling tiles -
          we're empowering you to become the architect of your own living space.
          Our customizable tile options, coupled with our state-of-the-art AI
          visualizer tool, put the power of creativity directly into your hands.
          Whether you're renovating your kitchen, remodeling your bathroom, or
          transforming your entire home, Horizon-Decor is here to inspire and
          support you every step of the way.
        </p>
      </div>
      <div className="our-mission">
        <h1>
          Our Mission
          <span className="row1"></span>
          <span className="row2"></span>
        </h1>
        <p>
          At Horizon-Decor, our mission is simple: to elevate the home decor
          experience for every customer. We believe that your living space
          should be a reflection of your personality and style, and we're
          dedicated to providing the tools and resources to make that vision a
          reality. By combining innovative technology with exceptional design
          expertise, we're breaking down barriers and making high-quality home
          decor accessible to everyone. Whether you're a seasoned interior
          designer or a first-time renovator, we're committed to helping you
          create a home that's uniquely yours. Join us on this exciting journey
          as we redefine the possibilities of home decor together.
        </p>
      </div>
      <div className="co-founders">
        <h1>
          Founders
          <span className="row1"></span>
          <span className="row2"></span>
        </h1>
        <div>
          <img src={Karan_profile} alt="" />
          <p>
            I'm Karan Sharma, the founder of Horizon-Decor. My passion for
            design and innovation led me to create a company that goes beyond
            selling products – we're all about empowering you to unleash your
            creativity. With Horizon-Decor, your home becomes your canvas, and
            we're here to help you bring your vision to life. Thanks for joining
            us on this exciting journey!
          </p>
        </div>
        <div>
          <img src={Deepak_profile} alt="" />
          <p>
          I'm Deepak Yadav, co-founder of Horizon-Decor. Our passion for design and innovation led us to create a company that empowers you to design your dream home. With Horizon-Decor, your creativity knows no bounds. Join us in shaping the future of Horizon-Decor!
          </p>
        </div>
        <div>
          <img src={Dhruv_profile} alt="" />
          <p>
          I'm Dhruv Singh, co-founder of Horizon-Decor. We're here to transform your home decor experience. Let's turn your vision into reality together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
