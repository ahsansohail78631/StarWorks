import React, { useState } from 'react';
import { 
  FEATURED_PRODUCTS, 
  Product 
} from '../data/engineeringData';
import { 
  Search, 
  Check, 
  Shield, 
  Layers, 
  SlidersHorizontal, 
  ArrowRight, 
  Download, 
  FileCheck,
  Disc,
  Activity,
  Cpu
} from 'lucide-react';

interface ValvesAndProductsProps {
  onOpenQuote: (productName?: string) => void;
}

export const ValvesAndProducts: React.FC<ValvesAndProductsProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [activeProduct, setActiveProduct] = useState<Product>(FEATURED_PRODUCTS[1]); // Default to Industrial Valves

  const categories = ['All', 'Valves & Flanges', 'Underwater Connectors', 'Precision CNC Components', 'Defense & Spares'];

  const filteredProducts = FEATURED_PRODUCTS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          item.subtitle.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          item.standards.some(s => s.toLowerCase().includes(searchFilter.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-white relative engineering-grid border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1B273F]/10 text-[#1B273F] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F15A2B]"></span>
            <span>Heavy Process & Defense Manufacturing</span>
          </div>

          <h2 className="font-tech text-3xl sm:text-4xl font-extrabold text-[#1B273F] uppercase tracking-tight">
            Industrial Grade <span className="text-[#F15A2B]">Valves</span>, Flanges & Components
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Manufactured to rigorous ASME, API, and DIN standards for harsh operating conditions in petrochemical refineries, power generation plants, steel mills, and naval systems.
          </p>
        </div>

        {/* Category Filter & Search Bar */}
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#F15A2B] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search valves, flanges, spares..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F15A2B]"
            />
          </div>
        </div>

        {/* Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Product Selector Cards */}
          <div className="lg:col-span-5 space-y-4">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => setActiveProduct(prod)}
                className={`p-5 rounded-xl border transition-all cursor-pointer text-left ${
                  activeProduct.id === prod.id
                    ? 'bg-[#1B273F] text-white border-[#F15A2B] shadow-xl shadow-[#1B273F]/20'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono-code uppercase font-bold px-2 py-0.5 rounded ${
                    activeProduct.id === prod.id ? 'bg-[#F15A2B] text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {prod.category}
                  </span>
                  {prod.badge && (
                    <span className={`text-[10px] font-semibold ${
                      activeProduct.id === prod.id ? 'text-teal-300' : 'text-[#F15A2B]'
                    }`}>
                      {prod.badge}
                    </span>
                  )}
                </div>

                <h3 className={`font-tech text-base font-bold ${activeProduct.id === prod.id ? 'text-white' : 'text-[#1B273F]'}`}>
                  {prod.title}
                </h3>
                
                <p className={`text-xs mt-1 line-clamp-2 ${activeProduct.id === prod.id ? 'text-slate-300' : 'text-slate-600'}`}>
                  {prod.subtitle}
                </p>

                <div className="mt-3 flex items-center justify-between pt-3 border-t border-slate-700/40 text-[11px]">
                  <span className={activeProduct.id === prod.id ? 'text-slate-400' : 'text-slate-500'}>
                    Standards: {prod.standards.slice(0, 2).join(', ')}
                  </span>
                  <span className={`font-semibold flex items-center ${activeProduct.id === prod.id ? 'text-teal-400' : 'text-[#F15A2B]'}`}>
                    View Specs <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Detailed Product Blueprint View */}
          <div className="lg:col-span-7 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-2xl p-6 relative overflow-hidden">
            
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-6">
              <div>
                <span className="text-xs font-mono-code text-[#F15A2B] font-bold uppercase">
                  {activeProduct.category} • ASME / ISO COMPLIANT
                </span>
                <h3 className="font-tech text-2xl font-bold text-white mt-1">
                  {activeProduct.title}
                </h3>
              </div>
              <button
                onClick={() => onOpenQuote(activeProduct.title)}
                className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#F15A2B] hover:bg-[#d9491d] text-white shadow-md transition-all"
              >
                Inquire Product
              </button>
            </div>

            {/* Product Overview */}
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeProduct.description}
            </p>

            {/* Technical Specifications Grid */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Engineering Parameters</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono-code text-xs">
                {activeProduct.specs.map((s, i) => (
                  <div key={i} className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 flex justify-between">
                    <span className="text-slate-400">{s.label}:</span>
                    <span className="text-teal-300 font-bold text-right ml-2">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features Bullet List */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Design & Machining Features</h4>
              <div className="space-y-2">
                {activeProduct.features.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-[#31AC6E] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications & Standards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 font-bold uppercase block mb-1.5">Industry Applications</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeProduct.applications.map((app, i) => (
                    <span key={i} className="bg-slate-800 text-slate-200 px-2.5 py-1 rounded text-[11px]">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-400 font-bold uppercase block mb-1.5">Governing Standards</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeProduct.standards.map((std, i) => (
                    <span key={i} className="bg-slate-800 text-teal-300 px-2.5 py-1 rounded text-[11px] font-mono-code font-bold">
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
