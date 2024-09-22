import React, { useState, useEffect } from "react";
import "./Heroelement.css";
import tile1 from "../Assets/ExlusiveTiles1.webp";
import Carouselitem from "../Carouselitem/Carouselitem";

const Heroelement = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      item: 1,
      title: "Ceramic Tiles",
      description:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
      icon: tile1,
    },
    {
      item: 2,
      title: "Walking",
      description:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits.",
      icon: tile1,
    },
    {
      item: 3,
      title: "Weights",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      icon: tile1,
    },
    {
      item: 4,
      title: "Walking",
      description:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits.",
      icon: tile1,
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % data.length;
      setActiveIndex(nextIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeIndex, data.length]);

  const updateIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {" "}
      <div className="hero-container">
        <div
          className="hero-slider"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {data.map((item) => (
            <Carouselitem
              key={item.item}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>

        <div className="carousel-scroller">
          <ul>
            {data.map((_, index) => (
              <li
                key={index}
                onClick={() => updateIndex(index)}
                style={{
                  background: activeIndex === index ? "#FF474C" : "#e3e2e2",
                }}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Heroelement;
