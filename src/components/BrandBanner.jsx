import React from 'react';
import { Cpu, Cloud, Database, Layers, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';

const BRANDS = [
  { name: 'OpenAI Stack', icon: Sparkles, desc: 'Enterprise Models' },
  { name: 'Microsoft Azure', icon: Cloud, desc: 'Cloud Infrastructure' },
  { name: 'Google Cloud', icon: Globe, desc: 'Global VPC' },
  { name: 'Amazon AWS', icon: Database, desc: 'High Availability' },
  { name: 'Stripe Verified', icon: ShieldCheck, desc: 'Payment Rails' },
  { name: 'Next.js & React', icon: Layers, desc: 'Modern Frontend' },
  { name: 'FastAPI & Rust', icon: Zap, desc: 'Low-latency Microservices' },
  { name: 'Docker & K8s', icon: Cpu, desc: 'Container Orchestration' },
];

export default function BrandBanner() {
  return (
    <section className="brand-banner-section">
      <div className="brand-marquee-container">
        <div className="brand-marquee-track">
          {/* Double list for smooth infinite scroll */}
          {[...BRANDS, ...BRANDS].map((brand, idx) => {
            const Icon = brand.icon;
            return (
              <div key={idx} className="brand-item">
                <div className="brand-icon-wrap">
                  <Icon size={18} />
                </div>
                <span className="brand-name">{brand.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
