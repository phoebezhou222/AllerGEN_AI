import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './PricingPlan.css';

const plans = [
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: [
      'Custom Integrations',
      'Unlimited Uploads',
      'Dedicated Account Manager',
      'HIPAA/Enterprise Compliance',
    ],
    highlight: false,
  },
];

const PricingPlan: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showContact, setShowContact] = useState(false);

  const handleEnterpriseClick = () => {
    setShowContact(true);
  };

  const closeContact = () => setShowContact(false);

  return (
    <section className="pricing-section" id="pricing" aria-labelledby="pricing-title">
      <h2 id="pricing-title" className="highlight-title">Pricing Plans</h2>
      <div className="pricing-cards">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card${plan.highlight ? ' highlight' : ''}`}
            tabIndex={0}
            aria-label={`${plan.name} plan`}
          >
            <div className="plan-name">{plan.name}</div>
            <div className="plan-price">{plan.price}</div>
            <ul className="plan-features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            {plan.name === 'Enterprise' && (
              <button className="plan-select-btn" onClick={handleEnterpriseClick} aria-label="Contact for Enterprise plan">
                Contact Sales
              </button>
            )}
          </div>
        ))}
      </div>
      {showContact && (
        <div className="contact-modal-overlay" onClick={closeContact}>
          <div className="contact-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
            <h3 id="contact-modal-title">Contact Sales</h3>
            <p>For enterprise solutions, please email us at <a href="mailto:contact@allergyreal.com">contact@allergyreal.com</a> or fill out the form below:</p>
            <form className="contact-form" onSubmit={e => { e.preventDefault(); closeContact(); }}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required rows={4} />
              <button type="submit">Send</button>
              <button type="button" className="close-btn" onClick={closeContact}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingPlan; 