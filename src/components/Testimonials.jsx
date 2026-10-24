import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Founder & CEO, ScaleFlow',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    quote: 'Synthex built our multi-agent AI pipeline from scratch in under 3 weeks. It reduced our support tickets by 78% while maintaining exceptional response accuracy.',
    tag: 'AI Agents & Automation'
  },
  {
    id: 2,
    name: 'Marcus Vance',
    role: 'VP Engineering, Hyperion Health',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    quote: 'Our previous web app struggled at 5k concurrent users. Synthex re-architected it on Next.js & Edge workers. We now handle 80k users with zero slowdown.',
    tag: 'High-Performance Web App'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Chief Product Officer, NovaPay',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    quote: 'The mobile app they engineered reached 100,000 installs within 60 days. The design feels like Apple built it, and the technical execution was flawless.',
    tag: 'iOS & Android App'
  },
  {
    id: 4,
    name: 'Jason Bradley',
    role: 'Growth Director, OmniCommerce',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    quote: 'Our organic search visibility climbed 340% within 4 months of their technical SEO revamp. Synthex connects engineering directly to commercial revenue.',
    tag: 'Digital Marketing & SEO'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        
        {/* Header */}
        <div className="testimonials-header">
          <div className="testimonials-tag">PROOF OF WORK</div>
          <h2 className="testimonials-title">What Our Partners Say</h2>
          <p className="testimonials-sub">
            Trusted by venture-backed startups and Fortune 500 engineering leaders.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="testimonials-grid">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div key={item.id} className="testimonial-card-white">
              
              <div className="testimonial-top-row">
                <div className="author-info">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="author-avatar"
                  />
                  <div>
                    <h4 className="author-name">{item.name}</h4>
                    <span className="author-role">{item.role}</span>
                  </div>
                </div>
                <Quote size={20} className="quote-mark-icon" />
              </div>

              <div className="rating-stars-row">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <p className="testimonial-quote">"{item.quote}"</p>

              <div className="testimonial-service-tag">
                <span>{item.tag}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Pagination Nav */}
        <div className="testimonials-pagination-bar">
          <button 
            type="button" 
            className="testimonial-nav-btn" 
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          
          <div className="pagination-indicators">
            {TESTIMONIALS.slice(0, 3).map((_, idx) => (
              <span 
                key={idx} 
                className={`pagination-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>

          <button 
            type="button" 
            className="testimonial-nav-btn" 
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
