export interface Capacity {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  specs: { label: string; value: string }[];
  equipment: string[];
  materials: string[];
  applications: string[];
  icon: string;
  category: 'Machining' | 'Fabrication' | 'Design & Additive' | 'Finishing & QA';
  tolerance: string;
}

export interface Product {
  id: string;
  title: string;
  category: 'Underwater Connectors' | 'Valves & Flanges' | 'Precision CNC Components' | 'Defense & Spares' | 'Castings';
  subtitle: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  standards: string[];
  badge?: string;
  imageAlt: string;
}

export interface Client {
  id: string;
  name: string;
  acronym?: string;
  category: 'Defense & Strategic' | 'Energy & Utilities' | 'Steel & Heavy Industry' | 'Chemical & Petrochemical' | 'Global Supply Chain';
  description: string;
  suppliedItems: string[];
  tier: 'Strategic Partner' | 'Major Client' | 'Global OEM';
  tag: string;
}

export const COMPANY_INFO = {
  name: "STAR ENGINEERING WORKS",
  slogan: "a passion for precision",
  established: 1985,
  yearsOfExcellence: 40,
  iso: "ISO 9001:2015 Certified",
  address: "Plot # B-279, Sector 6F Mehran Town, Korangi Industrial Area, Karachi, Pakistan.",
  phone1: "+92 21 3588 8950",
  phone2: "+92 21 3511 3365",
  whatsapp: "+923002000000",
  emailGeneral: "info@starengg.pk",
  emailDirect: "starengg@hotmail.com",
  website: "www.starengg.pk",
  workingHours: "Monday – Saturday: 08:30 AM – 06:00 PM (PKT)",
  certifications: [
    "ISO 9001:2015 Quality Management System",
    "ISO 16090-1:2007 Machine Tool Safety Standards",
    "ISO 9013 Thermal Cutting Geometric Tolerances",
    "ISO 10204 Type 3.1 & 3.2 Material Traceability"
  ]
};

