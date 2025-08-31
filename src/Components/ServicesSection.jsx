import React, { useState } from 'react';
import '../Component_styling/ServicesSection.css';
import { DollarSign, PieChart, Target } from 'lucide-react'; // Example icons

const Servicessss = () => {
  const [activeCard, setActiveCard] = useState(null); // Track active card for mobile

  const services = [
    { title: 'Expense Tracking', description: 'Track your daily expenses with ease.', icon: DollarSign },
    { title: 'Budget Planning', description: 'Plan your budget and stay on track.', icon: PieChart },
    { title: 'Financial Insights', description: 'Get insights into your spending habits.', icon: Target },
    { title: 'Goal Setting', description: 'Set and achieve your financial goals.', icon: Target },
    { title: 'Secure Data', description: 'Your data is safe with us.', icon: DollarSign },
    { title: 'Multi-Platform', description: 'Access anywhere, anytime.', icon: PieChart },
  ];

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index); // Toggle active card
  };

  return (
    <section className="services-section">
      <h2 className="services-section-title">Our Services</h2>
      <p className="services-section-subtitle">
        Discover how we can help you manage your finances effectively.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${activeCard === index ? 'active' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="icon-wrapper">
              <service.icon size={40} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicessss;