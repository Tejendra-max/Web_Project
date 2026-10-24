import React from 'react';
import { Search, Bot, Globe, Smartphone, Palette, TrendingUp, Sparkles } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Services', icon: Sparkles },
  { id: 'ai', label: 'AI Agents', icon: Bot },
  { id: 'web', label: 'Web Apps', icon: Globe },
  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
  { id: 'design', label: 'Website Design', icon: Palette },
  { id: 'marketing', label: 'Digital Marketing', icon: TrendingUp },
];

export default function SearchAndFilter({ 
  searchQuery, 
  setSearchQuery, 
  activeCategory, 
  setActiveCategory,
  onSearchSubmit
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) onSearchSubmit();
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="search-filter-section">
      <div className="container">
        <div className="search-box-card">
          <h2 className="search-heading">Explore Our Software Capabilities</h2>
          <p className="search-subheading">
            Find tailored engineering solutions for your product stage
          </p>

          <form onSubmit={handleSubmit} className="search-form-wrapper">
            <div className="search-input-field">
              <Search size={20} className="search-lens-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search AI agents, Next.js web apps, iOS/Android, Figma UI, SEO growth..."
                aria-label="Search software services"
              />
            </div>
            <button type="submit" className="btn-primary search-submit-btn">
              <span>Search</span>
            </button>
          </form>

          {/* Quick Category Chips */}
          <div className="category-chips-row">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`category-chip ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    const el = document.getElementById('services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Icon size={15} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
