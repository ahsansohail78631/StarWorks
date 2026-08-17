import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calculator, 
  FileText, 
  Download, 
  CheckCircle2, 
  Send, 
  Cpu, 
  ShieldCheck, 
  Sliders, 
  Clock, 
  DollarSign, 
  Layers,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, CORE_CAPACITIES } from '../data/engineeringData';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [service, setService] = useState('CNC Machining Center (Up to 4 Axis)');
  const [material, setMaterial] = useState('Stainless Steel 316L');
  const [tolerance, setTolerance] = useState('High Precision (±0.005 mm)');
  const [surfaceFinish, setSurfaceFinish] = useState('Passivation & Ultrasonic Cleaning');
  const [certRequired, setCertRequired] = useState('ISO 10204 Type 3.1 MTR + CMM Inspection');
  const [quantity, setQuantity] = useState<number>(10);
  const [targetTimeline, setTargetTimeline] = useState('Standard (2 - 3 Weeks)');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const materialsList = [
    'Stainless Steel 316L (Marine Grade)',
    'Stainless Steel 304 / 316Ti',
    'Duplex 2205 / Super Duplex 2507',
    'Titanium Grade 5 (Ti-6Al-4V)',
    'Inconel 625 / 718',
    'Marine Grade Bronze (CuSn10 / LG2)',
    'Aluminum 7075-T6 / 6061-T6',
    'Carbon Steel EN8 / EN9 / 4140',
    'High Strength Tool Steel (H13 / D2)',
    'Engineering Polymer (PEEK / Nylon CF / Delrin)'
  ];

  const handleDownloadRFQDocument = () => {
    const rfqText = `================================================================================
REQUEST FOR TECHNICAL QUOTATION (RFQ) - STAR ENGINEERING WORKS
================================================================================
Generated: ${new Date().toLocaleString()}
Company: M/s Star Engineering Works (Est. 1985, ISO 9001:2015)
Facility: Sector 6F, Korangi Industrial Area, Karachi, Pakistan
Contact: ${COMPANY_INFO.phone1} | ${COMPANY_INFO.emailGeneral}

--- CLIENT INFORMATION ---
Client Name: ${contactName || 'Valued Client'}
Company: ${company || 'Engineering Client'}
Email: ${contactEmail || 'N/A'}
Phone: ${contactPhone || 'N/A'}

--- TECHNICAL SPECIFICATIONS ---
1. Selected Manufacturing Process: ${service}
2. Primary Material: ${material}
3. Required Tolerance Level: ${tolerance}
4. Surface Finishing & Coating: ${surfaceFinish}
5. Quality Certifications Required: ${certRequired}
6. Production Quantity: ${quantity} units
7. Target Delivery Timeline: ${targetTimeline}

--- PROJECT SCOPE & DRAWING NOTES ---
${notes || 'Standard manufacturing per provided CAD model and technical drawings.'}

--- COMPLIANCE ASSURANCE ---
* Fully conforming to ASTM, ASME, ISO, DIN, and BS engineering standards.
* 100% CMM 3D Probing and Material Mill Test Reports included upon shipment.
================================================================================`;

    const blob = new Blob([rfqText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `StarEngg_RFQ_${(company || 'Quote').replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200">
        
        {/* Modal Top Header */}
        <div className="bg-[#1B273F] text-white p-6 rounded-t-2xl flex items-center justify-between sticky top-0 z-20 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#F15A2B] text-white flex items-center justify-center shadow-lg shadow-[#F15A2B]/20">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono-code text-[11px] text-[#F15A2B] font-bold uppercase">
                ISO 9001:2015 CERTIFIED FACILITY
              </span>
              <h3 className="font-tech text-xl sm:text-2xl font-bold text-white">
                Request for Engineering Quotation (RFQ)
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-5 animate-fadeIn">
              <div className="w-16 h-16 bg-[#31AC6E] text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-tech text-2xl font-bold text-slate-800 uppercase">
                RFQ Transmitted to Engineering Desk
              </h4>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{contactName}</strong>. Our senior tooling estimator at Star Engineering Works is reviewing your specifications for <strong className="text-[#F15A2B]">{service}</strong>. A formal quotation will be sent to <strong className="font-mono-code text-slate-900">{contactEmail}</strong>.
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-md mx-auto text-left text-xs font-mono-code space-y-1">
                <div><span className="text-slate-500">Service:</span> {service}</div>
                <div><span className="text-slate-500">Material:</span> {material}</div>
                <div><span className="text-slate-500">Tolerance:</span> {tolerance}</div>
                <div><span className="text-slate-500">Batch Qty:</span> {quantity} units</div>
                <div><span className="text-slate-500">Standards:</span> ASTM / ASME / ISO 9001:2015</div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleDownloadRFQDocument}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5"
                >
                  <Download className="w-4 h-4 text-teal-400" />
                  <span>Download RFQ Summary Receipt (.TXT)</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#F15A2B] hover:bg-[#d9491d] text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleQuoteSubmit} className="space-y-6 text-xs">
              
              {/* Step 1: Technical Parameters */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 border-b border-slate-200 pb-2">
                  <Cpu className="w-4 h-4 text-[#F15A2B]" />
                  <h4 className="font-tech text-sm font-bold uppercase text-[#1B273F]">
                    1. Manufacturing Process & Metallurgy
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service */}
                  <div>
                    <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Primary Process / Capability *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#F15A2B] bg-slate-50 font-medium"
                    >
                      {CORE_CAPACITIES.map(c => (
                        <option key={c.id} value={c.title}>{c.title}</option>
                      ))}
                      <option value="Underwater Subsea Connectors">Underwater Subsea Connectors (Flagship)</option>
                      <option value="Industrial Grade Valves & Flanges">Industrial Grade Valves & Flanges</option>
                      <option value="Defense Spares & POF Assemblies">Defense Spares & POF Assemblies</option>
                    </select>
                  </div>

                  {/* Material */}
                  <div>
                    <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Raw Material Grade *
                    </label>
                    <select
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#F15A2B] bg-slate-50 font-medium"
                    >
                      {materialsList.map((mat, i) => (
                        <option key={i} value={mat}>{mat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Tolerance */}
                  <div>
                    <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Target Tolerance *
                    </label>
                    <select
                      value={tolerance}
                      onChange={(e) => setTolerance(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#F15A2B] bg-slate-50 font-medium font-mono-code"
                    >
                      <option value="Micro-Precision (±0.003 mm / 3 Microns)">Micro Precision (±0.003 mm)</option>
                      <option value="High Precision (±0.005 mm / 5 Microns)">High Precision (±0.005 mm)</option>
                      <option value="Precision (±0.02 mm)">Precision (±0.02 mm)</option>
                      <option value="Standard Machining (±0.05 mm)">Standard (±0.05 mm)</option>
                      <option value="Heavy Fabrication (±0.1 mm)">Fabrication (±0.1 mm)</option>
                    </select>
                  </div>

                  {/* Surface Treatment */}
                  <div>
                    <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Surface Finish / Coating
                    </label>
                    <select
                      value={surfaceFinish}
                      onChange={(e) => setSurfaceFinish(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#F15A2B] bg-slate-50 font-medium"
                    >
                      <option value="Passivation & Ultrasonic Cleaning">Passivation & Ultrasonic</option>
                      <option value="Hard Anodizing (MIL-A-8625 Type III)">Hard Anodizing (Type III)</option>
                      <option value="Marine C5-M High-Build Epoxy">Marine C5-M Epoxy Paint</option>
                      <option value="Electrostatic Powder Coating">Electrostatic Powder Coat</option>
                      <option value="Zinc / Manganese Phosphating">Zinc / Manganese Phosphating</option>
                      <option value="As-Machined (Ra 0.8 µm)">As-Machined (Ra 0.8 µm)</option>
                    </select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Batch Quantity (Units) *
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100000"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#F15A2B] bg-slate-50 font-bold font-mono-code"
                    />
                  </div>
                </div>

              </div>

              {/* Step 2: Quality & Timeline */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 border-b border-slate-200 pb-2">
                  <ShieldCheck className="w-4 h-4 text-[#31AC6E]" />
                  <h4 className="font-tech text-sm font-bold uppercase text-[#1B273F]">
                    2. Quality Assurance & Required Inspection Docs
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Inspection Documents Required
                    </label>
                    <select
                      value={certRequired}
                      onChange={(e) => setCertRequired(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#F15A2B] bg-slate-50 font-medium"
                    >
                      <option value="ISO 10204 Type 3.1 MTR + CMM Inspection">ISO 10204 Type 3.1 MTR + 3D CMM Report</option>
                      <option value="Standard Certificate of Conformance (CoC)">Standard Certificate of Conformance (CoC)</option>
                      <option value="Hydrostatic Pressure Test Certificate (10,000 PSI)">Hydrostatic Pressure Test Certificate (10,000 PSI)</option>
                      <option value="Radiographic X-Ray NDT Certificate">Radiographic X-Ray NDT Certificate</option>
                      <option value="Third-Party Inspection (TPI / ISO 10204 3.2)">Third-Party Inspection (TPI / ISO 10204 3.2)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Required Delivery Schedule
                    </label>
                    <select
                      value={targetTimeline}
                      onChange={(e) => setTargetTimeline(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#F15A2B] bg-slate-50 font-medium"
                    >
                      <option value="Standard (2 - 3 Weeks)">Standard (2 - 3 Weeks)</option>
                      <option value="Rush / Urgent (5 - 7 Days)">Rush / Urgent (5 - 7 Days)</option>
                      <option value="Prototyping (3 - 5 Days)">Rapid Prototyping (3 - 5 Days)</option>
                      <option value="Long Term Annual Contract Delivery">Annual Scheduled Supply</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Part Dimensions / Technical Notes / Drawing Attachment Link
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Provide CAD links (STEP, DXF, PDF), critical datum planes, thread pitches, or specific POF / Siemens part numbers..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#F15A2B] bg-slate-50"
                  ></textarea>
                </div>
              </div>

              {/* Step 3: Contact Details */}
              <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-tech text-xs font-bold uppercase text-[#1B273F] tracking-wider">
                  3. Contact & Procurement Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Engr. Tariq Mehmood"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Aisha Steel / K-Electric / POF"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Official Email Address *</label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="procurement@company.com"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Direct Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="+92 21 3588 8950"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleDownloadRFQDocument}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5"
                >
                  <Download className="w-4 h-4 text-teal-600" />
                  <span>Download RFQ Summary</span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#F15A2B] hover:bg-[#d9491d] text-white font-bold uppercase tracking-wider shadow-lg shadow-[#F15A2B]/30 hover:shadow-[#F15A2B]/50 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Technical RFQ</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
