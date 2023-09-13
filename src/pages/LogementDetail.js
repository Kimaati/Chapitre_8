import React from "react";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import annonce from "../data/annonce.json";
import LogementInfo from "../components/LogementInfo";
import Tag from "../components/Tag";
import Accordeon from "../components/Accordeon";

const LogementDetail = () => {
  const { id } = useParams();
  // console.log("ID de logement dans l'URL :", id);

  const logement = annonce.find((item) => item.id === id);

  return (
    <div>
      <Navigation />
      <Carrousel images={logement.pictures} />
      <LogementInfo />
      <Tag />
      <div className="accordeon-logement">
        <Accordeon title="Descriptions" description={logement.description} />
        <Accordeon
          title="Équipements"
          description={logement.equipments}
          className="accordeon-deux"
        />
      </div>
      <Footer />
    </div>
  );
};

export default LogementDetail;
