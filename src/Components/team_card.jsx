import React from 'react';
import '../Component_styling/team_card.css';

const TeamCard = ({  name ,   position ,   image ,  bio ,  skills ,  email ,  linkedin ,  github }) => {(
  console.log("Team Member Data:", { name, position, image, bio, skills, email, linkedin, github })
);
  return (
    <div className="team-card">
      <div className="card-inner">
        <div className="card-front">
          <div className="image-container">
            <img src={image} alt={name} className="member-image" />
            <div className="image-overlay"></div>
          </div>

          <div className="card-content">
            <h3 className="member-name">{name}</h3>
            <p className="member-position">{position}</p>

            <div className="skills-container">
              {skills.slice(0, 3).map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card-footer">
            <span className="hover-text">Hover for more info</span>
          </div>
        </div>

        <div className="card-back">
          <div className="back-content">
            <div className="back-header">
              <h3 className="back-name">{name}</h3>
              <p className="back-position">{position}</p>
            </div>

            <div className="bio-section">
              <p className="member-bio">{bio}</p>
            </div>

            <div className="contact-section">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-value">{email}</span>
              </div>

              <div className="social-links">
                <a href={linkedin} target="_blank" rel="noreferrer" className="social-link linkedin">
                  <span>LinkedIn</span>
                </a>
                <a href={github} target="_blank" rel="noreferrer" className="social-link github">
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
