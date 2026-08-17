import React, { useState } from 'react';
import { 
  STANDARDS_DATA, 
  COMPANY_INFO 
} from '../data/engineeringData';
import { 
  ShieldCheck, 
  CheckCircle, 
  FileCheck, 
  Award, 
  Cpu, 
  Microscope, 
  Gauge, 
  Droplet, 
  Radio, 
  SearchCheck,
  Check
} from 'lucide-react';

export const StandardsCompliance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'standards' | 'qaLab'>('standards');

  const qaProtocols = [
    {
      title: "3D Coordinate Measuring Machine (CMM)",
      desc: "High-precision 3-axis automated coordinate probing delivering dimensional accuracy down to ±0.002 mm (2 microns) with full inspection reports.",
      icon: "Cpu",
      metric: "±0.002 mm"
    },
    {
      title: "Optical Emission Spectrometry (OES)",
      desc: "Direct chemical composition verification of every raw material heat lot and foundry melt to ensure exact ASTM/DIN chemical grades.",
      icon: "Microscope",
      metric: "100% Melt Verification"
    },
    {
      title: "Hydrostatic & Pneumatic Pressure Test Bench",
      desc: "Hydrostatic test rigs capable of pressurizing marine valves, underwater connectors, and pressure vessels up to 10,000 PSI (690 Bar).",
      icon: "Gauge",
      metric: "Up to 10,000 PSI"
    },
    {
      title: "Non-Destructive Testing (NDT / RT / PT / UT)",
      desc: "ASNT Level II certified personnel performing liquid penetrant, magnetic particle, ultrasonic, and 100% radiographic weld inspections.",
      icon: "SearchCheck",
      metric: "ASME Sec IX / ISO 9606"
    },
    {
      title: "Salt Fog Environmental Chamber",
      desc: "Continuous ASTM B117 salt fog corrosion testing validating subsea coatings, passivated stainless shells, and marine bronze alloys.",
      icon: "Droplet",
      metric: "1,000+ Hours ASTM B117"
    },
    {
      title: "EN 10204 Type 3.1 & 3.2 Material Traceability",
      desc: "Complete mill test certificates (MTR) verifying tensile strength, yield, elongation, Charpy V-notch impact, and heat numbers.",
      icon: "FileCheck",
      metric: "Full Heat Traceability"
    }
  ];

  return (
    <section id="standards" className="py-20 bg-white relative engineering-grid border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#31AC6E]/10 text-[#31AC6E] text-xs font-bold uppercase tracking-wider mb-3 border border-[#31AC6E]/30">
            <ShieldCheck className="w-4 h-4" />
            <span>Rigorous Quality Assurance</span>
          </div>

          <h2 className="font-tech text-3xl sm:text-4xl font-extrabold text-[#1B273F] uppercase tracking-tight">
            Standards, <span className="text-[#F15A2B]">Certifications</span> & Compliance
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Every component manufactured at Star Engineering Works conforms to recognized international standards, verified by comprehensive in-house metallurgical and dimensional inspection.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveTab('standards')}
              className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'standards'
                  ? 'bg-[#1B273F] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Product & Machining Standards
            </button>
            <button
              onClick={() => setActiveTab('qaLab')}
              className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'qaLab'
                  ? 'bg-[#1B273F] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Quality Assurance & Testing Lab
            </button>
          </div>
        </div>

        {/* Standards Content */}
        {activeTab === 'standards' && (
          <div className="space-y-10 animate-fadeIn">
            
            {/* Product Standards Grid */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-[#F15A2B]" />
                <h3 className="font-tech text-xl font-bold text-[#1B273F] uppercase">
                  1. International Product Standards
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {STANDARDS_DATA.productStandards.map((std) => (
                  <div
                    key={std.code}
                    className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-[#F15A2B]/40 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-[#1B273F] text-white flex items-center justify-center font-tech text-lg font-bold mb-3 shadow-sm">
                        {std.code}
                      </div>
                      <h4 className="text-xs font-bold text-[#1B273F] leading-snug mb-1">
                        {std.name}
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed mt-2">
                        {std.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-slate-200 text-[10px] font-mono-code font-bold text-[#31AC6E] flex items-center">
                      <Check className="w-3 h-3 mr-1" /> Fully Compliant
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Machining Standards Grid */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cpu className="w-5 h-5 text-[#F15A2B]" />
                <h3 className="font-tech text-xl font-bold text-[#1B273F] uppercase">
                  2. Machining & Geometrical Standards
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {STANDARDS_DATA.machiningStandards.map((mStd) => (
                  <div
                    key={mStd.code}
                    className="bg-gradient-to-br from-[#1B273F] to-[#141E33] text-white p-6 rounded-xl border border-slate-700 shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono-code text-xs font-bold text-[#F15A2B] bg-[#F15A2B]/15 px-2.5 py-1 rounded border border-[#F15A2B]/30 inline-block mb-3">
                        {mStd.code}
                      </span>
                      <h4 className="font-tech text-base font-bold text-white mb-2">
                        {mStd.name}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {mStd.desc}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-slate-700/80 flex items-center justify-between text-[11px] text-slate-400 font-mono-code">
                      <span>Inspection Verified</span>
                      <span className="text-teal-400 font-bold">100% Certified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ISO 9001:2015 Highlight Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono-code font-bold text-[#F15A2B] uppercase tracking-widest">
                  QUALITY MANAGEMENT SYSTEM
                </span>
                <h3 className="font-tech text-2xl sm:text-3xl font-extrabold text-white">
                  ISO 9001:2015 Certified Manufacturing Facility
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Our certified QMS governs every stage of the lifecycle: contract review, raw material verification, CNC programming, first-article inspection (FAI), in-process statistical process control (SPC), and final pre-dispatch hydrostatic / NDT documentation.
                </p>
              </div>
              <div className="shrink-0 flex items-center space-x-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <ShieldCheck className="w-10 h-10 text-[#31AC6E]" />
                <div className="text-left font-mono-code">
                  <div className="text-xs font-bold text-white">ISO 9001:2015</div>
                  <div className="text-[11px] text-slate-400">Cert. QMS Verified</div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* QA Lab Testing Protocols */}
        {activeTab === 'qaLab' && (
          <div className="animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qaProtocols.map((lab, i) => (
                <div
                  key={lab.title}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#F15A2B]/10 text-[#F15A2B] flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <span className="font-mono-code text-xs font-bold text-teal-600 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                        {lab.metric}
                      </span>
                    </div>

                    <h4 className="font-tech text-base font-bold text-[#1B273F] mb-2 leading-snug">
                      {lab.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {lab.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono-code">
                    <span>Protocol #{i + 1}</span>
                    <span className="text-[#31AC6E] font-bold">100% Traceable</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
