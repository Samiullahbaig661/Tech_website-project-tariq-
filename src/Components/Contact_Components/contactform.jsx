import React, { useState, useEffect } from 'react';
import '../../Component_styling/Css_Contact_comp/contactform.css'; // Adjust the path as necessary

const ContactForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsSubmitting(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={`contact-form-container ${isVisible ? 'visible' : ''}`}>
            {submitSuccess && (
                <div className="success-message" role="alert">
                    Thank you for your message! We'll get back to you within 24 hours.
                </div>
            )}
            <div className="contact-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-required="true"
                    />
                    {errors.name && (
                        <span id="name-error" className="error-message" role="alert">
                            {errors.name}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-required="true"
                    />
                    {errors.email && (
                        <span id="email-error" className="error-message" role="alert">
                            {errors.email}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                        Subject *
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this regarding?"
                        className={`form-input ${errors.subject ? 'error' : ''}`}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        aria-required="true"
                    />
                    {errors.subject && (
                        <span id="subject-error" className="error-message" role="alert">
                            {errors.subject}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="form-label">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your inquiry or test drive request..."
                        className={`form-textarea ${errors.message ? 'error' : ''}`}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        aria-required="true"
                    />
                    {errors.message && (
                        <span id="message-error" className="error-message" role="alert">
                            {errors.message}
                        </span>
                    )}
                </div>
                <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                    aria-describedby="submit-status"
                    onClick={handleSubmit}
                >
                    {isSubmitting && <span className="loading-spinner" aria-hidden="true"></span>}
                    <span className="submit-button-text">
                        {isSubmitting ? 'Sending Query...' : 'Send Your Query'}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ContactForm;