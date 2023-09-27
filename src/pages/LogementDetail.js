import React from "react";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import annonce from "../data/annonce.json";
import LogementInfo from "../components/LogementInfo";
import DescriptionAccordeon from "../components/DescriptionAccordeon";
import EquipementAccordeon from "../components/EquipementAccordeon";

const LogementDetail = () => {
  const { id } = useParams();

  const logement = annonce.find((item) => item.id === id);

  return (
    <div>
      <Navigation />
      <Carrousel images={logement.pictures} />
      <LogementInfo />
      <div className="accordeon-logement-container">
        <DescriptionAccordeon description={logement.description} />
        <EquipementAccordeon equipments={logement.equipments} />
      </div>
      <Footer />
    </div>
  );
};

export default LogementDetail;
