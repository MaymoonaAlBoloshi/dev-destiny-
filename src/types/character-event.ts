export type CharacterEvent = {
  characterId: number;
  events: {
    id: number;
    event: string;
    effects: Effects[];
  }
};

type Effects = {
  pillerId: number;
  effect: number; // postive or negative number
};
