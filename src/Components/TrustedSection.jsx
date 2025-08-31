import React from "react";
import "../Component_styling/TrustedSection.css";

// Logos ko import karen:
import bbcLogo from "../assets/bbc.png";
import cslLogo from "../assets/csl.png";
import akzoLogo from "../assets/akzo.png";
import skyLogo from "../assets/sky.png";
import microsoftLogo from "../assets/microsoft.png";

const logos = [bbcLogo, cslLogo, akzoLogo, skyLogo, microsoftLogo];

const TrustedSection = () => {
  return (
    <section className="trusted-section">
      <div className="trusted-header">
        <h2>TRUSTED BY THE TOP ENTERPRISES</h2>
      </div>
      <div className="logos-container">
        <div className="logos-track">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand logo ${index + 1}`}
              className="brand-logo"
            />
          ))}
          {/* Repeat logos for seamless scrolling */}
          {logos.map((logo, index) => (
            <img
              key={index + logos.length}
              src={logo}
              alt={`Brand logo ${index + 1}`}
              className="brand-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
