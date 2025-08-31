
import React, { useState, useEffect } from 'react';
import '../../Component_styling/Css_Contact_comp/header.css'; // Adjust the path as necessary 

const ContactHeader = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="contact-header">
            <div className="contact-header-accent"></div>
            <div className="contact-header-accent-small"></div>
            <div className="contact-header-container">
                <h1 className={`contact-header-title ${isVisible ? 'fade-in' : ''}`}>
                    Contact Us
                </h1>
                <p className={`contact-header-subtitle ${isVisible ? 'fade-in' : ''}`}>
                    Get in touch with our team for inquiries or to book a test drive
                </p>
            </div>
        </section>
    );
};

export default ContactHeader;