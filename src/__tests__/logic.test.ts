import { generateRecurringDates } from '../utils/generateRecurringDates';

test('generates daily recurring dates correctly', () => {
  const dates = generateRecurringDates({
    type: 'daily',
    interval: 1,
    startDate: '2025-07-01',
    endDate: '2025-07-05',
  });

  expect(dates).toEqual([
    '2025-07-01',
    '2025-07-02',
    '2025-07-03',
    '2025-07-04',
  ]);
});
