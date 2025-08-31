import React from 'react';
import '../Component_styling/DevelopmentProcessV3.css';

const DevelopmentProcessV3 = () => {
  return (
    <div className="dev-journey-section">
      <div className="dev-journey-container">
        {/* Header */}
        <div className="dev-journey-section-header">
          <h2 className="dev-journey-section-title">
            Our Development Journey
            <div className="dev-journey-underline-wrapper">
              <div className="dev-journey-animated-underline"></div>
            </div>
          </h2>
          <p className="dev-journey-section-subtext">
            Experience our comprehensive development methodology designed to deliver exceptional results through systematic planning and execution.
          </p>
        </div>

        {/* Main Content */}
        <div className="dev-journey-main-content">
          <div className="dev-journey-top-right"></div>
          <div className="dev-journey-bottom-left"></div>

          {/* Left Side Steps */}
          <div className="dev-journey-steps dev-journey-left">
            <div className="dev-journey-step">
              <div className="dev-journey-step-header">
                <h3>Project Discovery</h3>
                <div className="dev-journey-step-number">01</div>
              </div>
              <p>
                Comprehensive consultation where we dive deep into<br />
                your vision, requirements, and project objectives to<br />
                create a solid foundation for success.
              </p>
            </div>
            <div className="dev-journey-step">
              <div className="dev-journey-step-header">
                <h3>Strategic Planning</h3>
                <div className="dev-journey-step-number">02</div>
              </div>
              <p>
                Detailed project roadmap creation with timeline,<br />
                milestones, and resource allocation to ensure<br />
                smooth and efficient execution.
              </p>
            </div>
            <div className="dev-journey-step">
              <div className="dev-journey-step-header">
                <h3>Research & Analysis</h3>
                <div className="dev-journey-step-number">03</div>
              </div>
              <p>
                In-depth market research, competitor analysis,<br />
                and user behavior study to inform design<br />
                and development decisions effectively.
              </p>
            </div>
          </div>

          {/* Right Side Steps */}
          <div className="dev-journey-steps dev-journey-right">
            <div className="dev-journey-step">
              <div className="dev-journey-step-header">
                <div className="dev-journey-step-number">04</div>
                <h3>Creative Design</h3>
              </div>
              <p>
                Crafting intuitive user interfaces and engaging<br />
                user experiences that align perfectly with your<br />
                brand identity and user needs.
              </p>
            </div>
            <div className="dev-journey-step">
              <div className="dev-journey-step-header">
                <div className="dev-journey-step-number">05</div>
                <h3>Development Sprint</h3>
              </div>
              <p>
                Agile development process with regular iterations,<br />
                continuous integration, and transparent<br />
                progress tracking throughout.
              </p>
            </div>
            <div className="dev-journey-step">
              <div className="dev-journey-step-header">
                <div className="dev-journey-step-number">06</div>
                <h3>Launch & Support</h3>
              </div>
              <p>
                Comprehensive testing, deployment, and ongoing<br />
                support to ensure optimal performance and<br />
                complete user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcessV3;