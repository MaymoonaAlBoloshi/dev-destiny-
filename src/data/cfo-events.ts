import { CharacterEvent } from "../types/character-event";
import { CharacterType } from "../types/character";

// export type CharacterEvent = {
//   characterId: number;
//   events: {
//     id: number;
//     event: string;
//     AcceptEffects: Effects[];
//     RejectEffects: Effects[];
//   }
// };

// type Effects = {
//   pillerId: number;
//   effect: number; // postive or negative number
// };
const employeeEvents: CharacterEvent[] = [
  {
    characterId: 1,
    events: [
      {
        id: 1,
        event: "The team is working late hours regularly. Should we hire more staff?",
        AcceptEffects: [
          {
            
            pillerName: "Employees",
            effect: 3 // hiring more staff increases employee satisfaction
          },
          {
            pillerName: "Investors",
            effect: -2 // hiring more staff requires more funding, which may concern investors
          }
        ],
        RejectEffect: [
          {
            pillerName: "Employees",
            effect: -3 // not hiring more staff leads to overworked employees
          },
          {
            pillerName: "Customers",
            effect: -1 // overworked employees may lead to decrease in product quality affecting customers
          }
        ]
      },
    ]
