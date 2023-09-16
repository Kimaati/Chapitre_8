import React from "react";

const Accordeon = ({
  title,
  description,
  isActive,
  toggleAccordeon,
  index,
}) => {
  return (
    <div className="accordeon-container">
      <button
        className="accordeon-btn"
        aria-expanded={isActive}
        onClick={() => toggleAccordeon(index)}
      >
        <h2>{title}</h2>
        <span>
          <i className={`fa-solid fa-chevron-${isActive ? "down" : "up"}`}></i>
        </span>
      </button>
      {isActive && (
        <div className="accordeon-content">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Accordeon;
