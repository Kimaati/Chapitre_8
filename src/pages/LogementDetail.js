import React from "react";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import annonce from "../data/annonce.json";
import LogementInfo from "../components/LogementInfo";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import DescriptionAccordeon from "../components/DescriptionAccordeon";
import EquipementAccordeon from "../components/EquipementAccordeon";
// import styles from "../styles/components/accordeonLogement.scss";

const LogementDetail = () => {
  const { id } = useParams();
  // console.log("ID de logement dans l'URL :", id);

  const logement = annonce.find((item) => item.id === id);

  return (
    <div>
      <Navigation />
      <Carrousel images={logement.pictures} />
      <LogementInfo />
      <div className="tags-rating-container">
        <div className="tags-container">
          {logement.tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
        <div className="rating-container">
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="accordeon-logement-container">
        <DescriptionAccordeon description={logement.description} />
        <EquipementAccordeon equipments={logement.equipments} />
      </div>
      <Footer />
    </div>
  );
};

export default LogementDetail;
