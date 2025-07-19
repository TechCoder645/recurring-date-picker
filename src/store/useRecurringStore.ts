import { create } from 'zustand';

interface RecurringState {
  type: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  weekdays: string[]; // e.g., ['Monday', 'Tuesday']
  nthDay: { week: number; day: string } | null;
  startDate: string;
  endDate?: string;
  setState: (updates: Partial<RecurringState>) => void;
}

export const useRecurringStore = create<RecurringState>((set) => ({
  type: 'daily',
  interval: 1,
  weekdays: [],
  nthDay: null,
  startDate: '',
  endDate: '',
  setState: (updates) => set((state) => ({ ...state, ...updates })),
}));
