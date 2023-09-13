import React from "react";
import LogoFooter from "../assets/img/Logo-Kasa-Footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <img src={LogoFooter} alt="Logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
