import { CharacterEvent } from "./character-event";

type CharNameShort = typeof CharacterType;

export type Character = {
  id: number;
  name: string;
  description: string;
  shortName: keyof CharNameShort;
  characterEvents?: CharacterEvent[];
};

export enum CharacterType {
  CTO = 'CTO',
  CFO = 'CFO',
  CMO = 'CMO',
  HR = 'HR',
  INVESTOR = 'INVESTOR',
  CUSTOMER = 'CUSTOMER',
  COMPETITOR = 'COMPETITOR',
}