export const CORE_CAPACITIES: Capacity[] = [
  {
    id: "cad-cam-designing",
    number: "01",
    title: "CAD/CAM Designing & Reverse Engineering",
    shortDesc: "Advanced parametric 3D modeling, FEA stress simulation, toolpath generation and precision reverse engineering from sample components.",
    fullDesc: "Our engineering design bureau utilizes industry-leading CAD/CAM suites (SolidWorks, Siemens NX, Mastercam) to convert complex physical parts or preliminary sketches into high-precision digital prototypes and optimized CNC toolpaths.",
    specs: [
      { label: "Software Suites", value: "SolidWorks, Siemens NX, Mastercam, Autodesk Inventor" },
      { label: "Design Capability", value: "3D Parametric, Surface Modeling, FEA Simulation, Tooling Design" },
      { label: "Reverse Engineering", value: "3D Laser Scanning & Coordinate CMM Probing" },
      { label: "File Formats", value: "STEP, IGES, DXF, DWG, Parasolid, STL, Native CAD" }
    ],
    equipment: ["3D Optical Laser Scanner", "Coordinate Measuring Arm", "High-Performance CAD Workstations"],
    materials: ["All engineering metals & polymers"],
    applications: ["Import substitution parts", "Aerospace fixtures", "Specialized tooling & dies", "Custom naval sub-assemblies"],
    icon: "DraftingCompass",
    category: "Design & Additive",
    tolerance: "±0.005 mm model accuracy"
  },
  {
    id: "3d-printing",
    number: "02",
    title: "Industrial 3D Printing & Rapid Prototyping",
    shortDesc: "Additive manufacturing for functional prototyping, assembly verification, ergonomic testing, and low-volume complex geometries.",
    fullDesc: "Rapid turnaround additive manufacturing utilizing high-grade engineering polymers and carbon-fiber reinforced filaments to evaluate fit, form, and functionality before initiating mass CNC production runs.",
    specs: [
      { label: "Technologies", value: "FDM, SLA Resin, SLS Nylon Prototyping" },
      { label: "Max Build Volume", value: "450 x 450 x 500 mm" },
      { label: "Layer Resolution", value: "25 to 100 Microns" },
      { label: "Materials Supported", value: "Carbon-Fiber Nylon, PEEK, ABS, PETG, Tough Resin, TPU" }
    ],
    equipment: ["Industrial Dual-Extruder Printers", "High-Precision SLA UV Curing Stations"],
    materials: ["Nylon-CF, PEEK, Polycarbonate, Castable Wax Resin, ABS-ESD"],
    applications: ["Pre-machining casting patterns", "Snap-fit functional prototypes", "Jigs and fixture nests", "Sensor enclosures"],
    icon: "Printer",
    category: "Design & Additive",
    tolerance: "±0.05 mm"
  },
  {
    id: "cnc-machining-center",
    number: "03",
    title: "CNC Machining Center (Up to 4 Axis)",
    shortDesc: "High-speed vertical and horizontal 4-axis machining centers delivering tight-tolerance prismatic and contoured components.",
    fullDesc: "Equipped with rigid vertical machining centers featuring 4th-axis rotary tables, 15,000 RPM high-torque spindles, and automatic tool changers for high-precision milling of heavy alloys, titanium, and stainless steels.",
    specs: [
      { label: "Axis Configuration", value: "3-Axis + 4th Axis Rotary Indexing Table" },
      { label: "Working Envelope (X/Y/Z)", value: "Up to 1,600 x 800 x 700 mm" },
      { label: "Spindle Speed", value: "15,000 RPM High Torque Ceramic Bearing Spindle" },
      { label: "Tool Magazine", value: "32-Tool Automatic Tool Changer (ATC)" }
    ],
    equipment: ["Doosan VMC 4-Axis", "Haas VF-4 / VF-2 Series", "Mazak Vertical Machining Systems"],
    materials: ["Stainless Steel 316L/304", "Inconel 625/718", "Titanium Gr.5", "Alloy Steel 4140/4340", "Aluminum 7075-T6"],
    applications: ["Valve bodies", "Turbine housings", "Naval underwater housings", "Defense weapon mechanical housings"],
    icon: "Cpu",
    category: "Machining",
    tolerance: "±0.005 mm (5 Microns)"
  },
  {
    id: "cnc-turning-center",
    number: "04",
    title: "CNC Turning Center (Up to 6 Axis)",
    shortDesc: "Multi-axis Swiss and turret CNC lathes with live tooling, sub-spindles, and C/Y-axis milling capabilities in a single setup.",
    fullDesc: "Complete one-pass turning, boring, threading, cross-milling, and polygon machining for ultra-high precision cylindrical components. Eliminates secondary setups to guarantee coaxiality and concentricity.",
    specs: [
      { label: "Configuration", value: "Twin-Spindle + Live Tooling Turrets (Up to 6-Axis)" },
      { label: "Max Turning Diameter", value: "Ø 450 mm" },
      { label: "Max Turning Length", value: "1,200 mm" },
      { label: "Live Tooling RPM", value: "6,000 RPM with Full C-Axis & Y-Axis Milling" }
    ],
    equipment: ["Multi-Axis Live Tooling Turning Centers", "Precision CNC Lathes with Bar Feeders"],
    materials: ["Marine Grade Bronze", "Duplex 2205", "Super Duplex 2507", "SS 316Ti", "Hardened Tool Steels"],
    applications: ["Underwater connector shells", "Precision valve stems", "Drive shafts", "Hydraulic spool cartridges"],
    icon: "Disc",
    category: "Machining",
    tolerance: "±0.003 mm (3 Microns)"
  },
  {
    id: "conventional-machining",
    number: "05",
    title: "Conventional Heavy Machining",
    shortDesc: "Heavy-duty conventional lathes, universal milling, radial drills, and vertical boring machines for oversized industrial workpieces.",
    fullDesc: "Our heavy machine shop accommodates large-diameter rolls, power plant shafts, industrial gears, and heavy fabrication weldments that exceed standard CNC envelopes, handled by veteran machinists with decades of expertise.",
    specs: [
      { label: "Lathe Swing Over Bed", value: "Up to Ø 1,200 mm" },
      { label: "Distance Between Centers", value: "Up to 4,000 mm" },
      { label: "Radial Drilling Radius", value: "Up to 2,500 mm arm reach, Ø 80 mm drill capacity" },
      { label: "Slotting & Shaper Stroke", value: "Up to 600 mm" }
    ],
    equipment: ["Heavy Duty Gap-Bed Lathes", "Universal Horizontal Milling Machines", "Heavy Radial Drilling Machines", "Vertical Shapers"],
    materials: ["Carbon Steel EN8/EN9", "Cast Iron GG25/GGG40", "Forged Alloy Steels", "Manganese Bronze"],
    applications: ["Steel mill roller refurbishments", "Power generation shafts", "Large flange facing", "Heavy pump housings"],
    icon: "Wrench",
    category: "Machining",
    tolerance: "±0.02 mm"
  },
  {
    id: "sand-gravity-die-casting",
    number: "06",
    title: "Sand, Gravity & Die Casting",
    shortDesc: "Foundry and casting facilities for high-integrity ferrous, bronze, aluminum, and zinc alloy castings with complete metallurgical testing.",
    fullDesc: "Integrated foundry operations utilizing advanced pattern making, sand conditioning, gravity mold casting, and pressure die casting to supply defect-free castings with precise chemical composition and grain structure.",
    specs: [
      { label: "Casting Processes", value: "Green Sand, Resin Sand, Gravity Die, High Pressure Die Casting" },
      { label: "Pouring Weight", value: "0.2 kg up to 1,500 kg per piece" },
      { label: "Alloy Purity", value: "Spectrometer-verified chemical composition per melt" },
      { label: "Heat Treatment", value: "Annealing, Normalizing, Quenching & Tempering (Q&T), T6 solution heat treat" }
    ],
    equipment: ["Induction Melting Furnaces", "Gravity Die Pouring Rigs", "Digital Optical Emission Spectrometer"],
    materials: ["Aluminum A356/A380", "Gunmetal LG2/RG5", "Phosphor Bronze CuSn10", "Grey & Ductile Iron", "Stainless Castings (CF8M)"],
    applications: ["Heavy valve bodies", "Impellers", "Marine hardware", "Automotive & railway brackets"],
    icon: "Flame",
    category: "Fabrication",
    tolerance: "ISO 8062-3 CT6 to CT8"
  },
  {
    id: "cnc-laser-cutting-marking",
    number: "07",
    title: "CNC Laser Cutting & Fiber Marking",
    shortDesc: "High-power fiber laser sheet & tube cutting alongside high-resolution fiber laser annealing, engraving, and part marking.",
    fullDesc: "State-of-the-art fiber laser cutting systems providing razor-sharp edge quality, minimal heat-affected zones (HAZ), and micro-burr-free cutting on sheet metals. High-speed laser marking handles permanent QR codes, serial numbers, and MIL-spec markings.",
    specs: [
      { label: "Laser Power", value: "6 kW Fiber Laser Source" },
      { label: "Sheet Bed Size", value: "1,500 x 3,000 mm dual-exchange pallet" },
      { label: "Max Thicknesses", value: "Carbon Steel: 25mm, Stainless Steel: 16mm, Aluminum: 12mm, Brass: 8mm" },
      { label: "Marking Capabilities", value: "Permanent Fiber Annealing, Deep Engraving, 2D Data Matrix, Barcode, Serializing" }
    ],
    equipment: ["6kW Dual-Bed CNC Fiber Laser", "30W/50W MOPA Fiber Laser Marking Workstations"],
    materials: ["Mild Steel", "Stainless Steel 304/316", "Aluminum Alloys", "Brass & Copper Sheets", "Titanium Sheets"],
    applications: ["Precision sheet metal chassis", "Gaskets & shims", "Defense serialization", "Instrument control panels"],
    icon: "Zap",
    category: "Fabrication",
    tolerance: "ISO 9013 Class 1 (±0.05 mm)"
  },
  {
    id: "hydraulic-press",
    number: "08",
    title: "Hydraulic Press & Forming",
    shortDesc: "Deep drawing, stamping, straightening, blanking, and heavy hydraulic forming up to 500-ton capacity.",
    fullDesc: "Heavy tonnage hydraulic presses designed for deep draw forming, precision stamping, dished end forming, flange coining, and precision hydraulic straightening of distorted shafts and weldments.",
    specs: [
      { label: "Press Capacity", value: "50 to 500 Metric Tons" },
      { label: "Bed Area", value: "1,500 x 1,200 mm" },
      { label: "Stroke & Daylight", value: "800 mm stroke, 1,100 mm daylight opening" },
      { label: "Forming Operations", value: "Deep Drawing, Stamping, Piercing, Coining, Straightening" }
    ],
    equipment: ["500-Ton 4-Column Hydraulic Press", "200-Ton C-Frame Stamping Press", "Precision Shaft Straightening Rig"],
    materials: ["Deep Drawing Steels (DC04)", "Stainless Steel 304/316", "Aluminum 5052/6061", "Copper & Brass"],
    applications: ["Pressure vessel end caps", "Filter housings", "Automotive pressings", "Heavy industrial brackets"],
    icon: "Layers",
    category: "Fabrication",
    tolerance: "±0.1 mm"
  },
  {
    id: "tig-argon-welding",
    number: "09",
    title: "TIG / Argon & Specialized Welding",
    shortDesc: "ASME Section IX qualified TIG (GTAW), MIG (GMAW), and SAW welding with full Radiographic (X-Ray) and NDT compliance.",
    fullDesc: "Certified welding station performing high-integrity welding on critical pressure vessels, seawater piping, vacuum chambers, and exotic alloy fabrication. Welders are certified to ASME Sec IX and ISO 9606.",
    specs: [
      { label: "Processes", value: "TIG / Argon (GTAW), Pulse MIG (GMAW), MMAW, Orbital Tube Welding" },
      { label: "Certifications", value: "ASME Section IX, AWS D1.1, EN ISO 9606-1 Qualified Welders" },
      { label: "NDT Inspection", value: "Radiography (RT / X-Ray), Dye Penetrant (PT), Ultrasonic (UT), Hydrostatic Testing" },
      { label: "Shielding Gases", value: "High-purity Argon (99.999%), Argon/Helium Mix, CO2/Argon Mix" }
    ],
    equipment: ["Fronius & Miller AC/DC Pulse TIG Inverters", "Rotary Welding Positioners", "Hydrostatic Pressure Test Rig (10,000 PSI)"],
    materials: ["Duplex / Super Duplex", "Titanium Grade 2 & 5", "Hastelloy C-276", "Stainless 316L / 904L", "Aluminum 5083 / 6082"],
    applications: ["Submarine pressure piping", "High-pressure valve manifolds", "Chemical reactor vessels", "Seawater heat exchangers"],
    icon: "ShieldAlert",
    category: "Fabrication",
    tolerance: "Full penetration 100% X-Ray quality"
  },
  {
    id: "paint-and-coating",
    number: "10",
    title: "Industrial Paint & Protective Coating",
    shortDesc: "Corrosion-resistant marine epoxy, polyurethane, electrostatic powder coating, hard anodizing, and phosphating.",
    fullDesc: "Comprehensive surface preparation and protective coating plant adhering to ISO 12944 marine C5-M high corrosion classification. Ensures extreme durability against seawater salt spray, chemicals, UV, and high abrasion.",
    specs: [
      { label: "Surface Prep", value: "Grit Blasting (Sa 2.5), Zinc Phosphating, Ultrasonic Degreasing" },
      { label: "Coating Types", value: "Marine Grade Epoxy, Polyurethane (PU), Electrostatic Powder Coating, Hard Anodizing (Type III)" },
      { label: "Testing & QA", value: "Dry Film Thickness (DFT) Gauge, Cross-Hatch Adhesion Test, 1000hr Salt Spray Test (ASTM B117)" },
      { label: "Oven Capacity", value: "Batch curing oven up to 250°C, 3.5m length" }
    ],
    equipment: ["Closed Sand/Grit Blasting Chamber", "Pressurized Dust-Free Paint Spray Booth", "Electrostatic Powder Coating Line with Curing Oven"],
    materials: ["All ferrous and non-ferrous metals"],
    applications: ["Subsea connector outer shells", "Naval equipment enclosures", "K-Electric outdoor switchgear housings", "Chemical plant valves"],
    icon: "Palette",
    category: "Finishing & QA",
    tolerance: "DFT controlled to ±5 microns per spec"
  },
  {
    id: "bending-machine",
    number: "11",
    title: "CNC Bending & Section Forming",
    shortDesc: "Multi-axis CNC hydraulic press brake with dynamic crowning for high-precision sheet metal and plate bending.",
    fullDesc: "Equipped with multi-axis CNC press brakes featuring automatic angle measurement and dynamic hydraulic crowning. Delivers flawless angular consistency across full sheet lengths without distortion or spring-back errors.",
    specs: [
      { label: "Bending Tonnage", value: "160 Metric Tons" },
      { label: "Max Bending Length", value: "3,200 mm" },
      { label: "Axis Control", value: "Delem CNC 4-Axis (Y1, Y2, X, R) + Automatic Hydraulic Crowning" },
      { label: "Tooling", value: "Hardened European segmented precision punches and multi-V dies" }
    ],
    equipment: ["CNC Multi-Axis Hydraulic Press Brake", "Section & Tube Bending Rollers"],
    materials: ["Stainless Steel (up to 6mm)", "Mild Steel (up to 10mm)", "Aluminum (up to 8mm)"],
    applications: ["Heavy machine guards", "Enclosures & consoles", "Structural brackets", "Transformer radiator tanks"],
    icon: "FoldHorizontal",
    category: "Fabrication",
    tolerance: "Angular precision ±0.25°"
  }
];

