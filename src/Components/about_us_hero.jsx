import React from 'react';
import '../Component_styling/about_us_hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Welcome to Our</span>
              <span className="title-line highlight">Amazing Journey</span>
            </h1>
            <p className="hero-description">
              We are passionate about creating extraordinary experiences that 
              inspire, innovate, and transform the way you think about possibilities. 
              Join us in building something remarkable together.
            </p>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Done</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
    </section>
  );
};

export default HeroSection;