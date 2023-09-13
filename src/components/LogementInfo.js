import React from "react";
import { useParams } from "react-router-dom";
import annonce from "../data/annonce.json";

const LogementInfo = () => {
  const { id } = useParams();
  // console.log("ID de logement dans l'URL :", id);

  const logement = annonce.find((item) => item.id === id);

  return (
    <div className="info-logement">
      <div>
        <h1 className="title-logement">{logement.title}</h1>
        <p className="location-logement">{logement.location}</p>
      </div>
      <div className="host">
        <p className="name">{logement.host.name}</p>
        <img src={logement.host.picture} alt={logement.host.name} />
      </div>
    </div>
  );
};

export default LogementInfo;
