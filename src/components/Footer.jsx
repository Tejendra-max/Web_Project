import React, { useState } from 'react';
import { ArrowRight, Check, Activity } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenQuote, onOpenPlayground }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        
        {/* Top Newsletter Row */}
        <div className="footer-top-card">
          <div className="footer-newsletter-info">
            <h3 className="newsletter-title">Subscribe to Engineering Insights</h3>
            <p className="newsletter-sub">
              Join 15,000+ founders receiving our bi-weekly breakdown on AI agents, Next.js scale, and growth.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            {isSubscribed ? (
              <div className="newsletter-success">
                <Check size={16} />
                <span>Thank you! Check your inbox for our latest architecture teardown.</span>
              </div>
            ) : (
              <div className="newsletter-input-wrap">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <button type="submit" className="btn-primary btn-subscribe">
                  <span>Subscribe</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Main Footer Links */}
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#" className="nav-logo">
              <span className="logo-text">Synthex</span>
              <span className="logo-dot">.</span>
            </a>
            <p className="footer-tagline">
              A modern software studio engineering autonomous AI agents, enterprise web apps, mobile apps, and high-ROI digital marketing systems.
            </p>
            <div className="footer-status-badge">
              <span className="status-indicator-ping"></span>
              <Activity size={14} className="text-emerald" />
              <span>All Systems Operational (99.99%)</span>
            </div>
          </div>

          {/* Core Solutions */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Capabilities</h4>
            <ul className="footer-links">
              <li><a href="#services">Autonomous AI Agents</a></li>
              <li><a href="#services">Cloud Web Applications</a></li>
              <li><a href="#services">Native Mobile Apps</a></li>
              <li><a href="#services">UI/UX & Website Design</a></li>
              <li><a href="#services">Digital Marketing & SEO</a></li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Tools & Labs</h4>
            <ul className="footer-links">
              <li>
                <button type="button" onClick={onOpenPlayground} className="footer-link-btn">
                  AI Agent Playground ✨
                </button>
              </li>
              <li><a href="#estimator">Instant Scope Estimator</a></li>
              <li><a href="#benefits">Engineering Quality SLA</a></li>
              <li><a href="#testimonials">Client Case Studies</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#benefits">About Synthex</a></li>
              <li><button type="button" onClick={onOpenQuote} className="footer-link-btn">Book Discovery Call</button></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {CURRENT_YEAR} Synthex Inc. All rights reserved. Built with precision for ambitious teams.
          </p>

          <div className="footer-social-row">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
