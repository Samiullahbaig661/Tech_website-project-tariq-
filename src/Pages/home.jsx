import React from "react";
import TechLandingPage from "../Components/testingpagelanding";
import TrustedSection from "../components/TrustedSection";
import AboutSection from "../components/AboutSection";
import DevelopmentProcessV3 from "../components/DevelopmentProcessV3";
import ServicesSection from "../components/ServicesSection";

const HomePage = () => {
  return (
    <>
      <TechLandingPage />
      <TrustedSection />
      <AboutSection />
      <DevelopmentProcessV3 />
      <ServicesSection />
    </>
  );
};

export default HomePage;