export const UNDERWATER_CONNECTOR_DATA = {
  headline: "Underwater Connectors",
  subheadline: "Engineered for Depth, Reliability, and Extreme Performance",
  about: "Designed through rigorous research and development, Star Engineering Works Underwater Connectors deliver dependable electrical signal and high-power transmission under extreme hydrostatic conditions. Purpose-built for marine, defense, submarine, and offshore energy sectors, they meet and exceed the exacting standards required for critical subsea operations.",
  keyFeatures: [
    { title: "Tested for Deep-Water Environments", desc: "Hydrostatically pressure-tested in our Karachi facility up to 600 Bar (simulating over 6,000 meters / 19,685 ft ocean depth) with zero ingress." },
    { title: "Corrosion & Shock Resistant", desc: "Constructed from passivated Stainless Steel 316L, Marine Grade Bronze, or Titanium Grade 5 with vulcanized chloroprene / polyurethane overmolding." },
    { title: "Precision CNC Engineering", desc: "Machined on multi-axis CNC turning centers to sub-5-micron tolerances, ensuring flawless concentricity and double O-ring compression seals." },
    { title: "Modular Pin Configurations", desc: "Available in 2, 4, 6, 8, 12, and 16-pin layouts for micro-signal, high-speed Ethernet data, and high-amperage power transmission." },
    { title: "Field Serviceable & Rapid Assembly", desc: "Keyway-guided mate with positive threaded locking sleeve; simplified assembly and disassembly for quick field servicing." },
    { title: "Indigenously Developed in Pakistan", desc: "100% designed, reverse-engineered, tested, and manufactured in Karachi, Pakistan by Star Engineering Works — cutting import reliance and saving national foreign exchange." }
  ],
  applications: [
    { name: "Submarine & Naval Systems", desc: "Hull penetrations, sonar array connections, submarine telemetry and communications." },
    { name: "Underwater Robotics / ROVs", desc: "Power feeds and fiber/copper control signals for Remotely Operated Vehicles and AUVs." },
    { name: "Marine Sensors & Instrumentation", desc: "Oceanographic CTD sensors, hydrophones, tidal flow meters, and environmental monitors." },
    { name: "Offshore Industrial Installations", desc: "Subsea oil & gas wellhead instrumentation, diver umbilical lines, and deep-water pipelines." }
  ],
  testingAndQuality: "Every single underwater connector undergoes comprehensive multi-stage qualification: 100% hydrostatic chamber pressure testing, 500V DC megohmmeter insulation resistance (>1,000 MΩ), contact resistance measurement (<5 mΩ), and 1,000-hour salt fog exposure. All units are stamped with unique serial numbers for 100% batch traceability.",
  models: [
    { model: "SEW-UW-04S", type: "4-Pin Signal & Data", depthRating: "6,000m (600 Bar)", currentVoltage: "10A @ 600V AC/DC", material: "SS 316L / Titanium", pinMaterial: "Gold-Plated Beryllium Copper" },
    { model: "SEW-UW-08E", type: "8-Pin High-Speed Ethernet", depthRating: "4,500m (450 Bar)", currentVoltage: "5A @ 300V / Cat5e Data", material: "SS 316L Marine Grade", pinMaterial: "Heavy Gold-Plated Brass" },
    { model: "SEW-UW-02P", type: "2-Pin Heavy Power", depthRating: "6,000m (600 Bar)", currentVoltage: "35A @ 1,000V AC", material: "Marine Aluminum-Bronze", pinMaterial: "Silver/Gold Plated Tellurium Copper" },
    { model: "SEW-UW-12H", type: "12-Pin Hybrid Power/Signal", depthRating: "5,000m (500 Bar)", currentVoltage: "4x 20A + 8x 5A Mixed", material: "SS 316Ti / Inconel", pinMaterial: "Precision Gold Plated" }
  ]
};

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "underwater-connectors-prod",
    title: "Deep-Water Subsea Connectors",
    category: "Underwater Connectors",
    subtitle: "High-integrity marine electrical connectors for extreme depth & pressure",
    description: "Indigenously developed high-density subsea connectors with double O-ring barrier sealing, vulcanized overmolding, and gold-plated contacts.",
    features: [
      "Pressure rated up to 600 Bar (6,000m depth)",
      "Passivated 316L Stainless Steel or Titanium Grade 5 shells",
      "Gold-plated contacts with >1000 MΩ insulation resistance",
      "Field-serviceable locking sleeve with positive tactile engagement"
    ],
    specs: [
      { label: "Depth Rating", value: "Up to 6000 meters" },
      { label: "Mating Cycles", value: "> 500 dry / wet cycles" },
      { label: "Operating Temp", value: "-20°C to +85°C" },
      { label: "Insulation", value: "> 1,000 MΩ @ 500 VDC" }
    ],
    applications: ["Submarine sonar", "Naval defense arrays", "Ocean ROVs", "Offshore rigs"],
    standards: ["MIL-STD-202G", "ISO 13628-6", "ASTM B117"],
    badge: "Indigenous Defense Innovation",
    imageAlt: "Underwater subsea connector cross-section with gold pins"
  },
  {
    id: "industrial-valves-flanges",
    title: "Industrial Grade High-Pressure Valves & Flanges",
    category: "Valves & Flanges",
    subtitle: "Heavy-duty forged and cast valves for oil, gas, power & chemical process plants",
    description: "Full range of high-pressure Ball, Gate, Globe, Check, and Butterfly valves manufactured in accordance with API, ASME, and DIN standards.",
    features: [
      "Machined from solid forgings (ASTM A105, F316L, F51) and precision castings",
      "Stellite hard-faced seats for extreme abrasive and corrosive service",
      "100% Hydrostatic shell and seat tested to 1.5x working pressure",
      "Fire-safe certified designs per API 607 / ISO 10497"
    ],
    specs: [
      { label: "Pressure Class", value: "ASME Class 150# up to 2500# (PN10 – PN420)" },
      { label: "Size Range", value: "1/2 inch to 36 inches (DN15 – DN900)" },
      { label: "Body Materials", value: "A216 WCB, A351 CF8M, Duplex A995 4A, Inconel" },
      { label: "End Connections", value: "Flanged (RF/RTJ), Butt-Weld, Socket-Weld, NPT" }
    ],
    applications: ["Engro Polymer chemical loops", "K-Electric power turbines", "Aisha Steel cooling lines", "Heavy water networks"],
    standards: ["API 6D", "ASME B16.34", "ASME B16.5", "ISO 5208"],
    badge: "Heavy Duty Process Grade",
    imageAlt: "Large industrial flanged valve body with precision machined seats"
  },
  {
    id: "cnc-turned-splines-shafts",
    title: "Precision Turbine Shafts, Splines & Impellers",
    category: "Precision CNC Components",
    subtitle: "Multi-axis machined rotating assemblies for power generation & heavy industry",
    description: "Ultra-precision dynamic balance shafts, involute splines, multi-stage pump impellers, and transmission gears machined on 4-axis VMCs and 6-axis turning centers.",
    features: [
      "Tolerances held within ±3 microns across bearing journals",
      "Dynamic balancing per ISO 1940 Grade G1.0 / G2.5",
      "Complete metallurgical certs with EN 10204 3.1 chemical & mechanical testing",
      "Surface finishes up to Ra 0.2 µm via precision cylindrical grinding"
    ],
    specs: [
      { label: "Max Diameter", value: "Ø 800 mm" },
      { label: "Max Length", value: "3,500 mm" },
      { label: "Surface Finish", value: "Ra 0.2 – 0.8 µm" },
      { label: "Balancing Speed", value: "Up to 10,000 RPM Dynamic Test" }
    ],
    applications: ["Power generation steam turbines", "Centrifugal high-pressure pumps", "Naval propulsion shafts"],
    standards: ["ISO 1940-1", "DIN 5480", "AGMA 2000"],
    badge: "Precision ±0.003mm",
    imageAlt: "Machined high alloy steel turbine shaft with involute splines"
  },
  {
    id: "defense-strategic-spares",
    title: "POF & Defense Mechanical Sub-Assemblies",
    category: "Defense & Spares",
    subtitle: "Import-substitution mechanical components for defense & armament hardware",
    description: "Reverse-engineered and precision manufactured replacement mechanisms, ordnance hardware, gun carriage components, and specialized tooling for Pakistan Ordnance Factories.",
    features: [
      "Rigorous adherence to military specifications and ballistic tolerance envelopes",
      "100% CMM inspection reports provided with every production lot",
      "Specialized heat treatment: Case carburizing, vacuum nitriding, induction hardening",
      "Black oxide, manganese phosphating, and hard chrome plating"
    ],
    specs: [
      { label: "Hardness Control", value: "58 – 62 HRC (Uniform case depth)" },
      { label: "Inspection", value: "100% Zeiss CMM 3D Verification" },
      { label: "Security & QA", value: "Strict chain-of-custody & serial identification" },
      { label: "Traceability", value: "ISO 10204 3.2 third-party inspection compliance" }
    ],
    applications: ["Pakistan Ordnance Factories (POF)", "Defense logistics & rebuild depots", "Strategic equipment maintenance"],
    standards: ["MIL-STD-105E", "DEF-STAN 05-21", "ISO 9001:2015"],
    badge: "POF Approved Vendor",
    imageAlt: "Precision machined defense mechanical linkages and ordnance parts"
  }
];

