import React from "react";
import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  const roundedRating = Math.round(rating);

  const stars = Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className={`fa-solid fa-star${index < roundedRating ? " filled" : ""}`}
    ></i>
  ));

  return <div className="rating">{stars}</div>;
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
