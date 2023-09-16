import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import LogoNotFound from "../assets/img/404.png";

const NotFound = () => {
  return (
    <div>
      <Navigation />
      <div className="not-found">
        <img src={LogoNotFound} alt="Erreur 404" />
        <h1>Oups ! La page que vous demandez n'existe pas</h1>
        <NavLink to="/">
          <li>Retourner sur la page d'accueil</li>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
