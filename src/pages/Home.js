import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeroBannerHome from "../components/HeroBannerHome";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Navigation />
      <HeroBannerHome />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
