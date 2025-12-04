import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-wrapper">
                <div className="contact-info">
                    <div className="contact-header">
                        <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '16px' }}>
                            Get in Touch
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon-box">
                                <Mail size={24} />
                            </div>
                            <div className="contact-text">
                                <h3>Email Us</h3>
                                <p>hello@agencyos.com</p>
                                <p>support@agencyos.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon-box">
                                <MapPin size={24} />
                            </div>
                            <div className="contact-text">
                                <h3>Visit Us</h3>
                                <p>123 Innovation Drive</p>
                                <p>San Francisco, CA 94103</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon-box">
                                <Phone size={24} />
                            </div>
                            <div className="contact-text">
                                <h3>Call Us</h3>
                                <p>+1 (555) 123-4567</p>
                                <p>Mon-Fri from 9am to 6pm</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-card">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-input" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-input" placeholder="Your email" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Subject</label>
                            <select className="form-select">
                                <option>General Inquiry</option>
                                <option>Project Proposal</option>
                                <option>Support</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea className="form-textarea" placeholder="How can we help you?"></textarea>
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%' }}>
                            Send Message
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
