import React from "react";
import Accordeon from "./Accordeon";

const EquipementAccordeon = ({ equipments }) => {
  const [activeAccordeon, setActiveAccordeon] = React.useState(null);

  const toggleAccordeon = (index) => {
    setActiveAccordeon(index === activeAccordeon ? null : index);
  };

  return (
    <div>
      <Accordeon
        key="equipments"
        index={0}
        title="Équipements"
        description={
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        }
        isActive={0 === activeAccordeon}
        toggleAccordeon={toggleAccordeon}
        className="accordeon-logement"
      />
    </div>
  );
};

export default EquipementAccordeon;
