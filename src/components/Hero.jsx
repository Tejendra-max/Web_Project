import React from 'react';
import { ArrowRight, Play, Star, Bot, Zap, Users, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenQuote, onOpenPlayground }) {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Headlines & CTA */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>NEXT-GEN SOFTWARE & AI STUDIO</span>
          </div>

          <h1 className="hero-title">
            Develop your <br />
            digital edge in a <br />
            <span className="hero-title-highlight">new & unique way</span>
          </h1>

          <p className="hero-subtitle">
            We engineer autonomous AI agents, cloud web applications, native mobile apps, and revenue-focused marketing systems that scale.
          </p>

          <div className="hero-cta-group">
            <button 
              type="button" 
              className="btn-primary hero-btn-main"
              onClick={onOpenQuote}
            >
              <span>Start Your Project</span>
              <ArrowRight size={17} />
            </button>

            <button 
              type="button" 
              className="btn-secondary hero-btn-demo"
              onClick={onOpenPlayground}
            >
              <div className="demo-play-icon">
                <Play size={13} fill="currentColor" />
              </div>
              <span>Live AI Demo</span>
            </button>
          </div>

          {/* Trust stats pill row */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <span className="trust-text"><strong>4.9/5</strong> from 180+ clients</span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <CheckCircle2 size={16} className="text-emerald" />
              <span className="trust-text"><strong>500+</strong> Apps & Agents Shipped</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual with Arch & Floating Badges */}
        <div className="hero-visual-wrapper">
          <div className="hero-arch-bg">
            <div className="arch-glow-ring ring-1"></div>
            <div className="arch-glow-ring ring-2"></div>
            
            {/* The primary portrait visual */}
            <div className="hero-image-frame">
              <img 
                src="/images/hero_engineer.jpg" 
                alt="AI Software Engineer and Architect" 
                className="hero-main-img"
              />
            </div>

            {/* Floating Badge 1 - Top Left */}
            <div className="floating-card card-ai animate-float">
              <div className="card-icon-bubble ai-bubble">
                <Bot size={18} />
              </div>
              <div className="card-text">
                <span className="card-val">50+ AI Agents</span>
                <span className="card-sub">Autonomous & Live</span>
              </div>
            </div>

            {/* Floating Badge 2 - Top Right */}
            <div className="floating-card card-users animate-float-delay">
              <div className="card-icon-bubble users-bubble">
                <Users size={18} />
              </div>
              <div className="card-text">
                <span className="card-val">10M+ Users</span>
                <span className="card-sub">Global Platforms</span>
              </div>
            </div>

            {/* Floating Badge 3 - Bottom Left */}
            <div className="floating-card card-speed animate-float">
              <div className="card-icon-bubble speed-bubble">
                <Zap size={18} />
              </div>
              <div className="card-text">
                <span className="card-val">99.8% Speed</span>
                <span className="card-sub">Ultra-low Latency</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
