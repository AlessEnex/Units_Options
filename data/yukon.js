// data/yukon.js
// Contains the specific data for the "Yukon" machine model.

machineData.push({
  modelName: "Yukon",
  statuses: {
    "Capacity": {
      "MT cooling capacity": {
        "Max cooling capacity @-8°C, Pgc=92bar, Tout_GC=36°C": { value: "brochure" },
        "Min cooling capacity @-8°C, Pgc=92bar, Tout_GC=36°C": { value: "" },
        "Max n° MT compressors (4 cilindri)": { value: "6/5", note: "*STD/R" },
        "Max n° AUX compressors (4 cilindri)": { status: "na" },
        "Secondary MT capacity": { status: "na" }
      },
      "LT cooling capacity": {
        "LT cooling capacity": { status: "na" },
        "Max cooling capacity @-32°C, Pgc=92bar, Tout_GC=36°C": { status: "na" },
        "Max n° LT compressors": { status: "na" },
        "Secondary LT capacity": { status: "na" }
      },
      "Pressures": {
        "HP": { value: "130", note: "*Only for STD" },
        "IP RIC": { value: "80", note: "*Only for STD" },
        "IP": { value: "80", note: "*Only for STD" },
        "MT": { status: "na", note: "*Only for STD" },
        "BT": { status: "na", note: "*Only for STD" }
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
          status: "std",
        },
      },
      "Air Conditioned by external evaporator with dedicated compressors": {
        "Air Conditioned by external evaporator with dedicated compressors": {
          status: "na",
        },
      },
      "Heat pump with dedicated compressor": {
        "Heat pump with dedicated compressor": { status: "std" },
      },
      "Heat pump + Air conditioned by dedicated compressor": {
        "Heat pump + Air conditioned by dedicated compressor": { status: "std" },
      },
    },
    frame: {
      "Full welded iron frame": {
        "Full welded iron frame": { status: "std" },
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
        DORIN: { status: "std" },
        BITZER: { status: "opt" },
        "BITZER+VARISTEP (CR2) (IQ MODULE INCLUDED)": { status: "na" },
        "BITZER+IQ MODULE(CM-RC-01)": { status: "na" },
      },
      "pressure switches": {
        "1 x SUCTION": { status: "opt" },
        "1 x DISCHARGE": { status: "std" },
        "2 x DISCHARGE": { status: "opt" },
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
        IP55: { status: "std" },
        IP21: { status: "na" },
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
        "Oil separator (Temprite) + Solenoid Valve": { status: "std" },
        "Bypass oil separator": { status: "na" },
      },
      "oil tank": {
        "Oil tank": { status: "std" },
        "Minimum level sensor": { status: "std" },
        "Maximum level sensor": { status: "na" },
      },
      Backpressure: {
        Backpressure: { status: "opt" },
      },
    },
    "Gas Cooler section": {
      Connections: {
        INOX: { status: "std" },
        K65: { status: "opt" },
      },
      "GAS COOLER": { "GAS COOLER": { status: "na" } },
      "Epoxy Treatment": { "Epoxy Treatment": { status: "na" } },
      "Adiabatic kit": {
        "Adiabatic kit": {
          status: "opt*",
          note: "*Available only with Epoxy Treatment",
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
          status: "na",
          details: "1 x 3-way bass valves + Belimo ON/OFF",
        },
        "Exchanger Automatic V-PORT Bypass": {
          status: "na",
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
        "Electronic": { status: "std" }
      },
      "Mechanical": {
        "Mechanical": { status: "std*",
            note: "*Not available for YK1",
         }
      },
      "Backup (electronic)": {
        "Backup (electronic)": { status: "opt*",
          note: "*DO NOT replace the mechanical valve. With or without backup controller. Manually switch from standard functioning to emergency mode.Not available for YK1.",
         }
      }
    },
    "Liquid receiver and Liquid indicator": {
      RECEIVER: { RECEIVER: { status: "std" } },
      "Only min. level sensor": {
        "Only min. level sensor": { status: "std" },
      },
      "Maximum level sensor": {
        "Maximum level sensor": { status: "opt" },
      },
      "Full level indicator": {
        COLDPIPE: { status: "std", details: "With 2 sensors" },
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
          note: "*Probes: 1xTemperature, 1x Pressure included. ExV with Carel Controller, CCMT with other controllers.",
        },
      },
    },
    "Connections to evaporators": {
      Material: {
        INOX: { status: "std*",
            note:"*Flanged for water pipes",
         },
        K65: { status: "na" },
      },
    },
    "LT return line": {
      "Suction liquid plate exchanger": {
        "Suction liquid plate exchanger": { status: "na" },
      },
      "Suction accumulator LT": {
        "Suction accumulator LT": { status: "na" },
      },
      Filter: { Filter: { status: "na" } },
    },
    "MT return line": {
      "Suction accumulator MT": {
        "Suction accumulator MT": { status: "na" },
      },
      Filter: { Filter: { status: "na" } },
      "Ejectors": {
        "Liquid ejector": { status: "opt*",
            note: "1 ejector (vapour mixed liquid)",
         },
        "Vapour ejector": { status: "opt*",
            note: "1 ejector (vapour mixed liquid)",
         },
      },
    },
    "Backup unit": {
      Refrigerant: {
        R134A: {
          status: "opt",
        },
        R290: {
          status: "opt",
        },
      },
    },
    "Electrical Panel (EP)": {
      "Main controller": {
        "Danfoss/Carel": { status: "opt" },
        Dixell: { status: "na",
         },
        Wurm: { status: "na",
         },
      },
      "Backup controller": {
        "Backup controller as spare parts": {
          status: "opt*",
          note: "*Programmed controller in carton box, NOT mounted in the EP",
        },
        "Backup controller inside EP with automatic triggering": {
          status: "opt*",
          note: "*+ backup probes mounted, + pressure switches for emergency triggering",
        },
      },
      "Brake current Icc": {
        "10kA": { status: "std" },
        ">10kA <25kA": { status: "opt" },
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
        INOX: { status: "std" },
      },
    },
    "Safety Valves": {
      HP: {
        Single: { status: "std" },
        Double: { status: "opt" },
      },
      "Liquid receiver": {
        Double: { status: "std" },
      },
      "Oil tank": {
        Single: { status: "std" },
        Double: {
          status: "opt",
        },
      },
      "Suction Accumulators": {
        Single: { status: "na" },
        Double: { status: "na" },
      },
      "Pipes & Other critical points": {
        Single: { status: "na" },
        Double: { status: "na" },
      },
    },
    Complementary: {
      "Oil charge": {
        "Oil charge": { status: "std" },
      },
    },
  },
});
