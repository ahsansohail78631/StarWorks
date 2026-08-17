import React, { useState } from 'react';
import { 
  COMPANY_INFO 
} from '../data/engineeringData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Building,
  Navigation
} from 'lucide-react';

export const ContactAndFacility: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: 'CNC Machining (4/6-Axis)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep confirmation visible
    }, 500);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(`Hello Star Engineering Works, I would like to inquire about industrial machining / underwater connectors / valves.`);
    window.open(`https://wa.me/922135888950?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white relative engineering-grid border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F15A2B]/10 text-[#F15A2B] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F15A2B]"></span>
            <span>Get in Touch with Our Engineering Team</span>
          </div>

          <h2 className="font-tech text-3xl sm:text-4xl font-extrabold text-[#1B273F] uppercase tracking-tight">
            Contact Us & <span className="text-[#F15A2B]">Facility Location</span>
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Visit our manufacturing facility in Korangi Industrial Area, Karachi or submit your technical drawings for rapid estimation.
          </p>
        </div>

        {/* 2-Column Contact & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Details, Map & Facility Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="bg-[#1B273F] text-white p-7 rounded-2xl border border-slate-700 shadow-xl space-y-6">
              
              <div>
                <h3 className="font-tech text-xl font-bold uppercase text-white mb-1">
                  M/s STAR ENGINEERING WORKS
                </h3>
                <p className="text-xs font-mono-code text-[#F15A2B] font-semibold">
                  a passion for precision • ISO 9001:2015
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F15A2B]/20 text-[#F15A2B] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase block text-[10px] tracking-wider">Facility Address</span>
                    <p className="text-slate-200 mt-0.5 leading-relaxed font-medium">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Telephones */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F15A2B]/20 text-[#F15A2B] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase block text-[10px] tracking-wider">Telephone Lines</span>
                    <div className="mt-0.5 space-y-1 font-mono-code text-slate-200">
                      <a href={`tel:${COMPANY_INFO.phone1.replace(/\s+/g, '')}`} className="block hover:text-[#F15A2B] transition-colors">
                        {COMPANY_INFO.phone1}
                      </a>
                      <a href={`tel:${COMPANY_INFO.phone2.replace(/\s+/g, '')}`} className="block hover:text-[#F15A2B] transition-colors">
                        {COMPANY_INFO.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F15A2B]/20 text-[#F15A2B] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase block text-[10px] tracking-wider">Official Email Inquiries</span>
                    <div className="mt-0.5 space-y-1 font-mono-code text-slate-200">
                      <a href={`mailto:${COMPANY_INFO.emailGeneral}`} className="block hover:text-[#F15A2B] transition-colors">
                        {COMPANY_INFO.emailGeneral}
                      </a>
                      <a href={`mailto:${COMPANY_INFO.emailDirect}`} className="block hover:text-[#F15A2B] transition-colors">
                        {COMPANY_INFO.emailDirect}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F15A2B]/20 text-[#F15A2B] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase block text-[10px] tracking-wider">Working Hours</span>
                    <p className="text-slate-200 mt-0.5 font-medium">
                      {COMPANY_INFO.workingHours}
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct Quick WhatsApp Trigger */}
              <div className="pt-2 border-t border-slate-700">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-3 px-4 rounded-xl bg-[#31AC6E] hover:bg-[#28925c] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Technical Inquiry</span>
                </button>
              </div>

            </div>

            {/* Interactive Karachi Map Visualization */}
            <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200 overflow-hidden relative">
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-xs font-bold text-[#1B273F] uppercase flex items-center">
                  <Navigation className="w-3.5 h-3.5 mr-1 text-[#F15A2B]" />
                  Korangi Industrial Area Map View
                </span>
                <span className="text-[10px] font-mono-code text-slate-500">24.8329° N, 67.1124° E</span>
              </div>
              
              {/* Map Graphic Canvas Mockup with Google Maps Coordinates Link */}
              <div className="h-44 bg-slate-900 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-300">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Road grid lines SVG */}
                <svg viewBox="0 0 400 180" className="w-full h-full text-slate-700">
                  <line x1="0" y1="90" x2="400" y2="90" stroke="#475569" strokeWidth="4" />
                  <line x1="180" y1="0" x2="180" y2="180" stroke="#475569" strokeWidth="4" />
                  <line x1="80" y1="0" x2="80" y2="180" stroke="#334155" strokeWidth="2" />
                  <line x1="300" y1="0" x2="300" y2="180" stroke="#334155" strokeWidth="2" />
                  <line x1="0" y1="40" x2="400" y2="40" stroke="#334155" strokeWidth="2" />
                  <line x1="0" y1="140" x2="400" y2="140" stroke="#334155" strokeWidth="2" />
                  <text x="10" y="82" fill="#94A3B8" fontSize="9" fontFamily="monospace">KORANGI INDUSTRIAL MAIN RD</text>
                  <text x="185" y="20" fill="#94A3B8" fontSize="8" fontFamily="monospace">SECTOR 6F // MEHRAN TOWN</text>
                </svg>

                {/* Target Marker for Star Engineering Works */}
                <div className="absolute z-10 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#F15A2B] text-white flex items-center justify-center shadow-lg animate-bounce">
                    <Building className="w-4 h-4" />
                  </div>
                  <div className="bg-[#1B273F] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow mt-1 border border-slate-600">
                    STAR ENGINEERING WORKS
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Korangi+Industrial+Area+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center text-xs font-semibold text-[#F15A2B] hover:underline"
              >
                Open in Google Maps <Navigation className="w-3 h-3 ml-1" />
              </a>
            </div>

          </div>

          {/* Right Column: Engineering Inquiry & RFP Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xl">
            
            <div className="mb-6">
              <h3 className="font-tech text-2xl font-bold text-[#1B273F] uppercase">
                Submit an Engineering Inquiry
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Our mechanical engineering team will review your parameters and respond within 24 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 p-8 rounded-xl text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 bg-[#31AC6E] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-tech text-xl font-bold text-emerald-900 uppercase">
                  Technical Inquiry Transmitted Successfully!
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Star Engineering Works. Your request has been assigned to our senior tooling and quotation engineering desk. We will reach out to <strong className="font-mono-code">{formData.email || 'your email'}</strong> promptly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', companyName: '', email: '', phone: '', serviceRequired: 'CNC Machining (4/6-Axis)', message: '' });
                    }}
                    className="px-4 py-2 bg-[#1B273F] text-white text-xs font-bold uppercase rounded-lg hover:bg-slate-800"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Engr. Asad Khan"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F15A2B] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Siemens / POF / K-Electric"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F15A2B] bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="procurement@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F15A2B] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 1234567"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F15A2B] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Primary Service or Product Interest *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F15A2B] bg-white"
                  >
                    <option value="CNC Machining Center (Up to 4 Axis)">CNC Machining Center (Up to 4 Axis)</option>
                    <option value="CNC Turning Center (Up to 6 Axis)">CNC Turning Center (Up to 6 Axis)</option>
                    <option value="Underwater Subsea Connectors">Underwater Subsea Connectors</option>
                    <option value="Industrial Grade Valves & Flanges">Industrial Grade Valves & Flanges</option>
                    <option value="CAD/CAM Designing & Reverse Engineering">CAD/CAM Designing & Reverse Engineering</option>
                    <option value="3D Printing & Rapid Prototyping">3D Printing & Rapid Prototyping</option>
                    <option value="Sand, Gravity & Die Casting">Sand, Gravity & Die Casting</option>
                    <option value="CNC Laser Cutting & Fiber Marking">CNC Laser Cutting & Fiber Marking</option>
                    <option value="Hydraulic Press & Forming">Hydraulic Press & Forming</option>
                    <option value="TIG / Argon & Specialized Welding">TIG / Argon & Specialized Welding</option>
                    <option value="Paint & Protective Coating">Paint & Protective Coating</option>
                    <option value="Defense & POF Spares Manufacturing">Defense & POF Spares Manufacturing</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Technical Project Details / Material / Quantity Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify part dimensions, material grades (e.g. SS316L, Bronze, Titanium), required tolerances, target delivery timeline, and applicable standards (ASTM, ASME, DIN)..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F15A2B] bg-white"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#F15A2B] hover:bg-[#d9491d] text-white shadow-lg shadow-[#F15A2B]/30 hover:shadow-[#F15A2B]/50 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Engineering Inquiry</span>
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-500 pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#31AC6E]" />
                  <span>NDAs respected. Proprietary CAD drawings protected under strict confidentiality.</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
