import { Piller, PillerType } from '../types/pillers';

export const pillers: Piller[] = [
  {
    id: 1,
    name: 'The Employees',
    description:
      'Your startup\'s staff is your most valuable asset. Their satisfaction, productivity, and loyalty are key to your company\'s success. They are the ones who make your vision a reality.',
    short: PillerType.EMPLOYEE,
  },
  {
    id: 2,
    name: 'The Investors',
    description:
      'They fund your operations and expect returns on their investment. You have to keep them happy with business performance and financial management.',
    short: PillerType.INVESTOR,
  },
  {
    id: 3,
    name: 'The Customers',
    description:
      'Just as the church represents the faith and beliefs of the people, your customers represent market demand and consumer trust in your products or services.',
    short: PillerType.CUSTOMER,
  },
  {
    id: 4,
    name: 'The Competition',
    description:
      'In the original game, the army represented both the king\'s protection and a potential threat. In our startup game, the competition plays a similar role. Competitors can push your startup to innovate, but they can also be a threat to your market share.',
    short: PillerType.COMPETITOR,
  },
];




