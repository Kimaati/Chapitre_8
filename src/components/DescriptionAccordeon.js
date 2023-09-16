import React from "react";
import Accordeon from "./Accordeon";

const DescriptionAccordeon = ({ description }) => {
  const [activeAccordeon, setActiveAccordeon] = React.useState(null);

  const toggleAccordeon = (index) => {
    setActiveAccordeon(index === activeAccordeon ? null : index);
  };

  return (
    <div>
      <Accordeon
        key="description"
        index={0}
        title="Description"
        description={description}
        isActive={0 === activeAccordeon}
        toggleAccordeon={toggleAccordeon}
        className="accordeon-description-logement"
      />
    </div>
  );
};

export default DescriptionAccordeon;
