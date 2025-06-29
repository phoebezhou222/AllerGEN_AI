import React from 'react';
import { FlaskConical, FileText } from 'lucide-react';
import { Dna } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: <FlaskConical size={36} />,
    title: 'Advanced OCR Technology',
    desc: 'Precision ingredient extraction utilizing state-of-the-art optical character recognition algorithms.'
  },
  {
    icon: <Dna size={36} />,
    title: 'AI-Powered Analysis',
    desc: 'Machine learning algorithms identify allergen patterns and cross-reactivity with clinical accuracy.'
  },
  {
    icon: <FileText size={36} />,
    title: 'Clinical Documentation',
    desc: 'Comprehensive ingredient verification and manual correction capabilities for medical records.'
  }
];

const Features: React.FC = () => (
  <section className="features" id="features" aria-labelledby="features-title">
    <h2 id="features-title">Clinical Capabilities</h2>
    <div className="feature-list">
      {features.map((feature) => (
        <div className="feature" key={feature.title}>
          <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-desc">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features; 