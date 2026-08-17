import React from 'react';
import { 
  COMPANY_INFO, 
  CORE_CAPACITIES 
} from '../data/engineeringData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ShieldCheck, 
  ArrowUp, 
  FileText, 
  Compass,
  Cpu,
  Anchor,
  Layers
} from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#131E33] text-slate-300 border-t border-slate-700/80 pt-16 pb-12 relative overflow-hidden">
      
      {/* Top Graphic Accent Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F15A2B] via-[#31AC6E] to-[#F15A2B]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#F15A2B] rounded-lg p-1.5 flex items-center justify-center shadow-lg shadow-[#F15A2B]/20">
                <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-none stroke-current stroke-2">
                  <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.5 21 12 17.5 5.5 21 7 14.1 2 9.3 9 8.5 12 2" fill="white" fillOpacity="0.4" />
                  <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
                </svg>
              </div>
              <div>
                <div className="font-tech text-lg font-bold tracking-wider text-white uppercase">
                  STAR ENGINEERING <span className="text-[#F15A2B]">WORKS</span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono-code uppercase tracking-widest">
                  a passion for precision
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              M/s Star Engineering Works is an ISO 9001:2015 certified company established in 1985. Delivering high-precision CNC multi-axis machining, deep-water underwater connectors, industrial valves, and defense components across Pakistan.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-mono-code font-semibold bg-[#31AC6E]/15 text-[#31AC6E] border border-[#31AC6E]/30">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                {COMPANY_INFO.iso}
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-mono-code font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                Est. 1985
              </span>
            </div>
          </div>

          {/* Column 2: 11 Core Capacities Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-tech text-sm font-bold uppercase text-white tracking-wider flex items-center">
              <Cpu className="w-4 h-4 mr-1.5 text-[#F15A2B]" /> Core Capacities
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {CORE_CAPACITIES.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <a href="#capacities" className="hover:text-white hover:text-[#F15A2B] transition-colors truncate block">
                    • {c.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#capacities" className="text-teal-400 hover:underline font-semibold block pt-1">
                  View all 11 in-house capacities →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Flagship Products & Standards (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-tech text-sm font-bold uppercase text-white tracking-wider flex items-center">
              <Anchor className="w-4 h-4 mr-1.5 text-teal-400" /> Products
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#underwater-connectors" className="hover:text-white transition-colors block">
                  Underwater Connectors
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors block">
                  Industrial Valves
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors block">
                  ANSI/ASME Flanges
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors block">
                  Defense Spares (POF)
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-white transition-colors block">
                  Standards Compliance
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-white transition-colors block">
                  Major Clients
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Facility & Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-tech text-sm font-bold uppercase text-white tracking-wider flex items-center">
              <MapPin className="w-4 h-4 mr-1.5 text-[#F15A2B]" /> Head Office & Works
            </h4>
            
            <div className="text-xs text-slate-400 space-y-2.5">
              <p className="leading-relaxed">
                {COMPANY_INFO.address}
              </p>
              
              <div className="space-y-1 font-mono-code">
                <div className="text-slate-200">Tel: {COMPANY_INFO.phone1}</div>
                <div className="text-slate-200">Tel: {COMPANY_INFO.phone2}</div>
                <div className="text-[#F15A2B]">Email: {COMPANY_INFO.emailGeneral}</div>
                <div className="text-slate-400">Direct: {COMPANY_INFO.emailDirect}</div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#F15A2B] hover:bg-[#d9491d] text-white shadow-md transition-all flex items-center justify-center space-x-1"
                >
                  <FileText className="w-3.5 h-3.5 mr-1" />
                  <span>Request Engineering Quote</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Utility & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono-code">
          <div>
            © 1985 – {new Date().getFullYear()} <strong className="text-slate-300">STAR ENGINEERING WORKS</strong>. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <span>ASTM • ASME • ISO • BS • DIN</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
