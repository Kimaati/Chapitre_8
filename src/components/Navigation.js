import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="navigation">
      <div className="logo">
        {/* Les images importées depuis la balise IMG sont accessible dans "public" */}
        <img src="./assets/img/Logo-Kasa.png" alt="Logo Kasa" />
      </div>
      <ul>
        {/* La fonction ternair permet de mettre une classe quand l'élements est actif */}
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Acceuil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Navigation;
