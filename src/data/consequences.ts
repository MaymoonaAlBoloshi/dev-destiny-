import { PillerType } from "../types/pillers"

type consequences = {
  Piller: keyof typeof PillerType;
  maxEffect: string;
  minEffect: string;
}

export const consequences: consequences[] = [
  {
    Piller: PillerType.EMPLOYEE,
    maxEffect: "Overworked staff leads to burnout, decreased productivity, and mass resignations.",
    minEffect: "Insufficient staff results in inability to sustain operations, leading to company closure.",
  },
  {
    Piller: PillerType.INVESTOR,
    maxEffect: "Over-reliance on investor funds leads to loss of control and the investors stage a hostile takeover.",
    minEffect: "Lack of sufficient investment leads to bankruptcy and company shutdown.",
  },
  {
    Piller: PillerType.CUSTOMER,
    maxEffect: "Over-saturation of the market and over-dependence on a single customer base leads to vulnerability to shifts in market trends, causing a massive loss of customer base.",
    minEffect: "Insufficient customers result in no market presence, leading to the demise of the startup due to lack of revenue.",
  },
  {
    Piller: PillerType.COMPETITOR,
    maxEffect: "Overbearing competition results in a market monopoly, leading to your startup being overshadowed and eventually bought out.",
    minEffect: "No competition leads to complacency, stagnation, and eventually the downfall of the startup as it fails to innovate.",
  }
]
