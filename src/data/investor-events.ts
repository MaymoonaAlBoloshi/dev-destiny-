import { CharacterEvent } from "../types/character-event";
import { PillerType } from "../types/pillers";
import { CharacterType } from "../types/character";

export const InvestorEvents: CharacterEvent = {
  character: CharacterType.INVESTOR,
  color: "yellow",
  events: [
    {
      id: 1,
      event: "We have a chance to secure more funding but it will dilute your share. Should we proceed?",
      AcceptEffects: [
        {
          pillerName: PillerType.INVESTOR,
          effect: -3 // dilution might upset existing investors
        },
        {
          pillerName: PillerType.EMPLOYEE,
          effect: 2 // more funding can mean better resources and benefits for employees
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.INVESTOR,
          effect: 2 // not diluting shares may please current investors
        },
        {
          pillerName: PillerType.EMPLOYEE,
          effect: -3 // rejecting extra funding may limit growth and resources for employees
        }
      ]
    },
    {
      id: 2,
      event: "An investor proposes a faster expansion plan. It's risky but could be rewarding. Should we take the risk?",
      AcceptEffects: [
        {
          pillerName: PillerType.INVESTOR,
          effect: 2 // investors may like aggressive expansion
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: 2 // rapid expansion could outpace competitors
        },
        {
          pillerName: PillerType.EMPLOYEE,
          effect: -2 // rapid expansion could strain the team
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.INVESTOR,
          effect: -2 // some investors may be disappointed by the missed opportunity
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: -2 // slower growth could give competitors an edge
        }
      ]
    },
    {
      id: 3,
      event: "Investors are pushing for a profitability plan. Should we shift our focus from growth to profitability?",
      AcceptEffects: [
        {
          pillerName: PillerType.INVESTOR,
          effect: 3 // profitability focus could please investors
        },
        {
          pillerName: PillerType.EMPLOYEE,
          effect: -2 // shift in focus might lead to job insecurity among employees
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: -1 // may lose competitive edge in terms of growth
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.INVESTOR,
          effect: -3 // ignoring profitability might upset investors
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: 2 // maintaining focus on growth can outpace competitors
        }
      ]
    },
    {
      id: 4,
      event: "One of the investors wants a more active role in daily operations. Should we allow this?",
      AcceptEffects: [
        {
          pillerName: PillerType.INVESTOR,
          effect: 1 // this could please the involved investor
        },
        {
          pillerName: PillerType.EMPLOYEE,
          effect: -3 // this could cause unrest among employees
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.INVESTOR,
          effect: -2 // this could upset the involved investor
        },
        {
          pillerName: PillerType.EMPLOYEE,
          effect: 2 // maintaining operational autonomy can keep employees content
        }
      ]
    },
    {
      id: 5,
      event: "Investors suggest cutting costs by outsourcing some of our development. Do you agree?",
      AcceptEffects: [
        {
          pillerName: PillerType.INVESTOR,
          effect: 3 // cost-cutting could please investors
        },
        {
          pillerName: PillerType.EMPLOYEE,
          effect: -4 // outsourcing can cause insecurity among in-house team
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: -1 // could possibly lose competitive edge due to quality concerns
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.INVESTOR,
          effect: -2 // ignoring cost-cutting suggestions might upset investors
        },
        {
          pillerName: PillerType.EMPLOYEE,
          effect: 3 // keeping work in-house can maintain employee morale
        }
      ]
    },
  ]
};
