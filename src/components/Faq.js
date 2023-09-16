// import React from "react";
// import Accordeon from "./Accordeon";

// const Faq = () => {
//   return (
//     <div>
//       <Accordeon
//         title="Fiabilité"
//         description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
//  régulièrement vérifiées par nos équipes."
//       />

//       <Accordeon
//         title="Respect"
//         description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
// perturbation du voisinage entraînera une exclusion de notre plateforme."
//       />

//       <Accordeon
//         title="Service"
//         description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
// perturbation du voisinage entraînera une exclusion de notre plateforme."
//       />

//       <Accordeon
//         title="Sécurité"
//         description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
// correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
// locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
// également des ateliers sur la sécurité domestique pour nos hôtes."
//       />
//     </div>
//   );
// };

// export default Faq;

import React, { useState } from "react";
import Accordeon from "./Accordeon";

const Faq = () => {
  const faqData = [
    {
      title: "Fiabilité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  const [activeAccordeon, setActiveAccordeon] = useState(null);

  const toggleAccordeon = (index) => {
    setActiveAccordeon(index === activeAccordeon ? null : index);
  };

  return (
    <div className="faq-about-accordeon">
      {faqData.map((item, index) => (
        <Accordeon
          key={index}
          index={index}
          title={item.title}
          description={item.description}
          isActive={index === activeAccordeon}
          toggleAccordeon={toggleAccordeon}
        />
      ))}
    </div>
  );
};

export default Faq;
