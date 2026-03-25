// data/tago.js
// Contains the specific data for the "Tago" machine model.

machineData.push({
  modelName: "Tago",
  statuses: {
    "Capacity": {
      "MT cooling capacity": {
        "Max cooling capacity @-8°C, Pgc=92bar, Tout_GC=36°C": { value: "40 kW" },
        "Min cooling capacity @-8°C, Pgc=92bar, Tout_GC=36°C": { value: "" },
        "Max n° MT compressors (4 cilindri)": { value: "2" },
        "Max n° AUX compressors (4 cilindri)": { status: "na" },
        "Secondary MT capacity": { status: "na" }
      },
      "LT cooling capacity": {
        "LT cooling capacity": { status: "opt" },
        "Max cooling capacity @-32°C, Pgc=92bar, Tout_GC=36°C": { value: "" },
        "Max n° LT compressors": { value: "1" },
        "Secondary LT capacity": { status: "na" }
      },
      "Pressures": {
        "HP": { value: "120" },
        "IP RIC": { value: "80" },
        "IP": { value: "80" },
        "MT": { value: "52 STD" },
        "BT": { value: "30-36/60 OPT" }
      },
    },
    "Special configuration": {
      "Parallel compression": {
        "Parallel compression": { status: "na" },
      },
      "Detached Electrical Panel": {
        "Detached Electrical Panel": { status: "na" },
      },
      "Unit in 2 pieces": {
        "Unit in 2 pieces": { status: "na" },
      },
      "Air Conditioned by flooded evaporator with auxiliary compressors": {
        "Air Conditioned by flooded evaporator with auxiliary compressors": {
          status: "na",
        },
      },
      "Air Conditioned by external evaporator with dedicated compressors": {
        "Air Conditioned by external evaporator with dedicated compressors": {
          status: "na",
        },
      },
      "Heat pump with dedicated compressor": {
        "Heat pump with dedicated compressor": { status: "na" },
      },
      "Heat pump + Air conditioned by dedicated compressor": {
        "Heat pump + Air conditioned by dedicated compressor": { status: "na" },
      },
    },
    frame: {
      "Full welded iron frame": {
        "Full welded iron frame": { status: "na" },
      },
      "Metal sheet frame with rivets": {
        "Metal sheet frame with rivets": { status: "std" },
      },
    },
    cladding: {
      "Indoor cladding": { "Indoor cladding": { status: "opt" } },
      "Outdoor cladding": { "Outdoor cladding": { status: "opt" } },
      "Cooled cladding by internal CO2 evaporator": {
        "Cooled cladding by internal CO2 evaporator": { status: "na" },
      },
    },
    compressors: {
      brand: {
        DORIN: { status: "opt" },
        BITZER: { status: "opt" },
        "BITZER+VARISTEP (CR2) (IQ MODULE INCLUDED)": { status: "na" },
        "BITZER+IQ MODULE(CM-RC-01)": { status: "na" },
      },
      "pressure switches": {
        "1 x SUCTION": { status: "na" },
        "1 x DISCHARGE": { status: "std" },
        "2 x DISCHARGE": { status: "na" },
      },
      "TK3 Teklab": {
        "TK3 Teklab": { status: "std" },
      },
      "Check valves on discharge pipe": {
        "Check valves on discharge pipe": { status: "na" },
      },
    },
    inverters: {
      "N°1 inverter for each suction line": {
        IP55: { status: "na" },
        IP21: { status: "std" },
      },
      "N°2 inverter for MT line": {
        "N°2 inverter for MT line": { status: "na" },
      },
      "Inverter bypass": {
        "Inverter bypass": {
          status: "opt*",
          note: "*Only upon request and approval by Massimiliano.",
        },
      },
    },
    "oil management": {
      "oil separator": {
        "Oil separator (Temprite) + Solenoid Valve": { status: "na" },
        "Bypass oil separator": { status: "na" },
      },
      "oil tank": {
        "Oil tank": { status: "std" },
        "Minimum level sensor": { status: "na" },
        "Maximum level sensor": { status: "na" },
      },
      Backpressure: {
        Backpressure: { status: "na" },
      },
    },
    "Gas Cooler section": {
      Connections: {
        INOX: { status: "opt" },
        K65: { status: "std" },
      },
      "GAS COOLER": { "GAS COOLER": { status: "opt" } },
      "Epoxy Treatment": { "Epoxy Treatment": { status: "opt" } },
      "Adiabatic kit": {
        "Adiabatic kit": {
          status: "opt*",
          note: "*Available only with Epoxy Treatment but electrical supply not included",
        },
      },
      Bypass: {
        "Manual Bypass": { status: "na" },
        "Automatic V-Port Bypass": {
          status: "na",
          details: "(1 x 3-w + Belimo V-PORT) + Check valve",
        },
      },
    },
    "Intercooler Section": {
      INTERCOOLER: { INTERCOOLER: { status: "na" } },
      Connections: {
        INOX: { status: "na" },
        K65: { status: "na" },
      },
      Bypass: {
        "Manual Bypass": { status: "na" },
        "Automatic ON/OFF Bypass": {
          status: "na",
          details: "(1 x 3-way bass valves + Belimo ON/OFF)",
        },
        "Automatic V-PORT Bypass": {
          status: "na",
          details: "(1 x 3-way bass valves + Belimo V-PORT)",
        },
      },
    },
    "Muffler on LT discharge": {
      "Only if intercooler is present": {
        "Muffler on LT discharge": {
          status: "na",
        },
      },
    },
    "Regenerative exchanger": {
      "Exchanger model": {
        "MULTITUBE/PLATE": { status: "std" },
      },
      "Manual bypass": {
        "Manual bypass": { status: "na", details: "3 x 2-way bass valves" },
      },
    },
    "Heat recovery n°1": {
      Bypass: {
        "Exchanger Automatic ON/OFF Bypass": {
          status: "opt",
          details: "1 x 3-way bass valves + Belimo ON/OFF",
        },
        "Exchanger Automatic V-PORT Bypass": {
          status: "opt",
          details: "1 x 3-way bass valves + Belimo V-PORT",
        },
        "Manual Bypass": {
          status: "na",
          details: "3 x 2-way bass valves",
        },
      },
    },
    "Heat recovery n°2": {
      Bypass: {
        "Exchanger Automatic ON/OFF Bypass": {
          status: "na",
          details: "(1 x 3-way bass valves + Belimo ON/OFF) +  (2-way MANUAL)",
        },
        "Exchanger Automatic V-PORT Bypass": {
          status: "na",
          details: "(1 x 3-way bass valves + Belimo V-PORT) +  (2-way MANUAL)",
        },
        "Manual Bypass": {
          status: "na",
          details: "3 x 2-way bass valves",
        },
      },
    },
    "Heat recoveries global bypass (emergency)": {
      "Automatic ON/OFF bypass": {
        "Automatic ON/OFF bypass": {
          status: "na",
          details: "(1 x 3-way bass valves + Belimo ON/OFF) +  (2-way MANUAL)",
        },
      },
      "Manual bypass": {
        "Manual bypass": { status: "na", details: "3 x 2-way bass valves" },
      },
    },
    "HPV-IPV": {
      "Electronic": {
        "Electronic": { status: "na" }
      },
      "Mechanical": {
        "Mechanical": { status: "na" }
      },
      "Backup (electronic)": {
        "Backup (electronic)": { status: "na" }
      }
    },
    "Liquid receiver and Liquid indicator": {
      RECEIVER: { RECEIVER: { status: "std" } },
      "Only min. level sensor": {
        "Only min. level sensor": { status: "std" },
      },
      "Maximum level sensor": {
        "Maximum level sensor": { status: "na" },
      },
      "Full level indicator": {
        COLDPIPE: { status: "na", details: "With 2 sensors" },
        WEKA: { status: "na", details: "With 3 sensors" },
      },
      Filter: {
        "Filter bypass": { status: "na" },
        "Double filter": { status: "na" },
      },
    },
    "Liquid Subcooler": {
      "Plate exchanger": { "Plate exchanger": { status: "na" } },
      "Expansion valve + Driver": {
        "Expansion valve + Driver": {
          status: "na*",
          note:
            "*Probes: 1xTemperature, 1x Pressure included. ExV with Carel Controller, CCMT with other controllers.",
        },
      },
    },
    "Connections to evaporators": {
      Material: {
        INOX: { status: "opt" },
        K65: { status: "std" },
      },
    },
    "LT return line": {
      "Suction liquid plate exchanger": {
        "Suction liquid plate exchanger": { status: "na" },
      },
      "Suction accumulator LT": {
        "Suction accumulator LT": { status: "na" },
      },
      Filter: { Filter: { status: "std" } },
    },
    "MT return line": {
      "Suction accumulator MT": {
        "Suction accumulator MT": { status: "std" },
      },
      Filter: { Filter: { status: "std" } },
      "Ejectors": {
        "Liquid ejector": { status: "na" },
        "Vapour ejector": { status: "na" },
      },
    },
    "Backup unit": {
      Refrigerant: {
        R134A: {
          status: "na",
        },
        R290: {
          status: "na",
        },
      },
    },
    "Electrical Panel (EP)": {
      "Main controller": {
        "Danfoss/Carel": { status: "std" },
        Dixell: { status: "opt*",
        note: "*SPECIAL REQUEST TO BE APPROVED",
         },
        Wurm: { status: "opt*",
        note: "*SPECIAL REQUEST TO BE APPROVED",
         },
      },
      "Backup controller": {
        "Backup controller as spare parts": {
          status: "opt*",
          note: "*Programmed controller in carton box, NOT mounted in the EP",
        },
        "Backup controller inside EP with automatic triggering": {
          status: "na*",
          note: "*+ backup probes mounted, + pressure switches for emergency triggering",
        },
      },
      "Brake current Icc": {
        "10kA": { status: "std" },
        ">10kA <25kA": { status: "na" },
      },
      "Electrical departures 230V or 380V": {
        "Electrical departures 230V or 380V": {
          status: "na",
        },
      },
      "Differential protections on compressors": {
        "Differential protections on compressors": { status: "opt" },
      },
      "Bobina MX": { "Bobina MX": { status: "opt" } },
      UPS: { UPS: { status: "na" } },
      "AOE Panel": { "AOE Panel": { status: "na" } },
    },
    Wiring: {
      Material: {
        Standard: { status: "std" },
        "Halogen Free": { status: "opt" },
      },
    },
    Ducting: {
      Material: {
        INOX: { status: "opt" },
      },
    },
    "Safety Valves": {
      HP: {
        Single: { status: "std" },
        Double: { status: "na" },
      },
      "Liquid receiver": {
        Double: { status: "std" },
      },
      "Oil tank": {
        Single: { status: "na" },
        Double: {
          status: "na",
        },
      },
      "Suction Accumulators": {
        Single: { status: "na" },
        Double: { status: "na" },
      },
      "Pipes & Other critical points": {
        Single: { status: "std" },
        Double: { status: "na" },
      },
    },
    Complementary: {
      "Oil charge": {
        "Oil charge": { status: "opt" },
      },
    },
  },
});
