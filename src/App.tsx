import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { CapacitiesSection } from './components/CapacitiesSection';
import { UnderwaterConnectorsDeepDive } from './components/UnderwaterConnectorsDeepDive';
import { ValvesAndProducts } from './components/ValvesAndProducts';
import { StandardsCompliance } from './components/StandardsCompliance';
import { MajorClients } from './components/MajorClients';
import { ContactAndFacility } from './components/ContactAndFacility';
import { Footer } from './components/Footer';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { TechnicalAssistantDrawer } from './components/TechnicalAssistantDrawer';
import { MessageSquare, Sparkles, FileText, Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/engineeringData';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string | undefined>(undefined);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const handleOpenQuote = (serviceName?: string) => {
    setSelectedQuoteService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Star Engineering Works! I am interested in your manufacturing services & underwater connectors.`
    );
    window.open(`https://wa.me/922135888950?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#F15A2B] selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        onOpenQuote={() => handleOpenQuote()}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onOpenAssistant={() => setIsAssistantOpen(true)}
        />

        {/* 2. About Us Section (Corporate History, Vision, Mission 5 Pillars, Why Choose Us) */}
        <AboutUs />

        {/* 3. Core Capacities (11 In-House Capacities & Technical Specs) */}
        <CapacitiesSection
          onSelectCapacityForQuote={(capacityTitle) => handleOpenQuote(capacityTitle)}
        />

        {/* 4. Underwater Connectors (Indigenous Flagship Deep Dive & Hydrostatic Depth Simulator) */}
        <UnderwaterConnectorsDeepDive
          onOpenQuote={(product) => handleOpenQuote(product)}
        />

        {/* 5. Industrial Valves, Flanges & Precision Products Catalog */}
        <ValvesAndProducts
          onOpenQuote={(prod) => handleOpenQuote(prod)}
        />

        {/* 6. Standards & Compliance (ASTM, ASME, ISO, BS, DIN, ISO 16090-1:2007, ISO 9013, ISO 10204, QA Lab) */}
        <StandardsCompliance />

        {/* 7. Major Clients (POF, Siemens, K-Electric, Aisha Steel, Engro Polymer, Xometry) */}
        <MajorClients />

        {/* 8. Contact & Facility (Korangi Industrial Area, Map, Form, Phone, Email) */}
        <ContactAndFacility />

      </main>

      {/* Footer */}
      <Footer
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none">
        
        {/* WhatsApp Quick Trigger */}
        <button
          onClick={handleOpenWhatsApp}
          className="pointer-events-auto p-3 rounded-full bg-[#31AC6E] hover:bg-[#28925c] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group"
          title="Direct WhatsApp Inquiry"
          aria-label="Direct WhatsApp Inquiry"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-tech text-xs font-bold uppercase px-0 group-hover:px-2">
            WhatsApp
          </span>
        </button>

        {/* AI Engineering Support Trigger */}
        <button
          onClick={() => setIsAssistantOpen(true)}
          className="pointer-events-auto p-3 rounded-full bg-[#1B273F] hover:bg-slate-800 text-teal-300 border border-teal-500/40 shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group"
          title="AI Technical Consultant"
          aria-label="AI Technical Consultant"
        >
          <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-tech text-xs font-bold uppercase px-0 group-hover:px-2 text-teal-200">
            AI Assistant
          </span>
        </button>

        {/* Request a Quote Floating Button */}
        <button
          onClick={() => handleOpenQuote()}
          className="pointer-events-auto px-4 py-3 rounded-full bg-[#F15A2B] hover:bg-[#d9491d] text-white shadow-xl shadow-[#F15A2B]/40 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center space-x-2 font-tech font-bold text-xs uppercase tracking-wider"
          title="Request a Quote"
        >
          <FileText className="w-4 h-4" />
          <span>Quick RFQ</span>
        </button>

      </div>

      {/* Interactive RFQ Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={selectedQuoteService}
      />

      {/* AI Engineering Assistant Drawer */}
      <TechnicalAssistantDrawer
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        onOpenQuote={(service) => {
          setIsAssistantOpen(false);
          handleOpenQuote(service);
        }}
      />

    </div>
  );
}
