import React from 'react';
import '../Component_styling/whychooseservice.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We leverage cutting-edge technology and creative solutions to deliver results that exceed expectations."
    },
    {
      icon: "⭐",
      title: "Expert Team",
      description: "Our highly skilled professionals bring years of experience and deep industry knowledge to every project."
    },
    {
      icon: "🎯",
      title: "Results Driven",
      description: "We focus on measurable outcomes and tangible results that directly impact your business growth."
    },
    {
      icon: "💝",
      title: "24/7 Support",
      description: "Round-the-clock support ensures you're never alone. We're here whenever you need assistance."
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality. We deliver projects on time, every time."
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Excellence in every detail. We maintain the highest standards in all our work and deliverables."
    }
  ];

  return (
    <section className="services-section">
      <div>
        <h2 className="section-title">Why Choose Us?</h2>
        <p className="section-subtitle">
          Discover what makes us the perfect partner for your success
        </p>
        
        <div className="services-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="service-card">
              <div className="icon-wrapper">
                {reason.icon}
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;