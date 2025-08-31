import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Cpu, Zap, Globe, ArrowRight, Play } from 'lucide-react';
import './testingpagelanding.css';

const TechLandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: Code, title: "Smart Development", desc: "Next-gen coding solutions with AI" },
    { icon: Cpu, title: "Neural Processing", desc: "Advanced AI-powered systems" },
    { icon: Zap, title: "Quantum Speed", desc: "Lightning-fast performance" },
    { icon: Globe, title: "Global Network", desc: "Worldwide connectivity hub" }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "2M+", label: "Active Users" },
    { number: "24/7", label: "Live Support" },
    { number: "180+", label: "Countries" }
  ];

  return (
    <div className="tech-container">
      {/* Animated Background */}
      <div className="tech-background-layer">
        <div 
          className="tech-gradient-orb tech-orb-1"
          style={{ transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.03}px)` }}
        />
        <div 
          className="tech-gradient-orb tech-orb-2"
          style={{ transform: `translate(${-mousePosition.x * 0.03}px, ${mousePosition.y * 0.04}px)` }}
        />
        <div 
          className="tech-gradient-orb tech-orb-3"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)` }}
        />
      </div>

      {/* Floating Particles */}
      <div className="tech-particles-container">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="tech-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="tech-hero-section">
        <div className={`tech-hero-content ${isLoaded ? 'loaded' : ''}`}>
          <h1 className="tech-hero-title">
            <span className="tech-hero-title-1">Transform Your</span>
            <span className="tech-hero-title-2">Digital Future</span>
          </h1>
          <p className={`tech-hero-subtitle ${isLoaded ? 'loaded' : ''}`}>
            Experience the next generation of technology with our revolutionary platform 
            that combines AI, blockchain, and quantum computing in one seamless ecosystem.
          </p>
          <div className={`tech-button-container ${isLoaded ? 'loaded' : ''}`}>
            <button className="tech-primary-button">
              <span>Get Started</span>
              <ArrowRight size={20} className="tech-button-icon" />
            </button>
            <button className="tech-secondary-button">
              <Play size={18} className="tech-button-icon" />
              Watch Demo
            </button>
          </div>
          <div className={`tech-stats-grid ${isLoaded ? 'loaded' : ''}`}>
            {stats.map((stat, i) => (
              <div
                key={i}
                className="tech-stat-card"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="tech-stat-number">{stat.number}</div>
                <div className="tech-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={`tech-features-grid ${isLoaded ? 'loaded' : ''}`}>
          {features.map((feature, i) => (
            <div
              key={i}
              className="tech-feature-card"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="tech-feature-icon">
                <feature.icon size={32} />
              </div>
              <h3 className="tech-feature-title">{feature.title}</h3>
              <p className="tech-feature-desc">{feature.desc}</p>
              <div className="tech-card-border" />
            </div>
          ))}
        </div>
      </div>

      {/* Geometric Decorations */}
      <div className="tech-decoration tech-decoration-1" />
      <div className="tech-decoration tech-decoration-2" />
      <div className="tech-decoration tech-decoration-3" />
    </div>
  );
};

export default TechLandingPage;