import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, Shield, Users, Heart } from 'lucide-react';
import '../Component_styling/core_values_aboutus.css'; // Adjust the path as necessary

const CoreValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const coreValues = [
    {
      id: 1,
      icon: <Lightbulb className="icon-size" />,
      title: "Creativity & Innovation",
      description: "Embracing creativity, innovation, and interactive experiences to deliver cutting-edge solutions.",
      gradient: "gradient-purple-pink"
    },
    {
      id: 2,
      icon: <Shield className="icon-size" />,
      title: "Integrity & Transparency",
      description: "Maintaining honesty, transparency, and ethical behavior in all our business practices.",
      gradient: "gradient-purple-blue"
    },
    {
      id: 3,
      icon: <Users className="icon-size" />,
      title: "Collaboration",
      description: "Working closely with clients to combine our expertise with your vision for optimal results.",
      gradient: "gradient-purple-indigo"
    },
    {
      id: 4,
      icon: <Heart className="icon-size" />,
      title: "Client-Centric Method",
      description: "Listening to and prioritizing client needs to ensure complete satisfaction and success.",
      gradient: "gradient-purple-violet"
    }
  ];

  return (
    <section ref={sectionRef} className="section-container">
      <div className="background-shapes">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      <div className="content-wrapper">
        <div className="header-section">
          <div className={`subtitle ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            CORE VALUES
          </div>
          <h2 className={`main-title ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
            TOP EXPERTS FOR WEB DESIGN AND DEVELOPMENT
          </h2>
        </div>

        <div className="values-grid">
          {coreValues.map((value, index) => (
            <div
              key={value.id}
              className={`value-card ${isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 150 + 400}ms` }}
              onMouseEnter={() => setHoveredCard(value.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="icon-container">
                <div className={`icon-gradient ${value.gradient}`}>
                  <div className="icon-wrapper">{value.icon}</div>
                </div>
                <div className="icon-pulse"></div>
              </div>

              <div className="card-content">
                <h3 className="card-title">{value.title}</h3>
                <p className="card-description">{value.description}</p>
              </div>

              <div className={`card-glow ${hoveredCard === value.id ? 'active' : ''}`}></div>
              <div className="card-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;