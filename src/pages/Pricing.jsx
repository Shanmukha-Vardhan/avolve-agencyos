import React, { useState } from 'react';
import { Check } from 'lucide-react';
import '../styles/Pricing.css';

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const plans = [
        {
            name: 'Starter',
            price: billingCycle === 'monthly' ? '999' : '899',
            description: 'Perfect for small businesses just getting started.',
            features: [
                'Single Project',
                'Basic Analytics',
                'Email Support',
                'Standard Timeline',
                'CMS Integration'
            ]
        },
        {
            name: 'Professional',
            price: billingCycle === 'monthly' ? '2,499' : '2,299',
            description: 'Ideal for growing companies needing more power.',
            popular: true,
            features: [
                'Up to 5 Projects',
                'Advanced Analytics',
                'Priority Support',
                'Expedited Timeline',
                'Custom Integrations',
                'SEO Optimization'
            ]
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For large organizations with specific requirements.',
            features: [
                'Unlimited Projects',
                'Custom Reporting',
                '24/7 Dedicated Support',
                'Custom SLA',
                'White-labeling',
                'On-premise Deployment'
            ]
        }
    ];

    return (
        <div className="pricing-container">
            <div className="pricing-header">
                <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '16px' }}>
                    Simple, Transparent Pricing
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    Choose the plan that best fits your agency needs.
                </p>

                <div className="pricing-toggle">
                    <button
                        className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
                        onClick={() => setBillingCycle('monthly')}
                    >
                        Monthly
                    </button>
                    <button
                        className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
                        onClick={() => setBillingCycle('yearly')}
                    >
                        Yearly <span style={{ fontSize: '0.7rem', color: '#10b981', marginLeft: '4px' }}>-10%</span>
                    </button>
                </div>
            </div>

            <div className="pricing-grid">
                {plans.map((plan, index) => (
                    <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                        {plan.popular && <div className="popular-badge">Most Popular</div>}
                        <div className="plan-name">{plan.name}</div>
                        <div className="plan-price">
                            {plan.price !== 'Custom' && '$'}{plan.price}
                            {plan.price !== 'Custom' && <span className="plan-period">/mo</span>}
                        </div>
                        <div className="plan-desc">{plan.description}</div>

                        <ul className="feature-list">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="feature-item">
                                    <Check size={18} className="feature-icon" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="plan-btn">
                            {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
