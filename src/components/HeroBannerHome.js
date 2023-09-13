import React from "react";
import LogoHome from "../assets/img/Hero-banner-home.png";

const HeroBannerHome = () => {
  return (
    <div className="hero-banner">
      <img src={LogoHome} alt="Paysage d'eau et de forêt" />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default HeroBannerHome;
