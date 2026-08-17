import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  ShieldCheck, 
  ChevronRight, 
  Anchor, 
  Cpu, 
  FileText,
  HelpCircle
} from 'lucide-react';
import { COMPANY_INFO, CORE_CAPACITIES, UNDERWATER_CONNECTOR_DATA } from '../data/engineeringData';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  time: string;
}

interface TechnicalAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: (serviceName?: string) => void;
}

export const TechnicalAssistantDrawer: React.FC<TechnicalAssistantDrawerProps> = ({
  isOpen,
  onClose,
  onOpenQuote
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Welcome to Star Engineering Works Technical Support. I am your automated AI Engineering Consultant. How can I assist you today with our 11+ in-house manufacturing capacities, deep-water underwater connectors, industrial valves, or ISO 9001:2015 standards?`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    "What are your CNC machining tolerances?",
    "Tell me about your Underwater Connectors depth rating.",
    "Do you manufacture replacement parts for POF or K-Electric?",
    "What standards and QA testing documents do you provide?",
    "How can I request a formal manufacturing quote?"
  ];

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('underwater') || q.includes('connector') || q.includes('subsea') || q.includes('marine') || q.includes('depth')) {
      return `Our flagship Underwater Connectors are indigenously developed, tested, and manufactured right here in Karachi by Star Engineering Works.

Key Highlights:
• Depth Rating: Hydrostatically tested up to 600 Bar (simulating 6,000 meters / 19,685 ft depth).
• Available Configurations: 2-Pin Heavy Power (35A @ 1kV), 4-Pin Signal (10A), 8-Pin Cat5e Ethernet, and 12-Pin Hybrid.
• Metallurgy: Passivated SS 316L, Marine Grade Bronze, or Titanium Grade 5 with heavy gold-plated contacts.
• Sealing: Dual radial O-rings with vulcanized chloroprene overmolding (>1,000 MΩ insulation resistance).
• Applications: Submarines, Naval sonar arrays, Underwater ROVs, and offshore oil/gas instrumentation.`;
    }

    if (q.includes('tolerance') || q.includes('cnc') || q.includes('machining') || q.includes('axis') || q.includes('lathe')) {
      return `Star Engineering Works operates high-precision multi-axis machining facilities:
• CNC Turning Centers (Up to 6 Axis): Live tooling, twin-spindle Swiss lathes delivering micro-tolerances down to ±0.003 mm (3 microns).
• CNC Machining Centers (Up to 4 Axis): High-torque vertical centers with rotary 4th axis, travel up to 1,600 x 800 x 700 mm, holding ±0.005 mm.
• Conventional Heavy Shop: Swing up to Ø 1,200 mm and 4,000 mm center distance for turbine shafts and heavy rolls.
• Quality Verification: 100% 3D CMM inspection probing and surface roughness down to Ra 0.2 µm.`;
    }

    if (q.includes('valve') || q.includes('flange') || q.includes('pressure')) {
      return `We manufacture Industrial Grade Valves & Flanges conforming to ASME B16.34, API 6D, and DIN standards:
• Pressure Ratings: ASME Class 150# to 2500# (PN10 up to PN420).
• Types: Ball, Gate, Globe, Check, and High-Performance Butterfly Valves.
• Size Range: 1/2" (DN15) up to 36" (DN900).
• Metallurgy: Forged A105, F316L, Duplex F51, Inconel, and cast CF8M / WCB with Stellite hard-faced seats.
• 100% Hydrostatic and pneumatic shell/seat tested up to 10,000 PSI.`;
    }

    if (q.includes('client') || q.includes('pof') || q.includes('siemens') || q.includes('k-electric') || q.includes('aisha') || q.includes('engro')) {
      return `Star Engineering Works has proudly served Pakistan's strategic defense and heavy industrial leaders since 1985:
• Pakistan Ordnance Factories (POF): Precision armament components, ammunition tooling, and high-hardness weapon mechanism parts.
• Siemens Pakistan: High-voltage switchgear hardware, precision busbars, and electrical enclosures.
• K-Electric (KE): Power plant turbine components, substation hardware, and emergency maintenance spares.
• Aisha Steel Mills: Heavy cold-rolling mill rolls, shear blades, and hydraulic cylinders.
• Engro Polymer (EPCL): Duplex stainless steel valve internals and chemical pump impellers.
• Xometry Global: Export-grade CNC components for international buyers.`;
    }

    if (q.includes('standard') || q.includes('iso') || q.includes('astm') || q.includes('asme') || q.includes('cert') || q.includes('qa')) {
      return `Our operations adhere strictly to international manufacturing standards:
• QMS: ISO 9001:2015 Certified facility.
• Product Standards: ASTM, ASME (Sec VIII & IX), BS, DIN, and API.
• Machining Standards: ISO 16090-1:2007 (Machine Tool Accuracy) and ISO 9013 Class 1 (Laser Thermal Cutting).
• Material Traceability: Full EN 10204 Type 3.1 & 3.2 inspection certificates with chemical spectrometry and mechanical tensile/impact reports.`;
    }

    if (q.includes('contact') || q.includes('address') || q.includes('phone') || q.includes('location') || q.includes('email')) {
      return `Contact Star Engineering Works:
• Head Office & Works: Plot # B-279, Sector 6F Mehran Town, Korangi Industrial Area, Karachi, Pakistan.
• Telephones: +92 21 3588 8950 / +92 21 3511 3365
• Emails: info@starengg.pk / starengg@hotmail.com
• Working Hours: Monday to Saturday, 08:30 AM to 06:00 PM PKT.`;
    }

    return `Thank you for your inquiry regarding "${query}". 

Star Engineering Works is equipped with 11+ in-house manufacturing capacities including CAD/CAM reverse engineering, 3D printing, 4-axis VMC milling, 6-axis turning, foundry casting, 6kW fiber laser cutting, 500-ton hydraulic press, ASME Sec IX TIG welding, and ISO 12944 marine protective coatings.

Would you like to configure a formal Request for Quotation (RFQ) or speak directly with our senior tooling engineers?`;
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputQuery;
    if (!text.trim()) return;

    const userMsg: Message = {
      role: 'user',
      content: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateAnswer(text);
      const assistantMsg: Message = {
        role: 'assistant',
        content: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#111A2C] text-white w-full max-w-lg h-full flex flex-col shadow-2xl border-l border-slate-700 animate-slideLeft">
        
        {/* Header */}
        <div className="p-4 bg-[#1B273F] border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-tech text-sm font-bold uppercase tracking-wider text-white">
                AI Engineering Support
              </h3>
              <div className="flex items-center space-x-1 text-[10px] text-teal-400 font-mono-code">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                <span>Star Engineering Technical Bureau</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-xl p-3.5 ${
                  msg.role === 'user'
                    ? 'bg-[#F15A2B] text-white shadow-md'
                    : 'bg-slate-800/90 text-slate-200 border border-slate-700 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-1 text-[10px] text-slate-300 font-mono-code">
                  <span className="font-bold">
                    {msg.role === 'user' ? 'You' : 'Star Tech Assistant'}
                  </span>
                  <span>{msg.time}</span>
                </div>
                <div className="whitespace-pre-line leading-relaxed">
                  {msg.content}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-800 text-teal-300 rounded-xl p-3 text-xs flex items-center space-x-2 border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-[11px] text-slate-400 font-mono-code">Analyzing technical database...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Question Chips */}
        <div className="p-3 bg-slate-900 border-t border-slate-800">
          <span className="text-[10px] font-bold font-mono-code text-slate-400 uppercase tracking-wider block mb-2">
            Suggested Technical Topics:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {quickPrompts.slice(0, 3).map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1 rounded-full border border-slate-700 transition-colors truncate max-w-full text-left"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#1B273F] border-t border-slate-700">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask about metallurgy, tolerances, underwater specs..."
              className="flex-1 px-3 py-2 text-xs bg-slate-900 text-white rounded-lg border border-slate-700 focus:outline-none focus:ring-1 focus:ring-[#F15A2B]"
            />
            <button
              type="submit"
              className="p-2 bg-[#F15A2B] hover:bg-[#d9491d] text-white rounded-lg transition-colors shadow-sm"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
            <span>ISO 9001:2015 Database</span>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="text-[#F15A2B] font-bold hover:underline"
            >
              Open Full RFQ Form →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