export const MAJOR_CLIENTS: Client[] = [
  {
    id: "pof",
    name: "Pakistan Ordnance Factories",
    acronym: "POF",
    category: "Defense & Strategic",
    description: "Long-standing trusted manufacturer of precision mechanical components, ordnance fixtures, ammunition tooling, and specialized import-substitution assemblies.",
    suppliedItems: ["Precision CNC Armament Components", "Hardened Tooling & Fixtures", "Heavy Press Dies", "Special Alloy Machining"],
    tier: "Strategic Partner",
    tag: "Defense Sector"
  },
  {
    id: "siemens",
    name: "Siemens Pakistan",
    acronym: "SIEMENS",
    category: "Energy & Utilities",
    description: "Supplying high-voltage switchgear hardware, transformer mechanical components, busbar brackets, and precision engineered electrical sub-assemblies.",
    suppliedItems: ["Switchgear Enclosures", "Precision Copper & Brass Busbars", "High-Voltage Bushing Mounts", "Laser Cut Control Panels"],
    tier: "Global OEM",
    tag: "Power & Automation"
  },
  {
    id: "ke",
    name: "K-Electric Limited",
    acronym: "KE",
    category: "Energy & Utilities",
    description: "Serving Karachi's premier power generation and distribution utility with power plant turbine components, substation hardware, and emergency maintenance spares.",
    suppliedItems: ["Turbine Auxiliary Spares", "Substation Hardware", "Heavy Cable Connectors", "Overhead Transmission Hardware"],
    tier: "Major Client",
    tag: "Power Generation"
  },
  {
    id: "aisha-steel",
    name: "Aisha Steel Mills Limited",
    acronym: "ASML",
    category: "Steel & Heavy Industry",
    description: "Providing heavy rolling mill mechanical spares, custom roller shafts, hydraulic cylinder components, and precision shear blades for cold-rolling steel operations.",
    suppliedItems: ["Cold Rolling Mill Rolls", "Hydraulic Cylinder Heads", "Shear Blade Assemblies", "Heavy Bearing Chocks"],
    tier: "Major Client",
    tag: "Heavy Steel Mill"
  },
  {
    id: "engro-polymer",
    name: "Engro Polymer & Chemicals",
    acronym: "EPCL",
    category: "Chemical & Petrochemical",
    description: "Manufacturing corrosion-resistant exotic alloy valve internals, chemical pump impellers, duplex stainless steel pipe spools, and reactor vessel components.",
    suppliedItems: ["Duplex Stainless Spool Assemblies", "Chemical Valve Internals", "Titanium & Hastelloy Machining", "Seawater Heat Exchanger Parts"],
    tier: "Major Client",
    tag: "Petrochemical"
  },
  {
    id: "xometry",
    name: "Xometry Global Network",
    acronym: "XOMETRY",
    category: "Global Supply Chain",
    description: "Certified supplier for on-demand global manufacturing, fulfilling high-precision export orders for European and North American aerospace, robotics, and industrial buyers.",
    suppliedItems: ["CNC 4-Axis Milled Brackets", "6-Axis Swiss Turned Pins", "Aluminum 7075 Robotics Links", "Rapid Prototypes"],
    tier: "Global OEM",
    tag: "Global On-Demand"
  }
];

