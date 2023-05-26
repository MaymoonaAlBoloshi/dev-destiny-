import { CharacterType } from './character'
import { PillerType } from './pillers'

export type CaacterEvent = {
  character: keyof typeof CharacterType;
  events: Event[];
};

export type Event = {
  id: number;
  event: string;
  AcceptEffects: Effects[];
  RejectEffects: Effects[];
};

type Effects = {
  pillerName: keyof typeof PillerType;
  effect: number; // postive or negative number
};
