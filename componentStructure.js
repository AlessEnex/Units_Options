// componentStructure.js
// This is the "master list" that defines the structure of ALL possible components.

const componentStructure = {
  "Capacity": {
    "MT cooling capacity": [
      "Max cooling capacity @-8°C, Pgc=92bar, Tout_GC=36°C",
      "Min cooling capacity @-8°C, Pgc=92bar, Tout_GC=36°C",
      "Max n° MT compressors (4 cilindri)",
      "Max n° AUX compressors (4 cilindri)",
      "Secondary MT capacity"
    ],
    "LT cooling capacity": [
      "Max cooling capacity @-32°C, Pgc=92bar, Tout_GC=36°C",
      "Max n° LT compressors",
      "Secondary LT capacity"
    ],
    "Pressures": [
      "HP",
      "IP RIC",
      "IP",
      "MT",
      "BT"
    ]
  },
  "Special configuration": {
    "Parallel compression": ["Parallel compression"],
    "Detached Electrical Panel": ["Detached Electrical Panel"],
    "Unit in 2 pieces": ["Unit in 2 pieces"],
    "Air Conditioned by flooded evaporator with auxiliary compressors": [
      "Air Conditioned by flooded evaporator with auxiliary compressors",
    ],
    "Air Conditioned by external evaporator with dedicated compressors": [
      "Air Conditioned by external evaporator with dedicated compressors",
    ],
    "Heat pump with dedicated compressor": ["Heat pump with dedicated compressor"],
    "Heat pump + Air conditioned by dedicated compressor": [
      "Heat pump + Air conditioned by dedicated compressor",
    ],
  },
  frame: {
    "Full welded iron frame": [
      "Full welded iron frame"
    ],
    "Metal sheet frame with rivets": [
      "Metal sheet frame with rivets"
    ]
  },
  cladding: {
    "Indoor cladding": [
      "Indoor cladding"
    ],
    "Outdoor cladding": [
      "Outdoor cladding"
    ],
    "Cooled cladding by internal CO2 evaporator": [
      "Cooled cladding by internal CO2 evaporator"
    ]
  },
  compressors: {
    brand: [
      "DORIN",
      "BITZER",
      "BITZER+VARISTEP (CR2) (IQ MODULE INCLUDED)",
      "BITZER+IQ MODULE(CM-RC-01)"
    ],
    "pressure switches": [
      "1 x SUCTION",
      "1 x DISCHARGE",
      "2 x DISCHARGE"
    ],
    "TK3 Teklab": [
      "TK3 Teklab"
    ],
    "Check valves on discharge pipe": [
      "Check valves on discharge pipe"
    ]
  },
  inverters: {
    "N°1 inverter for each suction line": [
      "IP55",
      "IP21"
    ],
    "N°2 inverter for MT line": [
      "N°2 inverter for MT line"
    ],
    "Inverter bypass": [
      "Inverter bypass"
    ]
  },
  "oil management": {
    "oil separator": [
      "Oil separator (Temprite) + Solenoid Valve",
      "Bypass oil separator"
    ],
    "oil tank": [
      "Oil tank",
      "Minimum level sensor",
      "Maximum level sensor"
    ],
    "Backpressure": [
      "Backpressure"
    ]
  },
  "Gas Cooler section": {
    "Connections": [
      "INOX",
      "K65"
    ],
    "GAS COOLER": [
      "GAS COOLER"
    ],
    "Epoxy Treatment": [
      "Epoxy Treatment"
    ],
    "Adiabatic kit": [
      "Adiabatic kit"
    ],
    "Bypass": [
      "Manual Bypass",
      "Automatic V-Port Bypass"
    ]
  },
  "Intercooler Section": {
    "INTERCOOLER": [
      "INTERCOOLER"
    ],
    "Connections": [
      "INOX",
      "K65"
    ],
    "Bypass": [
      "Manual Bypass",
      "Automatic ON/OFF Bypass",
      "Automatic V-PORT Bypass"
    ]
  },
  "Muffler on LT discharge": {
    "Only if intercooler is present": [
      "Muffler on LT discharge"
    ]
  },
  "Regenerative exchanger": {
    "Exchanger model": [
      "MULTITUBE/PLATE"
    ],
    "Manual bypass": [
      "Manual bypass"
    ]
  },
  "Heat recovery n°1": {
    "Bypass": [
      "Exchanger Automatic ON/OFF Bypass",
      "Exchanger Automatic V-PORT Bypass",
      "Manual Bypass"
    ]
  },
  "Heat recovery n°2": {
    "Bypass": [
      "Exchanger Automatic ON/OFF Bypass",
      "Exchanger Automatic V-PORT Bypass",
      "Manual Bypass"
    ]
  },
  "Heat recoveries global bypass (emergency)": {
    "Automatic ON/OFF bypass": [
      "Automatic ON/OFF bypass"
    ],
    "Manual bypass": [
      "Manual bypass"
    ]
  },
  "HPV-IPV": {
    "Electronic": [
      "Electronic"
    ],
    "Mechanical": [
      "Mechanical"
    ],
    "Backup (electronic)": [
      "Backup (electronic)"
    ]
  },
  "Liquid receiver and Liquid indicator": {
    "RECEIVER": [
      "RECEIVER"
    ],
    "Only min. level sensor": [
      "Only min. level sensor"
    ],
    "Full level indicator": [
      "COLDPIPE",
      "WEKA"
    ],
    "Filter": [
      "Filter bypass",
      "Double filter"
    ]
  },
  "Liquid Subcooler": {
    "Plate exchanger": [
      "Plate exchanger"
    ],
    "Expansion valve + Driver": [
      "Expansion valve + Driver"
    ]
  },
  "Connections to evaporators": {
    "Material": [
      "INOX",
      "K65"
    ]
  },
  "LT return line": {
    "Suction liquid plate exchanger": [
      "Suction liquid plate exchanger"
    ],
    "Suction accumulator LT": [
      "Suction accumulator LT"
    ],
    "Filter": [
      "Filter"
    ]
  },
  "MT return line": {
    "Suction accumulator MT": [
      "Suction accumulator MT"
    ],
    "Filter": [
      "Filter"
    ],
    "Ejectors": [
      "Liquid ejector",
      "Vapour ejector"
    ]
  },
  "Backup unit": {
    "Refrigerant": [
      "R134A",
      "R290"
    ]
  },
  "Electrical Panel (EP)": {
    "Main controller": [
      "Danfoss/Carel",
      "Dixell",
      "Wurm"
    ],
    "Backup controller": [
      "Backup controller as spare parts",
      "Backup controller inside EP with automatic triggering"
    ],
    "Brake current Icc": [
      "10kA",
      ">10kA <25kA"
    ],
    "Electrical departures 230V or 380V": [
      "Electrical departures 230V or 380V"
    ],
    "Differential protections on compressors": [
      "Differential protections on compressors"
    ],
    "Bobina MX": [
      "Bobina MX"
    ],
    "UPS": [
      "UPS"
    ],
    "AOE Panel": [
      "AOE Panel"
    ]
  },
  "Wiring": {
    "Material": [
      "Standard",
      "Halogen Free"
    ]
  },
  "Ducting": {
    "Material": [
      "INOX"
    ]
  },
  "Safety Valves": {
    "HP": [
      "Single",
      "Double"
    ],
    "Liquid receiver": [
      "Double"
    ],
    "Oil tank": [
      "Single",
      "Double"
    ],
    "Suction Accumulators": [
      "Single",
      "Double"
    ],
    "Pipes & Other critical points": [
      "Single",
      "Double"
    ]
  },
  "Complementary": {
    "Oil charge": [
      "Oil charge"
    ]
  }
  // Add other classes and subclasses here when you are ready
};
