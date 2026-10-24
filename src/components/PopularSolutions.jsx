import React from 'react';
import { 
  ArrowRight, Sparkles, Check, Play, TrendingUp 
} from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'ai-agents',
    category: 'ai',
    badge: 'AI AGENT',
    title: 'Autonomous AI Agents & Swarms',
    shortDesc: 'Custom LLM agents that execute multi-step reasoning, call external APIs, and automate business operations 24/7.',
    features: ['Multi-Agent Orchestration', 'Database & Tool Calling', 'Custom Guardrails & Privacy'],
    stats: '⚡ 140ms Latency',
    users: '48 Deployed',
    price: '$2,800',
    type: 'Starting at',
    previewType: 'terminal',
    rating: '4.98',
  },
  {
    id: 'web-apps',
    category: 'web',
    badge: 'WEB APP',
    title: 'High-Performance SaaS & Web Platforms',
    shortDesc: 'Scalable cloud-native web applications engineered with Next.js, React, Node, and enterprise microservices.',
    features: ['Sub-second Page Speeds', 'Bank-grade Auth & Billing', 'Zero-downtime CI/CD'],
    stats: '⚡ 99.99% SLA',
    users: '100k+ Users',
    price: '$3,900',
    type: 'Starting at',
    previewType: 'saas',
    rating: '4.95',
  },
  {
    id: 'mobile-apps',
    category: 'mobile',
    badge: 'MOBILE APP',
    title: 'Cross-Platform iOS & Android Apps',
    shortDesc: 'Smooth 60fps native performance using React Native & Flutter with offline sync and intuitive gesture design.',
    features: ['Native Device APIs & Sensors', 'In-App Purchases & Wallet', 'Push Notification Engine'],
    stats: '📱 60fps Native',
    users: '4.9 ★ Rating',
    price: '$3,400',
    type: 'Starting at',
    previewType: 'mobile',
    rating: '4.92',
  },
  {
    id: 'website-design',
    category: 'design',
    badge: 'WEBSITE DESIGN',
    title: 'Conversion-Focused UI/UX Systems',
    shortDesc: 'World-class visual branding, responsive websites, and Figma design tokens engineered to maximize customer trust.',
    features: ['Complete Figma Token System', 'Interactive Prototypes', 'Accessible & Mobile-First'],
    stats: '🎨 Design Systems',
    users: '3.4x Conversion',
    price: '$1,900',
    type: 'Starting at',
    previewType: 'design',
    rating: '5.0',
  },
  {
    id: 'digital-marketing',
    category: 'marketing',
    badge: 'DIGITAL MARKETING',
    title: 'Data-Driven SEO & Growth Funnels',
    shortDesc: 'Technical SEO dominance, high-ROI paid ad acquisition, and rigorous A/B conversion rate optimization.',
    features: ['Technical & Content SEO', 'Full Funnel Attribution', 'Viral Referral Loops'],
    stats: '📈 +340% Traffic',
    users: '10x Avg ROI',
    price: '$1,500',
    type: 'per month',
    previewType: 'growth',
    rating: '4.96',
  }
];

