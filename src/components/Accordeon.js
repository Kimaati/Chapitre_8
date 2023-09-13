// import React from "react";

// const Accordeon = (props) => {
//   return (
//     <div className="accordeon-container">
//       <button className="accordeon-btn" aria-expanded="false">
//         <h2>{props.title}</h2>
//         <span>
//           <i class="fa-solid fa-chevron-up"></i>
//         </span>
//       </button>
//       <div className="accordeon-content">
//         <p>{props.description}</p>
//       </div>
//     </div>
//   );
// };

// export default Accordeon;

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
