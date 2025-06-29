import React from 'react';
import { ClipboardList, BarChart3 } from 'lucide-react';
import { UserCheck } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    icon: <ClipboardList size={36} />,
    title: 'Documentation',
    desc: 'Capture ingredient labels through high-resolution imaging for comprehensive analysis.'
  },
  {
    icon: <UserCheck size={36} />,
    title: 'Clinical Assessment',
    desc: 'Record adverse reactions and categorize food items based on patient response patterns.'
  },
  {
    icon: <BarChart3 size={36} />,
    title: 'Analytical Review',
    desc: 'Generate comprehensive allergen reports with statistical analysis and risk assessment.'
  }
];

const HowItWorks: React.FC = () => (
  <section className="how-it-works" id="how-it-works" aria-labelledby="how-title">
    <h2 id="how-title">Clinical Protocol</h2>
    <div className="steps">
      {steps.map((step, idx) => (
        <div className="step" key={step.title}>
          <div className="step-icon" aria-hidden="true">{step.icon}</div>
          <h3 className="step-title">{step.title}</h3>
          <p className="step-desc">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks; 