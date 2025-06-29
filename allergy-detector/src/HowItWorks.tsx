import React from 'react';
import { ClipboardList, BarChart3, FileText, Database, Users, Shield } from 'lucide-react';
import './HowItWorks.css';

const keyPoints = [
  {
    key: 'comprehensive-exposure-tracking',
    icon: <ClipboardList size={36} />,
    title: <span style={{ textAlign: 'left', display: 'block' }}>Comprehensive exposure tracking</span>,
    desc: (
      <span style={{ textAlign: 'left', display: 'block' }}>
        A unified platform for logging:
        <ul style={{ margin: '8px 0 0 18px', textAlign: 'left' }}>
          <li>Food intake</li>
          <li>Cosmetic/product use</li>
          <li>Medication history</li>
          <li>Environmental exposures</li>
        </ul>
        <em style={{ display: 'block', marginTop: 8 }}>All data encrypted and HIPAA-compliant</em>
      </span>
    )
  },
  {
    key: 'evidence-based-pattern-analysis',
    icon: <BarChart3 size={36} />,
    title: <span style={{ textAlign: 'left', display: 'block' }}>Evidence-based pattern analysis</span>,
    desc: (
      <span style={{ textAlign: 'left', display: 'block' }}>
        Proprietary AI algorithm:
        <ul style={{ margin: '8px 0 0 18px', textAlign: 'left' }}>
          <li>Correlates exposures with symptom timelines</li>
          <li>Identifies probable triggers using clinical databases</li>
          <li>Flags potential cross-reactivities</li>
        </ul>
      </span>
    )
  },
  {
    key: 'clinician-ready-reports',
    icon: <FileText size={36} />,
    title: <span style={{ textAlign: 'left', display: 'block' }}>Clinician-ready reports</span>,
    desc: (
      <span style={{ textAlign: 'left', display: 'block' }}>
        Automatically generated reports include:
        <ul style={{ margin: '8px 0 0 18px', textAlign: 'left' }}>
          <li>Chronological symptom logs</li>
          <li>Suspected allergen prioritization</li>
          <li>Visual exposure-symptom mapping</li>
        </ul>
        <em style={{ display: 'block', marginTop: 8 }}>Export as PDF for EHR integration</em>
      </span>
    )
  }
];

const HowItWorks: React.FC = () => (
  <section className="how-it-works" id="how-it-works" aria-labelledby="how-title">
    {/* Section 1: Why allergen AI */}
    <div className="section-container">
      <h2 id="how-title">Why AllerGEN AI</h2>
      <h3 className="section-headline">Improve pre-test clarity. Reduce uncertainty.</h3>
      
      <div className="key-points">
        {keyPoints.map((point) => (
          <div className="key-point" key={point.key}>
            <div className="point-icon" aria-hidden="true">{point.icon}</div>
            <h4 className="point-title">{point.title}</h4>
            <p className="point-desc">{point.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Section 2: Clinical Benefits */}
    <div className="section-container">
      <h3 className="section-headline">Data-driven insights that support your care.</h3>
      <p className="supporting-text">
        AllerGEN AI enhances clinical efficiency through structured patient-reported data, leveraging evidence-based allergen databases and our cross-reactivity algorithms to deliver precise diagnostic insights and improve patient outcomes.
      </p>
    </div>
  </section>
);

export default HowItWorks; 