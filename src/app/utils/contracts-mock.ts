import { Contract } from '../models/contract.model';
import { dateCreator } from './utils';

export const MOCK_CONTRACTS: Contract[] = [
  {
    id: 1,
    state: 'live',
    category: 'Education',
    expiresAt: dateCreator({ seconds: 20 }),
  },
  {
    id: 2,
    state: 'live',
    category: 'Healthcare',
    expiresAt: dateCreator({ hours: 1, mins: 30 }),
  },
  {
    id: 3,
    category: 'Education',
    state: 'closed',
  },
  {
    id: 4,
    state: 'live',
    category: 'Infrastructure',
    expiresAt: dateCreator({ mins: 45, seconds: 25 }),
  }
];
