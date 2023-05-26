import { CharacterEvent } from "../types//character-event";
import { CharacterType } from "../types/character";
import { PillerType } from "../types/pillers";


export const CMOEvents: CharacterEvent = {
  character: CharacterType.CMO,
  color: "violet",
  events: [
    {
      id: 1,
      event: "Our social media presence is lacking. Should we invest more in our online marketing?",
      AcceptEffects: [
        {
          pillerName: PillerType.CUSTOMER,
          effect: 3 // greater online presence can attract more customers
        },
        {
          pillerName: PillerType.INVESTOR,
          effect: -2 // more marketing expenses might concern investors
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: 2 // strong online presence can give a competitive edge
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.CUSTOMER,
          effect: -2 // weak online presence can result in losing potential customers
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: -2 // competitors with stronger online presence might get ahead
        }
      ]
    },
    {
      id: 2,
      event: "We have an opportunity to sponsor a major event. Should we go for it?",
      AcceptEffects: [
        {
          pillerName: PillerType.CUSTOMER,
          effect: 3 // sponsoring events can increase brand visibility and attract more customers
        },
        {
          pillerName: PillerType.INVESTOR,
          effect: -3 // the high cost of sponsorship might worry investors
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: 1 // sponsorship can give a competitive edge
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.CUSTOMER,
          effect: -1 // missed sponsorship opportunity can lead to less visibility
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: -1 // competitors might take the opportunity and get ahead
        }
      ]
    },
    {
      id: 3,
      event: "Our competitor launched a negative ad campaign against us. Should we retaliate with our own campaign?",
      AcceptEffects: [
        {
          pillerName: PillerType.CUSTOMER,
          effect: 1 // defending the company might retain some customers
        },
        {
          pillerName: PillerType.INVESTOR,
          effect: -1 // might worry investors due to potential escalation
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: -1 // retaliation might escalate the situation with competitors
        }
      ],
      RejectEffects: [
        {
          pillerName: PillerType.CUSTOMER,
          effect: -2 // ignoring the campaign might lead to loss of customer trust
        },
        {
          pillerName: PillerType.COMPETITOR,
          effect: 1 // staying above the fray might be seen as a positive trait
        }
      ]
    }
  ]
};
