
export type Piller = {
  id: number;
  name: string;
  description: string;
  short: typeof PillerType[keyof typeof PillerType];
}

export enum PillerType {
  EMPLOYEE = 'EMPLOYEE',
  INVESTOR = 'INVESTOR',
  CUSTOMER = 'CUSTOMER',
  COMPETITOR = 'COMPETITOR',
}
