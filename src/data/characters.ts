
import { Character, CharacterType } from '../types/character';


export const characters: Character[] = [
  {
    id: 1,
    name: 'The Chief Technology Officer (CTO)',
    description:
      'This character can advise on technical aspects of the company. They might bring up issues related to product development, IT infrastructure, etc.',
    shortName: CharacterType.CTO,
  },
  {
    id: 2,
    name: 'The Chief Financial Officer (CFO)',
    description:
      'They handle the finances of the company and will bring up issues related to investments, budgeting, and expenditure.',
    shortName: CharacterType.CFO,
  },
  {
    id: 3,
    name: 'The Chief Marketing Officer (CMO)',
    description:
      'This character is responsible for marketing and sales. They would bring up topics related to advertising, public relations, and market research.',
    shortName: CharacterType.CMO,
  },
  {
    id: 4,
    name: 'The Human Resources Director',
    description:
      'This character can bring up issues related to employee satisfaction, hiring, and company culture.',
    shortName: CharacterType.HR,
  },
  {
    id: 5,
    name: 'The Investor',
    description:
      'They represent the board and shareholders. They might push for more profit-driven decisions or faster growth.',
    shortName: CharacterType.INVESTOR,
  },
  {
    id: 6,
    name: 'The Loyal Customer',
    description:
      'A character that gives you feedback about your product or service from a user perspective.',
    shortName: CharacterType.CUSTOMER,
  },
  {
    id: 7,
    name: 'The Competitor CEO',
    description:
      "This character might appear to offer a partnership, propose a buyout, or declare a business 'war'.",
    shortName: CharacterType.COMPETITOR,
  },
];





