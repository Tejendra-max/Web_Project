import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandBanner from './components/BrandBanner';
import SearchAndFilter from './components/SearchAndFilter';
import PopularSolutions from './components/PopularSolutions';
import Benefits from './components/Benefits';
import PartnerPerks from './components/PartnerPerks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import AiPlaygroundModal from './components/AiPlaygroundModal';
import './App.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState({});

  const handleOpenQuote = (data = {}) => {
    setQuoteInitialData(data);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteInitialData({});
  };

  const handleSelectService = (service) => {
    handleOpenQuote({
      title: service.title,
      selectedServices: [service.category],
      price: service.price,
    });
  };

  const handleSearchSubmit = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Navigation Bar */}
      <Navbar 
        onOpenQuote={() => handleOpenQuote()} 
        onOpenPlayground={() => setIsPlaygroundOpen(true)} 
      />

      <main>
        {/* Hero Section */}
        <Hero 
          onOpenQuote={() => handleOpenQuote()} 
          onOpenPlayground={() => setIsPlaygroundOpen(true)} 
        />

        {/* Brand Integration Infinite Ribbon */}
        <BrandBanner />

        {/* Search and Category Filter */}
        <SearchAndFilter 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onSearchSubmit={handleSearchSubmit}
        />

        {/* Featured Software & AI Solutions */}
        <PopularSolutions 
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          onSelectService={handleSelectService}
          onOpenPlayground={() => setIsPlaygroundOpen(true)}
        />

        {/* Benefits & Engineering Squad Quadrant */}
        <Benefits 
          onOpenQuote={() => handleOpenQuote()} 
        />

        {/* Partnership Perks & Interactive Scope Estimator */}
        <PartnerPerks 
          onOpenQuote={handleOpenQuote} 
        />

        {/* Testimonials & Proof of Work */}
        <Testimonials />
      </main>

      {/* Footer & Newsletter */}
      <Footer 
        onOpenQuote={() => handleOpenQuote()} 
        onOpenPlayground={() => setIsPlaygroundOpen(true)} 
      />

      {/* Quote / Scope Request Modal */}
      <QuoteModal 
        key={isQuoteOpen ? JSON.stringify(quoteInitialData) : 'closed'}
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialData={quoteInitialData}
      />

      {/* Interactive AI Agent Playground Sandbox */}
      <AiPlaygroundModal 
        isOpen={isPlaygroundOpen}
        onClose={() => setIsPlaygroundOpen(false)}
        onOpenQuote={handleOpenQuote}
      />
    </div>
  );
}
