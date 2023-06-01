
import { CharacterEvent } from "../types/character-event";
import { CharacterType } from "../types/character";
import { PillerType } from "../types/pillers";

export const CompetitorEvents: CharacterEvent = {
  character: CharacterType.COMPETITOR, // compition not compititor
  color: 'emerald',
  events: [
    {
      id: 1,
      event: "One of our competitors launched a similar product with additional features. Should we improve our product too?",
      AcceptEffects: [
        {
          pillerName: PillerType.COMPETITOR,
          effect: 3 // enhancing product can help in competition
        },
        {
          pillerName: PillerType.INVESTOR,
          effect: -2 // additional investment in the product might concern investors
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.COMPETITOR,
          effect: -3 // ignoring the competitor's move could lead to losing the market share
        },
        {
          pillerName: PillerType.CUSTOMER,
          effect: -2 // customers may prefer the competitor's product
        }
      ]
    },
    {
      id: 2,
      event: "Our competitor is acquiring a lot of customers through aggressive marketing. Should we increase our marketing budget?",
      AcceptEffects: [
        {
          pillerName: PillerType.CUSTOMER,
          effect: 3 // aggressive marketing can bring in more customers
        },
        {
          pillerName: PillerType.INVESTOR,
          effect: -2 // increased marketing expenses might worry investors
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.CUSTOMER,
          effect: -3 // not increasing marketing efforts may result in losing potential customers
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: -2 // competitors might take a larger market share
        }
      ]
    },
    {
      id: 3,
      event: "A competitor offered one of our top employees a significant salary increase. Should we match their offer?",
      AcceptEffects: [
        {
          pillerName: PillerType.EMPLOYEE,
          effect: 2 // matching the offer could retain the employee and boost morale
        },
        {
          pillerName: PillerType.INVESTOR,
          effect: -2 // increased salary costs might concern investors
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.EMPLOYEE,
          effect: -3 // losing a top employee can affect team morale and productivity
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: -2 // the competitor might gain an advantage by hiring our top talent
        }
      ]
    },
    {
      id: 4,
      event: "A competitor is filing a patent that could potentially threaten our product. Should we challenge the patent?",
      AcceptEffects: [
        {
          pillerName: PillerType.COMPETITOR,
          effect: 3 // challenging the patent could protect our competitive position
        },
        {
          pillerName: PillerType.INVESTOR,
          effect: -3 // legal expenses might concern investors
        }
      ],
      RejectEffects: [
        {
          pillerName:  PillerType.COMPETITOR,
          effect: -4 // not challenging the patent might put us at a significant competitive disadvantage
        },
        {
          pillerName: PillerType.CUSTOMER,
          effect: -2 // if we lose the ability to offer our product, it could disappoint our customers
        }
      ]
    },
    {
      id: 5,
      event: "Competitors are significantly cutting their prices. Should we do the same?",
      AcceptEffects: [
        {
          pillerName:  PillerType.CUSTOMER,
          effect: 3 // price cuts could attract more customers
        },
        {
          pillerName: PillerType.INVESTOR,
          effect: -2 // price cuts might worry investors due to reduced revenue
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.CUSTOMER,
          effect: -2 // maintaining prices might make us lose customers to cheaper competitors
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: -2 // competitors might gain a larger market share
        }
      ]
    }
  ]
};
