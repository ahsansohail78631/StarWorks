import React from 'react';
import { 
  Shield, 
  Cpu, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Award, 
  Anchor, 
  Layers, 
  Compass, 
  Gauge, 
  Wrench,
  Download,
  Flame,
  Zap
} from 'lucide-react';
import { COMPANY_INFO } from '../data/engineeringData';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenAssistant }) => {
  return (
    <section id="hero" className="relative bg-[#111A2C] text-white overflow-hidden blueprint-pattern pt-8 pb-16 lg:py-20 border-b border-slate-700/80">
      
      {/* Background Engineering Gear & Grid Overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden">
        {/* Large Rotating Gear SVG Graphic */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] gear-rotate-slow text-slate-500">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,15 A35,35 0 1,0 50,85 A35,35 0 1,0 50,15 M50,30 A20,20 0 1,1 50,70 A20,20 0 1,1 50,30" />
            <rect x="46" y="2" width="8" height="16" rx="2" />
            <rect x="46" y="82" width="8" height="16" rx="2" />
            <rect x="2" y="46" width="16" height="8" rx="2" />
            <rect x="82" y="46" width="16" height="8" rx="2" />
            <rect x="15" y="15" width="8" height="14" rx="2" transform="rotate(45 19 22)" />
            <rect x="75" y="75" width="8" height="14" rx="2" transform="rotate(45 79 82)" />
            <rect x="15" y="75" width="8" height="14" rx="2" transform="rotate(-45 19 82)" />
            <rect x="75" y="15" width="8" height="14" rx="2" transform="rotate(-45 79 22)" />
          </svg>
        </div>

        {/* Coordinate crosshairs */}
        <div className="absolute top-1/4 left-10 text-slate-600 font-mono-code text-[10px] space-y-1">
          <div>LAT: 24.8329° N</div>
          <div>LON: 67.1124° E</div>
          <div>SECTOR 6F // KORANGI</div>
          <div>TOLERANCE: ±0.003mm</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#F15A2B]/15 text-[#F15A2B] border border-[#F15A2B]/40 tracking-wider uppercase backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#F15A2B] animate-ping mr-2"></span>
            Established 1985 • 40 Years of Precision
          </div>

          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 tracking-wider uppercase">
            <Shield className="w-3.5 h-3.5 mr-1.5" />
            ISO 9001:2015 Certified
          </div>

          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30 tracking-wider uppercase">
            <Anchor className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
            Indigenous Subsea & Defense Innovation
          </div>
        </div>

        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h1 className="font-tech text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white uppercase">
                A Passion for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F15A2B] via-[#ff7b52] to-[#ffa07a]">Precision</span> Engineering
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                M/s <strong className="text-white font-semibold">Star Engineering Works</strong> delivers turnkey multi-axis CNC machining, deep-water underwater connectors, high-pressure industrial valves, and heavy fabrication. Serving Pakistan’s strategic defense, power generation, and petrochemical industries since 1985.
              </p>
            </div>

            {/* Key Capability Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start space-x-2.5 bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-[#F15A2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Up to 6-Axis CNC Machining</h4>
                  <p className="text-[11px] text-slate-400">Micro-tolerances down to ±0.003mm on exotic alloys & titanium.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-[#31AC6E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Subsea Underwater Connectors</h4>
                  <p className="text-[11px] text-slate-400">Tested to 600 Bar (6000m depth) for naval and ROV applications.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-[#31AC6E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">11+ In-House Capacities</h4>
                  <p className="text-[11px] text-slate-400">From CAD/CAM, 3D printing, casting to 6kW laser & X-Ray TIG welding.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-[#F15A2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Major Tier-1 Supplier</h4>
                  <p className="text-[11px] text-slate-400">Trusted by POF, Siemens, K-Electric, Aisha Steel & Engro.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider bg-[#F15A2B] hover:bg-[#d9491d] text-white shadow-xl shadow-[#F15A2B]/30 hover:shadow-[#F15A2B]/50 transition-all duration-200 active:scale-95 group"
              >
                <span>Request a Technical Quote</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#capacities"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-600/80 transition-all"
              >
                <Cpu className="w-4 h-4 mr-2 text-[#F15A2B]" />
                <span>Explore Capacities</span>
              </a>

              <a
                href="#underwater-connectors"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-lg text-sm font-semibold text-teal-300 hover:text-teal-200 transition-colors"
              >
                <Anchor className="w-4 h-4 mr-1.5 text-teal-400" />
                <span>Underwater Connectors</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Blueprint & Featured Hardware Showcase */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-b from-[#1B273F] to-[#141F33] rounded-2xl p-5 border border-slate-700 shadow-2xl overflow-hidden">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="font-mono-code text-[11px] text-slate-400 pl-2">STAR-CAD // SPEC-V4.2</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-[#F15A2B]/20 text-[#F15A2B] border border-[#F15A2B]/40 font-bold">
                  MIL-STD / ASME
                </span>
              </div>

              {/* Blueprint Graphic / Interactive Component Card */}
              <div className="relative bg-[#0E1524] rounded-xl p-5 border border-slate-800 overflow-hidden engineering-grid">
                
                {/* Tech Badges floating */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-teal-400 tracking-wider">Flagship Product</span>
                    <h3 className="font-tech text-xl font-bold text-white">Underwater Connector Shell</h3>
                    <p className="text-xs text-slate-400">SS 316L / Titanium • Hydrostatic 600 Bar</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono-code text-[#F15A2B] font-bold">±0.003 mm</span>
                    <p className="text-[10px] text-slate-400">CNC Tolerance</p>
                  </div>
                </div>

                {/* Technical Wireframe Visual Render */}
                <div className="relative h-44 flex items-center justify-center my-2 bg-gradient-to-r from-slate-900/80 via-slate-800/40 to-slate-900/80 rounded-lg border border-slate-700/50 p-2">
                  {/* Schematic Vector Drawing */}
                  <svg viewBox="0 0 320 140" className="w-full h-full text-teal-400/90 drop-shadow-[0_0_8px_rgba(45,212,191,0.4)]">
                    {/* Connector Shell Silhouette */}
                    <rect x="30" y="35" width="260" height="70" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                    <rect x="50" y="45" width="220" height="50" rx="3" fill="#132035" fillOpacity="0.8" stroke="#F15A2B" strokeWidth="2" />
                    
                    {/* Threading ridges */}
                    <line x1="60" y1="45" x2="60" y2="95" stroke="#38BDF8" strokeWidth="1.5" />
                    <line x1="68" y1="45" x2="68" y2="95" stroke="#38BDF8" strokeWidth="1.5" />
                    <line x1="76" y1="45" x2="76" y2="95" stroke="#38BDF8" strokeWidth="1.5" />
                    <line x1="84" y1="45" x2="84" y2="95" stroke="#38BDF8" strokeWidth="1.5" />
                    
                    {/* O-Ring Grooves */}
                    <rect x="110" y="40" width="14" height="60" rx="2" fill="#F15A2B" fillOpacity="0.3" stroke="#F15A2B" strokeWidth="1.5" />
                    <rect x="135" y="40" width="14" height="60" rx="2" fill="#F15A2B" fillOpacity="0.3" stroke="#F15A2B" strokeWidth="1.5" />
                    <text x="112" y="30" fill="#F15A2B" fontSize="8" fontFamily="monospace">DUAL O-RING</text>
                    
                    {/* Pins */}
                    <circle cx="210" cy="55" r="4" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
                    <circle cx="230" cy="55" r="4" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
                    <circle cx="210" cy="85" r="4" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
                    <circle cx="230" cy="85" r="4" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
                    <circle cx="220" cy="70" r="5" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
                    <text x="200" y="115" fill="#FBBF24" fontSize="8" fontFamily="monospace">GOLD PINS (MIL-STD)</text>

                    {/* Dimension lines */}
                    <line x1="30" y1="125" x2="290" y2="125" stroke="#94A3B8" strokeWidth="1" />
                    <line x1="30" y1="120" x2="30" y2="130" stroke="#94A3B8" strokeWidth="1" />
                    <line x1="290" y1="120" x2="290" y2="130" stroke="#94A3B8" strokeWidth="1" />
                    <text x="135" y="135" fill="#94A3B8" fontSize="8" fontFamily="monospace">L = 185.00 mm</text>
                  </svg>
                </div>

                {/* Micro Telemetry Grid */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800 text-center font-mono-code">
                  <div className="bg-slate-900/90 p-2 rounded border border-slate-800">
                    <span className="block text-[10px] text-slate-400 uppercase">Max Depth</span>
                    <span className="text-xs font-bold text-teal-400">6,000 m</span>
                  </div>
                  <div className="bg-slate-900/90 p-2 rounded border border-slate-800">
                    <span className="block text-[10px] text-slate-400 uppercase">Hydro Pressure</span>
                    <span className="text-xs font-bold text-[#F15A2B]">600 Bar</span>
                  </div>
                  <div className="bg-slate-900/90 p-2 rounded border border-slate-800">
                    <span className="block text-[10px] text-slate-400 uppercase">Insulation</span>
                    <span className="text-xs font-bold text-emerald-400">&gt;1,000 MΩ</span>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Feature Tag */}
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center">
                  <Compass className="w-3.5 h-3.5 text-[#F15A2B] mr-1.5" />
                  Reverse Engineered in Pakistan
                </span>
                <a
                  href="#underwater-connectors"
                  className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center text-xs"
                >
                  View Datasheet <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Industrial Stats Counter Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="font-tech text-3xl sm:text-4xl font-extrabold text-[#F15A2B]">1985</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Year Established</div>
            <div className="text-[11px] text-slate-400">Nearly 4 Decades of Excellence</div>
          </div>

          <div className="space-y-1">
            <div className="font-tech text-3xl sm:text-4xl font-extrabold text-white">11+</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Core Capacities</div>
            <div className="text-[11px] text-slate-400">In-House Manufacturing</div>
          </div>

          <div className="space-y-1">
            <div className="font-tech text-3xl sm:text-4xl font-extrabold text-teal-400">±0.003mm</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Precision Tolerance</div>
            <div className="text-[11px] text-slate-400">Multi-Axis Swiss & CNC</div>
          </div>

          <div className="space-y-1">
            <div className="font-tech text-3xl sm:text-4xl font-extrabold text-emerald-400">100%</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Indigenous Quality</div>
            <div className="text-[11px] text-slate-400">ISO 9001:2015 Certified</div>
          </div>
        </div>

      </div>
    </section>
  );
};
