import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Mail, User, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const SERVICE_OPTIONS = [
  'AI Agent & Automation',
  'Full-Stack Web App',
  'Mobile App (iOS/Android)',
  'Website Design & UI/UX',
  'Digital Marketing & SEO'
];

function getInitialFormData(initialData) {
  let selected = ['AI Agent & Automation'];
  let notes = '';
  if (initialData?.selectedServices && Array.isArray(initialData.selectedServices)) {
    selected = initialData.selectedServices.map(id => {
      if (id === 'ai') return 'AI Agent & Automation';
      if (id === 'web') return 'Full-Stack Web App';
      if (id === 'mobile') return 'Mobile App (iOS/Android)';
      if (id === 'design') return 'Website Design & UI/UX';
      if (id === 'marketing') return 'Digital Marketing & SEO';
      return id;
    });
  } else if (initialData?.title) {
    selected = [initialData.title];
  }
  if (initialData?.promptText) {
    notes = `Playground prompt: ${initialData.promptText}`;
  }
  return {
    name: '',
    email: '',
    company: '',
    selectedServices: selected,
    budget: '$3,000 - $10,000',
    notes: notes
  };
}

export default function QuoteModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState(() => getInitialFormData(initialData));
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (srv) => {
    if (formData.selectedServices.includes(srv)) {
      if (formData.selectedServices.length > 1) {
        setFormData({
          ...formData,
          selectedServices: formData.selectedServices.filter(s => s !== srv)
        });
      }
    } else {
      setFormData({
        ...formData,
        selectedServices: [...formData.selectedServices, srv]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7c3aed', '#ec4899', '#9333ea', '#3b82f6', '#f59e0b']
      });
    } catch (err) {
      console.log('Confetti trigger', err);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content quote-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="modal-top-bar">
          <div>
            <h3 className="modal-title">
              {isSubmitted ? 'Proposal Requested!' : 'Start Your Project With Synthex'}
            </h3>
            <p className="modal-subtitle">
              {isSubmitted 
                ? 'We will review your scope and send a complete architecture breakdown within 24 hours.' 
                : 'Share your requirements to receive a fixed-price roadmap & engineering squad.'}
            </p>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {isSubmitted ? (
          <div className="quote-success-state animate-fade">
            <div className="success-icon-bubble">
              <CheckCircle2 size={48} className="text-emerald" />
            </div>
            
            <h4 className="success-title">You're All Set, {formData.name || 'Friend'}!</h4>
            <p className="success-desc">
              We received your request for: <br />
              <strong>{formData.selectedServices.join(', ')}</strong>
            </p>

            {initialData?.finalCost && (
              <div className="success-estimate-badge">
                <span>Estimated Target Budget: ${initialData.finalCost.toLocaleString()}</span>
                <span>• Delivery: ~{initialData.estimatedWeeks || 3} Weeks</span>
              </div>
            )}

            <div className="success-guarantee-note">
              <ShieldCheck size={18} className="text-purple" />
              <span>Includes Free 30-min Technical Architecture Consultation & NDA</span>
            </div>

            <button type="button" className="btn-primary w-full mt-4" onClick={handleReset}>
              <span>Done & Close</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="quote-form">
            
            {/* Service selector chips */}
            <div className="form-group">
              <label className="form-label">Select Required Capabilities:</label>
              <div className="quote-service-chips">
                {SERVICE_OPTIONS.map((srv) => {
                  const isSelected = formData.selectedServices.includes(srv);
                  return (
                    <button
                      type="button"
                      key={srv}
                      className={`service-choice-chip ${isSelected ? 'active' : ''}`}
                      onClick={() => toggleService(srv)}
                    >
                      <span>{srv}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inputs */}
            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <div className="input-with-icon">
                  <User size={16} />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Work Email</label>
                <div className="input-with-icon">
                  <Mail size={16} />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                  />
                </div>
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">Company / Startup</label>
                <div className="input-with-icon">
                  <Building2 size={16} />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Labs Inc."
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Target Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="quote-select"
                >
                  <option value="Under $5,000">Under $5,000</option>
                  <option value="$5,000 - $15,000">$5,000 - $15,000 (Recommended)</option>
                  <option value="$15,000 - $35,000">$15,000 - $35,000</option>
                  <option value="$35,000+">$35,000+ (Enterprise)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Brief Project Summary or Questions (Optional)</label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Tell us what you're building, target launch date, or link to existing repo/design..."
                className="quote-textarea"
              />
            </div>

            <div className="quote-submit-row">
              <div className="privacy-badge">
                <ShieldCheck size={14} className="text-emerald" />
                <span>Strict NDA & 100% IP Protection</span>
              </div>
              <button type="submit" className="btn-primary">
                <span>Submit Scope Request</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