export const ABOUT_SECTIONS = {
  intro: "M/s Star Engineering Works is an ISO 9001:2015 certified company established in 1985. For nearly four decades, we have been at the forefront of Manufacturing and Supplying Mechanical and Electrical equipment and components throughout Pakistan. Our mission is to deliver products that rival international standards while reducing import dependence and conserving Pakistan's foreign exchange reserves.",
  vision: "To become a leading engineering enterprise by empowering local industries through innovative and cost-effective technical solutions, and to serve as a key partner in Pakistan's industrial growth and development.",
  missionPillars: [
    {
      title: "Diversity",
      desc: "We think beyond conventional boundaries to develop precise, customized solutions for defense, energy, marine, and process industries."
    },
    {
      title: "Profitability",
      desc: "We deliver solutions that maximize operational efficiency, minimize machine downtime, and drive sustainable profitability for our clients."
    },
    {
      title: "Knowledge",
      desc: "We stay current with cutting-edge problem-solving techniques, advanced CAM toolpath optimization, and modern metallurgical advancements."
    },
    {
      title: "Inspiration",
      desc: "We strive to set national industry benchmarks through sustained quality growth, ethical engineering, and an exemplary corporate reputation."
    },
    {
      title: "Commitment",
      desc: "We are dedicated to providing excellent, cost-effective solutions delivered on time, every time, with rigorous quality assurance."
    }
  ],
  whyChooseUs: [
    {
      title: "Cost-Effective Consultation Services",
      desc: "Expert technical guidance on design for manufacturing (DFM), alloy selection, and value engineering that cuts production costs without compromising strength."
    },
    {
      title: "On-Demand Availability of Manufacturing Expertise",
      desc: "A multidisciplinary team of mechanical engineers, certified CNC programmers, foundry metallurgists, and veteran machinists ready to execute complex projects."
    },
    {
      title: "Adherence to International Product & Machining Standards",
      desc: "Rigid compliance with ASTM, ASME, DIN, BS, and ISO standards with full material test certificates (MTR) and CMM dimensional verification."
    }
  ]
};

