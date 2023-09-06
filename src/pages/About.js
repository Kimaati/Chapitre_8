import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeroBannerAbout from "../components/HeroBannerAbout";
import Faq from "../components/Faq";

const About = () => {
  return (
    <div>
      <Navigation />
      <HeroBannerAbout />
      <Faq />
      <Footer />
    </div>
  );
};

export default About;
