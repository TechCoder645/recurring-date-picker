import { addDays, addWeeks, addMonths, addYears, parseISO, isBefore } from 'date-fns';

export function generateRecurringDates({
  type,
  interval,
  startDate,
  endDate,
}: {
  type: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  startDate: string;
  endDate?: string;
}): string[] {
  const start = parseISO(startDate);
  const stop = endDate ? parseISO(endDate) : addYears(start, 1);
  const dates: string[] = [];

  let current = start;

  while (isBefore(current, stop)) {
    dates.push(current.toISOString().split('T')[0]);
    if (type === 'daily') current = addDays(current, interval);
    else if (type === 'weekly') current = addWeeks(current, interval);
    else if (type === 'monthly') current = addMonths(current, interval);
    else current = addYears(current, interval);
  }

  return dates;
}
