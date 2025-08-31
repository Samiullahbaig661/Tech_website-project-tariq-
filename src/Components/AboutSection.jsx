import React from "react";
import "../Component_styling/AboutSection.css";
import { FaCheckCircle, FaUsers, FaCalendarAlt, FaProjectDiagram, FaSmile } from "react-icons/fa";
import big from '../assets/big.webp';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left image */}
        <div className="about-image">
<img src= {big} alt="Showcase" />


        </div>

        {/* Right content */}
        <div className="about-content">
          <h2>
            Best Mobile App Development Agency For Entrepreneurs & Enterprises.
          </h2>
          <p>
            Since 2010, our award-winning team has worked with the aim to create
            mobile apps that deliver top-notch user experience and maximum
            engagement. From concept formation and stunning app screen designs
            to exploring all app monetization possibilities and maximizing app
            downloads, we cover the whole app development cycle.
          </p>

          <ul className="about-points">
            <li><FaCheckCircle className="point-icon" /> Experienced App Developers</li>
            <li><FaCheckCircle className="point-icon" /> App Solutions for Startups to Large Enterprises</li>
            <li><FaCheckCircle className="point-icon" /> Android & iOS Mobile App Development</li>
            <li><FaCheckCircle className="point-icon" /> Affordable App Solutions</li>
          </ul>
        </div>
      </div>

      {/* Stats Boxes */}
      <div className="about-stats">
        <div className="stat-box">
          <FaUsers className="stat-icon" />
          <h3>600+</h3>
          <p>Employees</p>
        </div>
        <div className="stat-box">
          <FaCalendarAlt className="stat-icon" />
          <h3>15+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat-box">
          <FaProjectDiagram className="stat-icon" />
          <h3>700+</h3>
          <p>Projects Delivered</p>
        </div>
        <div className="stat-box">
          <FaSmile className="stat-icon" />
          <h3>500+</h3>
          <p>Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
