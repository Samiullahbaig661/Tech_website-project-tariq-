import React, { useState } from 'react';
import '../Component_styling/HeroSection.css';
import heroImg from '../assets/hero-character.png';

const GameHeroSection = () => {
  const [isButtonActive, setIsButtonActive] = useState(false); // For mobile tap effect

  const handleButtonClick = () => {
    setIsButtonActive(true);
    setTimeout(() => setIsButtonActive(false), 300); // Reset after animation
  };

  return (
    <section className="game-hero-section">
      <div className="game-hero-content">
        <div className="game-hero-text-content">
          <h1 className="game-hero-title">
            <span className="game-hero-highlight">RISE</span> OF THE <br /> WARRIOR
          </h1>
          <p className="game-hero-description">
            Enter the realm of shadows and steel. Forge your destiny with a blade that glows through the darkness.
          </p>
          <button
            className={`game-hero-button ${isButtonActive ? 'active' : ''}`}
            onClick={handleButtonClick}
          >
            Join the Battle
          </button>
        </div>

        <div className="game-hero-image-section">
          <img src={heroImg} alt="Hero Warrior" className="game-hero-image" />
        </div>
      </div>
      <div className="game-hero-particles" />
    </section>
  );
};

export default GameHeroSection;