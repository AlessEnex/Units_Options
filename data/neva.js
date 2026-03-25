// data/neva.js
// Contains the specific data for the "Neva" machine model.

machineData.push({
  modelName: "Neva",
  statuses: {
    "Capacity": {
      "MT cooling capacity": {
        "Max cooling capacity @-8°C, Pgc=92bar, Tout_GC=36°C": { value: "800 kW" },
        "Min cooling capacity @-8°C, Pgc=92bar, Tout_GC=36°C": { value: "" },
        "Max n° MT compressors (4 cilindri)": { value: "8" },
        "Max n° AUX compressors (4 cilindri)": { status: "na" },
        "Secondary MT capacity": { status: "opt" }
      },
      "LT cooling capacity": {
        "LT cooling capacity": { status: "opt" },
        "Max cooling capacity @-32°C, Pgc=92bar, Tout_GC=36°C": { value: "" },
        "Max n° LT compressors": { value: "6" },
        "Secondary LT capacity": { status: "opt" }
      },
      "Pressures": {
        "HP": { value: "" },
        "IP RIC": { value: "60/80 OPT" },
        "IP": { value: "60/80 OPT" },
        "MT": { value: "42/52/60/80 OPT" },
        "BT": { value: "30-36/60 OPT" }
      },
    },
    "Special configuration": {
      "Parallel compression": {
        "Parallel compression": { status: "na" },
      },
      "Detached Electrical Panel": {
        "Detached Electrical Panel": { status: "opt" },
      },
      "Unit in 2 pieces": {
        "Unit in 2 pieces": { status: "opt" },
      },
      "Air Conditioned by flooded evaporator with auxiliary compressors": {
        "Air Conditioned by flooded evaporator with auxiliary compressors": {
          status: "na",
        },
      },
      "Air Conditioned by external evaporator with dedicated compressors": {
        "Air Conditioned by external evaporator with dedicated compressors": {
          status: "opt",
        },
      },
      "Heat pump with dedicated compressor": {
        "Heat pump with dedicated compressor": { status: "opt" },
      },
      "Heat pump + Air conditioned by dedicated compressor": {
        "Heat pump + Air conditioned by dedicated compressor": { status: "na" },
      },
    },
    frame: {
      "Full welded iron frame": {
        "Full welded iron frame": { status: "std" },
      },
      "Metal sheet frame with rivets": {
        "Metal sheet frame with rivets": { status: "na" },
      },
    },
    cladding: {
      "Indoor cladding": { "Indoor cladding": { status: "opt" } },
      "Outdoor cladding": { "Outdoor cladding": { status: "opt" } },
      "Cooled cladding by internal CO2 evaporator": {
        "Cooled cladding by internal CO2 evaporator": { status: "opt" },
      },
    },
    compressors: {
      brand: {
        DORIN: { status: "std" },
        BITZER: { status: "opt" },
        "BITZER+VARISTEP (CR2) (IQ MODULE INCLUDED)": { status: "opt" },
        "BITZER+IQ MODULE(CM-RC-01)": { status: "opt" },
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
        "N°2 inverter for MT line": { status: "opt" },
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
        "Bypass oil separator": { status: "opt" },
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
      "GAS COOLER": { "GAS COOLER": { status: "opt" } },
      "Epoxy Treatment": { "Epoxy Treatment": { status: "opt" } },
      "Adiabatic kit": {
        "Adiabatic kit": {
          status: "opt*",
          note: "*Available only with Epoxy Treatment",
        },
      },
      Bypass: {
        "Manual Bypass": { status: "opt" },
        "Automatic V-Port Bypass": {
          status: "opt",
          details: "(1 x 3-w + Belimo V-PORT) + Check valve",
        },
      },
    },
    "Intercooler Section": {
      INTERCOOLER: { INTERCOOLER: { status: "opt" } },
      Connections: {
        INOX: { status: "opt" },
        K65: { status: "std" },
      },
      Bypass: {
        "Manual Bypass": { status: "opt" },
        "Automatic ON/OFF Bypass": {
          status: "opt",
          details: "(1 x 3-way bass valves + Belimo ON/OFF)",
        },
        "Automatic V-PORT Bypass": {
          status: "opt",
          details: "(1 x 3-way bass valves + Belimo V-PORT)",
        },
      },
    },
    "Muffler on LT discharge": {
      "Only if intercooler is present": {
        "Muffler on LT discharge": {
          status: "opt*",
          note: "*Supplied as spare parts ON REQUEST for new customers; installed on the unit for historical customers",
        },
      },
    },
    "Regenerative exchanger": {
      "Exchanger model": {
        "MULTITUBE/PLATE": { status: "std" },
      },
      "Manual bypass": {
        "Manual bypass": { status: "std", details: "3 x 2-way bass valves" },
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
          status: "opt",
          details: "3 x 2-way bass valves",
        },
      },
    },
    "Heat recovery n°2": {
      Bypass: {
        "Exchanger Automatic ON/OFF Bypass": {
          status: "opt",
          details: "(1 x 3-way bass valves + Belimo ON/OFF) +  (2-way MANUAL)",
        },
        "Exchanger Automatic V-PORT Bypass": {
          status: "opt",
          details: "(1 x 3-way bass valves + Belimo V-PORT) +  (2-way MANUAL)",
        },
        "Manual Bypass": {
          status: "opt",
          details: "3 x 2-way bass valves",
        },
      },
    },
    "Heat recoveries global bypass (emergency)": {
      "Automatic ON/OFF bypass": {
        "Automatic ON/OFF bypass": {
          status: "opt",
          details: "(1 x 3-way bass valves + Belimo ON/OFF) +  (2-way MANUAL)",
        },
      },
      "Manual bypass": {
        "Manual bypass": { status: "opt", details: "3 x 2-way bass valves" },
      },
    },
    "HPV-IPV": {
      "Electronic": {
        "Electronic": { status: "std" }
      },
      "Mechanical": {
        "Mechanical": { status: "std" }
      },
      "Backup (electronic)": {
        "Backup (electronic)": { status: "opt*",
          note: "*Replace the mechanical valve. With or without backup controller. Automatically switch from standard functioning to emergency mode.",
         }
      }
    },
    "Liquid receiver and Liquid indicator": {
      RECEIVER: { RECEIVER: { status: "std" } },
      "Only min. level sensor": {
        "Only min. level sensor": { status: "std" },
      },
      "Full level indicator": {
        COLDPIPE: { status: "opt", details: "With 2 sensors" },
        WEKA: { status: "opt", details: "With 3 sensors" },
      },
      Filter: {
        "Filter bypass": { status: "std" },
        "Double filter": { status: "opt" },
      },
    },
    "Liquid Subcooler": {
      "Plate exchanger": { "Plate exchanger": { status: "opt" } },
      "Expansion valve + Driver": {
        "Expansion valve + Driver": {
          status: "opt*",
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
        "Suction liquid plate exchanger": { status: "std" },
      },
      "Suction accumulator LT": {
        "Suction accumulator LT": { status: "opt" },
      },
      Filter: { Filter: { status: "std" } },
    },
    "MT return line": {
      "Suction accumulator MT": {
        "Suction accumulator MT": { status: "std" },
      },
      Filter: { Filter: { status: "std" } },
      "Ejectors": {
        "Liquid ejector": { status: "opt*",
          note: "*Only Danfoss ejector or Wurm ejector with Wurm controller",
         },
        "Vapour ejector": { status: "na" },
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
        "Danfoss/Carel": { status: "std" },
        Dixell: { status: "opt" },
        Wurm: { status: "opt" },
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
          status: "opt",
        },
      },
      "Differential protections on compressors": {
        "Differential protections on compressors": { status: "opt" },
      },
      "Bobina MX": { "Bobina MX": { status: "opt" } },
      UPS: { UPS: { status: "std" } },
      "AOE Panel": { "AOE Panel": { status: "opt" } },
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
        Single: { status: "std" },
        Double: { status: "opt" },
      },
      "Pipes & Other critical points": {
        Single: { status: "std" },
        Double: { status: "opt" },
      },
    },
    Complementary: {
      "Oil charge": {
        "Oil charge": { status: "opt" },
      },
    },
  },
});