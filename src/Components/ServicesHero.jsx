import React from "react";
import "../Component_styling/ServicesHero.css"; // CSS import
import pic from "../assets/services-hero.png"

const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="services-container">
        {/* Left side - Content */}
        <div className="services-content">
          <div className="services-text-content">
            <h1 className="services-title">
              Welcome to the
              <span className="services-highlight"> Services Section</span>
            </h1>
            <p className="services-description">
              Transform your business with our comprehensive digital services.
              We deliver cutting-edge solutions that drive growth and help you
              achieve your business objectives with excellence.
            </p>

            <div className="services-buttons">
              <button className="services-btn-primary">Get Started</button>
              <button className="services-btn-secondary">View Portfolio</button>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="services-image-section">
          <div className="services-image-container">
            <img
              src={pic} // Apni image ka path
              alt="Services Illustration"
              className="services-hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
