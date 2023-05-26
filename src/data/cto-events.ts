import { CharacterEvent } from "../types//character-event";
import { CharacterType } from "../types/character";
import { PillerType } from "../types/pillers";

export const CTOEvents: CharacterEvent = {
  character: CharacterType.CTO,
  color: "emerald",
  events: [
    {
      id: 1,
      event: "Our tech stack is outdated. Should we invest in updating it?",
      AcceptEffects: [
        {
          pillerName: PillerType.EMPLOYEE,
          effect: 3 // modern tech stack can boost employee morale and productivity
        },
        {
          pillerName: PillerType.INVESTOR,
          effect: -3 // substantial investment might worry investors
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: 2 // staying updated with tech gives a competitive edge
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.EMPLOYEE,
          effect: -2 // outdated tech can frustrate employees
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: -2 // you lose competitive edge with outdated tech
        }
      ]
    },
    {
      id: 2,
      event: "We have a chance to hire a highly skilled but expensive developer. Should we go for it?",
      AcceptEffects: [
        {
          pillerName: PillerType.EMPLOYEE,
          effect: 2 // high-skilled peer can boost overall team skill and morale
        },
        {
          pillerName: PillerType.INVESTOR,
          effect: -4 // substantial salary expense might worry investors
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.EMPLOYEE,
          effect: -1 // missed opportunity can lead to questions about commitment to quality
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: -1 // missed hiring could lead to a competitive disadvantage
        }
      ]
    },
    {
      id: 3,
      event: "A team member suggests using an experimental technology in our project. Should we take the risk?",
      AcceptEffects: [
        {
          pillerName: PillerType.EMPLOYEE,
          effect: 2 // engaging with experimental tech can boost morale and innovation
        },
        {
          pillerName: PillerType.INVESTOR,
          effect: -3 // risky decision might worry investors
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: 1 // if successful, this risk could give a competitive edge
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.EMPLOYEE,
          effect: -2 // rejecting innovative ideas may demotivate employees
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: -1 // rejecting could lead to a missed opportunity to get ahead of competition
        }
      ]
    },
    {
      id: 4,
      event: "There's a major bug in our product. Should we delay the launch to fix it?",
      AcceptEffects: [
        {
          pillerName: PillerType.CUSTOMER,
          effect: 3 // delivering a bug-free product increases customer satisfaction
        },
        {
          pillerName: PillerType.INVESTOR,
          effect: -3 // delaying the launch might worry investors
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: -1 // delay might give competitors an advantage
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.CUSTOMER,
          effect: -4 // launching a flawed product can harm customer satisfaction
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: 1 // speedy launch might outpace competitors, but at a risk
        }
      ]
    },
  ]
};
