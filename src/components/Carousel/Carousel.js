
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CurrencyDollar,
  PersonFill,
  Code,
  GraphUp,
  MarkdownFill,
} from "react-bootstrap-icons";
import "./Carousel.css";

const cardData = [
  {
    id: 1,
    title: "Marketing",
    icon: (
      <GraphUp
        size={34}
        fontWeight={"bold"}
        color=""
        backgroundColor={"white"}
      />
    ),
    description: "23,000 jobs",
    color: "#f3ab84",
    bgcolor: "rgba(245, 184, 151, 0.34)",
  },
  {
    id: 2,
    title: "Finance",
    icon: (
      <CurrencyDollar
        size={34}
        fontWeight={"bold"}
        color=""
        backgroundColor={"white"}
      />
    ),
    description: "237 jobs",
    color: "#5ce5ced3",
    bgcolor: "rgba(142, 236, 220, 0.34)",
  },
  {
    id: 3,
    title: "IT",
    icon: (
      <Code size={34} fontWeight={"bold"} color="" backgroundColor={"white"} />
    ),
    description: "2000 jobs",
    color: "#628ddde9",
    bgcolor: "rgba(151, 184, 245, 0.34)",
  },
  {
    id: 4,
    title: "Education",
    icon: (
      <PersonFill
        size={34}
        fontWeight={"bold"}
        color=""
        backgroundColor={"white"}
      />
    ),
    description: "24,000 jobs",
    color: "#e773c4df",
    bgcolor: "rgba(245, 151, 217, 0.34)",
  },
  {
    id: 5,
    title: "Crypto",
    icon: (
      <MarkdownFill
        size={34}
        fontWeight={"bold"}
        color=""
        backgroundColor={"white"}
      />
    ),
    description: "200 jobs",
    color: "#e17a7a",
    bgcolor: "#ffd0d0",
  },
  // Add more card data objects as needed
  // ...
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = cardData.length;
  const visibleCards = 4;

  const slideRight = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const slideLeft = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const renderCards = () => {
    const cards = [];
    const startIndex = currentSlide;
    const endIndex = (currentSlide + visibleCards) % totalSlides;

    if (endIndex >= startIndex) {
      for (let i = startIndex; i < endIndex; i++) {
        cards.push(
          <>
            <div
              key={cardData[i].id}
              class="carousel card "
              style={{ backgroundColor: cardData[i].bgcolor }}
            >
              <div
                className="card-icon"
                style={{
                  backgroundColor: cardData[i].color,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {cardData[i].icon}
              </div>
              <span className="card-title">{cardData[i].title}</span>{" "}
              <p className="card-description"> {cardData[i].description}</p>
            </div>
          </>
        );
      }
    } else {
      for (let i = startIndex; i < totalSlides; i++) {
        cards.push(
          <>
            <div
              key={cardData[i].id}
              class="carousel card "
              style={{ backgroundColor: cardData[i].bgcolor }}
            >
              <div
                className="card-icon"
                style={{
                  backgroundColor: cardData[i].color,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {cardData[i].icon}{" "}
              </div>
              <span className="card-title">{cardData[i].title}</span>{" "}
              <p className="card-description"> {cardData[i].description}</p>
            </div>
          </>
        );
      }
      for (let i = 0; i < endIndex; i++) {
        cards.push(
          <>
            <div
              key={cardData[i].id}
              class="carousel card "
              style={{ backgroundColor: cardData[i].bgcolor }}
            >
              <div
                className="card-icon"
                style={{
                  backgroundColor: cardData[i].color,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {cardData[i].icon}{" "}
              </div>
              <span className="card-title">{cardData[i].title}</span>{" "}
              <p className="card-description"> {cardData[i].description}</p>
            </div>
          </>
        );
      }
    }

    return cards;
  };

  return (
    <div className="carousel-container">
      <span onClick={slideLeft} className="slide-arrow carousel-btn">
        <ArrowLeft />
      </span>

      <div className="carousel-container">{renderCards()}</div>

      <span onClick={slideRight} className="slide-arrow carousel-btn">
        <ArrowRight />
      </span>
    </div>
  );
};

export default Carousel;