export default function PopularSolutions({ 
  searchQuery, 
  activeCategory, 
  onSelectService, 
  onOpenPlayground 
}) {
  // Filter based on search query and category
  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = 
      activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = 
      !searchQuery || 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.badge.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="popular-services-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="popular-header">
          <div className="popular-tag">OUR CORE CAPABILITIES</div>
          <h2 className="popular-title">Our Featured Solutions</h2>
          <p className="popular-subtitle">
            Engineered with precision to take your vision from zero to production at record speed.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-cards-grid">
          {filteredServices.length === 0 ? (
            <div className="no-results-box">
              <p>No software services match your search "{searchQuery}".</p>
              <button 
                type="button" 
                className="btn-white mt-4"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredServices.map((item) => (
              <div key={item.id} className="service-card-white">
                
                {/* Visual Preview Header on Card */}
                <div className="service-card-preview">
                  {item.previewType === 'terminal' && (
                    <div className="preview-terminal">
                      <div className="preview-terminal-header">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                        <span className="terminal-title">agent.run_task()</span>
                        <span className="terminal-live-badge">LIVE</span>
                      </div>
                      <div className="terminal-body">
                        <div className="term-line"><span className="term-prefix">&gt;</span> Initializing Autonomous Agent...</div>
                        <div className="term-line term-success"><span className="term-prefix">&gt;</span> Connected to Vector DB: 1.2M chunks</div>
                        <div className="term-line term-accent"><span className="term-prefix">&gt;</span> Task resolved in 140ms ✨</div>
                      </div>
                    </div>
                  )}

                  {item.previewType === 'saas' && (
                    <div className="preview-saas">
                      <div className="saas-header">
                        <div className="saas-indicator"></div>
                        <span className="saas-status">SaaS Platform: Healthy</span>
                        <span className="saas-metric">42ms latency</span>
                      </div>
                      <div className="saas-chart-mock">
                        <div className="saas-bar bar-1"></div>
                        <div className="saas-bar bar-2"></div>
                        <div className="saas-bar bar-3"></div>
                        <div className="saas-bar bar-4"></div>
                        <div className="saas-bar bar-5"></div>
                      </div>
                    </div>
                  )}

                  {item.previewType === 'mobile' && (
                    <div className="preview-mobile">
                      <div className="mobile-pill-notch"></div>
                      <div className="mobile-inner-screen">
                        <div className="mobile-card-mini">
                          <span className="mobile-mini-title">⚡ Instant Pay & Sync</span>
                          <span className="mobile-mini-val">60fps Smooth</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {item.previewType === 'design' && (
                    <div className="preview-design">
                      <div className="color-swatches-row">
                        <div className="swatch sw-1"></div>
                        <div className="swatch sw-2"></div>
                        <div className="swatch sw-3"></div>
                        <div className="swatch sw-4"></div>
                      </div>
                      <div className="design-wireframe-row">
                        <div className="wf-btn">Component UI</div>
                        <div className="wf-badge">Figma 100%</div>
                      </div>
                    </div>
                  )}

                  {item.previewType === 'growth' && (
                    <div className="preview-growth">
                      <div className="growth-metric-badge">
                        <TrendingUp size={14} />
                        <span>+340% Organic Traffic</span>
                      </div>
                      <div className="growth-graph-line">
                        <div className="growth-pulse-dot"></div>
                      </div>
                    </div>
                  )}

                  {/* Card category badge tag */}
                  <span className="service-category-badge">{item.badge}</span>
                </div>

                {/* Card Body */}
                <div className="service-card-body">
                  <h3 className="service-card-title">{item.title}</h3>
                  <p className="service-card-desc">{item.shortDesc}</p>

                  <div className="service-features-list">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="service-feat-item">
                        <Check size={14} className="feat-check-icon" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Footer with Pricing and Action */}
                  <div className="service-card-footer">
                    <div className="pricing-wrap">
                      <span className="price-type">{item.type}</span>
                      <span className="price-number">{item.price}</span>
                    </div>

                    <button 
                      type="button" 
                      className="btn-card-action"
                      onClick={() => onSelectService(item)}
                      title={`Configure ${item.title}`}
                    >
                      <span>Explore</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>

                </div>

              </div>
            ))
          )}
        </div>

        {/* Bottom Agent Demo Highlight Strip */}
        <div className="services-bottom-cta">
          <div className="cta-sparkle-icon">
            <Sparkles size={24} />
          </div>
          <div className="cta-text-wrap">
            <span className="cta-highlight-title">Want to test an autonomous AI agent in real time?</span>
            <span className="cta-highlight-sub">Run queries in our live sandbox playground without any setup.</span>
          </div>
          <button 
            type="button" 
            className="btn-white"
            onClick={onOpenPlayground}
          >
            <Play size={14} fill="currentColor" />
            <span>Launch AI Sandbox</span>
          </button>
        </div>

      </div>
    </section>
  );
}
