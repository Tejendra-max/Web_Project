import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenQuote, onOpenPlayground }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#" className="nav-logo">
          <span className="logo-text">Synthex</span>
          <span className="logo-dot">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <a href="#services" className="nav-link">Services</a>
          <a href="#ai-agents" className="nav-link">
            AI Agents
            <span className="nav-badge">NEW</span>
          </a>
          <a href="#benefits" className="nav-link">Why Us</a>
          <a href="#estimator" className="nav-link">Estimator</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button 
            type="button" 
            className="btn-signin"
            onClick={onOpenPlayground}
            title="Try Live AI Agent Demo"
          >
            <Sparkles size={16} className="text-purple" />
            <span>AI Playground</span>
          </button>
          
          <button 
            type="button" 
            className="btn-primary btn-quote"
            onClick={onOpenQuote}
          >
            <span>Free Quote</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile Hamburger Button */}
          <button 
            type="button" 
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer animate-fade">
          <div className="mobile-nav-links">
            <a 
              href="#services" 
              className="mobile-nav-link" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#ai-agents" 
              className="mobile-nav-link" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI Agents <span className="nav-badge">NEW</span>
            </a>
            <a 
              href="#benefits" 
              className="mobile-nav-link" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Synthex
            </a>
            <a 
              href="#estimator" 
              className="mobile-nav-link" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cost Estimator
            </a>
            <a 
              href="#testimonials" 
              className="mobile-nav-link" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
          </div>

          <div className="mobile-actions">
            <button 
              type="button" 
              className="btn-secondary w-full"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenPlayground();
              }}
            >
              <Sparkles size={16} />
              Try AI Playground
            </button>
            <button 
              type="button" 
              className="btn-primary w-full"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
            >
              Get Free Quote
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
