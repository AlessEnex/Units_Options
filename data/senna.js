// data/senna.js
// Contains the specific data for the "Senna" machine model.

machineData.push({
  modelName: "Senna",
  statuses: {
    "Capacity": {
      "MT cooling capacity": {
        "Max cooling capacity @-8°C, Pgc=92bar, Tout_GC=36°C": { value: "170/380/410 kW", note: "*Senna Top/Maxi/Plus/Senna L200-300-400/Senna-P" },
        "Min cooling capacity @-8°C, Pgc=92bar, Tout_GC=36°C": { value: "90", note: "*Only for Senna-P" },
        "Max n° MT compressors (4 cilindri)": { value: "4/6/4", note: "*Senna Top/Maxi/Plus/Senna L200-300-400/Senna-P" },
        "Max n° AUX compressors (4 cilindri)": { value: "2", note: "*Only for Senna-P" },
        "Secondary MT capacity": { status: "na" }
      },
      "LT cooling capacity": {
        "LT cooling capacity": { status: "opt" },
        "Max cooling capacity @-32°C, Pgc=92bar, Tout_GC=36°C": { value: "" },
        "Max n° LT compressors": { value: "3/5/5", note: "*Senna Top/Maxi/Plus/Senna L200-300-400/Senna-P" },
        "Secondary LT capacity": { status: "na" }
      },
      "Pressures": {
        "HP": { value: "120" },
        "IP RIC": { value: "60/80 OPT" },
        "IP": { value: "80" },
        "MT": { value: "52 STD" },
        "BT": { value: "30-36/60 OPT" }
      },
    },
    "Special configuration": {
      "Parallel compression": {
        "Parallel compression": { status: "na*",
          note: "*Standard for Senna-P",
         },
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
        IP55: { status: "opt" },
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
        "Oil separator (Temprite) + Solenoid Valve": { status: "std" },
        "Bypass oil separator": { status: "opt" },
      },
      "oil tank": {
        "Oil tank": { status: "std" },
        "Minimum level sensor": { status: "std" },
        "Maximum level sensor": { status: "na" },
      },
      Backpressure: {
        Backpressure: { status: "na" },
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
        K65: { status: "opt" },
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
          status: "opt",
          details: "(1 x 3-way bass valves + Belimo ON/OFF) +  (2-way MANUAL)",
        },
        "Exchanger Automatic V-PORT Bypass": {
          status: "opt",
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
        "Mechanical": { status: "opt" }
      },
      "Backup (electronic)": {
        "Backup (electronic)": { status: "opt*",
          note: "*Second electronic valve installed in the unit. An operator must change the cable manually. Backup controller en carton (option). Automatically switch from standard functioning to emergency mode (backup control installed).",
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
        COLDPIPE: { status: "opt", details: "With 2 sensors" },
        WEKA: { status: "na", details: "With 3 sensors" },
      },
      Filter: {
        "Filter bypass": { status: "opt" },
        "Double filter": { status: "na" },
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
        "Liquid ejector": { status: "opt*",
          note: "*only Danfoss ejector",
         },
        "Vapour ejector": { status: "na*",
          note: "*Option for Senna-P. Only Danfoss ejector with Danfoss controller",
         },
      },
    },
    "Backup unit": {
      Refrigerant: {
        R134A: {
          status: "opt*",
          note: "*Factory mounted only if cladding option is selected for Senna Top/Maxi/Plus and Senna-P",
        },
        R290: {
          status: "opt*",
          note: "*Factory mounted only if cladding option is selected for Senna Top/Maxi/Plus and Senna-P",
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
          status: "opt*",
          note: "*Supplied in a separate box for Senna Top/Maxi/Plus and Senna L200-300-400",
        },
      },
      "Differential protections on compressors": {
        "Differential protections on compressors": { status: "opt" },
      },
      "Bobina MX": { "Bobina MX": { status: "opt" } },
      UPS: { UPS: { status: "opt" } },
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
        Double: { status: "opt" },
      },
      "Liquid receiver": {
        Double: { status: "std" },
      },
      "Oil tank": {
        Single: { status: "std" },
        Double: {
          status: "opt*",
          note: "*Not available for Senna Top/Maxi/Plus",
        },
      },
      "Suction Accumulators": {
        Single: { status: "opt" },
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
