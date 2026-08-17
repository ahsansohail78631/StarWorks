import React, { useState } from 'react';
import { 
  CORE_CAPACITIES, 
  Capacity 
} from '../data/engineeringData';
import { 
  Cpu, 
  Disc, 
  Printer, 
  Wrench, 
  Flame, 
  Zap, 
  Layers, 
  ShieldAlert, 
  Palette, 
  FoldHorizontal, 
  Compass,
  ArrowRight,
  Search,
  CheckCircle,
  Sliders,
  X,
  FileCheck,
  ChevronRight
} from 'lucide-react';

interface CapacitiesSectionProps {
  onSelectCapacityForQuote: (capacityTitle: string) => void;
}

export const CapacitiesSection: React.FC<CapacitiesSectionProps> = ({ onSelectCapacityForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalCapacity, setActiveModalCapacity] = useState<Capacity | null>(null);

  const categories = ['All', 'Machining', 'Fabrication', 'Design & Additive', 'Finishing & QA'];

  // Helper to render icon by name
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    switch (iconName) {
      case 'Cpu': return <Cpu className={className} />;
      case 'Disc': return <Disc className={className} />;
      case 'Printer': return <Printer className={className} />;
      case 'Wrench': return <Wrench className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'ShieldAlert': return <ShieldAlert className={className} />;
      case 'Palette': return <Palette className={className} />;
      case 'FoldHorizontal': return <FoldHorizontal className={className} />;
      default: return <Compass className={className} />;
    }
  };

  const filteredCapacities = CORE_CAPACITIES.filter(cap => {
    const matchesCategory = selectedCategory === 'All' || cap.category === selectedCategory;
    const matchesSearch = cap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cap.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cap.materials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          cap.applications.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="capacities" className="py-20 bg-slate-50 relative engineering-grid border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F15A2B]/10 text-[#F15A2B] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F15A2B]"></span>
            <span>Comprehensive In-House Capabilities</span>
          </div>
          <h2 className="font-tech text-3xl sm:text-4xl font-extrabold text-[#1B273F] uppercase tracking-tight">
            Core <span className="text-[#F15A2B]">Capacities</span> & Machinery
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            From single-micron CNC turning to heavy foundry casting and X-Ray grade welding, Star Engineering Works houses complete end-to-end industrial manufacturing under one roof.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                  selectedCategory === cat
                    ? 'bg-[#1B273F] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search process, material, machine..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F15A2B] focus:border-transparent bg-slate-50"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ×
              </button>
            )}
          </div>

        </div>

        {/* 11 Capacities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCapacities.map((capacity) => (
            <div
              key={capacity.id}
              className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#F15A2B]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Top Accent Line */}
              <div className="h-1 w-full bg-slate-100 group-hover:bg-[#F15A2B] transition-colors duration-300"></div>

              <div className="p-6">
                
                {/* Header with Number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-[#F15A2B]/10 text-[#1B273F] group-hover:text-[#F15A2B] flex items-center justify-center transition-colors duration-300">
                    {renderIcon(capacity.icon, "w-6 h-6")}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono-code text-xs font-bold text-slate-400 group-hover:text-[#F15A2B] transition-colors">
                      CAP-{capacity.number}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600">
                      {capacity.category}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-tech text-lg font-bold text-[#1B273F] group-hover:text-[#F15A2B] transition-colors leading-snug mb-2">
                  {capacity.title}
                </h3>
                
                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {capacity.shortDesc}
                </p>

                {/* Micro specs snapshot */}
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 space-y-1.5 text-[11px] mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Precision Tolerance:</span>
                    <span className="font-mono-code font-bold text-[#F15A2B]">{capacity.tolerance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Key Equipment:</span>
                    <span className="text-slate-800 font-medium truncate max-w-[140px]" title={capacity.equipment[0]}>
                      {capacity.equipment[0]}
                    </span>
                  </div>
                </div>

                {/* Materials Tags */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {capacity.materials.slice(0, 2).map((mat, i) => (
                    <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono-code">
                      {mat}
                    </span>
                  ))}
                  {capacity.materials.length > 2 && (
                    <span className="text-[10px] text-slate-400 px-1 py-0.5">
                      +{capacity.materials.length - 2} more
                    </span>
                  )}
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalCapacity(capacity)}
                  className="text-xs font-bold text-[#1B273F] hover:text-[#F15A2B] inline-flex items-center transition-colors"
                >
                  <span>Technical Specs</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </button>

                <button
                  onClick={() => onSelectCapacityForQuote(capacity.title)}
                  className="px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-white hover:bg-[#F15A2B] text-slate-700 hover:text-white border border-slate-200 hover:border-transparent transition-all shadow-2xs"
                >
                  Quote Process
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state if search has no results */}
        {filteredCapacities.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500 text-sm">No engineering capacities match your search "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-[#F15A2B] font-bold underline"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>

      {/* Detailed Technical Modal Inspector */}
      {activeModalCapacity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            
            {/* Modal Header */}
            <div className="bg-[#1B273F] text-white p-6 rounded-t-2xl flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-[#F15A2B] text-white flex items-center justify-center">
                  {renderIcon(activeModalCapacity.icon, "w-5 h-5")}
                </div>
                <div>
                  <span className="font-mono-code text-[11px] text-[#F15A2B] font-bold uppercase">
                    CAPACITY {activeModalCapacity.number} • {activeModalCapacity.category}
                  </span>
                  <h3 className="font-tech text-xl font-bold text-white">
                    {activeModalCapacity.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveModalCapacity(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              
              {/* Detailed Description */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Process Overview</h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {activeModalCapacity.fullDesc}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technical Parameters & Limits</h4>
                <div className="bg-slate-900 rounded-xl overflow-hidden text-xs font-mono-code">
                  {activeModalCapacity.specs.map((spec, i) => (
                    <div key={i} className={`p-3 flex justify-between items-center border-b border-slate-800 ${i % 2 === 0 ? 'bg-slate-900' : 'bg-slate-950'}`}>
                      <span className="text-slate-400 font-semibold">{spec.label}</span>
                      <span className="text-teal-300 font-bold text-right ml-4">{spec.value}</span>
                    </div>
                  ))}
                  <div className="p-3 bg-[#111A2C] flex justify-between items-center border-t border-slate-700">
                    <span className="text-slate-300 font-bold">Standard Tolerance:</span>
                    <span className="text-[#F15A2B] font-bold">{activeModalCapacity.tolerance}</span>
                  </div>
                </div>
              </div>

              {/* Equipment & Materials Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h5 className="text-xs font-bold text-[#1B273F] uppercase tracking-wider mb-2 flex items-center">
                    <Cpu className="w-3.5 h-3.5 mr-1.5 text-[#F15A2B]" /> Key Machinery
                  </h5>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    {activeModalCapacity.equipment.map((eq, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-[#31AC6E] mr-2 shrink-0" />
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h5 className="text-xs font-bold text-[#1B273F] uppercase tracking-wider mb-2 flex items-center">
                    <Layers className="w-3.5 h-3.5 mr-1.5 text-[#F15A2B]" /> Processable Materials
                  </h5>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    {activeModalCapacity.materials.map((mat, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-[#31AC6E] mr-2 shrink-0" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Common Industry Applications</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalCapacity.applications.map((app, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-800 px-3 py-1 rounded-full border border-slate-200">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-slate-100 p-4 rounded-b-2xl border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                M/s Star Engineering Works • Korangi Industrial Area, Karachi
              </span>
              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <button
                  onClick={() => setActiveModalCapacity(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeModalCapacity.title;
                    setActiveModalCapacity(null);
                    onSelectCapacityForQuote(title);
                  }}
                  className="flex-1 sm:flex-none px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#F15A2B] hover:bg-[#d9491d] text-white shadow-md transition-all"
                >
                  Request Quote for this Process
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
