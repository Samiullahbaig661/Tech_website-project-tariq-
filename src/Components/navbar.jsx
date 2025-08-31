import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Star, Menu, X, Phone } from 'lucide-react';
import '../Component_styling/navbar.css';

const TechNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="tech-nav">
      <div className="tech-nav-container">
        <div className="tech-nav-logo">
          <Star size={24} className="tech-nav-logo-icon" />
          TechNova
        </div>
        
        {/* Desktop Navigation */}
        <ul className="tech-nav-links">
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact Us" }
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `tech-nav-link ${isActive ? 'active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <button className="tech-nav-btn-outline">
              <Phone size={18} className="tech-nav-btn-icon" />
              +92 300 1234567
            </button>
          </li>
          <li>
            <button className="tech-nav-btn-gradient">
              Get Started
            </button>
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="tech-nav-mobile-menu-button"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`tech-nav-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="tech-nav-mobile-menu-content">
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact Us" }
          ].map(({ to, label }, i) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `tech-nav-mobile-nav-link ${isActive ? 'active' : ''}`
              }
              style={{ transitionDelay: isMobileMenuOpen ? `${i * 0.1}s` : '0s' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <button 
            className="tech-nav-mobile-btn-outline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Phone size={18} className="tech-nav-btn-icon" />
            +92 300 1234567
          </button>
          <button 
            className="tech-nav-mobile-btn-gradient"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TechNavbar;