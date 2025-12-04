import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Send } from 'lucide-react';
import '../styles/Onboarding.css';

const Onboarding = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        projectType: 'web-app',
        budget: '10k-25k',
        timeline: '1-3 months',
        description: '',
    });

    const totalSteps = 4;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const renderStepIndicator = () => {
        return (
            <div className="progress-bar-container">
                <div className="progress-steps">
                    <div className="progress-line-bg"></div>
                    <div
                        className="progress-line-fill"
                        style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                    ></div>
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className={`step-indicator ${step === i ? 'active' : ''} ${step > i ? 'completed' : ''}`}
                        >
                            {step > i ? <Check size={16} /> : i}
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    <span>Client Details</span>
                    <span>Project Scope</span>
                    <span>Logistics</span>
                    <span>Review</span>
                </div>
            </div>
        );
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 style={{ marginBottom: '24px' }}>Client Details</h2>
                        <div className="form-group">
                            <label className="form-label">Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                className="form-input"
                                placeholder="e.g. Acme Innovations"
                                value={formData.companyName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Contact Person</label>
                            <input
                                type="text"
                                name="contactPerson"
                                className="form-input"
                                placeholder="e.g. John Doe"
                                value={formData.contactPerson}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="john@acme.com"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 style={{ marginBottom: '24px' }}>Project Scope</h2>
                        <div className="form-group">
                            <label className="form-label">Project Type</label>
                            <select
                                name="projectType"
                                className="form-select"
                                value={formData.projectType}
                                onChange={handleInputChange}
                            >
                                <option value="web-app">Web Application</option>
                                <option value="mobile-app">Mobile App</option>
                                <option value="marketing-site">Marketing Website</option>
                                <option value="branding">Branding & Identity</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Project Description</label>
                            <textarea
                                name="description"
                                className="form-textarea"
                                placeholder="Tell us about your project goals and requirements..."
                                value={formData.description}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 style={{ marginBottom: '24px' }}>Budget & Timeline</h2>
                        <div className="form-group">
                            <label className="form-label">Estimated Budget</label>
                            <select
                                name="budget"
                                className="form-select"
                                value={formData.budget}
                                onChange={handleInputChange}
                            >
                                <option value="<10k">Less than $10k</option>
                                <option value="10k-25k">$10k - $25k</option>
                                <option value="25k-50k">$25k - $50k</option>
                                <option value="50k+">$50k+</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Desired Timeline</label>
                            <select
                                name="timeline"
                                className="form-select"
                                value={formData.timeline}
                                onChange={handleInputChange}
                            >
                                <option value="<1month">Less than 1 month</option>
                                <option value="1-3months">1 - 3 months</option>
                                <option value="3-6months">3 - 6 months</option>
                                <option value="flexible">Flexible</option>
                            </select>
                        </div>
                    </motion.div>
                );
            case 4:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 style={{ marginBottom: '24px' }}>Review Details</h2>
                        <div className="review-grid">
                            <div className="review-item">
                                <div className="review-label">Company</div>
                                <div className="review-value">{formData.companyName || '-'}</div>
                            </div>
                            <div className="review-item">
                                <div className="review-label">Contact</div>
                                <div className="review-value">{formData.contactPerson || '-'}</div>
                            </div>
                            <div className="review-item">
                                <div className="review-label">Email</div>
                                <div className="review-value">{formData.email || '-'}</div>
                            </div>
                            <div className="review-item">
                                <div className="review-label">Type</div>
                                <div className="review-value">{formData.projectType}</div>
                            </div>
                            <div className="review-item">
                                <div className="review-label">Budget</div>
                                <div className="review-value">{formData.budget}</div>
                            </div>
                            <div className="review-item">
                                <div className="review-label">Timeline</div>
                                <div className="review-value">{formData.timeline}</div>
                            </div>
                        </div>
                        <div className="review-item" style={{ marginTop: '16px' }}>
                            <div className="review-label">Description</div>
                            <div className="review-value" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                                {formData.description || '-'}
                            </div>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="onboarding-container">
            <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                    New Client Onboarding
                </h1>
                <p style={{ color: 'var(--text-muted)' }}>Enter the details to kickstart the new project.</p>
            </header>

            {renderStepIndicator()}

            <div className="form-card">
                <AnimatePresence mode="wait">
                    {renderStepContent()}
                </AnimatePresence>

                <div className="button-group">
                    <button
                        className="btn btn-secondary"
                        onClick={prevStep}
                        disabled={step === 1}
                        style={{ opacity: step === 1 ? 0.5 : 1, cursor: step === 1 ? 'not-allowed' : 'pointer' }}
                    >
                        <ChevronLeft size={20} />
                        Back
                    </button>

                    {step < totalSteps ? (
                        <button className="btn btn-primary" onClick={nextStep}>
                            Next Step
                            <ChevronRight size={20} />
                        </button>
                    ) : (
                        <button className="btn btn-primary" onClick={() => alert('Onboarding Complete!')}>
                            Complete Onboarding
                            <Send size={18} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
