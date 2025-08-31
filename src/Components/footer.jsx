import React, { useState, useEffect } from 'react';
import {
    Github,
    Twitter,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Code,
    Zap,
    Shield,
    Cloud
} from 'lucide-react';
import '../Component_styling/footer.css'; // Adjust the path as necessary

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const companyInfo = {
        name: "TechVision",
        description: "Building the future with innovative technology solutions that transform businesses and empower growth.",
        contact: {
            email: "hello@techvision.com",
            phone: "+1 (555) 123-4567",
            address: "123 Innovation Street, Tech Valley, CA 94000"
        }
    };

    const quickLinks = [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" }
    ];

    const services = [
        { name: "Web Development", icon: Code, href: "#web-dev" },
        { name: "Cloud Solutions", icon: Cloud, href: "#cloud" },
        { name: "Cybersecurity", icon: Shield, href: "#security" },
        { name: "AI & Automation", icon: Zap, href: "#ai" }
    ];

    const socialLinks = [
        { name: "GitHub", icon: Github, href: "#github", color: "#333" },
        { name: "Twitter", icon: Twitter, href: "#twitter", color: "#1DA1F2" },
        { name: "LinkedIn", icon: Linkedin, href: "#linkedin", color: "#0077B5" },
        { name: "Email", icon: Mail, href: "#email", color: "#EA4335" }
    ];

    return (
        <footer className="footer">
            <div className="floating-shapes">
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className={`footer-section company-info ${isVisible ? 'visible' : ''}`}>
                        <h3>{companyInfo.name}</h3>
                        <p className="company-description">{companyInfo.description}</p>
                        <div className="contact-item">
                            <Mail size={18} />
                            <span>{companyInfo.contact.email}</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} />
                            <span>{companyInfo.contact.phone}</span>
                        </div>
                        <div className="contact-item">
                            <MapPin size={18} />
                            <span>{companyInfo.contact.address}</span>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className={`footer-section ${isVisible ? 'visible' : ''}`}>
                        <h4 className="section-title">Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link, index) => (
                                <li key={index} className="footer-link">
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Services */}
                    <div className={`footer-section ${isVisible ? 'visible' : ''}`}>
                        <h4 className="section-title">Services</h4>
                        <div>
                            {services.map((service, index) => (
                                <div key={index} className="service-item">
                                    <div className="service-icon">
                                        <service.icon size={20} />
                                    </div>
                                    <span>{service.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Social Media */}
                    <div className={`footer-section ${isVisible ? 'visible' : ''}`}>
                        <h4 className="section-title">Connect With Us</h4>
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="social-link"
                                    aria-label={social.name}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className={`footer-bottom-content ${isVisible ? 'visible' : ''}`}>
                        <div className="copyright">
                            © 2025 {companyInfo.name}. All rights reserved.
                        </div>
                        <div className="made-with">
                            Made with <span className="heart">💻</span> and passion
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;