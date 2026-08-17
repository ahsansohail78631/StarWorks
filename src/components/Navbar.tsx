import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles,
  FileText,
  Compass,
  Cpu,
  Layers,
  Award,
  Users
} from 'lucide-react';
import { COMPANY_INFO } from '../data/engineeringData';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenAssistant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onOpenAssistant }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Core Capacities', href: '#capacities' },
    { name: 'Underwater Connectors', href: '#underwater-connectors' },
    { name: 'Valves & Products', href: '#products' },
    { name: 'Standards & QA', href: '#standards' },
    { name: 'Major Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#131E33] text-slate-300 text-xs py-2 border-b border-slate-700/60 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#F15A2B]" />
              <span>Korangi Industrial Area, Karachi, Pakistan</span>
            </div>
            <a 
              href={`tel:${COMPANY_INFO.phone1.replace(/\s+/g, '')}`} 
              className="flex items-center space-x-1.5 hover:text-[#F15A2B] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F15A2B]" />
              <span>{COMPANY_INFO.phone1}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.emailGeneral}`} 
              className="flex items-center space-x-1.5 hover:text-[#F15A2B] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#F15A2B]" />
              <span>{COMPANY_INFO.emailGeneral}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#31AC6E]/20 text-[#31AC6E] border border-[#31AC6E]/40">
              <ShieldCheck className="w-3 h-3 mr-1" />
              {COMPANY_INFO.iso}
            </span>
            <span className="text-slate-400 font-mono-code text-[11px]">Est. 1985 • 40 Years of Precision</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`bg-[#1B273F] text-white transition-all duration-300 shadow-xl border-b border-slate-700/80 ${isScrolled ? 'py-3 bg-[#1B273F]/95 backdrop-blur-md' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 bg-gradient-to-br from-[#F15A2B] to-[#D94819] rounded-lg p-2 flex items-center justify-center shadow-lg shadow-[#F15A2B]/20 group-hover:scale-105 transition-transform duration-300">
              {/* Engineering Crosshair / Star emblem */}
              <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" strokeDasharray="2 2" />
                <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.5 21 12 17.5 5.5 21 7 14.1 2 9.3 9 8.5 12 2" fill="white" fillOpacity="0.3" />
                <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
                <line x1="12" y1="1" x2="12" y2="23" stroke="#FFFFFF" strokeWidth="1.5" />
                <line x1="1" y1="12" x2="23" y2="12" stroke="#FFFFFF" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <div className="font-tech text-lg md:text-xl font-bold tracking-wider text-white uppercase flex items-center space-x-1.5">
                <span>STAR ENGINEERING</span>
                <span className="text-[#F15A2B]">WORKS</span>
              </div>
              <p className="text-[10px] md:text-xs text-slate-300 tracking-widest uppercase font-medium">
                a passion for precision
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-md text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 transition-all uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenAssistant}
              className="inline-flex items-center px-3 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/30 transition-all shadow-sm"
              title="Ask AI Technical Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-teal-400 animate-pulse" />
              <span>AI Tech Support</span>
            </button>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#F15A2B] hover:bg-[#d9491d] text-white shadow-lg shadow-[#F15A2B]/30 hover:shadow-[#F15A2B]/50 transition-all duration-200 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5" />
              <span>Request a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={onOpenQuote}
              className="sm:hidden px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#F15A2B] text-white"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#131E33] border-b border-slate-700 shadow-2xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <div className="grid grid-cols-1 gap-1 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssistant();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg text-xs font-semibold bg-slate-800 text-teal-300 border border-teal-500/30"
            >
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>AI Engineering Assistant</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#F15A2B] text-white shadow-md"
            >
              <FileText className="w-4 h-4 mr-1" />
              <span>Request Technical Quote</span>
            </button>
          </div>

          <div className="pt-3 text-center text-xs text-slate-400 space-y-1">
            <p className="font-semibold text-slate-300">STAR ENGINEERING WORKS</p>
            <p>{COMPANY_INFO.address}</p>
            <p className="text-[#F15A2B]">{COMPANY_INFO.phone1}</p>
          </div>
        </div>
      )}
    </header>
  );
};
