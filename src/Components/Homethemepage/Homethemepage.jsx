import React from "react";
import theme1 from "../Assets/theme1.png";
import "./Homethemepage.css";
import theme2 from "../Assets/theme2.jpeg";

const HomeThemePage = () => {
  return (
    <div className="home-theme-page">
      <div className="bg-image-container">
        <div className="bg-text">
          <h1>HOME THEMES</h1>
          <div className="grey-box">
            <p>
              Premium themes that are detailed with perfection. Each theme is
              made to make your dreams come to reality by designing your dream
              home.
            </p>
          </div>
        </div>
        <img src={theme1} alt="Theme 1" />
      </div>
      <div className="button-group">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div>
      <div className="theme-image-container">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="theme-image">
            <img src={theme2} alt={`Image ${index + 1}`} />
            <div className="image-description">
              <h4>Image {index + 1} Name</h4>
              <p>Description of Image {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeThemePage;
