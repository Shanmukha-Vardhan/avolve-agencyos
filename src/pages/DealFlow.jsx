import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Wand2,
    Sparkles,
    Send,
    Download,
    RefreshCw,
    CheckCircle2,
    X,
    Cpu,
    Zap
} from 'lucide-react';
import '../styles/DealFlow.css';

const DealFlow = () => {
    const [step, setStep] = useState('input'); // input, generating, result
    const [loadingStep, setLoadingStep] = useState(0);
    const [formData, setFormData] = useState({
        clientName: '',
        projectType: 'Web Application',
        budget: '25k',
        keywords: ['Modern', 'Minimalist'],
        currentKeyword: ''
    });

    const loadingMessages = [
        "Analyzing client requirements...",
        "Scanning design trends...",
        "Calculating optimal pricing...",
        "Generating scope of work...",
        "Finalizing proposal layout..."
    ];

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && formData.currentKeyword) {
            e.preventDefault();
            setFormData(prev => ({
                ...prev,
                keywords: [...prev.keywords, prev.currentKeyword],
                currentKeyword: ''
            }));
        }
    };

    const removeKeyword = (keyword) => {
        setFormData(prev => ({
            ...prev,
            keywords: prev.keywords.filter(k => k !== keyword)
        }));
    };

    const generateProposal = () => {
        setStep('generating');
        setLoadingStep(0);

        // Simulate AI processing steps
        const interval = setInterval(() => {
            setLoadingStep(prev => {
                if (prev >= loadingMessages.length - 1) {
                    clearInterval(interval);
                    setTimeout(() => setStep('result'), 800);
                    return prev;
                }
                return prev + 1;
            });
        }, 800);
    };

    return (
        <div className="dealflow-container">
            <header style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                        padding: '8px',
                        borderRadius: '12px',
                        display: 'flex'
                    }}>
                        <Wand2 color="white" size={24} />
                    </div>
                    <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>
                        DealFlow AI
                    </h1>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    Generate high-converting proposals in seconds using our AI engine.
                </p>
            </header>

            <div className="generator-card">
                <AnimatePresence mode="wait">
                    {step === 'input' && (
                        <motion.div
                            key="input"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <div className="input-grid">
                                <div className="form-group">
                                    <label className="form-label">Client Name</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="e.g. Tesla Inc."
                                        value={formData.clientName}
                                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Project Type</label>
                                    <select
                                        className="form-select"
                                        value={formData.projectType}
                                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                    >
                                        <option>Web Application</option>
                                        <option>E-commerce Store</option>
                                        <option>Mobile App</option>
                                        <option>Brand Identity</option>
                                    </select>
                                </div>
                                <div className="form-group full-width">
                                    <label className="form-label">Vibe & Keywords (Press Enter)</label>
                                    <div className="keyword-input-container">
                                        {formData.keywords.map(k => (
                                            <span key={k} className="keyword-tag">
                                                {k}
                                                <X
                                                    size={14}
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => removeKeyword(k)}
                                                />
                                            </span>
                                        ))}
                                        <input
                                            type="text"
                                            className="keyword-input"
                                            placeholder="Add keywords..."
                                            value={formData.currentKeyword}
                                            onChange={(e) => setFormData({ ...formData, currentKeyword: e.target.value })}
                                            onKeyDown={handleKeyDown}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary"
                                style={{ width: '100%', padding: '16px', fontSize: '1.1rem', justifyContent: 'center' }}
                                onClick={generateProposal}
                            >
                                <Sparkles size={20} />
                                Generate Proposal
                            </button>
                        </motion.div>
                    )}

                    {step === 'generating' && (
                        <motion.div
                            key="generating"
                            className="processing-state"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="ai-orb"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>AI is working its magic...</h2>
                            <div className="processing-steps">
                                {loadingMessages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`step-item ${idx === loadingStep ? 'active' : ''}`}
                                        style={{ opacity: idx > loadingStep ? 0.3 : (idx === loadingStep ? 1 : 0.6) }}
                                    >
                                        {idx < loadingStep ? <CheckCircle2 size={16} color="#10b981" /> : <Cpu size={16} />}
                                        {msg}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 'result' && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="proposal-preview">
                                <div className="proposal-header">
                                    <div>
                                        <div style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '4px' }}>PROPOSAL FOR</div>
                                        <h2 style={{ fontSize: '2rem', margin: 0 }}>{formData.clientName || 'Client Name'}</h2>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>DATE</div>
                                        <div style={{ fontWeight: '600' }}>{new Date().toLocaleDateString()}</div>
                                    </div>
                                </div>
                                <div className="proposal-body">
                                    <div className="proposal-left">
                                        <div className="proposal-section">
                                            <h3>Executive Summary</h3>
                                            <p style={{ lineHeight: '1.6', color: '#4b5563' }}>
                                                We are excited to partner with <strong>{formData.clientName || 'your company'}</strong> to build a
                                                cutting-edge <strong>{formData.projectType}</strong>.
                                                Our approach combines {formData.keywords.join(', ')} aesthetics with robust performance
                                                to deliver a solution that stands out in the market.
                                            </p>
                                        </div>
                                        <div className="proposal-section">
                                            <h3>Scope of Work</h3>
                                            <ul className="deliverables-list">
                                                <li><CheckCircle2 size={16} color="var(--primary)" /> User Interface Design (UI/UX)</li>
                                                <li><CheckCircle2 size={16} color="var(--primary)" /> Frontend Development (React/Next.js)</li>
                                                <li><CheckCircle2 size={16} color="var(--primary)" /> Backend Integration</li>
                                                <li><CheckCircle2 size={16} color="var(--primary)" /> Mobile Responsiveness Optimization</li>
                                                <li><CheckCircle2 size={16} color="var(--primary)" /> SEO & Performance Tuning</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="proposal-right" style={{ background: '#f9fafb', padding: '24px', borderRadius: '12px' }}>
                                        <div className="proposal-section">
                                            <h3>Investment</h3>
                                            <div className="price-tag">$24,500</div>
                                            <div style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '4px' }}>+ $500/mo maintenance</div>
                                        </div>
                                        <div className="proposal-section">
                                            <h3>Timeline</h3>
                                            <div className="timeline-badge">
                                                <Zap size={14} style={{ display: 'inline', marginRight: '4px' }} />
                                                6-8 Weeks
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="generated-actions">
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setStep('input')}
                                >
                                    <RefreshCw size={18} />
                                    Start Over
                                </button>
                                <button className="btn btn-secondary">
                                    <Download size={18} />
                                    Export PDF
                                </button>
                                <button className="btn btn-primary">
                                    <Send size={18} />
                                    Send to Client
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default DealFlow;
