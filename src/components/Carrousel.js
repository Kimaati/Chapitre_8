import React, { useState } from "react";

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrousel">
      <button className="prev-button" onClick={prevSlide}>
        &#10094;
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide"
      />
      <button className="next-button" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="indicator">{`${currentIndex + 1}/${images.length}`}</div>
    </div>
  );
};

export default Carrousel;
