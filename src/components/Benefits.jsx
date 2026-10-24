import React from 'react';
import { Bot, Globe, Smartphone, TrendingUp, Award, Shield, ArrowRight } from 'lucide-react';

const BENEFITS = [
  {
    icon: Bot,
    title: 'Autonomous AI Agents',
    description: 'Self-improving AI bots that automate workflows, conduct reasoning, and integrate with your databases.',
    badge: 'LLMs & Multi-Agent'
  },
  {
    icon: Globe,
    title: 'High-Performance Web Apps',
    description: 'Cloud-native SaaS applications engineered with modern React, Next.js, and sub-second response times.',
    badge: '99.99% Uptime'
  },
  {
    icon: Smartphone,
    title: 'Native & Hybrid Mobile Apps',
    description: 'Polished iOS and Android apps with fluid 60fps animations, intuitive UX, and secure offline caching.',
    badge: 'iOS & Android'
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Digital Marketing',
    description: 'Full-funnel SEO, conversion rate optimization, and performance campaigns that convert clicks into revenue.',
    badge: '10x ROI Focus'
  }
];

export default function Benefits({ onOpenQuote }) {
  return (
    <section id="benefits" className="benefits-section">
      <div className="container benefits-container">
        
        {/* Left Column: 4-Quadrant Visual Collage */}
        <div className="benefits-visual-col">
          <div className="benefits-image-wrapper">
            <div className="quadrant-photo-frame">
              <img 
                src="/images/team_quadrant.jpg" 
                alt="Synthex Engineering, AI and Design Squad" 
                className="quadrant-img"
              />
            </div>

            {/* Overlaid stat pill */}
            <div className="benefits-badge-pill animate-float">
              <div className="badge-pill-icon">
                <Award size={20} />
              </div>
              <div>
                <span className="badge-pill-title">Top 1% Engineering</span>
                <span className="badge-pill-sub">Full IP Ownership & SLA</span>
              </div>
            </div>

            {/* Second floating mini pill */}
            <div className="benefits-mini-pill animate-float-delay">
              <Shield size={16} className="text-purple" />
              <span>SOC2 & Enterprise Ready</span>
            </div>
          </div>
        </div>

        {/* Right Column: Benefits List */}
        <div className="benefits-content-col">
          <div className="section-pill-tag">WHY PARTNER WITH US</div>
          
          <h2 className="benefits-title">
            Benefits <span className="text-gradient-purple">From Our Engineering</span>
          </h2>

          <p className="benefits-description">
            We don’t just write code — we architect scalable software assets that unlock new revenue streams for your business.
          </p>

          <div className="benefits-list">
            {BENEFITS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="benefit-item-card">
                  <div className="benefit-icon-circle">
                    <Icon size={20} />
                  </div>
                  <div className="benefit-text-wrap">
                    <div className="benefit-header-row">
                      <h3 className="benefit-item-title">{item.title}</h3>
                      <span className="benefit-tag">{item.badge}</span>
                    </div>
                    <p className="benefit-item-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '28px' }}>
            <button 
              type="button" 
              className="btn-primary"
              onClick={onOpenQuote}
            >
              <span>Build With Our Squad</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
