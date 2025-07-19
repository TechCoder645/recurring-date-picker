export function generateRecurringDates({
  frequency,
  interval,
  daysOfWeek,
  startDate,
  endDate,
  maxCount = 100,
}: {
  frequency: string;
  interval: number;
  daysOfWeek: number[];
  startDate: string;
  endDate: string;
  maxCount?: number;
}): Date[] {
  if (!startDate) return [];
  const results: Date[] = [];
  let current = new Date(startDate);
  const until = endDate ? new Date(endDate) : undefined;
  let count = 0;

  while (count < maxCount && (!until || current <= until)) {
    if (frequency === 'daily') {
      results.push(new Date(current));
      current.setDate(current.getDate() + interval);
    } else if (frequency === 'weekly') {
      if (daysOfWeek && daysOfWeek.length) {
        for (let i = 0; i < 7; i++) {
          const candidate = new Date(current);
          candidate.setDate(current.getDate() + i);
          if (
            daysOfWeek.includes(candidate.getDay()) &&
            (!until || candidate <= until)
          ) {
            results.push(new Date(candidate));
            count++;
            if (count >= maxCount) break;
          }
        }
        current.setDate(current.getDate() + 7 * interval);
      } else {
        results.push(new Date(current));
        current.setDate(current.getDate() + 7 * interval);
      }
    } else {
      // For monthly/yearly, just add the current date for demo
      results.push(new Date(current));
      if (frequency === 'monthly') {
        current.setMonth(current.getMonth() + interval);
      } else if (frequency === 'yearly') {
        current.setFullYear(current.getFullYear() + interval);
      }
    }
    count++;
  }
  return results;
}