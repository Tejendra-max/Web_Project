import React, { useState } from 'react';
import { Check, ArrowRight, Calculator, Sparkles, Clock, DollarSign } from 'lucide-react';

const ESTIMATOR_OPTIONS = [
  { id: 'ai', label: 'AI Agent & Workflows', price: 2800, time: 2 },
  { id: 'web', label: 'Web Platform (Next.js/React)', price: 3900, time: 3 },
  { id: 'mobile', label: 'Mobile App (iOS & Android)', price: 3400, time: 3 },
  { id: 'design', label: 'UI/UX & Design System', price: 1900, time: 1.5 },
  { id: 'marketing', label: 'SEO & Performance Marketing', price: 1500, time: 1 },
];

const PERKS = [
  'Dedicated Principal Architect',
  'Weekly Production Demos',
  '100% Intellectual Property Ownership',
  'Zero Technical Debt Guarantee',
  'Fixed Milestone-Based Pricing',
  '24/7 SLA & DevOps Monitoring',
];

export default function PartnerPerks({ onOpenQuote }) {
  const [selectedServices, setSelectedServices] = useState(['ai', 'web']);
  const [speedMultiplier, setSpeedMultiplier] = useState(1); // 1 = standard, 1.25 = rush

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Calculate totals
  const totalBaseCost = selectedServices.reduce((sum, id) => {
    const item = ESTIMATOR_OPTIONS.find(o => o.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const finalCost = Math.round(totalBaseCost * (speedMultiplier === 1.25 ? 1.2 : 1));

  const totalTimeWeeks = selectedServices.reduce((sum, id) => {
    const item = ESTIMATOR_OPTIONS.find(o => o.id === id);
    return sum + (item ? item.time : 0);
  }, 0);

  const estimatedWeeks = Math.max(2, Math.ceil(totalTimeWeeks * (speedMultiplier === 1.25 ? 0.7 : 1)));

  return (
    <section id="estimator" className="partner-perks-section">
      <div className="container">
        <div className="perks-outer-card">
          <div className="perks-grid">
            
            {/* Left Content Column */}
            <div className="perks-info-col">
              <span className="perks-tag">ENTERPRISE-GRADE PARTNERSHIP</span>
              
              <h2 className="perks-title">
                If You Have A Vision <br />
                Then <span className="text-gradient-purple">Partner With Synthex</span>
              </h2>

              <p className="perks-subtext">
                Accelerate your roadmap with an autonomous engineering pod dedicated to shipping clean, reliable code with zero bloat.
              </p>

              <div className="perks-heading-small">Enjoy Many Perks</div>

              <div className="perks-features-grid">
                {PERKS.map((perk, idx) => (
                  <div key={idx} className="perk-check-item">
                    <div className="perk-check-dot">
                      <Check size={13} />
                    </div>
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              <div className="perks-action-row">
                <button 
                  type="button" 
                  className="btn-primary"
                  onClick={() => onOpenQuote({ selectedServices, finalCost, estimatedWeeks })}
                >
                  <span>Schedule Discovery Call</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Column: Live Interactive Cost & Timeline Estimator */}
            <div className="perks-estimator-col">
              <div className="estimator-arch-frame">
                
                <div className="estimator-header">
                  <div className="estimator-title-wrap">
                    <Calculator size={20} className="text-purple" />
                    <div>
                      <h3 className="estimator-box-title">Instant Scope Estimator</h3>
                      <p className="estimator-box-sub">Select your requirements for instant pricing</p>
                    </div>
                  </div>
                </div>

                {/* Service checkboxes */}
                <div className="estimator-options-list">
                  {ESTIMATOR_OPTIONS.map((opt) => {
                    const isChecked = selectedServices.includes(opt.id);
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        className={`estimator-item-btn ${isChecked ? 'selected' : ''}`}
                        onClick={() => toggleService(opt.id)}
                      >
                        <div className="estimator-check-box">
                          {isChecked && <Check size={12} />}
                        </div>
                        <span className="estimator-item-label">{opt.label}</span>
                        <span className="estimator-item-price">+${opt.price}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Speed toggle */}
                <div className="speed-toggle-row">
                  <span className="speed-label">Delivery Pace:</span>
                  <div className="speed-pills">
                    <button 
                      type="button" 
                      className={`speed-pill ${speedMultiplier === 1 ? 'active' : ''}`}
                      onClick={() => setSpeedMultiplier(1)}
                    >
                      Standard (Agile)
                    </button>
                    <button 
                      type="button" 
                      className={`speed-pill ${speedMultiplier === 1.25 ? 'active' : ''}`}
                      onClick={() => setSpeedMultiplier(1.25)}
                    >
                      ⚡ Accelerated Rush
                    </button>
                  </div>
                </div>

                {/* Result Summary Bar */}
                <div className="estimator-result-bar">
                  <div className="result-metric">
                    <div className="result-metric-label">
                      <DollarSign size={14} />
                      <span>Estimated Scope</span>
                    </div>
                    <span className="result-metric-value">${finalCost.toLocaleString()}</span>
                  </div>

                  <div className="result-divider"></div>

                  <div className="result-metric">
                    <div className="result-metric-label">
                      <Clock size={14} />
                      <span>Target Delivery</span>
                    </div>
                    <span className="result-metric-value">{estimatedWeeks} Weeks</span>
                  </div>
                </div>

                {/* CTA inside estimator */}
                <button
                  type="button"
                  className="btn-primary w-full mt-3"
                  onClick={() => onOpenQuote({ selectedServices, finalCost, estimatedWeeks })}
                >
                  <Sparkles size={16} />
                  <span>Lock In This Scope</span>
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
