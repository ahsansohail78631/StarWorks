import React, { useState } from 'react';
import { 
  MAJOR_CLIENTS, 
  Client 
} from '../data/engineeringData';
import { 
  Building2, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Globe, 
  ExternalLink, 
  CheckCircle2, 
  Award,
  ChevronRight
} from 'lucide-react';

export const MajorClients: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Defense & Strategic', 'Energy & Utilities', 'Steel & Heavy Industry', 'Chemical & Petrochemical', 'Global Supply Chain'];

  const filteredClients = MAJOR_CLIENTS.filter((client) => {
    return selectedCategory === 'All' || client.category === selectedCategory;
  });

  return (
    <section id="clients" className="py-20 bg-slate-50 relative engineering-grid border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1B273F]/10 text-[#1B273F] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F15A2B]"></span>
            <span>Trusted Industrial Partnerships</span>
          </div>

          <h2 className="font-tech text-3xl sm:text-4xl font-extrabold text-[#1B273F] uppercase tracking-tight">
            Major <span className="text-[#F15A2B]">Clients</span> & Strategic Partners
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            For nearly four decades, Pakistan's critical defense factories, national power utilities, multinational giants, and global on-demand networks have relied on Star Engineering Works for precision components.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#1B273F] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#F15A2B]/40 transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header Logo Emblem & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1B273F] to-[#121E33] text-white flex items-center justify-center font-tech font-extrabold text-sm tracking-wider shadow-md border border-slate-700">
                    {client.acronym || client.name.slice(0, 3)}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono-code font-bold uppercase px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {client.tag}
                    </span>
                    <div className="text-[10px] text-[#F15A2B] font-semibold mt-1">
                      {client.tier}
                    </div>
                  </div>
                </div>

                {/* Client Name & Description */}
                <h3 className="font-tech text-lg font-bold text-[#1B273F] mb-2 leading-snug">
                  {client.name}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {client.description}
                </p>

                {/* Supplied Items Checklist */}
                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-100 space-y-1.5 mb-4">
                  <span className="text-[10px] font-mono-code uppercase font-bold text-slate-400 block mb-1">
                    Supplied Engineering Hardware:
                  </span>
                  {client.suppliedItems.map((item, i) => (
                    <div key={i} className="flex items-center text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#31AC6E] mr-1.5 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Standard Assurance */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono-code">
                <span>ISO 9001:2015 Approved</span>
                <span className="text-teal-600 font-bold">100% Quality Pass</span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Banner Strip */}
        <div className="mt-14 bg-[#1B273F] rounded-2xl p-6 sm:p-8 text-white border border-slate-700 shadow-xl">
          <div className="text-center mb-6">
            <span className="text-xs font-mono-code uppercase tracking-widest text-[#F15A2B] font-bold">
              ESTABLISHED INDUSTRY FOOTPRINT
            </span>
            <h3 className="font-tech text-xl sm:text-2xl font-bold uppercase mt-1">
              Serving Critical Sectors Across Pakistan & Global Export
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 font-tech font-bold text-sm tracking-wider text-slate-200">
              POF
              <span className="block text-[9px] font-mono-code text-slate-400 font-normal">Ordnance</span>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 font-tech font-bold text-sm tracking-wider text-slate-200">
              SIEMENS
              <span className="block text-[9px] font-mono-code text-slate-400 font-normal">Switchgear</span>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 font-tech font-bold text-sm tracking-wider text-slate-200">
              K-ELECTRIC
              <span className="block text-[9px] font-mono-code text-slate-400 font-normal">Power Gen</span>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 font-tech font-bold text-sm tracking-wider text-slate-200">
              AISHA STEEL
              <span className="block text-[9px] font-mono-code text-slate-400 font-normal">Cold Rolling</span>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 font-tech font-bold text-sm tracking-wider text-slate-200">
              ENGRO
              <span className="block text-[9px] font-mono-code text-slate-400 font-normal">Petrochemical</span>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 font-tech font-bold text-sm tracking-wider text-slate-200">
              XOMETRY
              <span className="block text-[9px] font-mono-code text-slate-400 font-normal">Global On-Demand</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
