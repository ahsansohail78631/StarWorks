import React, { useState } from 'react';
import { 
  UNDERWATER_CONNECTOR_DATA, 
  COMPANY_INFO 
} from '../data/engineeringData';
import { 
  Anchor, 
  ShieldCheck, 
  Layers, 
  Gauge, 
  CheckCircle, 
  Download, 
  FileText, 
  Zap, 
  Sliders, 
  Radio, 
  Cpu, 
  Compass, 
  ArrowRight,
  ExternalLink,
  Droplets,
  HardDrive
} from 'lucide-react';

interface UnderwaterConnectorsProps {
  onOpenQuote: (productName?: string) => void;
}

export const UnderwaterConnectorsDeepDive: React.FC<UnderwaterConnectorsProps> = ({ onOpenQuote }) => {
  const [activeModelIndex, setActiveModelIndex] = useState<number>(0);
  const [simulationDepth, setSimulationDepth] = useState<number>(3000); // in meters

  const activeModel = UNDERWATER_CONNECTOR_DATA.models[activeModelIndex];
  const calculatedPressureBar = Math.round(simulationDepth / 10);
  const calculatedPressurePSI = Math.round(calculatedPressureBar * 14.5038);

  const handleDownloadDatasheet = () => {
    // Generate a downloadable text/markdown datasheet spec file
    const content = `===============================================================
STAR ENGINEERING WORKS - TECHNICAL DATASHEET
PRODUCT: UNDERWATER SUBSEA CONNECTOR - ${activeModel.model}
===============================================================
Company: M/s Star Engineering Works
Location: Korangi Industrial Area, Karachi, Pakistan
Certification: ISO 9001:2015
Contact: ${COMPANY_INFO.phone1} | ${COMPANY_INFO.emailGeneral}
Website: ${COMPANY_INFO.website}

--- PRODUCT SPECIFICATIONS ---
Model Number: ${activeModel.model}
Configuration: ${activeModel.type}
Depth Rating: ${activeModel.depthRating}
Current / Voltage Rating: ${activeModel.currentVoltage}
Shell Material: ${activeModel.material}
Contact Pin Metallurgy: ${activeModel.pinMaterial}
Insulation Resistance: >1,000 MΩ @ 500V DC
Contact Resistance: <5 mΩ
Operating Temperature: -20°C to +85°C
Sealing Mechanism: Dual Radial O-Rings (FKM / NBR) + Vulcanized Boot
Standard Compliance: MIL-STD-202G, ISO 13628-6, ASTM B117

--- QUALITY ASSURANCE PROTOCOLS ---
1. Hydrostatic Chamber Pressure Test (1.5x working depth)
2. High-Voltage Dielectric Withstand Test
3. 1,000-Hour ASTM B117 Salt Spray Corrosion Validation
4. 100% Helium Mass Spectrometer Leak Detection

100% Indigenously Designed, Tested & Produced in Karachi, Pakistan.
===============================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `StarEngg_Underwater_Connector_${activeModel.model}_Datasheet.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="underwater-connectors" className="py-20 bg-[#111A2C] text-white relative blueprint-pattern border-b border-slate-700">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F15A2B]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-500/15 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-500/30">
            <Anchor className="w-3.5 h-3.5 text-teal-400" />
            <span>Indigenous High-Tech Flagship Innovation</span>
          </div>

          <h2 className="font-tech text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            {UNDERWATER_CONNECTOR_DATA.headline}
          </h2>
          
          <p className="mt-2 text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#F15A2B] to-[#ff9270] font-semibold">
            {UNDERWATER_CONNECTOR_DATA.subheadline}
          </p>

          <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {UNDERWATER_CONNECTOR_DATA.about}
          </p>
        </div>

        {/* 2-Column Product Deep Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Interactive Schematic Visualizer & Pin Selector */}
          <div className="lg:col-span-7 bg-[#17233B] rounded-2xl border border-slate-700 shadow-2xl p-6 relative overflow-hidden">
            
            {/* Top Interactive Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/80 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
                <span className="text-xs font-mono-code font-bold text-teal-300">ACTIVE MODEL: {activeModel.model}</span>
              </div>
              <span className="text-[11px] font-mono-code bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700">
                100% Indigenous Pakistani R&D
              </span>
            </div>

            {/* Model Selection Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {UNDERWATER_CONNECTOR_DATA.models.map((mod, idx) => (
                <button
                  key={mod.model}
                  onClick={() => setActiveModelIndex(idx)}
                  className={`p-2.5 rounded-lg text-left transition-all border ${
                    activeModelIndex === idx
                      ? 'bg-[#F15A2B]/15 border-[#F15A2B] text-white shadow-sm'
                      : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="font-mono-code text-xs font-bold text-[#F15A2B]">{mod.model}</div>
                  <div className="text-[10px] text-slate-400 truncate">{mod.type}</div>
                </button>
              ))}
            </div>

            {/* 3D Blueprint Cutaway Graphic */}
            <div className="relative bg-[#0C1422] rounded-xl p-6 border border-slate-700/80 overflow-hidden engineering-grid-dark mb-6">
              
              {/* Overlay telemetry */}
              <div className="flex justify-between items-center text-[11px] font-mono-code text-slate-400 mb-2">
                <span>SEW-CAD SCHEMATIC // REV 4</span>
                <span className="text-teal-400">DEPTH: {activeModel.depthRating}</span>
              </div>

              {/* Dynamic SVG Schematic with Pin Representation */}
              <div className="h-52 flex items-center justify-center relative">
                <svg viewBox="0 0 400 160" className="w-full h-full text-teal-400">
                  {/* Connector Outer Housing */}
                  <path d="M 40 45 L 140 45 L 160 30 L 320 30 L 340 45 L 360 45 L 360 115 L 340 115 L 320 130 L 160 130 L 140 115 L 40 115 Z" 
                        fill="#131F33" stroke="#38BDF8" strokeWidth="2" />
                  
                  {/* Locking Collar with knurling lines */}
                  <rect x="70" y="38" width="50" height="84" rx="2" fill="#1E293B" stroke="#F15A2B" strokeWidth="1.5" />
                  <line x1="78" y1="38" x2="78" y2="122" stroke="#F15A2B" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="86" y1="38" x2="86" y2="122" stroke="#F15A2B" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="94" y1="38" x2="94" y2="122" stroke="#F15A2B" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="102" y1="38" x2="102" y2="122" stroke="#F15A2B" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="110" y1="38" x2="110" y2="122" stroke="#F15A2B" strokeWidth="1" strokeDasharray="2 2" />

                  {/* Dual O-Ring Cavities */}
                  <rect x="180" y="30" width="12" height="100" rx="2" fill="#F15A2B" fillOpacity="0.4" stroke="#F15A2B" strokeWidth="1.5" />
                  <rect x="210" y="30" width="12" height="100" rx="2" fill="#F15A2B" fillOpacity="0.4" stroke="#F15A2B" strokeWidth="1.5" />
                  
                  {/* Internal Elastomer Core */}
                  <rect x="240" y="42" width="90" height="76" rx="4" fill="#0F172A" stroke="#2DD4BF" strokeWidth="1" />

                  {/* Contacts according to activeModel */}
                  {activeModelIndex === 0 && (
                    <>
                      {/* 4 Pin layout */}
                      <circle cx="265" cy="62" r="5" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <circle cx="300" cy="62" r="5" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <circle cx="265" cy="98" r="5" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <circle cx="300" cy="98" r="5" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <text x="250" y="150" fill="#FBBF24" fontSize="9" fontFamily="monospace">4x GOLD CONTACTS (10A)</text>
                    </>
                  )}

                  {activeModelIndex === 1 && (
                    <>
                      {/* 8 Pin Ethernet layout */}
                      <circle cx="255" cy="58" r="3.5" fill="#FBBF24" />
                      <circle cx="275" cy="58" r="3.5" fill="#FBBF24" />
                      <circle cx="295" cy="58" r="3.5" fill="#FBBF24" />
                      <circle cx="315" cy="58" r="3.5" fill="#FBBF24" />
                      <circle cx="255" cy="98" r="3.5" fill="#FBBF24" />
                      <circle cx="275" cy="98" r="3.5" fill="#FBBF24" />
                      <circle cx="295" cy="98" r="3.5" fill="#FBBF24" />
                      <circle cx="315" cy="98" r="3.5" fill="#FBBF24" />
                      <text x="245" y="150" fill="#FBBF24" fontSize="9" fontFamily="monospace">8x HIGH SPEED ETHERNET</text>
                    </>
                  )}

                  {activeModelIndex === 2 && (
                    <>
                      {/* 2 Pin Heavy Power */}
                      <circle cx="270" cy="80" r="9" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
                      <circle cx="305" cy="80" r="9" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
                      <text x="240" y="150" fill="#FBBF24" fontSize="9" fontFamily="monospace">2x HEAVY POWER (35A @ 1KV)</text>
                    </>
                  )}

                  {activeModelIndex === 3 && (
                    <>
                      {/* 12 Pin Hybrid */}
                      <circle cx="260" cy="60" r="6" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <circle cx="310" cy="60" r="6" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <circle cx="260" cy="100" r="6" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <circle cx="310" cy="100" r="6" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <circle cx="285" cy="70" r="3" fill="#38BDF8" />
                      <circle cx="285" cy="80" r="3" fill="#38BDF8" />
                      <circle cx="285" cy="90" r="3" fill="#38BDF8" />
                      <text x="235" y="150" fill="#FBBF24" fontSize="9" fontFamily="monospace">12-PIN HYBRID (4 PWR + 8 SIG)</text>
                    </>
                  )}

                  {/* Leader Callouts */}
                  <text x="75" y="25" fill="#F15A2B" fontSize="8" fontFamily="monospace">LOCKING SLEEVE</text>
                  <text x="175" y="20" fill="#F15A2B" fontSize="8" fontFamily="monospace">DUAL O-RING SEAL</text>
                </svg>
              </div>

              {/* Technical Specifications Grid for Active Model */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-800 text-[11px] font-mono-code">
                <div className="bg-slate-900/90 p-2 rounded">
                  <span className="block text-slate-500 text-[10px]">CURRENT/VOLTAGE</span>
                  <span className="text-white font-bold">{activeModel.currentVoltage}</span>
                </div>
                <div className="bg-slate-900/90 p-2 rounded">
                  <span className="block text-slate-500 text-[10px]">SHELL MATERIAL</span>
                  <span className="text-teal-300 font-bold">{activeModel.material}</span>
                </div>
                <div className="bg-slate-900/90 p-2 rounded">
                  <span className="block text-slate-500 text-[10px]">PIN METALLURGY</span>
                  <span className="text-amber-400 font-bold">{activeModel.pinMaterial}</span>
                </div>
                <div className="bg-slate-900/90 p-2 rounded">
                  <span className="block text-slate-500 text-[10px]">DEPTH RATING</span>
                  <span className="text-[#F15A2B] font-bold">{activeModel.depthRating}</span>
                </div>
              </div>

            </div>

            {/* Depth & Hydrostatic Pressure Simulator Tool */}
            <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center">
                  <Gauge className="w-4 h-4 mr-1.5 text-teal-400" />
                  Subsea Hydrostatic Depth Simulator
                </span>
                <span className="font-mono-code text-xs text-teal-300 font-bold">
                  {simulationDepth} Meters ({simulationDepth * 3.28084 | 0} Ft)
                </span>
              </div>

              <input
                type="range"
                min="100"
                max="6000"
                step="100"
                value={simulationDepth}
                onChange={(e) => setSimulationDepth(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#F15A2B]"
              />

              <div className="flex justify-between items-center text-[11px] font-mono-code text-slate-400 mt-2">
                <span>Surface (0m)</span>
                <span className="text-[#F15A2B] font-bold">{calculatedPressureBar} Bar / {calculatedPressurePSI.toLocaleString()} PSI</span>
                <span>Abyssal (6,000m)</span>
              </div>

              <div className="mt-3 text-[11px] text-slate-300 bg-slate-950/60 p-2.5 rounded flex items-center justify-between border border-slate-800">
                <span className="flex items-center">
                  <Droplets className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
                  Sealing Integrity: <strong className="text-emerald-400 ml-1">100% Hermetic Seal Verified</strong>
                </span>
                <span className="text-slate-400">MIL-STD-202G Method 112</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownloadDatasheet}
                className="inline-flex items-center px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 transition-colors"
              >
                <Download className="w-3.5 h-3.5 mr-1.5 text-teal-400" />
                <span>Download {activeModel.model} Datasheet</span>
              </button>

              <button
                onClick={() => onOpenQuote(`Underwater Connector (${activeModel.model})`)}
                className="inline-flex items-center px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#F15A2B] hover:bg-[#d9491d] text-white shadow-lg shadow-[#F15A2B]/30 transition-all ml-auto"
              >
                <span>Inquire About {activeModel.model}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>

          </div>

          {/* Right Column: Key Features, Applications, Testing & Why Star Engineering */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Key Features & Advantages */}
            <div className="bg-[#17233B] p-6 rounded-2xl border border-slate-700 shadow-xl">
              <h3 className="font-tech text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2 text-[#F15A2B]" />
                Key Features & Engineering Advantages
              </h3>
              
              <div className="space-y-3.5">
                {UNDERWATER_CONNECTOR_DATA.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#F15A2B]/20 text-[#F15A2B] flex items-center justify-center shrink-0 mt-0.5 font-mono-code text-[10px] font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-100">{feat.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications List */}
            <div className="bg-[#17233B] p-6 rounded-2xl border border-slate-700 shadow-xl">
              <h3 className="font-tech text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center">
                <Radio className="w-5 h-5 mr-2 text-teal-400" />
                Target Applications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {UNDERWATER_CONNECTOR_DATA.applications.map((app, i) => (
                  <div key={i} className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                    <h4 className="text-xs font-bold text-teal-300">{app.name}</h4>
                    <p className="text-[11px] text-slate-400 mt-1">{app.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality & Testing */}
            <div className="bg-gradient-to-br from-slate-900 to-[#152033] p-5 rounded-xl border border-teal-500/30">
              <div className="flex items-center space-x-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300">Rigorous Quality & Hydrostatic Testing</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {UNDERWATER_CONNECTOR_DATA.testingAndQuality}
              </p>
            </div>

          </div>

        </div>

        {/* Why Star Engineering Works Banner */}
        <div className="bg-gradient-to-r from-[#1B273F] via-[#243555] to-[#1B273F] rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <span className="text-xs font-bold font-mono-code text-[#F15A2B] uppercase tracking-widest">
              NATIONAL SELF-RELIANCE & DEFENSE EXCELLENCE
            </span>
            <h3 className="font-tech text-2xl sm:text-3xl font-extrabold text-white mt-1 uppercase">
              Advancing Pakistan's Marine Capability Through Indigenous Innovation
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              With 40 years of precision manufacturing excellence since 1985, Star Engineering Works continues to advance Pakistan's industrial and naval capabilities through indigenous reverse-engineering and local production. Our Underwater Connector range reflects our commitment to engineering reliability, local innovation, and performance-driven design.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuote("Custom Underwater Connector Requirement")}
                className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#F15A2B] hover:bg-[#d9491d] text-white shadow-lg transition-all"
              >
                Discuss Subsea Requirements with Our Engineers
              </button>
              <span className="text-xs text-slate-400">
                Custom pinouts, backshells, and deep-water pressure ratings available on demand.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
