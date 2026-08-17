import React from 'react';
import { 
  ABOUT_SECTIONS, 
  COMPANY_INFO 
} from '../data/engineeringData';
import { 
  Award, 
  Target, 
  Compass, 
  CheckCircle2, 
  TrendingUp, 
  BookOpen, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  Building,
  Flag,
  Globe
} from 'lucide-react';

export const AboutUs: React.FC = () => {
  const getMissionIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="w-5 h-5 text-[#F15A2B]" />;
      case 1: return <TrendingUp className="w-5 h-5 text-[#31AC6E]" />;
      case 2: return <BookOpen className="w-5 h-5 text-blue-500" />;
      case 3: return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 4: return <Clock className="w-5 h-5 text-purple-500" />;
      default: return <Target className="w-5 h-5 text-[#F15A2B]" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-100/70 relative engineering-grid border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F15A2B]/10 text-[#F15A2B] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F15A2B]"></span>
            <span>Corporate Heritage & Engineering Philosophy</span>
          </div>

          <h2 className="font-tech text-3xl sm:text-4xl font-extrabold text-[#1B273F] uppercase tracking-tight">
            About <span className="text-[#F15A2B]">Star Engineering Works</span>
          </h2>
          <p className="mt-2 text-slate-500 font-mono-code text-xs uppercase tracking-widest">
            A Passion for Precision • Established 1985
          </p>
        </div>

        {/* Corporate Introduction Hero Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl mb-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F15A2B]/5 rounded-full -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-[#1B273F] text-white">
                  ISO 9001:2015 CERTIFIED
                </span>
                <span className="text-xs font-mono-code text-slate-500">
                  40 Years of Industrial Leadership
                </span>
              </div>

              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                {ABOUT_SECTIONS.intro}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                <span className="flex items-center font-semibold text-[#1B273F]">
                  <CheckCircle2 className="w-4 h-4 text-[#31AC6E] mr-1.5" />
                  Reducing National Import Reliance
                </span>
                <span className="flex items-center font-semibold text-[#1B273F]">
                  <CheckCircle2 className="w-4 h-4 text-[#31AC6E] mr-1.5" />
                  Conserving Pakistan's Foreign Exchange
                </span>
                <span className="flex items-center font-semibold text-[#1B273F]">
                  <CheckCircle2 className="w-4 h-4 text-[#31AC6E] mr-1.5" />
                  Rivaling International Quality Standards
                </span>
              </div>
            </div>

            {/* Quick Fact Callout Box */}
            <div className="lg:col-span-4 bg-[#1B273F] text-white p-6 rounded-xl border border-slate-700 shadow-lg space-y-3">
              <div className="flex items-center space-x-2 text-[#F15A2B]">
                <Building className="w-5 h-5" />
                <h4 className="font-tech text-base font-bold uppercase">Karachi Facility</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Located in Sector 6F, Korangi Industrial Area, Karachi with integrated CNC machine parks, CAD design studio, foundry, and pressure testing labs.
              </p>
              <div className="pt-2 border-t border-slate-700 font-mono-code text-[11px] text-teal-300">
                Plot # B-279, Mehran Town
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          
          {/* Vision Statement Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1B273F] to-[#121B2B] text-white p-8 rounded-2xl border border-slate-700 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#F15A2B] text-white flex items-center justify-center shadow-md">
                  <Flag className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-code uppercase tracking-widest text-[#F15A2B] font-bold">Guiding North Star</span>
                  <h3 className="font-tech text-2xl font-bold text-white uppercase">Vision Statement</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mt-4 italic font-normal">
                "{ABOUT_SECTIONS.vision}"
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
              <span>Empowering Local Industry</span>
              <span className="text-[#F15A2B] font-bold">1985 – 2026+</span>
            </div>
          </div>

          {/* Mission 5 Pillars */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#1B273F] flex items-center justify-center">
                <Target className="w-5 h-5 text-[#F15A2B]" />
              </div>
              <div>
                <span className="text-[10px] font-mono-code uppercase tracking-widest text-slate-400 font-bold">Core Execution Framework</span>
                <h3 className="font-tech text-2xl font-bold text-[#1B273F] uppercase">Mission Statement (5 Pillars)</h3>
              </div>
            </div>

            <div className="space-y-4">
              {ABOUT_SECTIONS.missionPillars.map((pillar, idx) => (
                <div key={pillar.title} className="flex items-start space-x-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                    {getMissionIcon(idx)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1B273F] uppercase tracking-wide flex items-center space-x-2">
                      <span>{pillar.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Why Choose Us Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-tech text-2xl font-bold text-[#1B273F] uppercase">
              Why Choose <span className="text-[#F15A2B]">Star Engineering Works</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Engineered reliability, cost-efficient precision, and on-time delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_SECTIONS.whyChooseUs.map((item, idx) => (
              <div key={item.title} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#F15A2B]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#F15A2B]/10 text-[#F15A2B] flex items-center justify-center mb-4 font-mono-code font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h4 className="font-tech text-base font-bold text-[#1B273F] mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold text-[#31AC6E]">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  Verified Engineering Standard
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
