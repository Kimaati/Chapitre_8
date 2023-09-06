import React from "react";

const Accordeon = (props) => {
  return (
    <div className="accordeon-container">
      <button className="accordeon-btn" aria-expanded="false">
        <h2>{props.title}</h2>
        <span>
          <i class="fa-solid fa-chevron-up"></i>
        </span>
      </button>
      <div className="accordeon-content">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Accordeon;
