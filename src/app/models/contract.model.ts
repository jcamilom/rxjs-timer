export interface Contract {
  id: number;
  state: 'live' | 'closed';
  category: 'Education' | 'Healthcare' | 'Infrastructure';
  expiresAt?: Date;
  remainingTime?: string;
}