export const STANDARDS_DATA = {
  productStandards: [
    { code: "ASTM", name: "American Society for Testing and Materials", desc: "Material specs for stainless steels, alloy forgings, bronzes, and coating tests (e.g. ASTM B117 salt fog)." },
    { code: "ASME", name: "American Society of Mechanical Engineers", desc: "ASME Section VIII pressure vessels, ASME B16.34 valves, B16.5 flanges, and Sec IX welding qualification." },
    { code: "ISO", name: "International Organization for Standardization", desc: "ISO 9001:2015 QMS, ISO 14001 environmental, ISO 45001 occupational health & safety." },
    { code: "BS", name: "British Standards Institution", desc: "BS EN standards for mechanical fasteners, structural fabrication, and piping components." },
    { code: "DIN", name: "Deutsches Institut für Normung", desc: "German industrial precision standards for metric fasteners, splines (DIN 5480), and hydraulic fittings." }
  ],
  machiningStandards: [
    { code: "ISO 16090-1:2007", name: "Machine Tool Safety & Precision", desc: "Comprehensive compliance for operational safety, spindle concentricity, and axis travel repeat accuracy." },
    { code: "ISO 9013", name: "Thermal & Laser Cutting Geometrical Product Specs", desc: "Class 1 laser cutting tolerances, squareness, and surface roughness classifications for sheet metal." },
    { code: "ISO 10204 (Type 3.1 & 3.2)", name: "Metallic Products Inspection Documents", desc: "Full chemical, tensile, impact, and non-destructive examination (NDE) mill test certificates." }
  ]
};
